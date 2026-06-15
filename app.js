const STORE_KEY = "l-ghalabokat:v1";

const teams = {
  Spain: {
    flag: "🇪🇸",
    form: ["W", "W", "W", "W", "D"],
    scorers: ["Oyarzabal", "Morata", "Pedri", "Yamal", "Nico Williams"],
  },
  "Cabo Verde": {
    flag: "🇨🇻",
    form: ["W", "W", "D", "W", "D"],
    scorers: ["Livramento", "Jovane Cabral", "Ryan Mendes", "Bebe"],
  },
  Belgium: {
    flag: "🇧🇪",
    form: ["W", "D", "W", "D", "W"],
    scorers: ["Doku", "De Bruyne", "Lukaku", "Trossard", "Openda"],
  },
  Egypt: {
    flag: "🇪🇬",
    form: ["D", "D", "W", "L", "D"],
    scorers: ["Marmoush", "Salah", "Trezeguet", "Mostafa Mohamed"],
  },
  "Saudi Arabia": {
    flag: "🇸🇦",
    form: ["W", "L", "D", "W", "W"],
    scorers: ["Al Dawsari", "Al Shehri", "Kanno", "Al Buraikan"],
  },
  Uruguay: {
    flag: "🇺🇾",
    form: ["W", "W", "D", "L", "W"],
    scorers: ["Nunez", "Valverde", "Pellistri", "Suarez"],
  },
  "IR Iran": {
    flag: "🇮🇷",
    form: ["W", "W", "D", "W", "L"],
    scorers: ["Taremi", "Azmoun", "Jahanbakhsh", "Ghoddos"],
  },
  "New Zealand": {
    flag: "🇳🇿",
    form: ["W", "D", "W", "D", "W"],
    scorers: ["Wood", "Barbarouses", "Singh", "Waine"],
  },
  France: {
    flag: "🇫🇷",
    form: ["W", "W", "W", "D", "W"],
    scorers: ["Mbappe", "Griezmann", "Dembele", "Thuram"],
  },
  Senegal: {
    flag: "🇸🇳",
    form: ["W", "D", "W", "W", "D"],
    scorers: ["Mane", "Jackson", "Sarr", "Dia"],
  },
  Iraq: {
    flag: "🇮🇶",
    form: ["D", "W", "W", "L", "W"],
    scorers: ["Hussein", "Ali", "Bayesh", "Amyn"],
  },
  Norway: {
    flag: "🇳🇴",
    form: ["W", "W", "D", "W", "W"],
    scorers: ["Haaland", "Odegaard", "Sorloth", "Nusa"],
  },
  Argentina: {
    flag: "🇦🇷",
    form: ["W", "W", "W", "D", "W"],
    scorers: ["Messi", "Alvarez", "Lautaro", "Di Maria"],
  },
  Algeria: {
    flag: "🇩🇿",
    form: ["D", "W", "L", "W", "D"],
    scorers: ["Mahrez", "Bounedjah", "Gouiri", "Brahimi"],
  },
  Austria: {
    flag: "🇦🇹",
    form: ["W", "D", "W", "W", "L"],
    scorers: ["Arnautovic", "Baumgartner", "Sabitzer", "Gregoritsch"],
  },
  Jordan: {
    flag: "🇯🇴",
    form: ["W", "W", "D", "L", "W"],
    scorers: ["Al Naimat", "Al Taamari", "Olwan", "Mardi"],
  },
  Ghana: {
    flag: "🇬🇭",
    form: ["D", "W", "L", "W", "D"],
    scorers: ["Kudus", "Ayew", "Semenyo", "Williams"],
  },
  Panama: {
    flag: "🇵🇦",
    form: ["W", "D", "W", "L", "D"],
    scorers: ["Fajardo", "Blackman", "Barcenas", "Yaniz"],
  },
  England: {
    flag: "🇬🇧",
    form: ["W", "W", "D", "W", "W"],
    scorers: ["Kane", "Bellingham", "Saka", "Foden"],
  },
  Croatia: {
    flag: "🇭🇷",
    form: ["W", "D", "W", "D", "L"],
    scorers: ["Kramaric", "Modric", "Pasalic", "Perisic"],
  },
  Portugal: {
    flag: "🇵🇹",
    form: ["W", "W", "W", "L", "W"],
    scorers: ["Ronaldo", "Leao", "Bruno Fernandes", "Ramos"],
  },
  "Congo DR": {
    flag: "🇨🇩",
    form: ["D", "W", "W", "D", "L"],
    scorers: ["Bakambu", "Wissa", "Bongonda", "Moutoussamy"],
  },
  Uzbekistan: {
    flag: "🇺🇿",
    form: ["W", "D", "W", "W", "D"],
    scorers: ["Shomurodov", "Urunov", "Masharipov", "Sergeev"],
  },
  Colombia: {
    flag: "🇨🇴",
    form: ["W", "W", "D", "W", "L"],
    scorers: ["Diaz", "Duran", "James", "Arias"],
  },
  "Cote d'Ivoire": {
    flag: "🇨🇮",
    form: ["W", "D", "W", "L", "W"],
    scorers: ["Haller", "Adingra", "Pepe", "Kessie"],
  },
  Ecuador: {
    flag: "🇪🇨",
    form: ["D", "W", "D", "W", "L"],
    scorers: ["Valencia", "Paez", "Rodriguez", "Plata"],
  },
  Germany: {
    flag: "🇩🇪",
    form: ["W", "W", "D", "W", "W"],
    scorers: ["Musiala", "Havertz", "Wirtz", "Fullkrug"],
  },
  Curacao: {
    flag: "🇨🇼",
    form: ["W", "D", "L", "W", "D"],
    scorers: ["Janga", "Bacuna", "Antonisse", "Margaritha"],
  },
  Netherlands: {
    flag: "🇳🇱",
    form: ["W", "W", "D", "L", "W"],
    scorers: ["Gakpo", "Depay", "Simons", "Weghorst"],
  },
  Japan: {
    flag: "🇯🇵",
    form: ["W", "W", "W", "D", "W"],
    scorers: ["Mitoma", "Kubo", "Ueda", "Doan"],
  },
  Sweden: {
    flag: "🇸🇪",
    form: ["D", "W", "L", "W", "W"],
    scorers: ["Isak", "Gyokeres", "Kulusevski", "Forsberg"],
  },
  Tunisia: {
    flag: "🇹🇳",
    form: ["D", "W", "D", "L", "W"],
    scorers: ["Jaziri", "Msakni", "Sliti", "Rafia"],
  },
  Czechia: {
    flag: "🇨🇿",
    form: ["W", "D", "W", "L", "D"],
    scorers: ["Schick", "Hlozek", "Soucek", "Kuchta"],
  },
  "South Africa": {
    flag: "🇿🇦",
    form: ["W", "D", "W", "W", "D"],
    scorers: ["Foster", "Tau", "Makgopa", "Mokoena"],
  },
  Switzerland: {
    flag: "🇨🇭",
    form: ["D", "W", "W", "D", "L"],
    scorers: ["Embolo", "Okafor", "Amdouni", "Shaqiri"],
  },
  "Bosnia and Herzegovina": {
    flag: "🇧🇦",
    form: ["W", "L", "D", "W", "D"],
    scorers: ["Dzeko", "Demirovic", "Prevljak", "Tahirovic"],
  },
  Canada: {
    flag: "🇨🇦",
    form: ["W", "D", "W", "D", "L"],
    scorers: ["David", "Davies", "Larin", "Buchanan"],
  },
  Qatar: {
    flag: "🇶🇦",
    form: ["D", "W", "W", "L", "D"],
    scorers: ["Afif", "Almoez Ali", "Muntari", "Hatem"],
  },
  USA: {
    flag: "🇺🇸",
    form: ["W", "W", "D", "L", "W"],
    scorers: ["Pulisic", "Balogun", "Reyna", "Weah"],
  },
  Paraguay: {
    flag: "🇵🇾",
    form: ["D", "W", "L", "D", "W"],
    scorers: ["Almiron", "Enciso", "Sanabria", "Sosa"],
  },
  Haiti: {
    flag: "🇭🇹",
    form: ["W", "D", "L", "W", "D"],
    scorers: ["Nazon", "Pierrot", "Damus", "Borgelin"],
  },
  Scotland: {
    flag: "🏴",
    form: ["W", "D", "W", "L", "D"],
    scorers: ["McTominay", "Adams", "McGinn", "Christie"],
  },
  Australia: {
    flag: "🇦🇺",
    form: ["W", "W", "D", "W", "L"],
    scorers: ["Duke", "Irvine", "Goodwin", "Yengi"],
  },
  Turkiye: {
    flag: "🇹🇷",
    form: ["W", "D", "W", "L", "W"],
    scorers: ["Calhanoglu", "Yilmaz", "Guler", "Akturkoglu"],
  },
  Brazil: {
    flag: "🇧🇷",
    form: ["W", "D", "W", "W", "D"],
    scorers: ["Vinicius Jr", "Rodrygo", "Endrick", "Raphinha"],
  },
  Morocco: {
    flag: "🇲🇦",
    form: ["W", "W", "D", "W", "L"],
    scorers: ["Hakimi", "En-Nesyri", "Ziyech", "Rahimi"],
  },
};

