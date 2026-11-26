/* AKUANUÁ — Interface, Mesa Separada da Mão, Modais e Admin (js/app-ui.js) */
(() => {
  const AK = window._AK;
  const { PERIODS, CLASS_ASSETS, CFG, tabId, UI, $, esc, nowTime, shuffle, normText, highlightKeywords,
    getDB, setDB, getROOM, setROOM, initFirebaseIfConfigured, createEmptyRoom, connectToRoom, saveRoom, parseWorkbook,
    getEligibleSkillsLv0, getEligiblePosturesLv0, defaultDeckForClass, isSeatDeckComplete,
    pushLog, addSystemLog, addChatMsg, getSeatIni, computeRoundTurnOrder, getActiveSeat, getHandLimit, getAdjacentExistingCoords } = AK;

  const getMyLobbySeatIndex = () => getROOM()?.lobbySeats?.findIndex((s) => s && s.tabId === tabId) ?? -1;
  const getMyGameSeat = () => getROOM()?.game?.seats?.find((s) => s.tabId === tabId) || null;
  const addAdminLog = (text) => { if (getROOM()?.game) { pushLog(getROOM().game, "admin", "Akuanuá", text); saveRoom(); } };

  function setupSecret(el) {
    if (!el) return;
    el.onclick = () => {
      UI.logoClicks++; setTimeout(() => { UI.logoClicks = 0; }, 1800);
      if (UI.logoClicks >= 5) {
        UI.logoClicks = 0;
        if (prompt("Código de acesso:") === CFG.ADMIN_SECRET) { UI.isAdmin = true; sessionStorage.setItem("akuanua_admin", "1"); AK.onRoomUpdated(); }
      }
    };
  }
  setupSecret($("#secret-logo-lobby")); setupSecret($("#secret-logo-table"));

  function updateDataStatus() {
    const DB = getDB();
    if (!DB) { $("#data-status").className = "data-status warning"; $("#data-status").innerHTML = 'Nenhuma base carregada. Selecione seu <strong>Livro Fonte.xlsx</strong> uma única vez.'; $("#btn-export-js").disabled = true; return; }
    $("#data-status").className = "data-status ok";
    $("#data-status").innerHTML = `Base <strong>Akuanuá ${esc(DB.version)}</strong> pronta (${Object.keys(DB.cards).length} cartas). Salva automaticamente no navegador.`;
    $("#btn-export-js").disabled = false;
    renderLobbyRoom();
  }

  function claimSeat(seatIdx, clsOverride = null) {
    let ROOM = getROOM(); if (!ROOM) { ROOM = createEmptyRoom(UI.roomCode); setROOM(ROOM); }
    const DB = getDB(); if (!DB) return alert("Carregue a planilha (.xlsx) primeiro.");
    if (ROOM.lobbySeats[seatIdx]) return alert("Este assento já está ocupado.");
    const taken = new Set(ROOM.lobbySeats.filter(Boolean).map((s) => s.className));
    const chosenClass = clsOverride || Object.keys(CLASS_ASSETS).find((c) => !taken.has(c));
    if (!chosenClass || taken.has(chosenClass)) return alert("Esta classe já está em uso.");
    const name = $("#my-nick-input").value.trim() || `Jogador ${seatIdx + 1}`;
    $("#my-nick-input").value = name;
    if (ROOM.observerTabId === tabId) ROOM.observerTabId = null;
    ROOM.lobbySeats[seatIdx] = { tabId, name, className: chosenClass, ready: false, ...defaultDeckForClass(chosenClass) };
    saveRoom();
  }

  function renderLobbyRoom() {
    const ROOM = getROOM(), DB = getDB(); if (!ROOM) return;
    const occupied = ROOM.lobbySeats.filter(Boolean);
    $("#lobby-count-badge").textContent = `${occupied.length} de 4 assentos`;
    const myIdx = getMyLobbySeatIndex(), mySeat = myIdx !== -1 ? ROOM.lobbySeats[myIdx] : null, isObs = ROOM.observerTabId === tabId;

    $("#lobby-seats-grid").innerHTML = ROOM.lobbySeats.map((s, idx) => !s
      ? `<div class="lobby-seat-slot free" data-claim-slot="${idx}">+ Assento livre (Clique para entrar)</div>`
      : `<div class="lobby-seat-slot occupied ${s.tabId === tabId ? "mine" : ""}"><div style="display:flex;align-items:center;gap:8px"><img class="class-medallion sm" src="${CLASS_ASSETS[s.className].img}" /><div><div style="font-size:0.84rem;font-weight:700">${esc(s.name)} ${s.tabId === tabId ? "· Você" : ""}</div><div style="font-size:0.72rem;color:var(--text-muted)">${esc(s.className)}</div></div></div><span class="ready-tag ${s.ready ? "ready" : ""}">${s.ready ? "Pronto" : "Preparando"}</span></div>`
    ).join("");
    document.querySelectorAll("[data-claim-slot]").forEach((el) => (el.onclick = () => claimSeat(Number(el.dataset.claimSlot))));

    $("#not-seated-hint").classList.toggle("hidden", myIdx !== -1);
    $("#btn-leave-seat").classList.toggle("hidden", myIdx === -1);
    $("#btn-toggle-ready").classList.toggle("hidden", myIdx === -1);
    $("#btn-enter-observer").classList.toggle("hidden", !UI.isAdmin || myIdx !== -1 || isObs);
    $("#builder-title").textContent = mySeat ? `Persona de ${mySeat.name}` : "Sua Persona";
    if (mySeat) { $("#my-nick-input").value = mySeat.name; $("#btn-toggle-ready").textContent = mySeat.ready ? "✓ Pronto (editar)" : "✓ Estou pronto"; $("#btn-toggle-ready").className = mySeat.ready ? "btn btn-primary" : "btn btn-gold"; }

    const takenBy = {}; ROOM.lobbySeats.forEach((s) => { if (s) takenBy[s.className] = s; });
    $("#classes-showcase").innerHTML = Object.keys(CLASS_ASSETS).map((clsName) => {
      const m = CLASS_ASSETS[clsName], dbC = DB?.classes?.[clsName], own = takenBy[clsName], mine = own && mySeat && own.tabId === tabId, other = own && !mine;
      return `<div class="class-pick-card ${mine ? "selected" : ""} ${other ? "taken" : ""}" data-pick-class="${clsName}"><img src="${m.img}" /><strong>${clsName}</strong><span>${esc(m.desc)}</span>${dbC ? `<span style="color:var(--gold)">PV ${dbC.pvByLevel[0]} · Posturas ${dbC.posturesByLevel[0]} · ${dbC.stone}</span>` : ""}${other ? `<span style="color:#ffbfbf">Com ${esc(own.name)}</span>` : ""}</div>`;
    }).join("");
    document.querySelectorAll("[data-pick-class]").forEach((el) => {
      el.onclick = () => {
        const clsName = el.dataset.pickClass, own = takenBy[clsName];
        if (own && (!mySeat || own.tabId !== tabId)) return;
        if (!mySeat) { const f = ROOM.lobbySeats.findIndex((x) => !x); if (f === -1) return alert("4 assentos ocupados."); claimSeat(f, clsName); }
        else if (mySeat.className !== clsName) { mySeat.className = clsName; mySeat.ready = false; Object.assign(mySeat, defaultDeckForClass(clsName)); saveRoom(); }
      };
    });

    if (!mySeat || !DB) $("#deck-builder-area").classList.add("hidden");
    else {
      $("#deck-builder-area").classList.remove("hidden");
      const eligSkills = getEligibleSkillsLv0(mySeat.className), isSor = mySeat.className === "Feiticeiro";
      $("#skills-count-pill").textContent = `${mySeat.selectedSkills.length}/15`;
      $("#skills-hint").textContent = isSor ? `Escolha seus 15 Feitiços entre os ${eligSkills.length} disponíveis:` : `As 15 Habilidades iniciais de ${mySeat.className} (clique para ler):`;
      $("#btn-autofill-skills").classList.toggle("hidden", !isSor); $("#btn-clear-skills").classList.toggle("hidden", !isSor);
      $("#lobby-skills-grid").innerHTML = eligSkills.map((c) => `<div class="pick-card-wrap ${mySeat.selectedSkills.includes(c.code) ? "selected" : ""}" data-lobby-skill="${c.code}">${renderTarotCardHTML(c)}</div>`).join("");
      document.querySelectorAll("[data-lobby-skill]").forEach((el) => {
        el.onclick = () => {
          const code = el.dataset.lobbySkill; if (!isSor) return openCardZoomReadOnly(code);
          const i = mySeat.selectedSkills.indexOf(code);
          if (i !== -1) mySeat.selectedSkills.splice(i, 1); else if (mySeat.selectedSkills.length < 15) mySeat.selectedSkills.push(code); else return alert("Já selecionou 15.");
          mySeat.ready = false; saveRoom();
        };
      });

      const eligP = getEligiblePosturesLv0(mySeat.className), pLim = DB.classes[mySeat.className].posturesByLevel[0];
      $("#postures-count-pill").textContent = `${mySeat.selectedPostures.length}/${pLim}`;
      $("#postures-hint").textContent = `Escolha ${pLim} Postura(s) e marque qual inicia ativa:`;
      $("#lobby-postures-grid").innerHTML = eligP.map((p) => {
        const sel = mySeat.selectedPostures.includes(p.code), isAct = mySeat.activePosture === p.code;
        return `<div class="pick-card-wrap ${sel ? "selected" : ""}"><div class="posture-lobby-card" data-lobby-posture="${p.code}"><div><div class="tarot-top"><span>${p.code}</span><span>Nív. ${p.level}</span></div><div class="tarot-name">${esc(p.name)}</div><div class="tarot-meta">${esc(p.owner)} · ${esc(p.fn)}</div><div class="tarot-body" style="-webkit-line-clamp:4">${esc(p.passive)}</div></div><div class="posture-stats-box"><div><strong>INI</strong><br/>${p.iniOptions.join("/")}</div><div><strong>ATQ</strong><br/>${p.atq}</div><div><strong>DEF</strong><br/>${p.def}</div></div></div>${sel ? `<button type="button" class="active-posture-btn ${isAct ? "is-active" : ""}" data-set-active-posture="${p.code}">${isAct ? "◉ Postura ativa" : "○ Definir ativa"}</button>` : `<span class="active-posture-btn">Clique p/ incluir</span>`}</div>`;
      }).join("");
      document.querySelectorAll("[data-lobby-posture]").forEach((el) => {
        el.onclick = () => {
          const code = el.dataset.lobbyPosture, i = mySeat.selectedPostures.indexOf(code);
          if (i !== -1) { mySeat.selectedPostures.splice(i, 1); if (mySeat.activePosture === code) mySeat.activePosture = mySeat.selectedPostures[0] || null; }
          else if (mySeat.selectedPostures.length < pLim) { mySeat.selectedPostures.push(code); if (!mySeat.activePosture) mySeat.activePosture = code; }
          else return alert(`Limite de ${pLim} postura(s).`);
          mySeat.ready = false; saveRoom();
        };
      });
      document.querySelectorAll("[data-set-active-posture]").forEach((el) => (el.onclick = () => { mySeat.activePosture = el.dataset.setActivePosture; saveRoom(); }));
    }

    $("#admin-match-setup").classList.toggle("hidden", !UI.isAdmin);
    $("#player-wait-box").classList.toggle("hidden", UI.isAdmin);
    if (UI.isAdmin) {
      const notReady = occupied.filter((s) => !s.ready).map((s) => s.name), incomplete = occupied.filter((s) => !isSeatDeckComplete(s)).map((s) => s.name);
      $("#start-ready-status").textContent = !occupied.length ? "Aguardando ao menos 1 Persona." : incomplete.length ? `Falta completar deck: ${incomplete.join(", ")}.` : notReady.length ? `Falta "Estou pronto": ${notReady.join(", ")}.` : "Todos prontos!";
      $("#btn-start-match").disabled = !DB || !occupied.length || incomplete.length > 0;
      $("#admin-remove-seats").innerHTML = ROOM.lobbySeats.map((s, idx) => (s ? `<button class="btn btn-danger btn-sm" data-adm-kick="${idx}">Remover ${esc(s.name)}</button>` : "")).join("");
      document.querySelectorAll("[data-adm-kick]").forEach((b) => (b.onclick = () => { ROOM.lobbySeats[Number(b.dataset.admKick)] = null; saveRoom(); }));
    }
  }

  $("#my-nick-input").onchange = (e) => { const i = getMyLobbySeatIndex(); if (i !== -1) { getROOM().lobbySeats[i].name = e.target.value.trim() || `Jogador ${i + 1}`; saveRoom(); } };
  $("#btn-toggle-ready").onclick = () => { const i = getMyLobbySeatIndex(); if (i === -1) return; const s = getROOM().lobbySeats[i]; if (!s.ready && !isSeatDeckComplete(s)) return alert("Complete 15 Habilidades, Posturas e 1 Postura ativa."); s.ready = !s.ready; saveRoom(); };
  $("#btn-autofill-skills").onclick = () => { const s = getROOM().lobbySeats[getMyLobbySeatIndex()]; if (!s) return; const miss = shuffle(getEligibleSkillsLv0(s.className).map((c) => c.code).filter((c) => !s.selectedSkills.includes(c))); while (s.selectedSkills.length < 15 && miss.length) s.selectedSkills.push(miss.shift()); saveRoom(); };
  $("#btn-clear-skills").onclick = () => { const s = getROOM().lobbySeats[getMyLobbySeatIndex()]; if (!s) return; s.selectedSkills = []; s.ready = false; saveRoom(); };
  $("#btn-autofill-postures").onclick = () => { const s = getROOM().lobbySeats[getMyLobbySeatIndex()]; if (!s) return; const pLim = getDB().classes[s.className].posturesByLevel[0]; s.selectedPostures = getEligiblePosturesLv0(s.className).map((c) => c.code).slice(0, pLim); if (!s.selectedPostures.includes(s.activePosture)) s.activePosture = s.selectedPostures[0] || null; saveRoom(); };
  $("#btn-join-room").onclick = () => connectToRoom($("#room-code-input").value);
  $("#btn-new-room").onclick = () => connectToRoom("AK" + Math.floor(1000 + Math.random() * 9000));
  $("#btn-copy-room-lobby").onclick = () => { const u = `${location.href.split("?")[0]}?sala=${UI.roomCode}`; navigator.clipboard?.writeText(u); alert(`Link copiado:\n${u}`); };
  $("#btn-leave-seat").onclick = () => { const i = getMyLobbySeatIndex(); if (i !== -1) { getROOM().lobbySeats[i] = null; saveRoom(); } };
  $("#btn-enter-observer").onclick = () => { if (UI.isAdmin) { getROOM().observerTabId = tabId; saveRoom(); } };
  $("#btn-reset-room").onclick = () => { if (UI.isAdmin) { setROOM(createEmptyRoom(UI.roomCode)); saveRoom(); } };
  document.querySelectorAll(".lvl-pill").forEach((b) => (b.onclick = () => { const lv = Number(b.dataset.lvl); if (UI.selectedLevels.has(lv)) { if (UI.selectedLevels.size === 1) return; UI.selectedLevels.delete(lv); b.classList.remove("active"); } else { UI.selectedLevels.add(lv); b.classList.add("active"); } }));
  $("#xlsx-input").addEventListener("change", async (e) => { const f = e.target.files?.[0]; if (!f) return; try { const db = parseWorkbook(await f.arrayBuffer()); setDB(db); window.ARCANA_DATA = db; try { localStorage.setItem("akuanua_db_cache", JSON.stringify(db)); } catch (_) {} updateDataStatus(); } catch (err) { alert("Erro: " + err.message); } });
  $("#btn-export-js").onclick = () => { const db = getDB(); if (!db) return; const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([`window.ARCANA_DATA = ${JSON.stringify(db, null, 2)};\n`], { type: "application/javascript;charset=utf-8" })); a.download = "arcana-data.js"; a.click(); URL.revokeObjectURL(a.href); };

  $("#btn-start-match").onclick = () => {
    const DB = getDB(), ROOM = getROOM(); if (!DB || !UI.isAdmin) return;
    const occ = ROOM.lobbySeats.filter(Boolean);
    if (!occ.length || occ.some((s) => !isSeatDeckComplete(s))) return alert("Todos precisam completar 15 Habilidades e suas Posturas.");
    const allCards = Object.values(DB.cards), includeDraft = $("#include-draft-objectives").checked;
    const scenDeck = shuffle(allCards.filter((c) => c.category === "cenario").map((c) => c.code));
    const objDeck = shuffle(allCards.filter((c) => c.category === "objetivo" && (includeDraft || !c.isDraft)).map((c) => c.code));
    const chalDeck = shuffle(allCards.filter((c) => c.category === "desafio" && UI.selectedLevels.has(c.level)).map((c) => c.code));
    const firstScen = scenDeck.shift(), market = [objDeck.shift() || null, objDeck.shift() || null, objDeck.shift() || null];
    const seats = occ.map((o, idx) => {
      const s15 = shuffle(o.selectedSkills), res = allCards.filter((c) => c.category === "habilidade" && c.className === o.className && !o.selectedSkills.includes(c.code)).map((c) => c.code);
      return { seatIndex: idx, tabId: o.tabId, name: o.name, className: o.className, level: 0, pv: DB.classes[o.className].pvByLevel[0], maxPv: DB.classes[o.className].pvByLevel[0], coord: "0,0", actionsLeft: 2, overloadIS: 0, bda: 0, bdd: 0, announcedIni: null, hand: s15.slice(0, 5), deck: s15.slice(5, 15), discard: [], reserve: res, tableCards: [], activePosture: o.activePosture, posturePool: o.selectedPostures.filter((c) => c !== o.activePosture), postureDiscard: [], engaged: [], males: [] };
    });
    const game = { round: 1, periodIndex: 0, phase: "PERSONA_TURN", deathMode: $("#death-mode").value, includedChallengeLevels: [...UI.selectedLevels].sort((a, b) => a - b), seats, turnOrder: [], turnCursor: 0, monsterQueue: [], monsterCursor: 0, appearanceCounter: 0, map: { tiles: { "0,0": { code: firstScen, roundPlaced: 1, orphans: [] } } }, shared: { market, objectiveDeck: objDeck, objectiveDiscard: [], scenarioDeck: scenDeck, challengeDeck: chalDeck, challengeDiscard: [] }, logs: [], feedbacks: [] };
    ROOM.status = "playing"; ROOM.game = game; computeRoundTurnOrder(game);
    const sc = DB.cards[firstScen];
    pushLog(game, "system", "Akuanuá", `iniciou a partida com ${seats.map((s) => `${s.name} (${s.className})`).join(", ")}.`);
    pushLog(game, "system", "Akuanuá", `revelou o Cenário inicial ${sc.name} (${sc.code}). Todas as Personas estão nele.`);
    pushLog(game, "system", "Akuanuá", `iniciou a rodada 1. Período Alvorada.`);
    pushLog(game, "system", "Akuanuá", `anuncia o turno de ${seats[game.turnOrder[0]].name} (${seats[game.turnOrder[0]].className}).`);
    saveRoom();
  };

  function drawSkillCards(s, qty) {
    for (let i = 0; i < qty; i++) {
      if (!s.deck.length && s.discard.length) { s.deck = shuffle(s.discard); s.discard = []; pushLog(getROOM().game, "system", "Akuanuá", `${s.name} embaralhou seu descarte.`); }
      if (!s.deck.length) break; s.hand.push(s.deck.shift());
    }
  }
  function finishPersonaTurn() {
    const s = getActiveSeat(); if (!s) return;
    const lim = getHandLimit(s);
    if (s.hand.length < lim) { const diff = lim - s.hand.length; drawSkillCards(s, diff); pushLog(getROOM().game, "system", "Akuanuá", `${s.name} comprou ${diff} carta(s) (${lim}/${lim}).`); }
    else if (s.hand.length > lim) return openDiscardHandModal(s, s.hand.length - lim);
    advanceAfterPersonaTurn();
  }
  function advanceAfterPersonaTurn() {
    const g = getROOM().game;
    if (g.turnCursor + 1 < g.turnOrder.length) { g.turnCursor++; const s = g.seats[g.turnOrder[g.turnCursor]]; s.actionsLeft = 2; s.overloadIS = 0; pushLog(g, "system", "Akuanuá", `anuncia o turno de ${s.name} (${s.className}).`); saveRoom(); }
    else startMonstersPhase();
  }
  function startMonstersPhase() {
    const g = getROOM().game, q = [];
    g.seats.forEach((s) => s.engaged.forEach((m) => !m.isUncommon && q.push({ kind: "engaged", seatIndex: s.seatIndex, instance: m })));
    Object.entries(g.map.tiles).forEach(([coord, tile]) => tile.orphans.forEach((m) => q.push({ kind: "orphan", coord, instance: m })));
    q.sort((a, b) => a.instance.appearanceOrder - b.instance.appearanceOrder);
    g.monsterQueue = q; g.monsterCursor = 0;
    if (!q.length) return startNextRound();
    g.phase = "MONSTERS_PHASE"; pushLog(g, "system", "Akuanuá", `Fase dos Monstros (${q.length}).`); saveRoom();
  }
  function resolveCurrentMonsterAction() {
    const g = getROOM().game, DB = getDB(), item = g.monsterQueue[g.monsterCursor]; if (!item) return startNextRound();
    const m = item.instance, c = DB.cards[m.code];
    if (item.kind === "engaged") {
      const t = g.seats[item.seatIndex], def = (DB.cards[t.activePosture]?.def || 0) + Math.max(0, t.bdd || 0), dmg = Math.max(0, (m.atq || 0) - def);
      t.pv = Math.max(0, t.pv - dmg); pushLog(g, "system", "Akuanuá", `${c.name} atacou ${t.name}: ${dmg} Dano (PV ${t.pv}/${t.maxPv}).`);
    }
    g.monsterCursor++; if (g.monsterCursor >= g.monsterQueue.length) startNextRound(); else saveRoom();
  }
  function startNextRound() {
    const g = getROOM().game; g.round++; g.periodIndex = (g.periodIndex + 1) % PERIODS.length; g.phase = "PERSONA_TURN";
    g.shared.market = g.shared.market.map((sl) => (!sl && g.shared.objectiveDeck.length ? g.shared.objectiveDeck.shift() : sl));
    computeRoundTurnOrder(g); const first = g.seats[g.turnOrder[0]]; first.actionsLeft = 2; first.overloadIS = 0;
    pushLog(g, "system", "Akuanuá", `Rodada ${g.round} · Período: ${PERIODS[g.periodIndex]}. Turno de ${first.name}.`); saveRoom();
  }

  function drawChallengeChoice() {
    const g = getROOM().game, DB = getDB(), s = getActiveSeat(); if (!s) return;
    if (!g.shared.challengeDeck.length && g.shared.challengeDiscard.length) { g.shared.challengeDeck = shuffle(g.shared.challengeDiscard); g.shared.challengeDiscard = []; }
    if (!g.shared.challengeDeck.length) return alert("Deck de Desafios vazio!");
    const code = g.shared.challengeDeck.shift(), c = DB.cards[code], sum = s.engaged.reduce((a, m) => a + (m.level || 0), 0), fits = s.engaged.length < 2 && sum + c.level <= s.level;
    openModal(`<div class="zoom-card-wrap"><div class="zoom-tarot zoom-desafio" style="background-image:url('Assets/Desafio.png')"><div><div class="tarot-top"><span>${c.code}</span><span>Nív. ${c.level}</span></div><h2 style="margin:6px 0;font-size:1.1rem">${esc(c.name)}</h2><div style="font-size:0.76rem;color:var(--parchment-muted);margin-bottom:8px">${esc(c.challengeClass)}</div>${c.isUncommon ? `<p style="font-size:0.8rem">${highlightKeywords(c.passive)}</p>` : `<p style="font-size:0.8rem"><strong>ATQ ${c.atq} | DEF ${c.def} | PV ${c.pv}</strong></p><p style="font-size:0.78rem;margin-top:6px">${highlightKeywords(c.passive || "Sem passiva.")}</p>`}</div><div class="tarot-footer">${esc(c.footnote || "")}</div></div><div class="zoom-actions"><div class="side-label">DESAFIO COMPRADO</div><h3>${esc(c.name)}</h3><button class="btn btn-gold" id="ch-eng" ${!(s.engaged.length === 0 || fits) ? "disabled" : ""}>Engajar na minha área</button><button class="btn" id="ch-eng2" ${!(fits && s.actionsLeft >= 1 && s.engaged.length === 1) ? "disabled" : ""}>Engajar como 2º (1 Ação)</button><button class="btn btn-danger" id="ch-disc">Enviar para o Descarte</button></div></div>`);
    const eng = (spend) => { if (spend) s.actionsLeft--; g.appearanceCounter++; s.engaged.push({ instanceId: `ch_${g.appearanceCounter}`, code, level: c.level, isUncommon: c.isUncommon, atq: c.atq ?? 0, def: c.def ?? 0, pv: c.pv ?? 0, maxPv: c.pv ?? 0, appearanceOrder: g.appearanceCounter }); pushLog(g, "system", "Akuanuá", `${s.name} engajou com ${c.name} (Nv.${c.level}).`); closeModal(); saveRoom(); };
    $("#ch-eng").onclick = () => eng(false); $("#ch-eng2").onclick = () => eng(true);
    $("#ch-disc").onclick = () => { g.shared.challengeDiscard.push(code); pushLog(g, "system", "Akuanuá", `${s.name} descartou ${c.name}.`); closeModal(); saveRoom(); };
  }

  function attackMonster(seatIdx, instId) {
    const g = getROOM().game, DB = getDB(), atk = getActiveSeat(); if (!atk || atk.actionsLeft < 1) return;
    const owner = g.seats[seatIdx]; if (atk.coord !== owner.coord) return alert("Mesmo Cenário obrigatório (Manual 9.4).");
    const m = owner.engaged.find((x) => x.instanceId === instId); if (!m) return;
    const atkTot = (DB.cards[atk.activePosture]?.atq || 0) + (atk.bda || 0), dmg = Math.max(0, atkTot - (m.def || 0));
    atk.actionsLeft--; m.pv = Math.max(0, m.pv - dmg);
    pushLog(g, "system", "Akuanuá", `${atk.name} atacou ${DB.cards[m.code].name}: ${dmg} Dano.`);
    if (m.pv <= 0) defeatChallenge(owner, instId, atk); else saveRoom();
  }
  function defeatChallenge(owner, instId, killer) {
    const g = getROOM().game, i = owner.engaged.findIndex((x) => x.instanceId === instId); if (i === -1) return;
    const [rem] = owner.engaged.splice(i, 1); g.shared.challengeDiscard.push(rem.code);
    pushLog(g, "system", "Akuanuá", `${killer.name} concluiu/descartou ${getDB().cards[rem.code].name}.`); saveRoom();
  }
  function fleeTurn() {
    const g = getROOM().game, DB = getDB(), s = getActiveSeat(); if (!s || s.actionsLeft !== 2) return;
    const adj = getAdjacentExistingCoords(s.coord); if (!adj.length) return alert("Sem Cenário adjacente para fugir.");
    openModal(`<h3>Fugir (turno completo)</h3><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">${adj.map((c) => `<button class="btn btn-primary" data-flee="${c}">${esc(DB.cards[g.map.tiles[c].code].name)} (${c})</button>`).join("")}</div>`);
    document.querySelectorAll("[data-flee]").forEach((b) => (b.onclick = () => {
      const dest = b.dataset.flee, old = s.coord; s.coord = dest; s.actionsLeft = 0;
      const left = s.engaged.splice(0, s.engaged.length), others = g.seats.some((o) => o.seatIndex !== s.seatIndex && o.coord === old);
      if (left.length) { if (!others) left.forEach((m) => g.shared.challengeDiscard.push(m.code)); else g.map.tiles[old].orphans.push(...left); }
      pushLog(g, "system", "Akuanuá", `${s.name} fugiu para ${dest}.`); closeModal(); finishPersonaTurn();
    }));
  }
  function handleExploreClick(coord) {
    const g = getROOM().game, DB = getDB(), s = getActiveSeat(); if (!s || !UI.exploreMode || s.actionsLeft < 1) return;
    if (g.map.tiles[coord]) { s.coord = coord; s.actionsLeft--; pushLog(g, "system", "Akuanuá", `${s.name} moveu-se para ${DB.cards[g.map.tiles[coord].code].name}.`); }
    else { if (!g.shared.scenarioDeck.length) { alert("Deck de Cenários vazio."); UI.exploreMode = false; return renderAll(); } const code = g.shared.scenarioDeck.shift(); g.map.tiles[coord] = { code, roundPlaced: g.round, orphans: [] }; s.coord = coord; s.actionsLeft--; pushLog(g, "system", "Akuanuá", `${s.name} explorou ${DB.cards[code].name} (${code}).`); }
    UI.exploreMode = false; saveRoom();
  }

  function renderAll() {
    const ROOM = getROOM(), g = ROOM?.game; if (!g) return;
    const active = getActiveSeat(), n = g.seats.length, v = Math.min(UI.viewerSeat, n - 1);
    $("#pill-room").textContent = ROOM.roomCode; $("#pill-round").textContent = `Rodada ${g.round}`;
    $("#pill-period").textContent = PERIODS[g.periodIndex]; $("#pill-phase").textContent = g.phase === "MONSTERS_PHASE" ? "Fase dos Monstros" : "Turnos das Personas";
    $("#topbar-turn").textContent = g.phase === "MONSTERS_PHASE" ? `Monstros (${g.monsterCursor + 1}/${g.monsterQueue.length})` : `Turno de ${active?.name || "-"}`;
    if (UI.isAdmin) $("#perspective-select").innerHTML = g.seats.map((s) => `<option value="${s.seatIndex}" ${s.seatIndex === UI.viewerSeat ? "selected" : ""}>${esc(s.name)} (${s.className})</option>`).join("");
    const pos = n === 1 ? { south: 0, west: null, north: null, east: null } : n === 2 ? { south: v, west: null, north: (v + 1) % 2, east: null } : n === 3 ? { south: v, west: (v + 1) % 3, north: (v + 2) % 3, east: null } : { south: v, west: (v + 1) % 4, north: (v + 2) % 4, east: (v + 3) % 4 };
    renderOpponent($("#region-north"), pos.north, "NORTE"); renderOpponent($("#region-west"), pos.west, "OESTE"); renderOpponent($("#region-east"), pos.east, "LESTE");
    renderSouth($("#region-south"), pos.south); renderCenter(); renderComms();
    if (UI.adminOpen && UI.isAdmin) renderAdminBody();
  }

  function renderOpponent(el, seatIdx, label) {
    const g = getROOM().game, DB = getDB(), clsBase = `seat-region floatable-panel seat-${label === "NORTE" ? "north" : label === "OESTE" ? "west" : "east"}`, bar = `<div class="panel-drag-bar"><span>${label}</span><span>⠿</span></div>`;
    if (seatIdx === null || !g.seats[seatIdx]) { el.className = `${clsBase} seat-empty`; el.innerHTML = `${bar}<span>${label} · Assento livre</span>`; return; }
    const s = g.seats[seatIdx], active = getActiveSeat(), cls = DB.classes[s.className], p = DB.cards[s.activePosture];
    el.className = clsBase + (active && active.seatIndex === s.seatIndex ? " active-turn" : "");
    el.innerHTML = `${bar}<div class="seat-header"><div class="persona-id"><img class="class-medallion sm" src="${cls.img}" /><div><div><span class="stone-dot" style="background:${cls.color}"></span> ${esc(s.name)}</div><div style="font-size:0.7rem;color:var(--text-muted)">${s.className} · Nv.${s.level}</div></div></div><span class="stat-badge pv-badge">PV ${s.pv}/${s.maxPv}</span></div><div class="stat-row"><span class="stat-badge">${esc(DB.cards[g.map.tiles[s.coord]?.code]?.name || "")}</span><span class="stat-badge">INI ${getSeatIni(s)}</span><span class="stat-badge">${esc(p?.name)} (${p?.atq}/${p?.def})</span></div><div class="opponent-row"><div class="mini-back-fan">${s.hand.map(() => `<img src="Assets/CH.png" />`).join("")}</div><span class="stat-badge">Mão ${s.hand.length} · Deck ${s.deck.length} · Desc ${s.discard.length}</span></div><div class="mini-list">${s.tableCards.map((t) => `<span class="mini-chip" data-zoom="${t.code}">${esc(DB.cards[t.code]?.name)}</span>`).join("")}${s.engaged.map((m) => `<span class="mini-chip mal-chip" data-zoom="${m.code}">⚔ ${esc(DB.cards[m.code]?.name)} (${m.pv}/${m.maxPv})</span>`).join("")}${s.males.map((ml) => `<span class="mini-chip mal-chip">${esc(ml)}</span>`).join("")}</div>`;
    bindZoomTriggers(el);
  }

  function renderSouth(el, seatIndex) {
    const g = getROOM().game, DB = getDB(), s = g.seats[seatIndex], active = getActiveSeat();
    const canControl = UI.isAdmin || s.tabId === tabId, isMyTurn = canControl && active && active.seatIndex === s.seatIndex && g.phase === "PERSONA_TURN";
    el.className = "seat-region seat-south floatable-panel" + (active && active.seatIndex === s.seatIndex ? " active-turn" : "");
    const cls = DB.classes[s.className], p = DB.cards[s.activePosture], lim = getHandLimit(s), canFlee = isMyTurn && s.actionsLeft === 2 && getAdjacentExistingCoords(s.coord).length > 0;

    el.innerHTML = `
      <div class="panel-drag-bar"><span>SUA MESA · ${esc(s.name)}</span><span>⠿</span></div>
      <div class="south-top-bar">
        <div class="persona-id">
          <img class="class-medallion" src="${cls.img}" />
          <div>
            <div><span class="stone-dot" style="background:${cls.color}"></span> ${esc(s.name)} · ${s.className} Nv.${s.level}</div>
            <div class="stat-row" style="margin-top:3px">
              <span class="stat-badge">Ações: ${"● ".repeat(s.actionsLeft)}${"○ ".repeat(Math.max(0, 2 - s.actionsLeft))}</span>
              <span class="stat-badge pv-badge"><button class="btn-icon" id="btn-pv-minus">-</button> PV ${s.pv}/${s.maxPv} <button class="btn-icon" id="btn-pv-plus">+</button></span>
              <span class="stat-badge">BdA <button class="btn-icon" id="bda-m">-</button> ${s.bda} <button class="btn-icon" id="bda-p">+</button></span>
              <span class="stat-badge">BdD <button class="btn-icon" id="bdd-m">-</button> ${s.bdd} <button class="btn-icon" id="bdd-p">+</button></span>
              <label class="stat-badge">INI: <input class="ini-input" id="ini-override" type="number" value="${s.announcedIni ?? ""}" placeholder="${p?.ini ?? 0}" /></label>
              ${s.className === "Feiticeiro" ? `<span class="stat-badge" style="border-color:#e6a825">IS ${s.overloadIS}/${p?.ls ?? cls.lsByLevel[s.level]}</span>` : ""}
              <button class="btn btn-sm" id="btn-add-mal">+ Mal</button>
              ${s.males.map((ml, i) => `<span class="mini-chip mal-chip" data-rm-mal="${i}">${esc(ml)} ✕</span>`).join("")}
            </div>
          </div>
        </div>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          <button class="btn btn-sm ${UI.exploreMode ? "btn-gold" : ""}" id="btn-explore" ${!isMyTurn || s.actionsLeft < 1 ? "disabled" : ""}>Explorar</button>
          <button class="btn btn-sm" id="btn-draw-chal" ${!isMyTurn ? "disabled" : ""}>Desafio</button>
          <button class="btn btn-sm" id="btn-flee" ${!canFlee ? "disabled" : ""}>Fugir</button>
          <button class="btn btn-sm btn-primary" id="btn-end-turn" ${!isMyTurn ? "disabled" : ""}>Encerrar Turno</button>
        </div>
      </div>

      <div class="south-top-workspace">
        <div class="south-col">
          <div class="section-mini-title">POSTURA ATIVA &amp; DECK (${s.posturePool.length})</div>
          <div class="posture-pair">
            <div class="posture-parchment" id="btn-postures">
              <div><div class="tarot-top"><span>${p?.code || ""}</span><span>Nv.${p?.isSpecialE ? "E" : p?.level}</span></div><div class="tarot-name">${esc(p?.name || "-")}</div><div class="tarot-body" style="-webkit-line-clamp:3">${esc(p?.passive || "")}</div></div>
              <div class="posture-stats-box"><div><strong>INI</strong><br/>${p?.iniOptions?.join("/") ?? 0}</div><div><strong>ATQ</strong><br/>${p?.atq ?? 0}</div><div><strong>DEF</strong><br/>${p?.def ?? 0}</div></div>
            </div>
            <div class="posture-deck-back" id="btn-posture-deck"><img src="Assets/CP.png" /><span class="deck-count">${s.posturePool.length}</span></div>
          </div>
          <div class="mini-list">
            <span class="mini-chip" id="btn-view-deck">Deck (${s.deck.length})</span>
            <span class="mini-chip" id="btn-view-discard">Descarte (${s.discard.length})</span>
            <span class="mini-chip" id="btn-view-reserve">Reserva (${s.reserve.length})</span>
          </div>
        </div>

        <div class="south-col">
          <div class="section-mini-title">NA MESA (${s.tableCards.length} carta(s) em jogo)</div>
          <div class="cards-h-strip mesa-strip" id="mesa-dropzone">
            ${s.tableCards.length === 0 ? '<span style="font-size:0.74rem;color:var(--text-muted);margin:auto">Nenhuma carta na mesa.</span>' : s.tableCards.map((t, idx) => renderTarotCardHTML(DB.cards[t.code], null, idx)).join("")}
          </div>
        </div>

        <div class="south-col">
          <div class="section-mini-title">DESAFIOS ENGAJADOS (${s.engaged.length}/2)</div>
          <div class="cards-h-strip">
            ${s.engaged.length === 0 ? '<span style="font-size:0.74rem;color:var(--text-muted)">Nenhum desafio engajado.</span>' : s.engaged.map((m) => {
              const c = DB.cards[m.code];
              return `<div class="engaged-tarot" data-zoom="${m.code}"><div><div class="tarot-top"><span>${c.code}</span><span>Nív. ${m.level}</span></div><div class="tarot-name">${esc(c.name)}</div><div class="tarot-meta">${esc(c.challengeClass)}</div>${m.isUncommon ? `<div class="tarot-body">${esc(c.passive)}</div>` : `<div class="engaged-stats"><div><strong>ATQ</strong><br/>${m.atq}</div><div><strong>DEF</strong><br/>${m.def}</div><div><strong>PV</strong><br/>${m.pv}/${m.maxPv}</div></div><div class="tarot-body" style="-webkit-line-clamp:3">${esc(c.passive || "Sem passiva")}</div>`}</div><div class="engaged-actions" onclick="event.stopPropagation()">${!m.isUncommon ? `<button class="btn btn-primary" data-atk="${m.instanceId}" ${!isMyTurn || s.actionsLeft < 1 ? "disabled" : ""}>Atacar</button>` : ""}<button class="btn" data-defeat="${m.instanceId}">Concluir</button></div></div>`;
            }).join("")}
          </div>
        </div>
      </div>

      <div class="south-hand-section">
        <div class="section-mini-title">SUA MÃO (${s.hand.length}/${lim})</div>
        <div class="cards-h-strip">${s.hand.map((code, idx) => renderTarotCardHTML(DB.cards[code], idx, null)).join("")}</div>
      </div>
    `;

    $("#btn-pv-minus").onclick = () => { if (!canControl) return; s.pv = Math.max(0, s.pv - 1); saveRoom(); };
    $("#btn-pv-plus").onclick = () => { if (!canControl) return; s.pv = Math.min(s.maxPv, s.pv + 1); saveRoom(); };
    $("#bda-m").onclick = () => { if (!canControl) return; s.bda = Math.max(0, s.bda - 1); saveRoom(); };
    $("#bda-p").onclick = () => { if (!canControl) return; s.bda++; saveRoom(); };
    $("#bdd-m").onclick = () => { if (!canControl) return; s.bdd = Math.max(0, s.bdd - 1); saveRoom(); };
    $("#bdd-p").onclick = () => { if (!canControl) return; s.bdd++; saveRoom(); };
    $("#ini-override").onchange = (e) => { s.announcedIni = e.target.value === "" ? null : Number(e.target.value); addSystemLog(`${s.name} anunciou INI ${getSeatIni(s)}.`); };
    $("#btn-postures").onclick = () => openPostureModal(s); $("#btn-posture-deck").onclick = () => openPostureModal(s);
    $("#btn-explore").onclick = () => { UI.exploreMode = !UI.exploreMode; renderAll(); };
    $("#btn-draw-chal").onclick = drawChallengeChoice; $("#btn-flee").onclick = fleeTurn; $("#btn-end-turn").onclick = finishPersonaTurn;
    $("#btn-view-discard").onclick = () => openPileModal(`Descarte de ${s.name}`, s.discard);
    $("#btn-view-reserve").onclick = () => openPileModal(`Reserva de ${s.className}`, s.reserve);
    $("#btn-view-deck").onclick = () => alert(`Seu deck fechado tem ${s.deck.length} carta(s).`);
    $("#btn-add-mal").onclick = () => { const m = prompt("Nome do Mal (Fadiga, Ferimento, Medo, Silêncio, Veneno, Atordoamento):"); if (m?.trim()) { s.males.push(m.trim()); addSystemLog(`${s.name} recebeu o Mal: ${m.trim()}.`); } };
    el.querySelectorAll("[data-rm-mal]").forEach((m) => (m.onclick = () => { const [r] = s.males.splice(Number(m.dataset.rmMal), 1); addSystemLog(`${s.name} removeu o Mal: ${r}.`); }));
    el.querySelectorAll(".tarot-card[data-hand-idx]").forEach((c) => (c.onclick = () => openHandCardZoom(s, Number(c.dataset.handIdx))));
    el.querySelectorAll(".tarot-card[data-table-idx]").forEach((c) => (c.onclick = () => openTableCardModal(s, Number(c.dataset.tableIdx))));
    el.querySelectorAll("[data-atk]").forEach((b) => (b.onclick = () => attackMonster(s.seatIndex, b.dataset.atk)));
    el.querySelectorAll("[data-defeat]").forEach((b) => (b.onclick = () => defeatChallenge(s, b.dataset.defeat, s)));
    bindZoomTriggers(el);
  }

  function renderTarotCardHTML(card, handIdx = null, tableIdx = null) {
    if (!card) return "";
    const body = card.commands ? card.commands.join(" ") : card.passive || card.rule || "";
    const meta = card.category === "habilidade" ? `${card.type} · ${card.fn} · ${card.className === "Feiticeiro" ? `IS ${card.is}` : `Nív. ${card.isSpecialE ? "E" + card.level : card.level}`}` : card.category;
    const attr = handIdx !== null ? `data-hand-idx="${handIdx}"` : tableIdx !== null ? `data-table-idx="${tableIdx}"` : `data-zoom="${card.code}"`;
    return `<div class="tarot-card" ${attr}><div><div class="tarot-top"><span>${esc(card.code)}</span><span>${esc(card.favoredPeriod || "")}</span></div><div class="tarot-name">${esc(card.name)}</div><div class="tarot-meta fn-${esc(card.fn)}">${esc(meta)}</div><div class="tarot-body">${esc(body)}</div></div><div class="tarot-footer">${esc(card.discardRule || "")}</div></div>`;
  }

  function renderCenter() {
    const g = getROOM().game, DB = getDB();
    $("#market-slots").innerHTML = g.shared.market.map((code, i) => !code ? `<div class="market-parchment empty">Vazio<br/>(próx. rodada)</div>` : `<div class="market-parchment" data-market-idx="${i}"><div><div class="tarot-top"><span>${code}</span><span>Obj.</span></div><div class="tarot-name">${esc(DB.cards[code].name)}</div></div><div class="tarot-body" style="-webkit-line-clamp:4">${esc(DB.cards[code].condition || DB.cards[code].rewardDesc || "Rascunho")}</div></div>`).join("");
    document.querySelectorAll("[data-market-idx]").forEach((el) => (el.onclick = () => openMarketModal(Number(el.dataset.marketIdx))));
    $("#cnt-obj").textContent = g.shared.objectiveDeck.length; $("#cnt-des").textContent = g.shared.challengeDeck.length; $("#cnt-des-disc").textContent = g.shared.challengeDiscard.length; $("#cnt-cen").textContent = g.shared.scenarioDeck.length;
    $("#levels-caption").textContent = `Níveis no deck de Desafios: ${g.includedChallengeLevels.join(", ")}`;
    $("#btn-challenge-draw-quick").onclick = drawChallengeChoice; $("#btn-challenge-discard").onclick = () => openPileModal("Descarte de Desafios", g.shared.challengeDiscard);

    const active = getActiveSeat(), tiles = g.map.tiles, coords = Object.keys(tiles).map((k) => k.split(",").map(Number)), exp = new Set();
    if (UI.exploreMode && active) { const [ax, ay] = active.coord.split(",").map(Number); [`${ax},${ay - 1}`, `${ax + 1},${ay}`, `${ax},${ay + 1}`, `${ax - 1},${ay}`].forEach((c) => exp.add(c)); }
    const pts = [...coords, ...[...exp].map((k) => k.split(",").map(Number))], minX = Math.min(...pts.map((p) => p[0])), maxX = Math.max(...pts.map((p) => p[0])), minY = Math.min(...pts.map((p) => p[1])), maxY = Math.max(...pts.map((p) => p[1]));
    const grid = $("#map-grid"); grid.style.gridTemplateColumns = `repeat(${maxX - minX + 1}, 150px)`;
    let html = "";
    for (let y = minY; y <= maxY; y++) for (let x = minX; x <= maxX; x++) {
      const k = `${x},${y}`, tile = tiles[k], isExp = exp.has(k);
      if (tile) { const sc = DB.cards[tile.code], here = g.seats.filter((s) => s.coord === k); html += `<div class="scenario-tile ${sc.atemporal ? "atemporal" : ""}" data-tile-coord="${k}"><div><div style="display:flex;justify-content:space-between"><span class="scenario-name">${esc(sc.name)}</span><span class="scenario-code">${sc.code}</span></div>${sc.atemporal ? '<span class="tag-atemporal">Atemporal</span>' : ""}</div><div class="scenario-rule-preview">${esc(sc.rule)}</div><div class="scenario-footer"><div class="stones-row">${here.map((s) => `<span class="stone-dot" style="background:${DB.classes[s.className].color}" title="${esc(s.name)}"></span>`).join("")}</div>${tile.orphans.length ? `<span class="orphan-badge">⚔ ${tile.orphans.length}</span>` : ""}</div>${isExp ? `<button class="btn btn-sm btn-gold" style="position:absolute;bottom:6px;right:6px" data-explore-coord="${k}">Mover</button>` : ""}</div>`; }
      else if (isExp) html += `<button class="explore-slot" data-explore-coord="${k}">+ Explorar<br/>(${k})</button>`;
      else html += `<div class="map-spacer"></div>`;
    }
    grid.innerHTML = html;
    grid.querySelectorAll("[data-explore-coord]").forEach((b) => (b.onclick = (e) => { e.stopPropagation(); handleExploreClick(b.dataset.exploreCoord); }));
    grid.querySelectorAll(".scenario-tile").forEach((t) => (t.onclick = () => openScenarioZoom(t.dataset.tileCoord)));
    const ab = $("#center-alerts");
    if (g.phase === "MONSTERS_PHASE") { ab.classList.remove("hidden"); ab.innerHTML = `<span><strong>Fase dos Monstros:</strong> ${esc(DB.cards[g.monsterQueue[g.monsterCursor].instance.code]?.name)}</span><button class="btn btn-sm btn-gold" id="btn-resolve-monster">Resolver Ação</button>`; $("#btn-resolve-monster").onclick = resolveCurrentMonsterAction; }
    else ab.classList.add("hidden");
  }

  function renderComms() {
    const g = getROOM()?.game; if (!g) return;
    const feed = $("#comms-feed"), items = g.logs.filter((l) => (UI.commsTab === "log" ? l.kind !== "chat" : UI.commsTab === "chat" ? l.kind === "chat" : true));
    feed.innerHTML = items.length ? items.map((l) => `<div class="log-entry ${l.kind}">[${l.time}] <strong>${esc(l.author)}:</strong> ${esc(l.text)}</div>`).join("") : '<span style="color:var(--text-muted)">Sem registros ainda.</span>';
    feed.scrollTop = feed.scrollHeight;
  }

  const openModal = (html) => { $("#modal-content").innerHTML = html; $("#modal-backdrop").classList.remove("hidden"); };
  const closeModal = () => $("#modal-backdrop").classList.add("hidden");
  $("#modal-close").onclick = closeModal; $("#modal-backdrop").onclick = (e) => { if (e.target.id === "modal-backdrop") closeModal(); };
  const bindZoomTriggers = (r) => r.querySelectorAll("[data-zoom]").forEach((el) => (el.onclick = () => openCardZoomReadOnly(el.dataset.zoom)));
  const frontBg = (cat) => (cat === "postura" ? "Assets/Postura.png" : cat === "objetivo" ? "Assets/Objetivo.jpg" : cat === "desafio" ? "Assets/Desafio.png" : "Assets/Habilidade.png");
  const zoomCls = (cat) => (cat === "postura" ? "zoom-postura" : cat === "objetivo" ? "zoom-objetivo" : cat === "desafio" ? "zoom-desafio" : "zoom-habilidade");

  function openCardZoomReadOnly(code) {
    const c = getDB().cards[code]; if (!c) return;
    if (c.category === "cenario") return openModal(`<div class="zoom-card-wrap"><div class="zoom-square"><div><div class="tarot-top"><span>${c.code}</span><span>${c.atemporal ? "Atemporal" : "Período Global"}</span></div><h3 style="margin:8px 0">${esc(c.name)}</h3></div><div style="font-size:0.86rem;line-height:1.45">${highlightKeywords(c.rule)}</div><div class="tarot-footer">Cenário 1:1</div></div></div>`);
    openModal(`<div class="zoom-card-wrap"><div class="zoom-tarot ${zoomCls(c.category)}" style="background-image:url('${frontBg(c.category)}')"><div><div class="tarot-top"><span>${c.code}</span><span>${esc(c.fn || c.category)}</span></div><h2 style="margin:6px 0;font-size:1.05rem">${esc(c.name)}</h2><div style="font-size:0.74rem;color:var(--parchment-muted);margin-bottom:8px;font-style:italic">${esc(c.type || c.challengeClass || "")}</div>${c.commands ? c.commands.map((cm, i) => `<p style="font-size:0.76rem;margin-bottom:6px"><strong>COMANDO ${i + 1}</strong><br/>${highlightKeywords(cm)}</p>`).join("") : `<p style="font-size:0.76rem">${highlightKeywords(c.passive || c.condition || "")}</p>`}${c.overload ? `<p style="font-size:0.74rem;color:#7a2e0e"><strong>SOBRECARGA</strong><br/>${highlightKeywords(c.overload)}</p>` : ""}</div><div class="tarot-footer">${c.discardRule ? `<strong>DESCARTE</strong><br/>${esc(c.discardRule)}` : esc(c.footnote || "")}</div></div></div>`);
  }

  function openHandCardZoom(seat, handIdx) {
    const g = getROOM().game, DB = getDB(), code = seat.hand[handIdx], c = DB.cards[code], active = getActiveSeat(), canControl = UI.isAdmin || seat.tabId === tabId, isMyTurn = canControl && active && active.seatIndex === seat.seatIndex && g.phase === "PERSONA_TURN";
    const mons = []; g.seats.forEach((o) => { if (o.coord === seat.coord) o.engaged.forEach((m) => !m.isUncommon && mons.push({ seatIndex: o.seatIndex, instance: m })); });
    const pers = g.seats.filter((o) => o.coord === seat.coord);
    openModal(`<div class="zoom-card-wrap"><div class="zoom-tarot ${zoomCls(c.category)}" style="background-image:url('${frontBg(c.category)}')"><div><div class="tarot-top"><span>${c.code}</span><span>${c.className === "Feiticeiro" ? `IS ${c.is}` : `Nív. ${c.level ?? 0}`}</span></div><h2 style="margin:6px 0;font-size:1.05rem">${esc(c.name)}</h2><div style="font-size:0.74rem;color:var(--parchment-muted);margin-bottom:8px;font-style:italic">${esc(c.type || "")} · ${esc(c.fn || "")}</div>${c.commands ? c.commands.map((cm, i) => `<p style="font-size:0.76rem;margin-bottom:6px"><strong>COMANDO ${i + 1}</strong><br/>${highlightKeywords(cm)}</p>`).join("") : `<p style="font-size:0.76rem">${highlightKeywords(c.rule || "")}</p>`}${c.overload ? `<p style="font-size:0.74rem;color:#7a2e0e"><strong>SOBRECARGA</strong><br/>${highlightKeywords(c.overload)}</p>` : ""}${c.discardRule ? `<p style="font-size:0.72rem;margin-top:6px"><strong>DESCARTE</strong><br/>${esc(c.discardRule)}</p>` : ""}</div><div class="tarot-footer"><strong>RODAPÉ</strong><br/>${esc(c.footnote || "—")}</div></div><div class="zoom-actions"><div class="side-label">${esc(c.category.toUpperCase())} · ${esc(c.className || "")}</div><h3>${esc(c.name)}</h3><div style="background:#11131a;border:1px solid var(--border);border-radius:6px;padding:8px;font-size:0.78rem;display:flex;flex-direction:column;gap:6px"><strong>Alvo / Efeito opcional:</strong><select id="use-target" class="full-select"><option value="none">Nenhum / Efeito próprio</option>${mons.map((x) => `<option value="m:${x.seatIndex}:${x.instance.instanceId}">Monstro: ${esc(DB.cards[x.instance.code].name)} (PV ${x.instance.pv})</option>`).join("")}${pers.map((p) => `<option value="p:${p.seatIndex}">Persona: ${esc(p.name)} (PV ${p.pv}/${p.maxPv})</option>`).join("")}</select><div style="display:flex;gap:6px"><label style="flex:1">Dano: <input id="use-dmg" type="number" min="0" value="0" style="width:100%;padding:3px;background:#1a1e29;color:var(--text);border:1px solid var(--border);border-radius:4px"/></label><label style="flex:1">Cura: <input id="use-heal" type="number" min="0" value="0" style="width:100%;padding:3px;background:#1a1e29;color:var(--text);border:1px solid var(--border);border-radius:4px"/></label></div></div><button class="btn btn-gold" id="act-use" ${!isMyTurn || seat.actionsLeft < 1 ? "disabled" : ""}>Usar na Mesa (1 ação)</button><button class="btn" id="act-aft" ${!canControl ? "disabled" : ""}>Usar como AFT na Mesa</button><button class="btn" id="act-table" ${!canControl ? "disabled" : ""}>Preparar na Mesa (0 ações)</button><button class="btn" id="act-reveal" ${!canControl ? "disabled" : ""}>Revelar à mesa</button><button class="btn btn-danger" id="act-discard" ${!canControl ? "disabled" : ""}>Enviar para o Descarte</button></div></div>`);
    const applyEff = (lbl) => {
      const tv = $("#use-target").value, dmg = Number($("#use-dmg").value || 0), heal = Number($("#use-heal").value || 0); let txt = "";
      if (tv.startsWith("m:")) { const [, si, id] = tv.split(":"), ow = g.seats[Number(si)], m = ow.engaged.find((x) => x.instanceId === id); if (m) { txt = ` em ${DB.cards[m.code].name}`; if (dmg > 0) { m.pv = Math.max(0, m.pv - dmg); txt += ` (-${dmg} PV)`; if (m.pv <= 0) defeatChallenge(ow, id, seat); } } }
      else if (tv.startsWith("p:")) { const ps = g.seats[Number(tv.split(":")[1])]; txt = ` em ${ps.name}`; if (dmg > 0) ps.pv = Math.max(0, ps.pv - dmg); if (heal > 0) ps.pv = Math.min(ps.maxPv, ps.pv + heal); }
      else if (heal > 0) { seat.pv = Math.min(seat.maxPv, seat.pv + heal); txt = ` (+${heal} PV)`; }
      pushLog(g, "system", "Akuanuá", `${seat.name} ${lbl} ${c.name} (${c.code})${txt}.`);
    };
    $("#act-use").onclick = () => { seat.actionsLeft--; seat.hand.splice(handIdx, 1); seat.tableCards.push({ code, mode: "ativa" }); if (seat.className === "Feiticeiro" && c.is) { seat.overloadIS += c.is; const ls = DB.cards[seat.activePosture]?.ls ?? DB.classes.Feiticeiro.lsByLevel[seat.level]; applyEff(`usou na mesa (IS ${seat.overloadIS}/${ls}${seat.overloadIS > ls ? " SOBRECARGA" : ""})`); } else applyEff("usou na mesa"); closeModal(); saveRoom(); };
    $("#act-aft").onclick = () => { seat.hand.splice(handIdx, 1); seat.tableCards.push({ code, mode: "AFT" }); applyEff("realizou AFT na mesa com"); closeModal(); saveRoom(); };
    $("#act-table").onclick = () => { seat.hand.splice(handIdx, 1); seat.tableCards.push({ code, mode: "prep" }); addSystemLog(`${seat.name} preparou ${c.name} na mesa.`); closeModal(); };
    $("#act-reveal").onclick = () => { addSystemLog(`${seat.name} revelou ${c.name} para a mesa.`); closeModal(); };
    $("#act-discard").onclick = () => { seat.hand.splice(handIdx, 1); seat.discard.push(code); addSystemLog(`${seat.name} enviou ${c.name} ao descarte.`); closeModal(); };
  }

  function openTableCardModal(seat, tableIdx) {
    const item = seat.tableCards[tableIdx], c = getDB().cards[item.code], canControl = UI.isAdmin || seat.tabId === tabId;
    openModal(`<div class="zoom-card-wrap"><div class="zoom-tarot ${zoomCls(c.category)}" style="background-image:url('${frontBg(c.category)}')"><div><div class="tarot-top"><span>${c.code}</span><span>NA MESA</span></div><h2 style="margin:6px 0;font-size:1.05rem">${esc(c.name)}</h2>${c.commands ? c.commands.map((cm, i) => `<p style="font-size:0.76rem;margin-bottom:6px"><strong>COMANDO ${i + 1}</strong><br/>${highlightKeywords(cm)}</p>`).join("") : ""}</div><div class="tarot-footer">${esc(c.discardRule || "")}</div></div><div class="zoom-actions"><h3>Carta na Mesa</h3><button class="btn btn-danger" id="tbl-discard" ${!canControl ? "disabled" : ""}>Enviar para o Descarte</button><button class="btn" id="tbl-return" ${!canControl ? "disabled" : ""}>Retornar para a Mão</button><button class="btn" id="tbl-deck" ${!canControl ? "disabled" : ""}>Voltar ao Topo do Deck</button></div></div>`);
    $("#tbl-discard").onclick = () => { seat.tableCards.splice(tableIdx, 1); seat.discard.push(item.code); addSystemLog(`${seat.name} enviou ${c.name} da mesa para o descarte.`); closeModal(); };
    $("#tbl-return").onclick = () => { seat.tableCards.splice(tableIdx, 1); seat.hand.push(item.code); addSystemLog(`${seat.name} retornou ${c.name} para a mão.`); closeModal(); };
    $("#tbl-deck").onclick = () => { seat.tableCards.splice(tableIdx, 1); seat.deck.unshift(item.code); addSystemLog(`${seat.name} devolveu ${c.name} ao topo do deck.`); closeModal(); };
  }

  function openPostureModal(seat) {
    const DB = getDB();
    openModal(`<h3>Kit de Posturas — ${esc(seat.name)}</h3><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:8px;margin-top:12px">${seat.posturePool.map((code) => { const p = DB.cards[code]; return `<div class="panel-box" style="padding:10px;display:flex;flex-direction:column;gap:5px"><strong>${esc(p.name)} (${p.code})</strong><span style="font-size:0.74rem;color:var(--gold)">INI ${p.iniOptions.join("/")} | ATQ ${p.atq} | DEF ${p.def}${p.ls != null ? ` | LS ${p.ls}` : ""}</span><span style="font-size:0.74rem;color:var(--text-muted)">${esc(p.passive)}</span><button class="btn btn-sm btn-primary" data-pick-p="${code}" ${seat.actionsLeft < 1 ? "disabled" : ""}>Ativar (1 Ação)</button></div>`; }).join("")}</div>`);
    document.querySelectorAll("[data-pick-p]").forEach((b) => (b.onclick = () => { const n = b.dataset.pickP; seat.actionsLeft--; if (seat.activePosture) seat.postureDiscard.push(seat.activePosture); seat.posturePool = seat.posturePool.filter((c) => c !== n); seat.activePosture = n; if (!seat.posturePool.length && seat.postureDiscard.length) { seat.posturePool = shuffle(seat.postureDiscard); seat.postureDiscard = []; } addSystemLog(`${seat.name} trocou para ${DB.cards[n].name}.`); closeModal(); }));
  }

  function openScenarioZoom(coord) {
    const g = getROOM().game, DB = getDB(), tile = g.map.tiles[coord], sc = DB.cards[tile.code];
    openModal(`<div class="zoom-card-wrap"><div class="zoom-square"><div><div class="tarot-top"><span>${sc.code} · (${coord})</span><span>${sc.atemporal ? "Atemporal" : "Período Global"}</span></div><h3 style="margin:8px 0">${esc(sc.name)}</h3></div><div style="font-size:0.86rem;line-height:1.45">${highlightKeywords(sc.rule)}</div><div class="tarot-footer">Personas: ${g.seats.filter((s) => s.coord === coord).map((s) => esc(s.name)).join(", ") || "nenhuma"}</div></div>${tile.orphans.length ? `<div class="zoom-actions"><h4>Desafios no Cenário</h4>${tile.orphans.map((m, i) => `<button class="btn btn-primary" data-claim="${i}">Assumir ${esc(DB.cards[m.code].name)}</button>`).join("")}</div>` : ""}</div>`);
    document.querySelectorAll("[data-claim]").forEach((b) => (b.onclick = () => { const s = getActiveSeat(); if (!s || s.coord !== coord) return alert("É preciso estar neste cenário."); const [m] = tile.orphans.splice(Number(b.dataset.claim), 1); s.engaged.push(m); addSystemLog(`${s.name} engajou ${DB.cards[m.code].name}.`); closeModal(); }));
  }

  function openMarketModal(idx) {
    const g = getROOM().game, DB = getDB(), code = g.shared.market[idx], c = DB.cards[code]; if (!c) return;
    const active = getActiveSeat();
    openModal(`<h3>${esc(c.name)} (${c.code})</h3><p style="margin:8px 0"><strong>Condição:</strong> ${highlightKeywords(c.condition || "Rascunho")}</p><p style="margin:8px 0"><strong>Recompensa:</strong> ${esc(c.rewardType || "-")} — ${esc(c.rewardDesc || "-")}</p><p style="margin:8px 0"><strong>Progressão:</strong> ${highlightKeywords(c.progression || "-")}</p><div style="display:flex;gap:8px;margin-top:14px"><button class="btn btn-gold" id="btn-claim-obj" ${!active ? "disabled" : ""}>Conquistar por ${esc(active?.name || "-")}</button><button class="btn" id="btn-agree-discard">Descartar por acordo</button></div>`);
    $("#btn-claim-obj").onclick = () => { g.shared.market[idx] = null; g.shared.objectiveDiscard.push(code); addSystemLog(`${active.name} conquistou ${c.name} (${c.code}).`); closeModal(); };
    $("#btn-agree-discard").onclick = () => { g.shared.market[idx] = null; g.shared.objectiveDiscard.push(code); addSystemLog(`Objetivo ${c.name} descartado por acordo.`); closeModal(); };
  }

  function openDiscardHandModal(seat, excess) {
    openModal(`<h3>Ajuste de Mão (${seat.hand.length} — descarte ${excess})</h3><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">${seat.hand.map((code, i) => `<button class="btn" data-dh="${i}">${esc(getDB().cards[code]?.name)} (${code})</button>`).join("")}</div>`);
    document.querySelectorAll("[data-dh]").forEach((b) => (b.onclick = () => { const [r] = seat.hand.splice(Number(b.dataset.dh), 1); seat.discard.push(r); pushLog(getROOM().game, "system", "Akuanuá", `${seat.name} descartou ${getDB().cards[r]?.name}.`); if (seat.hand.length > getHandLimit(seat)) openDiscardHandModal(seat, seat.hand.length - getHandLimit(seat)); else { closeModal(); advanceAfterPersonaTurn(); } }));
  }

  function openPileModal(title, codes) {
    const DB = getDB();
    openModal(`<h3>${esc(title)} (${codes.length})</h3><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">${codes.length ? codes.map((c) => renderTarotCardHTML(DB.cards[c])).join("") : '<p class="side-hint">Pilha vazia.</p>'}</div>`);
    bindZoomTriggers($("#modal-content"));
  }

  $("#btn-rules").onclick = () => {
    const manual = window.AKUANUA_MANUAL; if (!manual) return openModal(`<h3>Manual</h3><p class="side-hint">Adicione <code>js/manual.js</code>.</p>`);
    openModal(`<h3>Regras — Manual de Jogo AKUANUÁ</h3><div class="manual-layout"><div class="manual-nav" id="manual-nav">${manual.toc.map((it, i) => `<button class="${i === 0 ? "active" : ""}" data-target="${esc(it.id)}">${esc(it.label)}</button>`).join("")}</div><div class="manual-body" id="manual-body">${manual.html}</div></div>`);
    document.querySelectorAll("#manual-nav button").forEach((btn) => (btn.onclick = () => { document.querySelectorAll("#manual-nav button").forEach((b) => b.classList.remove("active")); btn.classList.add("active"); document.getElementById(btn.dataset.target)?.scrollIntoView({ behavior: "smooth", block: "start" }); }));
  };

  document.querySelectorAll("[data-comms-tab]").forEach((b) => (b.onclick = () => { document.querySelectorAll("[data-comms-tab]").forEach((x) => x.classList.remove("active")); b.classList.add("active"); UI.commsTab = b.dataset.commsTab; renderComms(); }));
  $("#chat-form").onsubmit = (e) => {
    e.preventDefault(); const inp = $("#chat-input"), msg = inp.value.trim(); if (!msg) return; inp.value = "";
    const me = getMyGameSeat() || getROOM().game.seats[UI.viewerSeat];
    if (msg.toLowerCase().startsWith("!chave ") || msg.startsWith("!")) {
      const term = msg.replace(/^!chave\s+/i, "").replace(/^!/, "").trim(), found = getDB().keywords.find((k) => normText(k.name).includes(normText(term)) || normText(k.command) === normText("!" + term));
      addSystemLog(found ? `!chave [${found.name}]: ${found.definition} (${found.rules})` : `Chave "${term}" não encontrada.`); return;
    }
    addChatMsg(`${me.name} (${me.className})`, msg);
  };

  function applyLayoutModes() {
    const grid = $("#table-grid"); grid.classList.toggle("bottom-swapped", UI.bottomSwapped); grid.classList.toggle("floating-mode", UI.floatingMode);
    $("#btn-reset-floating").classList.toggle("hidden", !UI.floatingMode); $("#btn-toggle-floating").classList.toggle("btn-gold", UI.floatingMode);
    let saved = {}; try { saved = JSON.parse(localStorage.getItem("akuanua_panel_layout") || "{}"); } catch (_) {}
    document.querySelectorAll(".floatable-panel").forEach((p) => { const id = p.dataset.panelId; if (!UI.floatingMode) p.style.left = p.style.top = p.style.width = p.style.height = p.style.zIndex = ""; else if (saved[id]) Object.assign(p.style, saved[id]); });
  }
  $("#btn-swap-bottom").onclick = () => { UI.bottomSwapped = !UI.bottomSwapped; try { localStorage.setItem("akuanua_swapped", UI.bottomSwapped ? "1" : "0"); } catch (_) {} applyLayoutModes(); };
  $("#btn-toggle-floating").onclick = () => {
    if (!UI.floatingMode) { let sv = {}; try { sv = JSON.parse(localStorage.getItem("akuanua_panel_layout") || "{}"); } catch (_) {} document.querySelectorAll(".floatable-panel").forEach((p) => { const id = p.dataset.panelId; if (!sv[id]) { const r = p.getBoundingClientRect(); sv[id] = { left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px` }; } }); try { localStorage.setItem("akuanua_panel_layout", JSON.stringify(sv)); } catch (_) {} }
    UI.floatingMode = !UI.floatingMode; try { localStorage.setItem("akuanua_floating", UI.floatingMode ? "1" : "0"); } catch (_) {} applyLayoutModes();
  };
  $("#btn-reset-floating").onclick = () => { try { localStorage.removeItem("akuanua_panel_layout"); localStorage.setItem("akuanua_floating", "0"); } catch (_) {} UI.floatingMode = false; applyLayoutModes(); };
  document.addEventListener("mousedown", (e) => {
    if (!UI.floatingMode) return; const p = e.target.closest(".floatable-panel"); if (p) { UI.topZ++; p.style.zIndex = UI.topZ; }
    const bar = e.target.closest(".panel-drag-bar"); if (!bar || !p) return;
    const sx = e.clientX, sy = e.clientY, r = p.getBoundingClientRect();
    const mv = (ev) => { p.style.left = `${Math.max(0, r.left + (ev.clientX - sx))}px`; p.style.top = `${Math.max(46, r.top + (ev.clientY - sy))}px`; };
    const up = () => { document.removeEventListener("mousemove", mv); document.removeEventListener("mouseup", up); try { const sv = JSON.parse(localStorage.getItem("akuanua_panel_layout") || "{}"); sv[p.dataset.panelId] = { left: p.style.left, top: p.style.top, width: `${p.offsetWidth}px`, height: `${p.offsetHeight}px` }; localStorage.setItem("akuanua_panel_layout", JSON.stringify(sv)); } catch (_) {} };
    document.addEventListener("mousemove", mv); document.addEventListener("mouseup", up);
  });

  $("#btn-toggle-admin").onclick = () => { if (!UI.isAdmin) return; UI.adminOpen = !UI.adminOpen; $("#admin-drawer").classList.toggle("hidden", !UI.adminOpen); if (UI.adminOpen) renderAdminBody(); };
  $("#btn-close-admin").onclick = () => { UI.adminOpen = false; $("#admin-drawer").classList.add("hidden"); };
  function renderAdminBody() {
    const ROOM = getROOM(), g = ROOM?.game, DB = getDB(); if (!g || !UI.isAdmin) return;
    const body = $("#admin-body");
    body.innerHTML = `<div class="admin-block"><h4>Persona em foco</h4><div style="display:flex;gap:4px;flex-wrap:wrap">${g.seats.map((s) => `<button class="btn btn-sm ${UI.viewerSeat === s.seatIndex ? "btn-gold" : ""}" data-focus="${s.seatIndex}">${esc(s.name)} (${s.className})</button>`).join("")}</div></div><div class="admin-block"><h4>Rodada e Turno</h4><div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap"><span>Rodada ${g.round}</span><button class="btn btn-sm" id="adm-p-next">Período: ${PERIODS[g.periodIndex]} ↻</button><button class="btn btn-sm" id="adm-recalc-ini">Recalcular INI</button></div>${g.turnOrder.map((si, pos) => `<div style="display:flex;justify-content:space-between;align-items:center;border:1px solid var(--border);padding:3px 6px"><span>${pos + 1}. ${esc(g.seats[si].name)} (INI ${getSeatIni(g.seats[si])})</span><div><button class="btn btn-sm" data-ord-up="${pos}" ${pos === 0 ? "disabled" : ""}>↑</button><button class="btn btn-sm" data-ord-dn="${pos}" ${pos === g.turnOrder.length - 1 ? "disabled" : ""}>↓</button></div></div>`).join("")}</div><div class="admin-block"><h4>Decks Compartilhados</h4><div style="display:flex;gap:5px;flex-wrap:wrap"><button class="btn btn-sm" id="adm-shuf-cen">Embaralhar Cenários</button><button class="btn btn-sm" id="adm-shuf-obj">Embaralhar Objetivos</button><button class="btn btn-sm" id="adm-shuf-des">Embaralhar Desafios</button>${[3, 4, 5].map((lv) => `<button class="btn btn-sm" data-add-chal-lv="${lv}" ${g.includedChallengeLevels.includes(lv) ? "disabled" : ""}>+ Desafios Nív.${lv}</button>`).join("")}</div></div><div class="admin-block"><h4>Ajustes (incl. BdA/BdD negativos) &amp; Mãos</h4>${g.seats.map((s) => `<div style="border-top:1px solid var(--border);padding-top:5px"><strong>${esc(s.name)}</strong> (Nv.${s.level} · PV ${s.pv}/${s.maxPv} · BdA ${s.bda} · BdD ${s.bdd})<div style="display:flex;gap:4px;margin-top:3px;flex-wrap:wrap"><button class="btn btn-sm" data-adm-lv="${s.seatIndex}">+1 Nv</button><button class="btn btn-sm" data-adm-bda="${s.seatIndex}:-1">BdA -1</button><button class="btn btn-sm" data-adm-bda="${s.seatIndex}:1">BdA +1</button><button class="btn btn-sm" data-adm-bdd="${s.seatIndex}:-1">BdD -1</button><button class="btn btn-sm" data-adm-bdd="${s.seatIndex}:1">BdD +1</button><button class="btn btn-sm" data-adm-hand="${s.seatIndex}">Mão (${s.hand.length})</button></div></div>`).join("")}</div><div class="admin-block"><button class="btn btn-danger btn-sm" id="adm-end-match">Voltar Sala ao Lobby</button></div>`;
    body.querySelectorAll("[data-focus]").forEach((b) => (b.onclick = () => { UI.viewerSeat = Number(b.dataset.focus); renderAll(); }));
    $("#adm-p-next").onclick = () => { g.periodIndex = (g.periodIndex + 1) % PERIODS.length; addAdminLog(`Período ajustado para ${PERIODS[g.periodIndex]}.`); };
    $("#adm-recalc-ini").onclick = () => { computeRoundTurnOrder(g); addAdminLog("Ordem recalculada pela INI."); };
    body.querySelectorAll("[data-ord-up]").forEach((b) => (b.onclick = () => { const i = Number(b.dataset.ordUp); [g.turnOrder[i - 1], g.turnOrder[i]] = [g.turnOrder[i], g.turnOrder[i - 1]]; saveRoom(); }));
    body.querySelectorAll("[data-ord-dn]").forEach((b) => (b.onclick = () => { const i = Number(b.dataset.ordDn); [g.turnOrder[i + 1], g.turnOrder[i]] = [g.turnOrder[i], g.turnOrder[i + 1]]; saveRoom(); }));
    $("#adm-shuf-cen").onclick = () => { g.shared.scenarioDeck = shuffle(g.shared.scenarioDeck); addAdminLog("Cenários embaralhados."); };
    $("#adm-shuf-obj").onclick = () => { g.shared.objectiveDeck = shuffle(g.shared.objectiveDeck); addAdminLog("Objetivos embaralhados."); };
    $("#adm-shuf-des").onclick = () => { g.shared.challengeDeck = shuffle(g.shared.challengeDeck); addAdminLog("Desafios embaralhados."); };
    body.querySelectorAll("[data-add-chal-lv]").forEach((b) => (b.onclick = () => { const lv = Number(b.dataset.addChalLv), ex = Object.values(DB.cards).filter((c) => c.category === "desafio" && c.level === lv).map((c) => c.code); g.shared.challengeDeck = shuffle([...g.shared.challengeDeck, ...ex]); g.includedChallengeLevels.push(lv); g.includedChallengeLevels.sort((a, b) => a - b); addAdminLog(`Desafios Nível ${lv} adicionados.`); }));
    body.querySelectorAll("[data-adm-lv]").forEach((b) => (b.onclick = () => { const s = g.seats[Number(b.dataset.admLv)]; if (s.level < 6) { s.level++; s.maxPv = DB.classes[s.className].pvByLevel[s.level]; s.pv = s.maxPv; addAdminLog(`${s.name} subiu para Nível ${s.level}.`); } }));
    body.querySelectorAll("[data-adm-bda]").forEach((b) => (b.onclick = () => { const [i, d] = b.dataset.admBda.split(":").map(Number); g.seats[i].bda += d; saveRoom(); }));
    body.querySelectorAll("[data-adm-bdd]").forEach((b) => (b.onclick = () => { const [i, d] = b.dataset.admBdd.split(":").map(Number); g.seats[i].bdd += d; saveRoom(); }));
    body.querySelectorAll("[data-adm-hand]").forEach((b) => (b.onclick = () => openPileModal(`[Admin] Mão de ${g.seats[Number(b.dataset.admHand)].name}`, g.seats[Number(b.dataset.admHand)].hand)));
    $("#adm-end-match").onclick = () => { if (confirm("Encerrar e voltar ao Lobby?")) { const rm = getROOM(); rm.status = "lobby"; rm.game = null; UI.adminOpen = false; $("#admin-drawer").classList.add("hidden"); saveRoom(); } };
  }

  $("#perspective-select").onchange = (e) => { if (UI.isAdmin) { UI.viewerSeat = Number(e.target.value); renderAll(); } };
  $("#btn-copy-link").onclick = () => { const u = `${location.href.split("?")[0]}?sala=${getROOM().roomCode}`; navigator.clipboard?.writeText(u); alert(`Link copiado:\n${u}`); };
  $("#btn-feedback").onclick = () => { const txt = prompt("Descreva um bug ou sugestão:"); if (txt?.trim() && getROOM()?.game) { const me = getMyGameSeat() || getROOM().game.seats[UI.viewerSeat]; getROOM().game.feedbacks.push({ time: nowTime(), author: me.name, text: txt.trim() }); saveRoom(); } };
  $("#btn-exit-match").onclick = () => { if (confirm("Voltar ao Lobby?")) { $("#table-screen").classList.add("hidden"); $("#lobby-screen").classList.remove("hidden"); } };

  window._AK_UI = { renderLobbyRoom, applyLayoutModes, renderAll };
  initFirebaseIfConfigured();
  updateDataStatus();
  connectToRoom(UI.roomCode);
})();