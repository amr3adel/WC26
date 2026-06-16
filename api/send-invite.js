module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const email = normalizeEmail(body.email);
  const name = String(body.name || emailName(email)).trim();
  const pool = String(body.pool || "l ghalabokat").trim();

  if (!email) {
    res.status(400).json({ error: "Valid email is required" });
    return;
  }

  const appUrl = getAppUrl(req);
  const joinUrl = `${appUrl}/?join=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}`;
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FROM_EMAIL || "l ghalabokat <onboarding@resend.dev>";

  if (!apiKey) {
    res.status(200).json({
      sent: false,
      joinUrl,
      message: "RESEND_API_KEY is not configured. The join link was generated but no email was sent.",
    });
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: email,
      subject: `Join ${pool}`,
      text: `You were invited to join ${pool}.\n\nOpen this link to join and start predicting:\n${joinUrl}`,
      html: `
        <div style="font-family:Arial,sans-serif;background:#07152a;color:#f8fafc;padding:24px">
          <div style="max-width:520px;margin:auto;background:#0b1d38;border:1px solid #1d365d;border-radius:16px;padding:24px">
            <h1 style="margin:0 0 12px;color:#ff7a1a">l ghalabokat</h1>
            <p style="line-height:1.5">You were invited to join <strong>${escapeHtml(pool)}</strong>.</p>
            <p style="line-height:1.5">Open the link below to register this device and start predicting World Cup matches.</p>
            <p>
              <a href="${joinUrl}" style="display:inline-block;background:#ff7a1a;color:white;text-decoration:none;padding:12px 18px;border-radius:8px;font-weight:bold">
                Join the pool
              </a>
            </p>
            <p style="font-size:13px;color:#b7c4d8">If the button does not work, copy this link:<br>${joinUrl}</p>
          </div>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    res.status(502).json({ sent: false, joinUrl, error });
    return;
  }

  res.status(200).json({ sent: true, joinUrl });
};

function getAppUrl(req) {
  if (process.env.APP_URL) return process.env.APP_URL.replace(/\/$/, "");
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const protocol = req.headers["x-forwarded-proto"] || "https";
  return `${protocol}://${host}`;
}

function normalizeEmail(value = "") {
  const email = String(value).trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : "";
}

function emailName(email) {
  return normalizeEmail(email).split("@")[0] || "Friend";
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