const schedule = [
  match("2026-06-12", "18:00", "Group B", "Toronto Stadium", "Canada", "Bosnia and Herzegovina"),
  match("2026-06-12", "21:00", "Group D", "Los Angeles Stadium", "USA", "Paraguay"),
  match("2026-06-13", "16:00", "Group C", "Boston Stadium", "Haiti", "Scotland"),
  match("2026-06-13", "19:00", "Group D", "BC Place Vancouver", "Australia", "Turkiye"),
  match("2026-06-13", "22:00", "Group C", "New York New Jersey Stadium", "Brazil", "Morocco"),
  match("2026-06-13", "23:30", "Group B", "San Francisco Bay Area Stadium", "Qatar", "Switzerland"),
  match("2026-06-14", "17:00", "Group E", "Philadelphia Stadium", "Cote d'Ivoire", "Ecuador"),
  match("2026-06-14", "20:00", "Group E", "Houston Stadium", "Germany", "Curacao"),
  match("2026-06-14", "22:00", "Group F", "Dallas Stadium", "Netherlands", "Japan"),
  match("2026-06-14", "23:30", "Group F", "Estadio Monterrey", "Sweden", "Tunisia"),
  match("2026-06-15", "18:00", "Group H", "Atlanta Stadium", "Spain", "Cabo Verde"),
  match("2026-06-15", "21:00", "Group G", "Seattle Stadium", "Belgium", "Egypt", true),
  match("2026-06-15", "23:00", "Group H", "Miami Stadium", "Saudi Arabia", "Uruguay"),
  match("2026-06-15", "23:30", "Group G", "Los Angeles Stadium", "IR Iran", "New Zealand"),
  match("2026-06-16", "18:00", "Group I", "New York New Jersey Stadium", "France", "Senegal"),
  match("2026-06-16", "20:00", "Group I", "Boston Stadium", "Iraq", "Norway"),
  match("2026-06-16", "22:00", "Group J", "Kansas City Stadium", "Argentina", "Algeria", true),
  match("2026-06-16", "23:30", "Group J", "San Francisco Bay Area Stadium", "Austria", "Jordan"),
  match("2026-06-17", "18:00", "Group L", "Toronto Stadium", "Ghana", "Panama"),
  match("2026-06-17", "21:00", "Group L", "Dallas Stadium", "England", "Croatia", true),
  match("2026-06-17", "22:30", "Group K", "Houston Stadium", "Portugal", "Congo DR"),
  match("2026-06-17", "23:30", "Group K", "Mexico City Stadium", "Uzbekistan", "Colombia"),
  match("2026-06-18", "18:00", "Group A", "Atlanta Stadium", "Czechia", "South Africa"),
  match("2026-06-18", "21:00", "Group B", "Los Angeles Stadium", "Switzerland", "Bosnia and Herzegovina"),
  match("2026-06-18", "23:00", "Group B", "BC Place Vancouver", "Canada", "Qatar"),
];

