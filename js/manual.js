/* ==========================================================================
   AKUANUÁ — MANUAL DE JOGO COMPLETO (js/manual.js)
   Baseado integralmente no Manual.docx (Akuanuá, 17 capítulos + Apêndice 1)
   ========================================================================== */

window.AKUANUA_MANUAL = {
  toc: [
    { id: "sec-1", label: "1. Introdução" },
    { id: "sec-2", label: "2. A Regra de Ouro" },
    { id: "sec-3", label: "3. Diretrizes de Interpretação" },
    { id: "sec-4", label: "4. O Mundo de Akuanuá" },
    { id: "sec-4-1", label: "  4.1 O Eu Mágico" },
    { id: "sec-4-2", label: "  4.2 Facções, Lugares e Termos" },
    { id: "sec-5", label: "5. Componentes do Jogo" },
    { id: "sec-6", label: "6. Preparação do Jogo" },
    { id: "sec-6-1", label: "  6.1 Escolhendo sua Persona" },
    { id: "sec-6-2", label: "  6.2 Marcadores" },
    { id: "sec-6-3", label: "  6.3 Montando os Decks" },
    { id: "sec-7", label: "7. Anatomia das Cartas" },
    { id: "sec-7-1", label: "  7.1 Cartas de Habilidade" },
    { id: "sec-7-2", label: "  7.2 Cartas de Postura" },
    { id: "sec-7-3", label: "  7.3 Cartas de Objetivo" },
    { id: "sec-7-4", label: "  7.4 Cartas de Cenário" },
    { id: "sec-7-5", label: "  7.5 Cartas de Desafio" },
    { id: "sec-7-6", label: "  7.6 Fluxo das Cartas" },
    { id: "sec-8", label: "8. Chaves (Palavras-Chave)" },
    { id: "sec-8-1", label: "  8.1 Não Acúmulo" },
    { id: "sec-8-2", label: "  8.2 Atributos Essenciais" },
    { id: "sec-8-3", label: "  8.3 Atributos Básicos" },
    { id: "sec-8-4", label: "  8.4 Bônus de Combate" },
    { id: "sec-8-5", label: "  8.5 Efeitos de Combate" },
    { id: "sec-8-6", label: "  8.6 Males" },
    { id: "sec-8-7", label: "  8.7 Funções" },
    { id: "sec-8-8", label: "  8.8 Ações como Chaves" },
    { id: "sec-8-9", label: "  8.9 Ações Dinâmicas" },
    { id: "sec-9", label: "9. Dinâmica de Jogo" },
    { id: "sec-9-1", label: "  9.1 Rodadas" },
    { id: "sec-9-2", label: "  9.2 Turnos" },
    { id: "sec-9-3", label: "  9.3 Ações Padrão" },
    { id: "sec-9-4", label: "  9.4 Atacar" },
    { id: "sec-9-5", label: "  9.5 Trocar de Postura" },
    { id: "sec-9-6", label: "  9.6 Explorar" },
    { id: "sec-9-7", label: "  9.7 Engajamento e Monstros" },
    { id: "sec-9-8", label: "  9.8 Personas em Fuga" },
    { id: "sec-9-9", label: "  9.9 O Ciclo dos Períodos" },
    { id: "sec-9-10", label: "  9.10 Ações Fora do Turno (AFT)" },
    { id: "sec-10", label: "10. Conquistas e Progressão" },
    { id: "sec-10-1", label: "  10.1 O Mercado" },
    { id: "sec-10-2", label: "  10.2 Conquistando Objetivos" },
    { id: "sec-10-3", label: "  10.3 Recompensas" },
    { id: "sec-10-4", label: "  10.4 Negociação" },
    { id: "sec-10-5", label: "  10.5 Conquistando Desafios" },
    { id: "sec-10-6", label: "  10.6 Subindo de Nível" },
    { id: "sec-10-7", label: "  10.7 Condição de Vitória" },
    { id: "sec-11", label: "11. Morte" },
    { id: "sec-11-1", label: "  11.1 Modo Narrativo Extremo" },
    { id: "sec-11-2", label: "  11.2 Modo Menos Extremo" },
    { id: "sec-12", label: "12. Classes" },
    { id: "sec-12-1", label: "  12.1 Alquimista" },
    { id: "sec-12-2", label: "  12.2 Bruxo (ou Bruxa)" },
    { id: "sec-12-3", label: "  12.3 Corruptor (ou Corruptora)" },
    { id: "sec-12-4", label: "  12.4 Feiticeiro (ou Feiticeira)" },
    { id: "sec-12-5", label: "  12.5 Mago (ou Maga)" },
    { id: "sec-13", label: "13. Posturas: Construção e Uso" },
    { id: "sec-14", label: "14. Monstros e Desafios" },
    { id: "sec-15", label: "15. Meta-jogo e Acaso" },
    { id: "sec-16", label: "16. Modos Alternativos" },
    { id: "sec-17", label: "17. Glossário Geral" },
    { id: "sec-ap1", label: "Apêndice 1: A Mesa Virtual" }
  ],
  html: `
  <style>
    .m-doc h3 { color: var(--gold); border-bottom: 1px solid var(--border); padding-bottom: 4px; margin: 18px 0 8px; font-size: 1.08rem; }
    .m-doc h3:first-child { margin-top: 0; }
    .m-doc h4 { color: #e2c58e; margin: 13px 0 5px; font-size: 0.94rem; }
    .m-doc p { margin-bottom: 8px; color: var(--text); }
    .m-doc ul { padding-left: 18px; margin-bottom: 9px; }
    .m-doc li { margin-bottom: 4px; }
    .m-doc blockquote { border-left: 3px solid var(--gold); padding: 6px 12px; margin: 8px 0; background: rgba(200,164,100,0.08); font-style: italic; color: #dcd5c6; }
    .m-doc table { width: 100%; border-collapse: collapse; margin: 8px 0 12px; font-size: 0.78rem; }
    .m-doc th, .m-doc td { border: 1px solid var(--border); padding: 6px 8px; text-align: left; vertical-align: top; }
    .m-doc th { background: rgba(200,164,100,0.14); color: var(--gold); }
    .m-doc code { background: #101218; padding: 1px 5px; border-radius: 4px; border: 1px solid var(--border); color: var(--gold); }
  </style>
  <div class="m-doc">
    <h3 id="sec-1">1. Introdução</h3>
    <p><strong>Akuanuá</strong> é um RPG de cartas simultaneamente colaborativo e competitivo. Cada jogador(a) assume o papel de uma Persona e participa da construção da partida por meio das próprias escolhas: enfrentar desafios, pedir auxílio, formar alianças, negociar, competir e, se desejar, planejar vinganças, conforme o mapa e as situações do jogo se desenvolvem.</p>
    <p>As cartas apresentam situações, recursos, riscos e oportunidades. Elas dão forma ao que está disponível em cada momento, mas são os(as) jogadores(as) que escolhem como responder, quais acordos propor, que riscos aceitar e que relações construir.</p>
    <p><strong>Não há pontos de experiência.</strong> A progressão acontece quando uma carta determina que a Persona sobe de nível, o que ocorre, em regra, ao conquistar um objetivo.</p>
    <p>O jogo foi planejado para <strong>2 a 5 jogadores(as)</strong>, cada um(a) controlando uma Persona de uma classe diferente entre as 5 disponíveis. Você encontrará 5 tipos diferentes de cartas no jogo: <strong>Habilidade</strong> e <strong>Postura</strong> (kit da Persona); <strong>Objetivo</strong>, <strong>Cenário</strong> e <strong>Desafio</strong> (dinâmica narrativa), além da Ficha de Classe e Ficha de Acesso Rápido.</p>
    <p><em>Capítulos Essenciais:</em> se você é iniciante, leia essencialmente os capítulos 2 e 3, seguindo direto para 6, 7 e 9. Para aprender de forma rápida, experimente o Modo Contenda (seção 16.4).</p>

    <h3 id="sec-2">2. A Regra de Ouro</h3>
    <p>Em Akuanuá, toda <strong>Ação Padrão</strong> deve ser declarada antes de ser resolvida (ver seção 9.3). Declarar uma ação significa informar:</p>
    <ul>
      <li>qual ação será realizada;</li>
      <li>qual carta ou efeito será usado;</li>
      <li>quais alvos serão afetados; e</li>
      <li>quando aplicável, qual custo será pago.</li>
    </ul>
    <p>No jogo impresso, a mesa depende da fala dos(as) jogadores(as). <strong>No jogo online, a interface cumpre esse papel e a declaração é feita pelos comandos do jogo.</strong> Em qualquer caso, se uma carta indicar um fluxo diferente, vale o que a carta disser.</p>

    <h3 id="sec-3">3. Diretrizes de Interpretação</h3>
    <ul>
      <li><strong>1.</strong> Regras específicas de cartas prevalecem sobre regras gerais, inclusive sobre a Regra de Ouro.</li>
      <li><strong>2.</strong> Qualquer interação fora do convencional deve estar expressamente indicada em alguma carta, tornando-se válida e visível quando entra em jogo ou tem seu efeito ativado.</li>
      <li><strong>3.</strong> Quando as regras não parecerem claras, a mesa deve estabelecer uma interpretação coerente para aquela partida (talvez por sorteio), preservando a continuidade, a clareza e o sentido do texto.</li>
      <li><strong>4.</strong> Estas diretrizes valem também para o jogo online. <strong>Se a interface e o texto de uma carta divergirem, vale o texto da carta.</strong></li>
    </ul>

    <h3 id="sec-4">4. O Mundo de Akuanuá</h3>
    <p>Em Akuanuá, a magia é inevitável. Nas grandes cidades, ela percorre os fios de cobre, ilumina as ruas e move engrenagens ancestrais; nas aldeias esquecidas, repousa nas pedras úmidas e sussurra entre as árvores antigas. Em Ictínea, erguida entre dois vulcões, ela é proibida, não extinta, apenas empurrada para as sombras.</p>

    <h4 id="sec-4-1">4.1 O Eu Mágico</h4>
    <p>Chama-se <strong>Eu Mágico</strong> a centelha que habita certos seres. No <strong>Feiticeiro</strong>, o Eu Mágico nasce junto ao corpo — não precisa ser despertado, apenas contido. No <strong>Mago</strong>, o Eu Mágico não existe até ser conquistado por estudo, disciplina, renúncia e sacrifício.</p>
    <blockquote>"Temidos e admirados, quando veem os primeiros raios de sol, eles imediatamente despertam para o seu Eu Mágico. Isso os tornou vulneráveis por séculos." – Isidoro Magora</blockquote>

    <h4 id="sec-4-2">4.2 Facções, Lugares e Termos do Mundo</h4>
    <table>
      <thead><tr><th>Termo</th><th>O que é</th></tr></thead>
      <tbody>
        <tr><td><strong>Sociedade Tecnocrata</strong></td><td>Ordem que rege as grandes cidades mágicas do continente (Alcor, Melfelatos, Manaturim). Vê a magia como ciência aplicada e tolera o que pode regular.</td></tr>
        <tr><td><strong>Ictínea</strong></td><td>Cidade-estado erguida entre dois vulcões, onde a magia é oficialmente proibida e reprimida por um exército próprio.</td></tr>
        <tr><td><strong>Arcanistas</strong></td><td>Praticantes de magia reconhecidos e regulados pela Sociedade Tecnocrata.</td></tr>
        <tr><td><strong>Antimagos</strong></td><td>Aqueles que recusam qualquer vínculo com a magia, por convicção ou desconfiança.</td></tr>
        <tr><td><strong>Hereges</strong></td><td>Praticantes de magia que vivem à margem da ordem tecnocrata, sem reconhecimento nem proteção formal.</td></tr>
        <tr><td><strong>A Grande Mãe</strong></td><td>Entidade ancestral venerada pelos Bruxos; origem mítica das Patronesses.</td></tr>
        <tr><td><strong>Patronesses</strong></td><td>Figuras femininas, meio bruxas e meio feiticeiras, que guiam os Bruxos por presságios, sonhos e visões.</td></tr>
      </tbody>
    </table>

    <h3 id="sec-5">5. Componentes do Jogo</h3>
    <p>Todos os cinco tipos de cartas são identificados pelo verso único e universal. A maior parte delas terá uma entre três funções básicas (Ofensiva, Defensiva ou Utilitária).</p>
    <table>
      <thead><tr><th>Tipo de Carta</th><th>Característica</th><th>Fluxo de Uso</th></tr></thead>
      <tbody>
        <tr><td><strong>Habilidade</strong></td><td>Ações únicas por classe (o que eu faço)</td><td>Constante</td></tr>
        <tr><td><strong>Postura</strong></td><td>Define atributos básicos temporários (como eu faço)</td><td>Eventual</td></tr>
        <tr><td><strong>Objetivo</strong></td><td>Define condições de conquista e recompensas</td><td>Constante</td></tr>
        <tr><td><strong>Cenário</strong></td><td>Ambienta as ações e forma o mapa</td><td>Eventual</td></tr>
        <tr><td><strong>Desafio</strong></td><td>Contém monstros e surpresas benéficas</td><td>Constante</td></tr>
      </tbody>
    </table>

    <h3 id="sec-6">6. Preparação do Jogo</h3>
    <h4 id="sec-6-1">6.1 Escolhendo sua Persona</h4>
    <p>Há 5 classes disponíveis (Capítulo 12). Normalmente não pode haver 2 jogadores(as) com a mesma classe na mesma partida. Consulte a Ficha de Classe para PV por nível e limite de Posturas.</p>
    <h4 id="sec-6-2">6.2 Marcadores</h4>
    <p>Ao explorar novos cenários, indique em qual cenário sua Persona está usando a pedra indicada na sua Ficha de Classe.</p>
    <h4 id="sec-6-3">6.3 Montando os Decks</h4>
    <ul>
      <li><strong>Habilidades:</strong> todas começam no nível 0 e só usam habilidades de nível igual ou inferior ao atual. Você deve manter sempre <strong>15 cartas no total</strong> (10 distribuídas entre compra, descarte e mesa; 5 na mão no começo e no fim de cada turno). Ao subir de nível, substitui até 3 cartas.</li>
      <li><strong>Posturas:</strong> banco universal (4 cópias) acessível a todas, exceto o Feiticeiro. Alquimista conquista posturas de classe em objetivos; Corruptor e Feiticeiro têm posturas inatas (1 por nível e 3 no nível 6). <strong>Não são embaralhadas</strong> — o jogador escolhe qual fica ativa.</li>
      <li><strong>Objetivo:</strong> embaralhar e revelar 3 cartas formando o <strong>Mercado</strong>.</li>
      <li><strong>Cenário:</strong> revelar a carta do topo no centro para iniciar o mapa. Todos posicionam seus marcadores nela. Cenários nunca saem da mesa.</li>
      <li><strong>Desafio:</strong> separar por nível; recomenda-se usar apenas os níveis básicos no início, adicionando níveis mais altos conforme o grupo achar necessário.</li>
    </ul>

    <h3 id="sec-7">7. Anatomia das Cartas</h3>
    <p>Todas as cartas trazem um <strong>Código</strong> (ex.: C016) para referência de design e relato de dúvidas.</p>
    <h4 id="sec-7-1">7.1 Cartas de Habilidade</h4>
    <p>Compostas por Identificação (topo), Nível (ou Nível Especial <strong>"E"</strong> — ficam na reserva até convocadas por outra carta), Comandos (efeitos em sequência ou condicionais), Regra de descarte e Glossário de rodapé.</p>
    <table>
      <thead><tr><th>Posição</th><th>Descrição</th></tr></thead>
      <tbody>
        <tr><td><strong>No deck</strong></td><td>Viradas para baixo na pilha de compra da Persona</td></tr>
        <tr><td><strong>No descarte</strong></td><td>Viradas para cima na pilha de descarte da Persona</td></tr>
        <tr><td><strong>Na mão</strong></td><td>Cartas que o(a) jogador(a) está segurando</td></tr>
        <tr><td><strong>Na mesa</strong></td><td>Ativas, com efeito em andamento</td></tr>
        <tr><td><strong>Na reserva</strong></td><td>Cartas de classe disponíveis para substituição ao subir de nível</td></tr>
      </tbody>
    </table>
    <h4 id="sec-7-2">7.2 Cartas de Postura</h4>
    <p>Trazem Iniciativa, Nível, Ataque, Defesa (e LS no Feiticeiro), Função, Habilidade passiva (opera em segundo plano), Glossário e Citação. Não têm regra de descarte pois permanecem até serem substituídas.</p>
    <h4 id="sec-7-3">7.3 Cartas de Objetivo</h4>
    <p>Ficam no Mercado e trazem Condição de Conquista e Recompensa (Cenário, Título de Prestígio, Aprimoramento e/ou Nível).</p>
    <h4 id="sec-7-4">7.4 Cartas de Cenário</h4>
    <p>Formam o mapa por adjacência sem sobreposição e nunca são conquistadas nem descartadas. Cenários <strong>Atemporais</strong> ignoram efeitos de Período. Suas regras prevalecem sobre as regras gerais enquanto as Personas estiverem neles.</p>
    <h4 id="sec-7-5">7.5 Cartas de Desafio</h4>
    <p>Contêm monstros (<strong>Kérata</strong>, <strong>Forjassombra</strong> ou <strong>Erratum</strong>) com Nível (1 a 5), PV invariável, ATQ, DEF e Efeitos especiais, além de <strong>Desafios Incomuns</strong> (cartas benéficas).</p>
    <h4 id="sec-7-6">7.6 Fluxo das Cartas</h4>
    <p>Deck → Mão → Mesa → Descarte → Deck (reembaralhando quando esgotar, exceto Cenário). A mão deve sempre iniciar e terminar o turno com <strong>exatamente 5 cartas</strong> (Objetivos com recompensa Cenário na mão entram nessa contagem).</p>

    <h3 id="sec-8">8. Chaves (Palavras-Chave)</h3>
    <h4 id="sec-8-1">8.1 Efeitos de chaves não se acumulam</h4>
    <p>Se um alvo já estiver sob uma Chave e receber outra idêntica, vale apenas a aplicada por último (mesmo vindo de fontes diferentes, como dois Títulos). Exceção: <strong>Corrupções</strong> do Corruptor se acumulam com Males padrão de efeito semelhante.</p>
    <h4 id="sec-8-2">8.2 Atributos Essenciais</h4>
    <p>Níveis de Persona (0 a 6), Habilidade (Iniciais 0 / Avançadas 1+), Postura (0 a 6), Desafio (1 a 5), Pontos de Vida (PV) e Períodos (Alvorada, Dia, Crepúsculo, Noite).</p>
    <h4 id="sec-8-3">8.3 Atributos Básicos (Cartas de Postura)</h4>
    <p><strong>Iniciativa:</strong> define a ordem de jogada (menor para maior), declarada no início da rodada e mantida até o fim mesmo se trocar de postura (empates decididos por negociação). <strong>Ataque</strong> e <strong>Defesa</strong> regem o combate.</p>
    <h4 id="sec-8-4">8.4 Bônus de Combate</h4>
    <p>Temporários e não cumulativos (a Persona escolhe o maior/melhor). Representados por (+). Não existem bônus de combate negativos.</p>
    <h4 id="sec-8-5">8.5 Efeitos de Combate</h4>
    <p><strong>Estes efeitos acumulam:</strong> <strong>Dano</strong> (perda direta de PV, ignorando Defesa e BdD quando vindo de habilidade) e <strong>Cura</strong> (restaura PV ou remove um Mal — nesse caso não aplica a cura em PV).</p>
    <h4 id="sec-8-6">8.6 Males</h4>
    <p>Efeitos eventuais prejudiciais: <strong>Fadiga, Ferimento, Medo, Silêncio, Veneno e Atordoamento</strong>. Duração e efeito vêm descritos na própria carta.</p>
    <h4 id="sec-8-7">8.7 Funções</h4>
    <p><strong>Ofensiva</strong>, <strong>Defensiva</strong> e <strong>Utilitária</strong> — orientam o propósito e servem de gatilho de sinergia.</p>
    <h4 id="sec-8-8">8.8 Ações como Chaves</h4>
    <p>Ações como atacar, causar dano, usar habilidade, curar e fugir também funcionam como chaves implícitas de sinergia.</p>
    <h4 id="sec-8-9">8.9 Ações Dinâmicas com as Cartas</h4>
    <ul>
      <li><strong>Emprestar:</strong> passar a outro jogador (na mesa) até que seja usada e volte ao descarte do seu deck.</li>
      <li><strong>Espreitar:</strong> olhar cartas da mão de outro jogador mantendo segredo.</li>
      <li><strong>Revelar:</strong> mostrar uma carta a todos temporariamente (ou permanente se a carta disser).</li>
      <li><strong>Prever:</strong> olhar o topo de um deck específico mantendo segredo.</li>
      <li><strong>Retornar:</strong> retornar uma carta da mesa ou do descarte para a mão.</li>
      <li><strong>Preparar:</strong> colocar a carta na mesa, virada para cima e sem efeito imediato, para jogada futura.</li>
    </ul>

    <h3 id="sec-9">9. Dinâmica de Jogo</h3>
    <h4 id="sec-9-1">9.1 Rodadas</h4>
    <p>Personas jogam primeiro (ordem de Iniciativa, menor → maior). Monstros jogam depois (ordem de aparição).</p>
    <ul>
      <li><strong>1.</strong> No começo da rodada, o Período avança e espaços vazios do Mercado são preenchidos. Na 1ª rodada, revela-se o 1º Cenário e começa na <strong>Alvorada</strong>.</li>
      <li><strong>2.</strong> No seu turno, pode comprar <strong>1 carta de Desafio gratuitamente</strong> se não tiver nenhum desafio engajado (1x por turno: no começo do turno ou assim que ficar sem desafio).</li>
      <li><strong>3.</strong> Se já tiver desafio engajado de nível menor que o seu, pode comprar outro pagando <strong>1 ação padrão</strong>; se a soma dos níveis ultrapassar o nível da Persona, a ação é perdida, a carta é descartada e não pode ser desfeito. Se já tiver desafio de nível igual ou superior, não pode comprar outro.</li>
      <li><strong>4.</strong> Realiza suas <strong>2 ações padrão</strong>.</li>
      <li><strong>5.</strong> Ao final do turno, ajusta a mão para <strong>exatamente 5 cartas</strong>.</li>
      <li><strong>6.</strong> Monstros agem (1 ação cada, salvo exceções).</li>
    </ul>
    <h4 id="sec-9-2">9.2 Turnos</h4>
    <p>Cada Persona tem <strong>2 ações padrão</strong>. Deve iniciar e terminar o turno com exatamente 5 cartas na mão.</p>
    <h4 id="sec-9-3">9.3 Ações Padrão</h4>
    <p>Atacar, Usar uma Habilidade, Trocar de Postura, Explorar, Comprar um Desafio (pago), Negociar Título ou outras ações descritas em cartas.</p>
    <h4 id="sec-9-4">9.4 Atacar</h4>
    <p>Fórmula: <code>(Ataque + Bônus de Ataque) − (Defesa + Bônus de Defesa) = Dano causado</code> (mínimo 0). Só ataca alvos no <strong>mesmo cenário</strong>.</p>
    <h4 id="sec-9-5">9.5 Trocar de Postura</h4>
    <p>Custa 1 ação padrão. A anterior vai para o descarte de posturas e só volta quando todas as outras do deck de posturas também tiverem sido descartadas.</p>
    <h4 id="sec-9-6">9.6 Explorar</h4>
    <p>Posicionar um novo Cenário adjacente ao atual ou mover-se para um cenário adjacente existente.</p>
    <h4 id="sec-9-7">9.7 Engajamento e Monstros</h4>
    <p>Monstro engajado ataca apenas a Persona engajada (exceto se ela fugir e outra atacá-lo). Se um monstro ficar sozinho num cenário sem nenhuma Persona, é descartado. Máximo de <strong>2 desafios simultâneos</strong> (inclusive Incomuns), com soma dos níveis &le; nível da Persona.</p>
    <h4 id="sec-9-8">9.8 Personas em Fuga</h4>
    <p>Usa o <strong>turno completo</strong> para mover para cenário adjacente disponível. Escapa, mas não conquista o desafio e não faz nenhuma outra ação no turno.</p>
    <h4 id="sec-9-9">9.9 O Ciclo dos Períodos</h4>
    <p>Alvorada → Dia → Crepúsculo → Noite → Alvorada. Vale para todo o mapa, exceto Cenários Atemporais.</p>
    <h4 id="sec-9-10">9.10 Ações Fora do Turno (AFT)</h4>
    <p>Vêm das cartas, seguem o texto da carta e obedecem às regras das ações dentro do turno.</p>

    <h3 id="sec-10">10. Conquistas e Progressão</h3>
    <h4 id="sec-10-1">10.1 O Mercado</h4>
    <p>3 espaços compartilhados. Podem descartar 1 em comum acordo (reposto na próxima rodada).</p>
    <h4 id="sec-10-2">10.2 Conquistando Objetivos</h4>
    <p>Primeira Persona a cumprir conquista. Condições só contam após a carta aparecer no Mercado. Empates são negociados.</p>
    <h4 id="sec-10-3">10.3 Recompensas</h4>
    <p><strong>Cenário</strong> (vai para a mão e conta nas 5 cartas até ser jogado/descartado), <strong>Título de Prestígio</strong> (permanente e negociável), <strong>Aprimoramento</strong> (temporário) e <strong>Nível</strong>.</p>
    <h4 id="sec-10-4">10.4 Negociação</h4>
    <p>Quase tudo é negociável (exceto Habilidades e Posturas). Propor compra/venda de Título gasta 1 ação; se falhar, não perde a ação, mas só tenta novamente na próxima rodada.</p>
    <h4 id="sec-10-5">10.5 Conquistando Desafios</h4>
    <p>Em regra, conta para todas as Personas que participaram, salvo exigência específica da carta de Objetivo.</p>
    <h4 id="sec-10-6">10.6 Progressão de Classe (Subindo de Nível)</h4>
    <p>Substitui até 3 Habilidades (mantendo 15), pode reorganizar livremente o deck de Posturas dentro do novo nível/limite, aumenta PV máximo e descarta o Objetivo.</p>
    <h4 id="sec-10-7">10.7 Condição de Vitória (opcional)</h4>
    <p>O modo tradicional não tem vencedor; o grupo pode combinar antes uma condição baseada em objetivos conquistados.</p>

    <h3 id="sec-11">11. Morte</h3>
    <h4 id="sec-11-1">11.1 Modo Narrativo Extremo</h4>
    <p>Morreu, sai de jogo com mão, postura, Títulos e Aprimoramentos descartados. Cria nova Persona no menor nível da mesa, entrando na rodada seguinte.</p>
    <h4 id="sec-11-2">11.2 Modo Menos Extremo</h4>
    <p>Descarta a mão, perde o próximo turno e escolhe entre voltar ao cenário inicial ou perder 1 nível (sempre volta com PV máximos; no nível 0 volta ao cenário inicial).</p>

    <h3 id="sec-12">12. Classes</h3>
    <h4 id="sec-12-1">12.1 Alquimista</h4>
    <p>Vence pela preparação. Tipos: <strong>Poções</strong> (podem ser Preparadas por 1 ação — se faltar carta na mão e deck/descarte estiverem vazios, retorna o necessário), <strong>Elixires</strong> e <strong>Conhecimentos</strong> (nv. 1+, máx. 1 ativo, colocado no início do turno sem ação). Posturas de classe ("E") conquistadas por Objetivos.</p>
    <table><thead><tr><th>Nível</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody><tr><td><strong>PV Máx</strong></td><td>8</td><td>10</td><td>12</td><td>14</td><td>16</td><td>18</td><td>20</td></tr><tr><td><strong>Posturas</strong></td><td>3</td><td>3</td><td>4</td><td>4</td><td>5</td><td>5</td><td>6</td></tr></tbody></table>

    <h4 id="sec-12-2">12.2 Bruxo (ou Bruxa)</h4>
    <p>Classe de suporte ligada às Patronesses. Tipos: <strong>Encantamentos</strong>, <strong>Artefatos Bruxos</strong> (podem ser Emprestados) e <strong>Vínculos</strong> (1 ativo, substitui a passiva da Postura). Usa apenas o banco universal.</p>
    <table><thead><tr><th>Nível</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody><tr><td><strong>PV Máx</strong></td><td>9</td><td>11</td><td>13</td><td>15</td><td>17</td><td>19</td><td>21</td></tr><tr><td><strong>Posturas</strong></td><td>3</td><td>3</td><td>4</td><td>4</td><td>5</td><td>5</td><td>6</td></tr></tbody></table>

    <h4 id="sec-12-3">12.3 Corruptor (ou Corruptora)</h4>
    <p>Sacrifica próprios PV para amplificar ataques e aplica <strong>Corrupção</strong> (acumula com Males padrão). Tipos: <strong>Técnicas</strong> e <strong>Disciplinas</strong>. Posturas de classe inatas + universais.</p>
    <table><thead><tr><th>Nível</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody><tr><td><strong>PV Máx</strong></td><td>12</td><td>14</td><td>16</td><td>18</td><td>20</td><td>22</td><td>24</td></tr><tr><td><strong>Posturas</strong></td><td>3</td><td>4</td><td>4</td><td>5</td><td>5</td><td>6</td><td>6</td></tr><tr><td><strong>Corrupções Ativas</strong></td><td>1</td><td>1</td><td>2</td><td>2</td><td>3</td><td>3</td><td>4</td></tr></tbody></table>

    <h4 id="sec-12-4">12.4 Feiticeiro (ou Feiticeira)</h4>
    <p>Usa <strong>exclusivamente</strong> posturas de classe inatas. Todas as 33 cartas (<strong>Feitiços</strong>) não têm nível e ficam disponíveis no nível 0, usando <strong>IS</strong> contra o <strong>LS</strong> da postura (exceder dispara Sobrecarga).</p>
    <table><thead><tr><th>Nível</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody><tr><td><strong>PV Máx</strong></td><td>10</td><td>12</td><td>14</td><td>16</td><td>18</td><td>20</td><td>22</td></tr><tr><td><strong>Posturas</strong></td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>3</td></tr><tr><td><strong>LS</strong></td><td>5</td><td>6</td><td>8</td><td>10</td><td>12</td><td>14</td><td>16</td></tr></tbody></table>

    <h4 id="sec-12-5">12.5 Mago (ou Maga)</h4>
    <p>Progressão vertical (15 cartas nv. 0 + 3 por nível até Especialização no nível 6). Tipo: <strong>Magia Arcana</strong>. Usa apenas banco universal.</p>
    <table><thead><tr><th>Nível</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody><tr><td><strong>PV Máx</strong></td><td>7</td><td>9</td><td>11</td><td>13</td><td>15</td><td>17</td><td>19</td></tr><tr><td><strong>Posturas</strong></td><td>3</td><td>3</td><td>4</td><td>4</td><td>5</td><td>5</td><td>6</td></tr></tbody></table>

    <h3 id="sec-13">13. Posturas: Construção e Uso</h3>
    <p>Banco universal acessível a todas, exceto Feiticeiro. Posturas não são embaralhadas; a ativa permanece até ser substituída, definindo ATQ, DEF, INI e passiva.</p>

    <h3 id="sec-14">14. Monstros e Desafios</h3>
    <p>Classes: <strong>Kérata</strong> (físico direto), <strong>Forjassombra</strong> (mágico/campo) e <strong>Erratum</strong> (imprevisível), além dos <strong>Desafios Incomuns</strong> (benéficos). Tudo na carta do monstro ativa quando ele age; se exigir ações separadas, realiza 2 ações no turno.</p>

    <h3 id="sec-15">15. Meta-jogo e Acaso</h3>
    <p>Os 15 espaços de habilidade exigem administração de recursos quase perfeitos, diplomacia e cálculo estratégico.</p>

    <h3 id="sec-16">16. Modos Alternativos</h3>
    <ul>
      <li><strong>16.1 Campanha:</strong> guilda contínua; ao nível 6 pode trocar de classe mantendo a narrativa.</li>
      <li><strong>16.2 Morte Súbita:</strong> PvP direto; venceu quem ficar vivo.</li>
      <li><strong>16.3 Duelo de Marionetes:</strong> equipes usando monstros como pets.</li>
      <li><strong>16.4 Contenda:</strong> 2 jogadores, 5 espaços frente a frente usando apenas CD e CP Universais.</li>
    </ul>

    <h3 id="sec-17">17. Glossário Geral</h3>
    <p>Todos os termos essenciais (<em>AFT, Aprimoramento, Artefato Bruxo, Atemporal, Bônus de Ataque/Defesa, Chave, Conhecimento, Corrupção, Cura, Dano, Engajamento, Especialização, IS/LS, Mal, Mercado, Período, Preparar, Prever, Retornar, Revelar, Sobrecarga, Título de Prestígio, Vínculo</em>) podem ser consultados rapidamente no chat digitando <code>!chave &lt;termo&gt;</code>.</p>

    <h3 id="sec-ap1">Apêndice 1 — A Mesa Virtual</h3>
    <ul>
      <li><strong>1. Disposição:</strong> sua Persona sempre aparece no Sul; demais jogadores ao redor (Oeste, Norte, Leste) e Mapa/Mercado no Centro.</li>
      <li><strong>2. Privacidade:</strong> mão, deck fechado e cartas Previstas são privadas; mesa, postura ativa, PV, engajados e quantidades são públicas.</li>
      <li><strong>3. Ações e AFT:</strong> comandos na tela cumprem a Regra de Ouro e registram em <strong>Akuanuá</strong>.</li>
      <li><strong>4. Chat e <code>!chave</code>:</strong> acordos livres no chat; consulta de termos via <code>!chave</code>.</li>
      <li><strong>5. Akuanuá Admin:</strong> suporte técnico operacional sem interferir nas decisões dos jogadores.</li>
    </ul>
  </div>
  `
};