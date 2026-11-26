/* ==========================================================================
   AKUANUÁ — NÚCLEO DE DADOS, SALA, SINCRONIZAÇÃO E MOTOR (js/app-core.js)
   ========================================================================== */

(() => {
  const PERIODS = ["Alvorada", "Dia", "Crepúsculo", "Noite"];
  const CODE_REGEX = /^[A-Z]{1,2}\d{3,4}$/;
  const CFG = window.AKUANUA_CONFIG || { ADMIN_SECRET: "7749", FIREBASE: {} };

  const CLASS_ASSETS = {
    Alquimista: { color: "#d95f39", img: "Assets/Alquimista.webp", desc: "Prepara ações e combina Poções/Elixires" },
    Bruxo: { color: "#9b59b6", img: "Assets/Bruxo.webp", desc: "Suporte, Artefatos emprestáveis e Vínculos" },
    Corruptor: { color: "#c0392b", img: "Assets/Corruptor.webp", desc: "Sacrifica PV e aplica Corrupções" },
    Feiticeiro: { color: "#e6a825", img: "Assets/Feiticeiro.webp", desc: "Feitiços sem nível com Sobrecarga (IS/LS)" },
    Mago: { color: "#d8dee9", img: "Assets/Mago.webp", desc: "Progressão vertical em Magia Arcana" },
  };

  let DB = window.ARCANA_DATA || null;
  if (!DB) {
    try { DB = JSON.parse(localStorage.getItem("akuanua_db_cache") || "null"); } catch (_) {}
  }

  let ROOM = null;
  let FB_DB = null;
  let UNSUB_ROOM = null;
  let BC = null;
  try { if (typeof BroadcastChannel !== "undefined") BC = new BroadcastChannel("akuanua_sync"); } catch (_) {}

  const params = new URLSearchParams(location.search);
  let tabId = sessionStorage.getItem("akuanua_tab_id");
  if (!tabId) {
    tabId = "u_" + Math.random().toString(36).slice(2, 10);
    sessionStorage.setItem("akuanua_tab_id", tabId);
  }
  if (params.get("mestre") && params.get("mestre") === CFG.ADMIN_SECRET) {
    sessionStorage.setItem("akuanua_admin", "1");
  }

  const UI = {
    roomCode: (params.get("sala") || "MESA1").toUpperCase().trim(),
    isAdmin: sessionStorage.getItem("akuanua_admin") === "1",
    viewerSeat: 0,
    exploreMode: false,
    adminOpen: false,
    commsTab: "all",
    bottomSwapped: localStorage.getItem("akuanua_swapped") === "1",
    floatingMode: localStorage.getItem("akuanua_floating") === "1",
    selectedLevels: new Set([1, 2]),
    logoClicks: 0,
    topZ: 20,
  };

  const $ = (sel) => document.querySelector(sel);
  const esc = (str) => String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const nowTime = () => { const d = new Date(); return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`; };
  const shuffle = (arr) => { const c = [...arr]; for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [c[i], c[j]] = [c[j], c[i]]; } return c; };
  const normText = (s) => String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

  function highlightKeywords(text) {
    if (!text) return "";
    let out = esc(text);
    const base = ["Ataque", "Defesa", "Iniciativa", "PV", "Mal", "Males", "Sobrecarga", "Corrupção", "Dano", "Cura", "Ferimento", "Fadiga", "Medo", "Silêncio", "Veneno", "Atordoamento", "Preparar", "Retornar", "Emprestar"];
    const fromDb = (DB?.keywords || []).map((k) => k.name.replace(/\s*\([^)]*\)/g, "").trim()).filter((n) => n.length >= 3);
    const terms = Array.from(new Set([...base, ...fromDb])).sort((a, b) => b.length - a.length);
    for (const t of terms) out = out.replace(new RegExp(`\\b(${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})\\b`, "gi"), '<strong class="kw-highlight">$1</strong>');
    return out;
  }

  function initFirebaseIfConfigured() {
    const fb = CFG.FIREBASE;
    if (fb && fb.apiKey && fb.projectId && typeof firebase !== "undefined") {
      if (!firebase.apps.length) firebase.initializeApp(fb);
      FB_DB = firebase.firestore();
      $("#sync-badge").textContent = "Sincronização: Online (Firebase)";
      $("#sync-badge").style.color = "#86e3b3";
    } else $("#sync-badge").textContent = "Sincronização: Abas locais";
  }

  function createEmptyRoom(code) {
    return { roomCode: code, status: "lobby", lobbySeats: [null, null, null, null], observerTabId: null, game: null, updatedAt: Date.now() };
  }

  function connectToRoom(code) {
    UI.roomCode = code.toUpperCase().trim() || "MESA1";
    $("#room-code-input").value = UI.roomCode;
    try {
      if (location.protocol !== "file:") {
        const url = new URL(location.href); url.searchParams.set("sala", UI.roomCode); history.replaceState({}, "", url.toString());
      }
    } catch (_) {}
    if (UNSUB_ROOM) { UNSUB_ROOM(); UNSUB_ROOM = null; }
    if (FB_DB) {
      const ref = FB_DB.collection("rooms").doc(UI.roomCode);
      ref.get().then((snap) => { if (!snap.exists) ref.set(createEmptyRoom(UI.roomCode)); });
      UNSUB_ROOM = ref.onSnapshot((snap) => { if (snap.exists) { ROOM = snap.data(); onRoomUpdated(); } });
    } else {
      const key = `akuanua_room_${UI.roomCode}`;
      const raw = localStorage.getItem(key);
      ROOM = raw ? JSON.parse(raw) : createEmptyRoom(UI.roomCode);
      if (!raw) localStorage.setItem(key, JSON.stringify(ROOM));
      onRoomUpdated();
    }
  }

  function saveRoom() {
    if (!ROOM) return;
    ROOM.updatedAt = Date.now();
    if (FB_DB) FB_DB.collection("rooms").doc(ROOM.roomCode).set(ROOM);
    else {
      localStorage.setItem(`akuanua_room_${ROOM.roomCode}`, JSON.stringify(ROOM));
      if (BC) BC.postMessage({ type: "ROOM_SYNC", roomCode: ROOM.roomCode, room: ROOM });
    }
    onRoomUpdated();
  }

  if (BC) BC.onmessage = (ev) => { if (ev.data?.type === "ROOM_SYNC" && ev.data.roomCode === UI.roomCode) { ROOM = ev.data.room; onRoomUpdated(); } };
  window.addEventListener("storage", (e) => { if (!FB_DB && e.key === `akuanua_room_${UI.roomCode}` && e.newValue) { ROOM = JSON.parse(e.newValue); onRoomUpdated(); } });

  function onRoomUpdated() {
    if (!ROOM || !window._AK_UI) return;
    if (ROOM.status === "lobby" || !ROOM.game) {
      $("#table-screen").classList.add("hidden"); $("#lobby-screen").classList.remove("hidden");
      window._AK_UI.renderLobbyRoom();
    } else {
      $("#lobby-screen").classList.add("hidden"); $("#table-screen").classList.remove("hidden");
      const mySeat = ROOM.game.seats.find((s) => s.tabId === tabId) || null;
      if (!UI.isAdmin && mySeat) UI.viewerSeat = mySeat.seatIndex;
      else if (UI.viewerSeat >= ROOM.game.seats.length) UI.viewerSeat = 0;
      $("#btn-toggle-admin").classList.toggle("hidden", !UI.isAdmin);
      $("#admin-perspective-wrap").classList.toggle("hidden", !UI.isAdmin);
      window._AK_UI.applyLayoutModes();
      window._AK_UI.renderAll();
    }
  }

  function parseWorkbook(arrayBuffer) {
    const wb = XLSX.read(arrayBuffer, { type: "array" });
    const getRows = (name) => (wb.Sheets[name] ? XLSX.utils.sheet_to_json(wb.Sheets[name], { defval: "" }) : []);
    const rules = getRows("Regras_Gerais").filter((r) => r.ID_Regra);
    const fsm = getRows("FSM_Engine").filter((r) => r.State_Phase_ID);
    const keywords = getRows("Chaves_Glossario").filter((r) => r.Nome_Chave).map((r) => ({
      type: String(r.Tipo_Chave || "").trim(), name: String(r.Nome_Chave || "").trim(),
      command: String(r.Comando_Chat || "").trim(), definition: String(r.Definicao_Efeito_Regra || "").trim(),
      rules: String(r.Regras_Acumulo_Excecoes || "").trim(),
    }));
    const classes = {};
    for (const r of getRows("Atributos_Classes")) {
      const name = String(r.Classe || "").trim(); if (!name) continue;
      classes[name] = {
        name, mechanic: String(r.Mecanica_Principal || ""), role: String(r.Funcao || ""), stone: String(r.Pedra || ""),
        color: CLASS_ASSETS[name]?.color || "#888", img: CLASS_ASSETS[name]?.img || "", desc: CLASS_ASSETS[name]?.desc || "",
        pvByLevel: [0, 1, 2, 3, 4, 5, 6].map((lv) => Number(r[`PV_Niv${lv}`] || 0)),
        posturesByLevel: [0, 1, 2, 3, 4, 5, 6].map((lv) => Number(r[`Posturas_Deck_Niv${lv}`] || 0)),
        lsByLevel: name === "Feiticeiro" ? [5, 6, 8, 10, 12, 14, 16] : null,
        caByLevel: name === "Corruptor" ? [1, 1, 2, 2, 3, 3, 4] : null,
      };
    }
    const cards = {};
    for (const r of getRows("Cenarios")) {
      const code = String(r.Codigo || "").trim(); if (!CODE_REGEX.test(code)) continue;
      cards[code] = { code, category: "cenario", name: String(r.Nome || code).trim(), atemporal: normText(r.Periodo) === "atemporal", rule: String(r.Regra_Mecanica_Efeito || "").trim() };
    }
    for (const r of getRows("Objetivos")) {
      const code = String(r["Código"] || "").trim(); if (!CODE_REGEX.test(code)) continue;
      const condition = String(r["Condição de Conquista"] || "").trim();
      cards[code] = { code, category: "objetivo", name: String(r.Nome || "").trim() || code, condition, rewardType: String(r["Tipo de Recompensa"] || "").trim(), rewardDesc: String(r["Descrição"] || "").trim(), progression: String(r["Recompensa de Progressão"] || "").trim(), footnote: String(r["Rodapé"] || "").trim(), isDraft: !condition };
    }
    for (const r of getRows("Desafios")) {
      const code = String(r["Código"] || "").trim(); if (!CODE_REGEX.test(code)) continue;
      const cls = String(r.Classe || "").trim();
      cards[code] = { code, category: "desafio", level: Number(r["Nível"] || 1), name: String(r.Nome || "").trim() || `${cls} · ${code}`, challengeClass: cls, isUncommon: normText(cls).includes("incomum"), passive: String(r["Habilidade Passiva"] || "").trim(), atq: r.ATQ === "N/A" || r.ATQ === "" ? null : Number(r.ATQ), def: r.DEF === "N/A" || r.DEF === "" ? null : Number(r.DEF), pv: r.PV === "N/A" || r.PV === "" ? null : Number(r.PV), footnote: String(r["Rodapé"] || "").trim() };
    }
    for (const clsName of ["Alquimista", "Bruxo", "Corruptor", "Feiticeiro", "Mago"]) {
      for (const r of getRows(clsName)) {
        const code = String(r["Código"] || "").trim(); if (!CODE_REGEX.test(code)) continue;
        const rawLv = String(r["Nível"] ?? "0").trim(), isSpecialE = rawLv.toUpperCase().startsWith("E");
        cards[code] = { code, category: "habilidade", className: clsName, level: clsName === "Feiticeiro" ? 0 : (isSpecialE ? Number(rawLv.replace(/\D/g, "") || 0) : Number(rawLv || 0)), isSpecialE, is: clsName === "Feiticeiro" ? Number(r.IS || 0) : null, name: String(r.Nome || "").trim() || `${r.Tipo || clsName} · ${code}`, type: String(r.Tipo || "").trim(), fn: String(r["Função"] || "").trim(), commands: [String(r["Comando 1"] || "").trim(), String(r["Comando 2"] || "").trim()].filter(Boolean), overload: String(r["Sobrecarga"] || "").trim(), discardRule: String(r.Descarte || "").trim(), favoredPeriod: String(r["Período Favorecido"] || "").trim(), footnote: String(r["Rodapé"] || "").trim() };
      }
    }
    for (const { sheet, owner } of [{ sheet: "Posturas Universais", owner: "Universal" }, { sheet: "Posturas Alquimista", owner: "Alquimista" }, { sheet: "Posturas Corruptor", owner: "Corruptor" }, { sheet: "Posturas Feiticeiro", owner: "Feiticeiro" }]) {
      for (const r of getRows(sheet)) {
        const code = String(r["Código"] || "").trim(); if (!CODE_REGEX.test(code)) continue;
        const rawLv = String(r["Nível"] ?? "0").trim(), isSpecialE = rawLv.toUpperCase() === "E";
        const iniStr = String(r.INI ?? "0").trim();
        const iniOptions = iniStr.includes("/") ? iniStr.split("/").map((n) => Number(n.trim())) : [Number(iniStr || 0)];
        cards[code] = { code, category: "postura", owner, level: isSpecialE ? 0 : Number(rawLv || 0), isSpecialE, name: String(r.Nome || code).trim(), fn: String(r["Função"] || "").trim(), passive: String(r["Habilidade Passiva"] || "").trim(), ini: iniOptions[0], iniOptions, atq: Number(r.ATQ || 0), def: Number(r.DEF || 0), ls: r.LS !== "" && r.LS !== undefined ? Number(r.LS) : null, footnote: String(r["Rodapé"] || "").trim() };
      }
    }
    return { version: "3.5", classes, keywords, rules, fsm, cards };
  }

  const getEligibleSkillsLv0 = (cls) => DB ? Object.values(DB.cards).filter((c) => c.category === "habilidade" && c.className === cls && c.level === 0 && !c.isSpecialE) : [];
  const getEligiblePosturesLv0 = (cls) => {
    if (!DB) return [];
    const all = Object.values(DB.cards);
    if (cls === "Feiticeiro") return all.filter((c) => c.category === "postura" && c.owner === "Feiticeiro" && c.level === 0);
    if (cls === "Corruptor") return [...all.filter((c) => c.category === "postura" && c.owner === "Corruptor" && c.level === 0), ...all.filter((c) => c.category === "postura" && c.owner === "Universal" && c.level === 0)];
    return all.filter((c) => c.category === "postura" && c.owner === "Universal" && c.level === 0);
  };
  const defaultDeckForClass = (cls) => {
    const sk = getEligibleSkillsLv0(cls).map((c) => c.code), po = getEligiblePosturesLv0(cls).map((c) => c.code), pLim = DB.classes[cls].posturesByLevel[0];
    const selectedSkills = sk.length === 15 ? sk : [], selectedPostures = po.length <= pLim ? po : [];
    return { selectedSkills, selectedPostures, activePosture: selectedPostures[0] || null };
  };
  const isSeatDeckComplete = (s) => s && DB && (s.selectedSkills?.length || 0) === 15 && (s.selectedPostures?.length || 0) === DB.classes[s.className].posturesByLevel[0] && Boolean(s.activePosture) && s.selectedPostures.includes(s.activePosture);

  const pushLog = (g, kind, author, text) => g.logs.push({ time: nowTime(), kind, author, text });
  const addSystemLog = (text) => { if (ROOM?.game) { pushLog(ROOM.game, "system", "Akuanuá", text); saveRoom(); } };
  const addChatMsg = (author, text) => { if (ROOM?.game) { pushLog(ROOM.game, "chat", author, text); saveRoom(); } };
  const getSeatIni = (s) => (s.announcedIni != null && s.announcedIni !== "" ? Number(s.announcedIni) : (DB.cards[s.activePosture]?.ini ?? 99));
  const computeRoundTurnOrder = (g = ROOM.game) => { g.turnOrder = [...g.seats].sort((a, b) => getSeatIni(a) - getSeatIni(b) || a.seatIndex - b.seatIndex).map((s) => s.seatIndex); g.turnCursor = 0; };
  const getActiveSeat = () => (ROOM?.game?.phase === "PERSONA_TURN" ? ROOM.game.seats[ROOM.game.turnOrder[ROOM.game.turnCursor]] : null);
  const getHandLimit = (s) => (s.activePosture === "PU029" || (s.activePosture === "PA002" && !s.tableCards.some((t) => DB.cards[t.code]?.type === "Conhecimento")) ? 6 : 5);
  const getAdjacentExistingCoords = (coord) => { const [x, y] = coord.split(",").map(Number); return [`${x},${y - 1}`, `${x + 1},${y}`, `${x},${y + 1}`, `${x - 1},${y}`].filter((c) => ROOM.game.map.tiles[c]); };

  window._AK = {
    PERIODS, CLASS_ASSETS, CFG, tabId, UI, $, esc, nowTime, shuffle, normText, highlightKeywords,
    getDB: () => DB, setDB: (v) => { DB = v; }, getROOM: () => ROOM, setROOM: (v) => { ROOM = v; },
    initFirebaseIfConfigured, createEmptyRoom, connectToRoom, saveRoom, onRoomUpdated, parseWorkbook,
    getEligibleSkillsLv0, getEligiblePosturesLv0, defaultDeckForClass, isSeatDeckComplete,
    pushLog, addSystemLog, addChatMsg, getSeatIni, computeRoundTurnOrder, getActiveSeat, getHandLimit, getAdjacentExistingCoords,
  };
})();