const demoPlayers = [
  { id: "amr", name: "Amr", handle: "amr", favorite: "Egypt", color: "#ff5a00" },
  { id: "mido", name: "Mido", handle: "mido", favorite: "Argentina", color: "#2f80ed" },
  { id: "kareem", name: "Kareem", handle: "kareem", favorite: "Brazil", color: "#34c759" },
  { id: "nada", name: "Nada", handle: "nada", favorite: "Spain", color: "#e84d4d" },
];

const demoPredictions = {
  amr: {
    "2026-06-15-spain-cabo-verde": {
      home: "3",
      away: "1",
      homeScorer: "Oyarzabal",
      awayScorer: "Livramento",
    },
    "2026-06-15-belgium-egypt": {
      home: "2",
      away: "1",
      homeScorer: "Doku",
      awayScorer: "Marmoush",
    },
  },
  mido: {
    "2026-06-15-spain-cabo-verde": { home: "2", away: "0", homeScorer: "Yamal", awayScorer: "" },
    "2026-06-15-belgium-egypt": { home: "1", away: "1", homeScorer: "Lukaku", awayScorer: "Salah" },
    "2026-06-15-saudi-arabia-uruguay": { home: "1", away: "2" },
  },
  kareem: {
    "2026-06-15-spain-cabo-verde": { home: "4", away: "0", homeScorer: "Pedri", awayScorer: "" },
    "2026-06-15-ir-iran-new-zealand": { home: "2", away: "1" },
  },
  nada: {
    "2026-06-15-belgium-egypt": { home: "2", away: "2", homeScorer: "De Bruyne", awayScorer: "Salah" },
    "2026-06-16-argentina-algeria": { home: "3", away: "1", homeScorer: "Messi", awayScorer: "Mahrez" },
  },
};

const colors = ["#ff5a00", "#2f80ed", "#34c759", "#f5b21a", "#e84d4d", "#a970ff", "#00b7c7"];
const dateKeys = [...new Set(schedule.map((item) => item.date))].sort();
const allTeamNames = [...new Set(schedule.flatMap((item) => [item.home.name, item.away.name]))].sort();
const matchMap = new Map(schedule.map((item) => [item.id, item]));

let state = loadState();

