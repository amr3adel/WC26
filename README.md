# l ghalabokat

A mobile-first World Cup 2026 prediction pool for friends.

## What is included

- Date tabs for previous, today, tomorrow, and upcoming fixtures.
- Prediction cards with score inputs, recent form, venues, and featured match boosts.
- Multiple local players on the same device.
- Pool, ranking, profile, import, and export screens.
- Local saving through `localStorage`.
- Email invite and registration flow through a Vercel API route.

## Run locally

Open `index.html` directly in a browser.

Invite emails use `/api/send-invite`, so local file opening will generate a copyable join link but will not send email.

## Deploy on Vercel

This is a static site. Vercel can deploy it directly from the repository root with no build command and no output directory.

Suggested Vercel settings:

- Framework preset: Other
- Build command: `npm run build`
- Output directory: leave empty
- Install command: leave empty or `npm install`

## Email setup

The invite API sends email through Resend when these Vercel environment variables are configured:

- `RESEND_API_KEY`: Resend API key.
- `FROM_EMAIL`: verified sender, for example `l ghalabokat <invite@yourdomain.com>`.
- `APP_URL`: optional canonical app URL. If missing, the deployed host is used.

If `RESEND_API_KEY` is missing, the app still creates the join link and copies it when the browser allows clipboard access.