const elements = {
  activePlayer: document.querySelector("#activePlayer"),
  dateStrip: document.querySelector("#dateStrip"),
  matchList: document.querySelector("#matchList"),
  selectedDateMeta: document.querySelector("#selectedDateMeta"),
  matchCountChip: document.querySelector("#matchCountChip"),
  extraContent: document.querySelector("#extraContent"),
  poolsContent: document.querySelector("#poolsContent"),
  rankingContent: document.querySelector("#rankingContent"),
  profileContent: document.querySelector("#profileContent"),
  toast: document.querySelector("#toast"),
};

renderApp();
bindEvents();

function match(date, time, group, venue, homeName, awayName, matchOfWeek = false) {
  return {
    id: `${date}-${slug(homeName)}-${slug(awayName)}`,
    date,
    time,
    competition: "World Cup 2026",
    stage: group,
    venue,
    matchOfWeek,
    home: { name: homeName, ...teams[homeName] },
    away: { name: awayName, ...teams[awayName] },
  };
}

function slug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-view-target]");
    if (viewButton) {
      setView(viewButton.dataset.viewTarget);
      return;
    }

    const dateButton = event.target.closest("[data-date]");
    if (dateButton) {
      state.selectedDate = dateButton.dataset.date;
      persist();
      renderPredict();
      renderDateStrip();
      return;
    }

    const addPlayer = event.target.closest("[data-action='add-player']");
    if (addPlayer) {
      addPlayerFromInput();
      return;
    }

    const exportButton = event.target.closest("[data-action='export-data']");
    if (exportButton) {
      exportData();
      return;
    }

    const resetButton = event.target.closest("[data-action='reset-data']");
    if (resetButton) {
      resetData();
      return;
    }
  });

  document.addEventListener("input", (event) => {
    const scoreInput = event.target.closest("[data-score-field]");
    if (scoreInput) {
      updatePredictionScore(scoreInput);
      return;
    }

    const resultInput = event.target.closest("[data-result-field]");
    if (resultInput) {
      updateResultScore(resultInput);
      return;
    }

    const profileInput = event.target.closest("[data-profile-field]");
    if (profileInput) {
      updateProfileField(profileInput);
      return;
    }

    const poolInput = event.target.closest("[data-pool-field]");
    if (poolInput) {
      updatePoolField(poolInput);
    }
  });

  document.addEventListener("change", (event) => {
    const scorerSelect = event.target.closest("[data-scorer-field]");
    if (scorerSelect) {
      updatePredictionScorer(scorerSelect);
      return;
    }

    const specialField = event.target.closest("[data-special-field]");
    if (specialField) {
      updateSpecialField(specialField);
      return;
    }

    const importInput = event.target.closest("[data-action='import-data']");
    if (importInput) {
      importData(importInput);
    }
  });

  elements.activePlayer.addEventListener("change", () => {
    state.activePlayerId = elements.activePlayer.value;
    persist();
    renderApp();
    showToast(`Now predicting as ${activePlayer().name}`);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target.matches("#newPlayerName")) {
      addPlayerFromInput();
    }
  });
}

function loadState() {
  const fallback = defaultState();
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return normalizeState({ ...fallback, ...parsed });
  } catch (error) {
    console.warn("Could not load saved l ghalabokat data", error);
    return fallback;
  }
}

function defaultState() {
  return {
    activeView: "predict",
    selectedDate: defaultSelectedDate(),
    activePlayerId: "amr",
    pool: {
      name: "l ghalabokat",
      code: "LG-2026",
    },
    players: demoPlayers,
    predictions: demoPredictions,
    specials: {
      amr: {
        champion: "Argentina",
        finalist: "Spain",
        topScorer: "Marmoush",
      },
    },
    results: {},
  };
}

function normalizeState(value) {
  const playerIds = new Set((value.players || []).map((player) => player.id));
  if (!playerIds.has(value.activePlayerId)) {
    value.activePlayerId = value.players?.[0]?.id || "amr";
  }
  value.selectedDate = dateKeys.includes(value.selectedDate) ? value.selectedDate : defaultSelectedDate();
  value.activeView = value.activeView || "predict";
  value.predictions = value.predictions || {};
  value.specials = value.specials || {};
  value.results = value.results || {};
  value.pool = value.pool || { name: "l ghalabokat", code: "LG-2026" };
  value.players = value.players?.length ? value.players : demoPlayers;
  return value;
}

function defaultSelectedDate() {
  const today = todayKey();
  if (dateKeys.includes(today)) return today;
  const upcoming = dateKeys.find((date) => date > today);
  return upcoming || dateKeys[dateKeys.length - 1];
}

function todayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function persist() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function renderApp() {
  renderActivePlayerSelect();
  renderDateStrip();
  setView(state.activeView, false);
}

function renderActivePlayerSelect() {
  elements.activePlayer.innerHTML = state.players
    .map((player) => `<option value="${escapeHtml(player.id)}">${escapeHtml(player.name)}</option>`)
    .join("");
  elements.activePlayer.value = state.activePlayerId;
}

function renderDateStrip() {
  const selected = state.selectedDate;
  elements.dateStrip.innerHTML = dateKeys
    .map((date) => {
      const matches = matchesForDate(date).length;
      const active = date === selected ? " is-active" : "";
      return `
        <button class="date-tab${active}" type="button" data-date="${date}" aria-pressed="${date === selected}">
          ${dateLabel(date)}
          <span class="tab-sub">${matches} matches</span>
        </button>
      `;
    })
    .join("");

  requestAnimationFrame(() => {
    const activeTab = elements.dateStrip.querySelector(".date-tab.is-active");
    activeTab?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  });
}

function setView(view, shouldPersist = true) {
  state.activeView = view;
  document.querySelectorAll(".view").forEach((section) => {
    const isActive = section.dataset.view === view;
    section.hidden = !isActive;
    section.classList.toggle("is-active", isActive);
  });
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.viewTarget === view);
  });

  if (view === "predict") renderPredict();
  if (view === "extra") renderExtra();
  if (view === "pools") renderPools();
  if (view === "ranking") renderRanking();
  if (view === "profile") renderProfile();
  if (shouldPersist) persist();
}

function renderPredict() {
  const matches = matchesForDate(state.selectedDate);
  elements.selectedDateMeta.textContent = dateLongLabel(state.selectedDate);
  elements.matchCountChip.textContent = `${matches.length} match${matches.length === 1 ? "" : "es"}`;
  elements.matchList.innerHTML = matches.length
    ? matches.map((item) => renderMatchCard(item)).join("")
    : `<div class="empty-state">No fixtures saved for this day.</div>`;
}

function renderMatchCard(item) {
  const prediction = playerPrediction(item.id);
  const complete = isPredictionComplete(prediction);
  const featuredClass = item.matchOfWeek ? " is-featured" : "";
  const result = state.results[item.id];
  const scoreLabel = result ? `Result ${result.home}-${result.away}` : complete ? "Saved" : "Needs score";

  return `
    <article class="match-card${featuredClass}" data-match-card="${item.id}">
      ${
        item.matchOfWeek
          ? `<div class="feature-ribbon"><div><strong>Match of the week</strong><span>Earn extra points</span></div></div>`
          : ""
      }
      <div class="match-inner">
        <div class="match-meta">
          <span class="match-league"><span class="mini-ball" aria-hidden="true"></span>${item.competition}</span>
          <span class="match-time">${item.time}</span>
          <span class="match-stage">${item.stage}</span>
        </div>

        <div class="prediction-grid">
          ${renderTeam(item.home)}
          <div class="score-pair" aria-label="${escapeHtml(item.home.name)} versus ${escapeHtml(item.away.name)} prediction">
            ${scoreInput(item.id, "home", prediction.home)}
            <span class="score-separator">-</span>
            ${scoreInput(item.id, "away", prediction.away)}
          </div>
          ${renderTeam(item.away)}
        </div>

        ${
          item.matchOfWeek
            ? `
              <div class="scorer-row">
                ${scorerSelect(item.id, "homeScorer", item.home.name, item.home.scorers, prediction.homeScorer)}
                ${scorerSelect(item.id, "awayScorer", item.away.name, item.away.scorers, prediction.awayScorer)}
              </div>
            `
            : ""
        }

        <div class="card-footer">
          <span class="venue">${escapeHtml(item.venue)}</span>
          <span class="save-state ${complete ? "is-complete" : "is-pending"}" data-save-state="${item.id}">
            ${scoreLabel}
          </span>
        </div>
      </div>
    </article>
  `;
}

function renderTeam(team) {
  return `
    <div class="team-side">
      <div class="team-flag" aria-hidden="true">${team.flag}</div>
      <div class="team-name">${escapeHtml(team.name)}</div>
      <div class="form-line" aria-label="${escapeHtml(team.name)} recent form">
        ${team.form.map((form) => `<span class="form-chip ${form.toLowerCase()}">${form}</span>`).join("")}
      </div>
    </div>
  `;
}

function scoreInput(matchId, side, value = "") {
  return `
    <input
      class="score-input"
      type="number"
      min="0"
      max="20"
      inputmode="numeric"
      value="${escapeHtml(value ?? "")}"
      data-score-field="${side}"
      data-match-id="${matchId}"
      aria-label="${side === "home" ? "Home" : "Away"} score"
    />
  `;
}

function scorerSelect(matchId, field, teamName, scorers = [], value = "") {
  const options = ["", ...scorers]
    .map((name) => `<option value="${escapeHtml(name)}"${name === value ? " selected" : ""}>${name ? escapeHtml(name) : "First scorer"}</option>`)
    .join("");
  return `
    <label class="field">
      <span class="field-label">${escapeHtml(teamName)} first scorer</span>
      <select class="compact-select" data-scorer-field="${field}" data-match-id="${matchId}">
        ${options}
      </select>
    </label>
  `;
}

function renderExtra() {
  const special = playerSpecials();
  const featured = schedule.filter((item) => item.matchOfWeek);
  elements.extraContent.innerHTML = `
    <div class="panel">
      <div class="panel-title">
        <h3>Tournament calls</h3>
        <span class="status-pill">+10 pts</span>
      </div>
      <div class="bonus-grid">
        ${teamSelectField("Champion", "champion", special.champion)}
        ${teamSelectField("Finalist", "finalist", special.finalist)}
        <label class="field wide-field">
          <span class="field-label">Top scorer</span>
          <input class="text-input" type="text" value="${escapeHtml(special.topScorer || "")}" data-special-field="topScorer" placeholder="Player name" />
        </label>
      </div>
    </div>

    <div class="panel">
      <div class="panel-title">
        <h3>Featured matches</h3>
        <span class="status-pill">${featured.length} boosts</span>
      </div>
      <div class="result-list">
        ${featured
          .map(
            (item) => `
              <div class="result-row">
                <div class="result-teams">
                  <strong>${escapeHtml(item.home.name)} vs ${escapeHtml(item.away.name)}</strong>
                  <span>${dateShort(item.date)} · ${item.time} · ${escapeHtml(item.stage)}</span>
                </div>
                <span class="status-pill">x2</span>
              </div>
            `,
          )
          .join("")}
      </div>
    </div>

    <div class="panel">
      <div class="panel-title">
        <h3>Results desk</h3>
        <span class="status-pill">${dateShort(state.selectedDate)}</span>
      </div>
      <div class="result-list">
        ${matchesForDate(state.selectedDate).map(renderResultRow).join("")}
      </div>
    </div>
  `;
}

function teamSelectField(label, field, selected) {
  const options = ["", ...allTeamNames]
    .map((team) => `<option value="${escapeHtml(team)}"${team === selected ? " selected" : ""}>${team ? escapeHtml(team) : "Choose team"}</option>`)
    .join("");
  return `
    <label class="field">
      <span class="field-label">${label}</span>
      <select class="compact-select" data-special-field="${field}">
        ${options}
      </select>
    </label>
  `;
}

function renderResultRow(item) {
  const result = state.results[item.id] || {};
  return `
    <div class="result-row">
      <div class="result-teams">
        <strong>${escapeHtml(item.home.name)} vs ${escapeHtml(item.away.name)}</strong>
        <span>${item.time} · ${escapeHtml(item.stage)}</span>
      </div>
      <div class="result-inputs" aria-label="Actual result">
        <input class="number-input" type="number" min="0" max="20" inputmode="numeric" value="${escapeHtml(result.home ?? "")}" data-result-field="home" data-match-id="${item.id}" aria-label="${escapeHtml(item.home.name)} actual score" />
        <span>-</span>
        <input class="number-input" type="number" min="0" max="20" inputmode="numeric" value="${escapeHtml(result.away ?? "")}" data-result-field="away" data-match-id="${item.id}" aria-label="${escapeHtml(item.away.name)} actual score" />
      </div>
    </div>
  `;
}

function renderPools() {
  elements.poolsContent.innerHTML = `
    <div class="panel">
      <div class="pool-code">
        <span class="muted">Pool code</span>
        <strong>${escapeHtml(state.pool.code)}</strong>
        <input class="text-input" type="text" value="${escapeHtml(state.pool.name)}" data-pool-field="name" aria-label="Pool name" />
      </div>
    </div>

    <div class="panel">
      <div class="panel-title">
        <h3>Players</h3>
        <span class="status-pill">${state.players.length} joined</span>
      </div>
      <div class="pool-list">
        ${state.players.map(renderPoolPlayer).join("")}
      </div>
    </div>

    <div class="panel">
      <div class="panel-title">
        <h3>Add friend</h3>
        <span class="status-pill">Local</span>
      </div>
      <div class="utility-row">
        <input id="newPlayerName" class="text-input" type="text" placeholder="Friend name" aria-label="Friend name" />
        <button class="primary-button" type="button" data-action="add-player">Add</button>
      </div>
    </div>
  `;
}

function renderPoolPlayer(player) {
  const predictions = state.predictions[player.id] || {};
  const completed = Object.values(predictions).filter(isPredictionComplete).length;
  const active = player.id === state.activePlayerId ? " is-active" : "";
  return `
    <div class="pool-player${active}">
      <div class="player-left">
        <span class="avatar" style="--avatar: ${player.color}">${initials(player.name)}</span>
        <div>
          <strong>${escapeHtml(player.name)}</strong>
          <span>@${escapeHtml(player.handle || slug(player.name))} · ${escapeHtml(player.favorite || "World Cup")}</span>
        </div>
      </div>
      <span class="status-pill">${completed} picks</span>
    </div>
  `;
}

function renderRanking() {
  const rows = state.players
    .map((player) => ({ player, ...playerScore(player.id) }))
    .sort((a, b) => b.points - a.points || b.completed - a.completed || a.player.name.localeCompare(b.player.name));

  elements.rankingContent.innerHTML = `
    <div class="panel">
      <div class="ranking-list">
        ${rows.map((row, index) => renderRankingRow(row, index)).join("")}
      </div>
    </div>
  `;
}

function renderRankingRow(row, index) {
  const active = row.player.id === state.activePlayerId ? " is-active" : "";
  return `
    <div class="ranking-item${active}">
      <div class="rank-left">
        <span class="rank-number">${index + 1}</span>
        <span class="avatar" style="--avatar: ${row.player.color}">${initials(row.player.name)}</span>
        <div class="ranking-name">
          <strong>${escapeHtml(row.player.name)}</strong>
          <span>${row.completed}/${schedule.length} picks · ${row.exacts} exact</span>
        </div>
      </div>
      <div class="ranking-score">
        <strong>${row.points}</strong>
        <span>pts</span>
      </div>
    </div>
  `;
}

function renderProfile() {
  const player = activePlayer();
  elements.profileContent.innerHTML = `
    <div class="panel">
      <div class="profile-card">
        <div class="profile-left">
          <span class="avatar" style="--avatar: ${player.color}">${initials(player.name)}</span>
          <div>
            <strong>${escapeHtml(player.name)}</strong>
            <span class="muted">@${escapeHtml(player.handle || slug(player.name))}</span>
          </div>
        </div>
        <span class="status-pill">${escapeHtml(player.favorite || "World Cup")}</span>
      </div>
      <div class="profile-grid" style="margin-top: 14px">
        <label class="field">
          <span class="field-label">Name</span>
          <input class="text-input" type="text" value="${escapeHtml(player.name)}" data-profile-field="name" />
        </label>
        <label class="field">
          <span class="field-label">Handle</span>
          <input class="text-input" type="text" value="${escapeHtml(player.handle || "")}" data-profile-field="handle" />
        </label>
        <label class="field">
          <span class="field-label">Favorite team</span>
          <select class="compact-select" data-profile-field="favorite">
            ${["", ...allTeamNames]
              .map((team) => `<option value="${escapeHtml(team)}"${team === player.favorite ? " selected" : ""}>${team ? escapeHtml(team) : "Choose team"}</option>`)
              .join("")}
          </select>
        </label>
      </div>
    </div>

    <div class="panel">
      <div class="panel-title">
        <h3>Data</h3>
        <span class="status-pill">JSON</span>
      </div>
      <div class="utility-row">
        <button class="ghost-button" type="button" data-action="export-data">Export</button>
        <label class="ghost-button">
          Import
          <input class="sr-only" type="file" accept="application/json" data-action="import-data" />
        </label>
        <button class="danger-button" type="button" data-action="reset-data">Reset</button>
      </div>
    </div>
  `;
}

function updatePredictionScore(input) {
  const matchId = input.dataset.matchId;
  const field = input.dataset.scoreField;
  const prediction = playerPrediction(matchId);
  prediction[field] = clampScore(input.value);
  prediction.updatedAt = new Date().toISOString();
  persist();
  updateCardSaveState(matchId);
}

function updatePredictionScorer(select) {
  const matchId = select.dataset.matchId;
  const field = select.dataset.scorerField;
  const prediction = playerPrediction(matchId);
  prediction[field] = select.value;
  prediction.updatedAt = new Date().toISOString();
  persist();
  updateCardSaveState(matchId);
  showToast("Prediction saved");
}

function updateResultScore(input) {
  const matchId = input.dataset.matchId;
  const field = input.dataset.resultField;
  const next = clampScore(input.value);
  state.results[matchId] = state.results[matchId] || {};
  state.results[matchId][field] = next;
  if (!state.results[matchId].home && !state.results[matchId].away) {
    delete state.results[matchId];
  }
  persist();
}

function updateSpecialField(field) {
  const special = playerSpecials();
  special[field.dataset.specialField] = field.value;
  persist();
  showToast("Extra pick saved");
}

function updateProfileField(input) {
  const field = input.dataset.profileField;
  const player = activePlayer();
  player[field] = input.value.trim();
  if (field === "name" && !player.handle) player.handle = slug(player.name);
  persist();
  renderActivePlayerSelect();
  showToast("Profile saved");
}

function updatePoolField(input) {
  state.pool[input.dataset.poolField] = input.value.trim() || "l ghalabokat";
  persist();
}

function addPlayerFromInput() {
  const input = document.querySelector("#newPlayerName");
  const name = input?.value.trim();
  if (!name) return;
  const idBase = slug(name) || `player-${Date.now()}`;
  let id = idBase;
  let index = 2;
  while (state.players.some((player) => player.id === id)) {
    id = `${idBase}-${index}`;
    index += 1;
  }
  const player = {
    id,
    name,
    handle: idBase,
    favorite: "",
    color: colors[state.players.length % colors.length],
  };
  state.players.push(player);
  state.predictions[id] = {};
  state.activePlayerId = id;
  input.value = "";
  persist();
  renderApp();
  showToast(`${name} joined the pool`);
}

function resetData() {
  const confirmed = window.confirm("Reset l ghalabokat data on this device?");
  if (!confirmed) return;
  localStorage.removeItem(STORE_KEY);
  state = defaultState();
  renderApp();
  showToast("Fresh pool started");
}

function exportData() {
  const payload = JSON.stringify(state, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `l-ghalabokat-${todayKey()}.json`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("Export ready");
}

function importData(input) {
  const [file] = input.files || [];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(String(reader.result));
      state = normalizeState({ ...defaultState(), ...imported });
      persist();
      renderApp();
      showToast("Pool data imported");
    } catch (error) {
      console.error(error);
      showToast("Import failed");
    }
  };
  reader.readAsText(file);
}

function playerPrediction(matchId) {
  state.predictions[state.activePlayerId] = state.predictions[state.activePlayerId] || {};
  state.predictions[state.activePlayerId][matchId] = state.predictions[state.activePlayerId][matchId] || {};
  return state.predictions[state.activePlayerId][matchId];
}

function playerSpecials() {
  state.specials[state.activePlayerId] = state.specials[state.activePlayerId] || {};
  return state.specials[state.activePlayerId];
}

function activePlayer() {
  return state.players.find((player) => player.id === state.activePlayerId) || state.players[0];
}

function playerScore(playerId) {
  const predictions = state.predictions[playerId] || {};
  let completed = 0;
  let points = 0;
  let exacts = 0;

  Object.entries(predictions).forEach(([matchId, prediction]) => {
    if (isPredictionComplete(prediction)) completed += 1;
    const result = state.results[matchId];
    if (!result || !isPredictionComplete(prediction) || !isResultComplete(result)) return;
    const scored = scorePrediction(prediction, result, matchMap.get(matchId));
    points += scored.points;
    exacts += scored.exact ? 1 : 0;
  });

  const special = state.specials[playerId] || {};
  const specialCount = ["champion", "finalist", "topScorer"].filter((field) => special[field]).length;
  return { completed, points, exacts, specialCount };
}

function scorePrediction(prediction, result, item) {
  const predictedHome = Number(prediction.home);
  const predictedAway = Number(prediction.away);
  const resultHome = Number(result.home);
  const resultAway = Number(result.away);
  const exact = predictedHome === resultHome && predictedAway === resultAway;
  const predictedOutcome = Math.sign(predictedHome - predictedAway);
  const resultOutcome = Math.sign(resultHome - resultAway);
  const diffBonus = predictedHome - predictedAway === resultHome - resultAway;
  let points = 0;
  if (exact) points = 5;
  else if (predictedOutcome === resultOutcome) points = diffBonus ? 4 : 3;
  if (item?.matchOfWeek && points > 0) points *= 2;
  return { points, exact };
}

function updateCardSaveState(matchId) {
  const stateNode = [...document.querySelectorAll("[data-save-state]")].find(
    (node) => node.dataset.saveState === matchId,
  );
  if (!stateNode) return;
  const prediction = playerPrediction(matchId);
  const complete = isPredictionComplete(prediction);
  stateNode.textContent = complete ? "Saved" : "Needs score";
  stateNode.classList.toggle("is-complete", complete);
  stateNode.classList.toggle("is-pending", !complete);
  if (complete) showToast("Prediction saved");
}

function matchesForDate(date) {
  return schedule.filter((item) => item.date === date).sort((a, b) => a.time.localeCompare(b.time));
}

function isPredictionComplete(prediction = {}) {
  return prediction.home !== "" && prediction.home !== undefined && prediction.away !== "" && prediction.away !== undefined;
}

function isResultComplete(result = {}) {
  return result.home !== "" && result.home !== undefined && result.away !== "" && result.away !== undefined;
}

function clampScore(value) {
  if (value === "") return "";
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return "";
  return String(Math.max(0, Math.min(20, Math.trunc(numeric))));
}

function dateLabel(date) {
  const today = todayKey();
  const diff = daysBetween(today, date);
  if (diff === -1) return "Yesterday";
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  return dateShort(date);
}

function dateLongLabel(date) {
  const today = todayKey();
  const diff = daysBetween(today, date);
  if (diff === -1) return `Yesterday · ${dateShort(date)}`;
  if (diff === 0) return `Today · ${dateShort(date)}`;
  if (diff === 1) return `Tomorrow · ${dateShort(date)}`;
  return dateFull(date);
}

function dateShort(date) {
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "short" }).format(parseDate(date));
}

function dateFull(date) {
  return new Intl.DateTimeFormat("en", { weekday: "long", day: "numeric", month: "short" }).format(parseDate(date));
}

function parseDate(date) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function daysBetween(base, target) {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round((parseDate(target) - parseDate(base)) / oneDay);
}

function initials(name = "?") {
  return escapeHtml(
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("") || "?",
  );
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

let toastTimer;
function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 1600);
}
