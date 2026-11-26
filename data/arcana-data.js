window.ARCANA_DATA = {
  "version": "3.5",
  "classes": {
    "Alquimista": {
      "name": "Alquimista",
      "mechanic": "Prepara ações e realiza combos",
      "role": "Estrategista",
      "stone": "Cornalina",
      "color": "#d95f39",
      "img": "Assets/Alquimista.webp",
      "pvByLevel": [
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "posturesByLevel": [
        3,
        3,
        4,
        4,
        5,
        5,
        6
      ],
      "lsByLevel": null,
      "caByLevel": null
    },
    "Bruxo": {
      "name": "Bruxo",
      "mechanic": "Compartilha bênçãos com aliados",
      "role": "Suporte",
      "stone": "Ametista",
      "color": "#9b59b6",
      "img": "Assets/Bruxo.webp",
      "pvByLevel": [
        9,
        11,
        13,
        15,
        17,
        19,
        21
      ],
      "posturesByLevel": [
        3,
        3,
        4,
        4,
        5,
        5,
        6
      ],
      "lsByLevel": null,
      "caByLevel": null
    },
    "Corruptor": {
      "name": "Corruptor",
      "mechanic": "Combinação de estilos e posturas, sacrifica PV",
      "role": "Lutador",
      "stone": "Jaspe Vermelho",
      "color": "#c0392b",
      "img": "Assets/Corruptor.webp",
      "pvByLevel": [
        12,
        14,
        16,
        18,
        20,
        22,
        24
      ],
      "posturesByLevel": [
        3,
        4,
        4,
        5,
        5,
        6,
        6
      ],
      "lsByLevel": null,
      "caByLevel": [
        1,
        1,
        2,
        2,
        3,
        3,
        4
      ]
    },
    "Feiticeiro": {
      "name": "Feiticeiro",
      "mechanic": "Feitiços que sobrecarregam",
      "role": "Carregador Explosivo",
      "stone": "Citrino",
      "color": "#e6a825",
      "img": "Assets/Feiticeiro.webp",
      "pvByLevel": [
        10,
        12,
        14,
        16,
        18,
        20,
        22
      ],
      "posturesByLevel": [
        1,
        1,
        1,
        1,
        1,
        1,
        3
      ],
      "lsByLevel": [
        5,
        6,
        8,
        10,
        12,
        14,
        16
      ],
      "caByLevel": null
    },
    "Mago": {
      "name": "Mago",
      "mechanic": "Curvas de poder e aprendizado limpas",
      "role": "Carregador Versátil",
      "stone": "Quartzo Branco",
      "color": "#d8dee9",
      "img": "Assets/Mago.webp",
      "pvByLevel": [
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ],
      "posturesByLevel": [
        3,
        3,
        4,
        4,
        5,
        5,
        6
      ],
      "lsByLevel": null,
      "caByLevel": null
    }
  },
  "keywords": [
    {
      "type": "Atributo",
      "name": "Dano",
      "command": "!Dano",
      "definition": "Representa o dano causado diretamente aos Pontos de Vida (PV) do alvo.",
      "rules": "Subtrai PV diretamente."
    },
    {
      "type": "Atributo",
      "name": "Cura",
      "command": "!Cura",
      "definition": "Restaura PV de Personas/aliados ou remove Condições Negativas.",
      "rules": "Se usada para remover Mal, o valor numérico de PV curado é ignorado."
    },
    {
      "type": "Atributo",
      "name": "Bônus de Ataque (BdA)",
      "command": "!BdA",
      "definition": "Atributo temporário que amplia o Ataque base da Postura (+).",
      "rules": "Não cumulativo com outros BdA de mesmo nome; vale o maior ou mais recente."
    },
    {
      "type": "Atributo",
      "name": "Bônus de Defesa (BdD)",
      "command": "!BdD",
      "definition": "Atributo temporário que reduz o Dano recebido (+).",
      "rules": "Não cumulativo com outros BdD de mesmo nome; vale o maior ou mais recente."
    },
    {
      "type": "Mal",
      "name": "Corrupção",
      "command": "!Corrupção",
      "definition": "Mal exclusivo do Corruptor com vários sub-efeitos (Ferrugem, Fratura, Vertigem, Consumição, Ruína, Colapso, Cicatriz, Cegueira).",
      "rules": "EXCEÇÃO ÚNICA: Efeitos de Corrupção SE ACUMULAM."
    },
    {
      "type": "Mal",
      "name": "Fadiga",
      "command": "!Fadiga",
      "definition": "Alvo perde sua próxima Ação Padrão.",
      "rules": "Não se acumula em quantidade de ações perdidas simultâneas."
    },
    {
      "type": "Mal",
      "name": "Ferimento",
      "command": "!Ferimento",
      "definition": "Reduz a Defesa do alvo em 1 (ou conforme carta) por até 2 rodadas.",
      "rules": "Substitui Ferimento anterior."
    },
    {
      "type": "Mal",
      "name": "Medo",
      "command": "!Medo",
      "definition": "Reduz o Ataque do alvo a zero ou impede ações de ataque.",
      "rules": "Substitui Medo anterior."
    },
    {
      "type": "Mal",
      "name": "Silêncio",
      "command": "!Silêncio",
      "definition": "Impede o alvo de usar Habilidades por tempo determinado.",
      "rules": "Substitui Silêncio anterior."
    },
    {
      "type": "Mal",
      "name": "Veneno",
      "command": "!Veneno",
      "definition": "Alvo perde 1 PV no início de cada turno/rodada.",
      "rules": "Substitui Veneno anterior."
    },
    {
      "type": "Mal",
      "name": "Atordoamento",
      "command": "!Atordoamento",
      "definition": "Alvo perde o próximo turno completo.",
      "rules": "Não cumulativo."
    },
    {
      "type": "Ação Dinâmica",
      "name": "Preparar",
      "command": "!Preparar",
      "definition": "Coloca carta na mesa virada para cima sem efeito imediato para uso futuro.",
      "rules": "Conta como ação se a carta exigir."
    },
    {
      "type": "Ação Dinâmica",
      "name": "Retornar",
      "command": "!Retornar",
      "definition": "Trazer carta da mesa ou do descarte de volta para a mão.",
      "rules": "Respeita limites de mão."
    },
    {
      "type": "Ação Dinâmica",
      "name": "Revelar",
      "command": "!Revelar",
      "definition": "Mostrar carta a todos os jogadores temporariamente.",
      "rules": "N/A"
    },
    {
      "type": "Ação Dinâmica",
      "name": "Prever",
      "command": "!Prever",
      "definition": "Olhar a(s) carta(s) do topo de um deck específico em segredo.",
      "rules": "N/A"
    },
    {
      "type": "Ação Dinâmica",
      "name": "Emprestar",
      "command": "!Emprestar",
      "definition": "Passar um Artefato Bruxo para outra Persona usar na mesa.",
      "rules": "Retorna ao descarte do dono após uso."
    },
    {
      "type": "Ação Dinâmica",
      "name": "Espreitar",
      "command": "!Espreitar",
      "definition": "Olhar a mão de outro jogador em segredo.",
      "rules": "N/A"
    },
    {
      "type": "Característica",
      "name": "Sobrecarga (IS/LS)",
      "command": "!Sobrecarga",
      "definition": "Mecânica do Feiticeiro: se IS total no turno > LS da postura, sofre penalidades descritas na carta.",
      "rules": "N/A"
    }
  ],
  "rules": [
    {
      "ID_Regra": "R001",
      "Bloco_Tematico": "1. Setup e Preparação",
      "Subtema_Elemento": "Componentes e Jogadores",
      "Secao_Manual": "Seções 1, 5, 6.1",
      "Tipo_Entidade": "Setup / Estrutura",
      "Regras_Mecanicas_Detalhes": "Jogo projetado para 2 a 5 jogadores(as), cada um controlando uma Persona de classe distinta (5 disponíveis). Utiliza 5 tipos de cartas (Habilidade, Postura, Objetivo, Cenário, Desafio) com versos universais. Fichas de Classe, Ficha de Acesso Rápido e marcadores de classe.",
      "Excecoes_Restricoes_Condicoes": "Apenas 1 Persona de cada classe por partida."
    },
    {
      "ID_Regra": "R002",
      "Bloco_Tematico": "1. Setup e Preparação",
      "Subtema_Elemento": "Preparação da Persona e Marcadores",
      "Secao_Manual": "Seções 6.1, 6.2",
      "Tipo_Entidade": "Persona / Setup",
      "Regras_Mecanicas_Detalhes": "Cada jogador escolhe sua Persona, pega a Ficha de Classe e o marcador de pedra correspondente.",
      "Excecoes_Restricoes_Condicoes": "N/A"
    },
    {
      "ID_Regra": "R003",
      "Bloco_Tematico": "1. Setup e Preparação",
      "Subtema_Elemento": "Montagem do Deck de Habilidades",
      "Secao_Manual": "Seção 6.3",
      "Tipo_Entidade": "Deck / Habilidade",
      "Regras_Mecanicas_Detalhes": "Personas iniciam no Nível 0 e só usam habilidades de nível igual ou inferior ao seu nível atual. Cada Persona deve manter exatamente 15 cartas de Habilidade no total (divididas entre compra, descarte e mesa). Inicia e termina o turno com 5 cartas na mão.",
      "Excecoes_Restricoes_Condicoes": "Total de cartas de habilidade é estritamente fixado em 15."
    },
    {
      "ID_Regra": "R004",
      "Bloco_Tematico": "1. Setup e Preparação",
      "Subtema_Elemento": "Montagem do Deck de Posturas",
      "Secao_Manual": "Seções 6.3, 13.1, 13.2",
      "Tipo_Entidade": "Deck / Postura",
      "Regras_Mecanicas_Detalhes": "Banco universal de posturas (4 cópias do deck) acessível a Alquimista, Corruptor, Mago e Bruxo. Posturas não são embaralhadas; o jogador escolhe qual postura ativa colocar em jogo. Alquimista ganha posturas por objetivos; Corruptor/Feiticeiro têm posturas inatas de classe.",
      "Excecoes_Restricoes_Condicoes": "Feiticeiro não tem acesso ao banco universal (usa apenas posturas inatas de classe)."
    },
    {
      "ID_Regra": "R005",
      "Bloco_Tematico": "1. Setup e Preparação",
      "Subtema_Elemento": "Setup do Mercado e Objetivos",
      "Secao_Manual": "Seções 6.3, 10.1",
      "Tipo_Entidade": "Mercado / Objetivo",
      "Regras_Mecanicas_Detalhes": "Embaralha-se o deck de Objetivo e revelam-se 3 cartas para formar o Mercado comum. Espaços vazios são preenchidos no início de cada rodada. Cartas de objetivo não se repetem.",
      "Excecoes_Restricoes_Condicoes": "Se os 3 objetivos expostos forem inviáveis ou muito parecidos, a mesa pode descartar 1 em comum acordo para reposição na rodada seguinte."
    },
    {
      "ID_Regra": "R006",
      "Bloco_Tematico": "1. Setup e Preparação",
      "Subtema_Elemento": "Setup do Mapa de Cenários",
      "Secao_Manual": "Seções 6.3, 7.4",
      "Tipo_Entidade": "Mapa / Cenário",
      "Regras_Mecanicas_Detalhes": "Revela-se a carta do topo do deck de Cenário e posiciona-se no centro da mesa (posição initial 0,0). Todas as Personas iniciam seus marcadores nele. Cartas posicionadas nunca são descartadas ou substituídas.",
      "Excecoes_Restricoes_Condicoes": "Cenários já posicionados permanecem fixos no mapa até o fim da partida."
    },
    {
      "ID_Regra": "R007",
      "Bloco_Tematico": "1. Setup e Preparação",
      "Subtema_Elemento": "Setup do Deck de Desafios",
      "Secao_Manual": "Seção 6.3",
      "Tipo_Entidade": "Deck / Desafio",
      "Regras_Mecanicas_Detalhes": "Cartas de Desafio separadas por nível (1 a 5). Posicionam-se viradas para baixo ao lado do mapa.",
      "Excecoes_Restricoes_Condicoes": "Recomenda-se usar níveis básicos no início da partida."
    },
    {
      "ID_Regra": "R008",
      "Bloco_Tematico": "1. Setup e Condições de Vitória",
      "Subtema_Elemento": "Condições de Vitória e Objetivos Coletivos",
      "Secao_Manual": "Seções 10, 10.2, 10.3, 10.7",
      "Tipo_Entidade": "Objetivo / Recompensa",
      "Regras_Mecanicas_Detalhes": "Modo tradicional não possui vencedor automático nem condição única de vitória. A primeira Persona a cumprir a Condição de Conquista de um objetivo do Mercado ganha a carta e sua Recompensa.",
      "Excecoes_Restricoes_Condicoes": "Ações prévias à revelação do objetivo no Mercado não contam. Em caso de empate simultâneo, jogadores negociam a divisão."
    },
    {
      "ID_Regra": "R009",
      "Bloco_Tematico": "1. Setup e Condições de Vitória",
      "Subtema_Elemento": "Tipos de Recompensa",
      "Secao_Manual": "Seção 10.3",
      "Tipo_Entidade": "Recompensa / Efeito",
      "Regras_Mecanicas_Detalhes": "Tipos de Recompensa: 1. Cenário (vai para a mão, conta no limite de 5 cartas de habilidade); 2. Título de Prestígio (bônus permanente / chave / negociável); 3. Aprimoramento (bônus temporário de combate); 4. Nível (permite subir de nível).",
      "Excecoes_Restricoes_Condicoes": "Cartas de Cenário obtidas como recompensa contam no limite de mão até serem jogadas."
    },
    {
      "ID_Regra": "R010",
      "Bloco_Tematico": "1. Setup e Condições de Vitória",
      "Subtema_Elemento": "Condição de Vitória Opcional",
      "Secao_Manual": "Seção 10.7",
      "Tipo_Entidade": "Variante de Jogo",
      "Regras_Mecanicas_Detalhes": "Se o grupo optar por declar um vencedor, define-se previamente uma métrica baseada em objetivos conquistados (ex.: primeiro a N objetivos, maior qtd após N rodadas, ou término dos decks).",
      "Excecoes_Restricoes_Condicoes": "Deve ser acordado obrigatoriamente antes de iniciar a partida."
    },
    {
      "ID_Regra": "R011",
      "Bloco_Tematico": "2. Turno, Ações e Interação",
      "Subtema_Elemento": "Regra de Ouro e Interpretação",
      "Secao_Manual": "Seções 2, 3",
      "Tipo_Entidade": "Regra Geral / Interpretação",
      "Regras_Mecanicas_Detalhes": "Toda Ação Padrão deve ser declarada antes da resolução (ação, carta/efeito, alvos, custo). Regras específicas de cartas prevalecem sobre regras gerais e sobre a Regra de Ouro.",
      "Excecoes_Restricoes_Condicoes": "Interações fora do convencional só valem se expressamente indicadas em carta. Impasses são decididos em grupo ou sorteio."
    },
    {
      "ID_Regra": "R012",
      "Bloco_Tematico": "2. Turno, Ações e Interação",
      "Subtema_Elemento": "Estrutura da Rodada e Ciclo de Períodos",
      "Secao_Manual": "Seções 9.1, 9.9",
      "Tipo_Entidade": "Estrutura da Rodada",
      "Regras_Mecanicas_Detalhes": "Rodada é composta pelo turno de todas as Personas (ordem de Iniciativa, do menor para o maior valor) e depois o turno dos monstros (ordem de aparição). O Período avança no início da rodada em ciclo fixo: Alvorada -> Dia -> Crepúsculo -> Noite -> Alvorada (inicia na Alvorada na 1ª rodada).",
      "Excecoes_Restricoes_Condicoes": "Empate em Iniciativa entre Personas é decidido por negociação entre os jogadores."
    },
    {
      "ID_Regra": "R013",
      "Bloco_Tematico": "2. Turno, Ações e Interação",
      "Subtema_Elemento": "Cenários Atemporais e Períodos",
      "Secao_Manual": "Seção 7.4, 9.9",
      "Tipo_Entidade": "Efeito de Ambiente",
      "Regras_Mecanicas_Detalhes": "Em Cenários Atemporais, o relógio de Período não se aplica e seus efeitos ficam suspensos.",
      "Excecoes_Restricoes_Condicoes": "Efeitos passivos vinculados a Períodos são desativados enquanto na área atemporal."
    },
    {
      "ID_Regra": "R014",
      "Bloco_Tematico": "2. Turno, Ações e Interação",
      "Subtema_Elemento": "Turno da Persona e Ações Padrão",
      "Secao_Manual": "Seções 9.1, 9.2, 9.3",
      "Tipo_Entidade": "Ações de Turno",
      "Regras_Mecanicas_Detalhes": "Persona possui 2 Ações Padrão por turno. Ações válidas: 1. Atacar (alvo no mesmo cenário); 2. Usar Habilidade; 3. Trocar de Postura; 4. Explorar (posicionar cenário adjacente ou mover-se); 5. Comprar Desafio (pago); 6. Outras ações de cartas.",
      "Excecoes_Restricoes_Condicoes": "Ações declaradas não podem ser anuladas após início de resolução."
    },
    {
      "ID_Regra": "R015",
      "Bloco_Tematico": "2. Turno, Ações e Interação",
      "Subtema_Elemento": "Compra Gratuita de Desafio",
      "Secao_Manual": "Seção 9.1",
      "Tipo_Entidade": "Ação Especial / Desafio",
      "Regras_Mecanicas_Detalhes": "Se a Persona não tiver nenhum desafio engajado, pode comprar 1 carta de Desafio gratuitamente (sem gastar ação) no início do turno ou assim que ficar sem desafio.",
      "Excecoes_Restricoes_Condicoes": "Limitado estritamente a 1 compra gratuita por turno."
    },
    {
      "ID_Regra": "R016",
      "Bloco_Tematico": "2. Turno, Ações e Interação",
      "Subtema_Elemento": "Penalidade por Compra Inválida de Desafio",
      "Secao_Manual": "Seção 9.1",
      "Tipo_Entidade": "Penalidade / Regra",
      "Regras_Mecanicas_Detalhes": "Se tentar comprar um desafio ao custo de 1 ação e a soma dos níveis ultrapassar o nível da Persona, a ação é perdida, a carta é descartada e a jogada não pode ser desfeita.",
      "Excecoes_Restricoes_Condicoes": "Se o desafio engajado for de nível igual ou superior à Persona, a compra é totalmente proibida."
    },
    {
      "ID_Regra": "R017",
      "Bloco_Tematico": "2. Turno, Ações e Interação",
      "Subtema_Elemento": "Ajuste Mandatório de Mão",
      "Secao_Manual": "Seções 7.6, 9.2",
      "Tipo_Entidade": "Mão / Cartas",
      "Regras_Mecanicas_Detalhes": "Persona deve iniciar e terminar seu turno com exatamente 5 cartas de Habilidade na mão. No fim do turno, compra ou descarta excedente até ter 5 cartas.",
      "Excecoes_Restricoes_Condicoes": "Não é possível passar o turno com menos ou mais de 5 cartas de Habilidade."
    },
    {
      "ID_Regra": "R018",
      "Bloco_Tematico": "2. Turno, Ações e Interação",
      "Subtema_Elemento": "Fórmula de Combate e Dano",
      "Secao_Manual": "Seção 9.4",
      "Tipo_Entidade": "Combate / Cálculo",
      "Regras_Mecanicas_Detalhes": "Dano Causado = (Ataque + Bônus de Ataque) - (Defesa + Bônus de Defesa).",
      "Excecoes_Restricoes_Condicoes": "Se o valor for zero ou negativo, o dano é zero e o ataque é absorvido sem penalidades adicionais."
    },
    {
      "ID_Regra": "R019",
      "Bloco_Tematico": "2. Turno, Ações e Interação",
      "Subtema_Elemento": "Troca de Postura e Reciclagem",
      "Secao_Manual": "Seção 9.5",
      "Tipo_Entidade": "Postura / Descarte",
      "Regras_Mecanicas_Detalhes": "A postura substituída vai para o descarte de posturas. A carta descartada só retorna ao jogo quando TODAS as outras cartas do deck de posturas da Persona também tiverem sido descartadas (reembaralhamento).",
      "Excecoes_Restricoes_Condicoes": "Troca de postura consome 1 Ação Padrão."
    },
    {
      "ID_Regra": "R020",
      "Bloco_Tematico": "2. Turno, Ações e Interação",
      "Subtema_Elemento": "Fuga de Monstros",
      "Secao_Manual": "Seção 9.8",
      "Tipo_Entidade": "Combate / Movimento",
      "Regras_Mecanicas_Detalhes": "Persona pode usar seu turno completo (2 ações intactas) para fugir para um cenário adjacente. Nenhuma outra ação pode ser realizada. Persona não conquista o desafio.",
      "Excecoes_Restricoes_Condicoes": "Se a Persona deixar o cenário e não houver outra Persona presente, o monstro é descartado."
    },
    {
      "ID_Regra": "R021",
      "Bloco_Tematico": "2. Turno, Ações e Interação",
      "Subtema_Elemento": "Ações Fora do Turno (AFT)",
      "Secao_Manual": "Seção 9.10",
      "Tipo_Entidade": "Ação Fora do Turno",
      "Regras_Mecanicas_Detalhes": "Concedidas por cartas específicas que permitem reação fora do turno do jogador. Obedecem rigorosamente às condições da carta concessora.",
      "Excecoes_Restricoes_Condicoes": "Subject to modificadores, males e efeitos passivos ativos."
    },
    {
      "ID_Regra": "R022",
      "Bloco_Tematico": "2. Turno, Ações e Interação",
      "Subtema_Elemento": "Negociação e Diplomacia",
      "Secao_Manual": "Seção 10.4",
      "Tipo_Entidade": "Interação / Troca",
      "Regras_Mecanicas_Detalhes": "Personas podem negociar ajuda, curas, informações e empates. Títulos de Prestígio podem ser negociados/vendidos ao custo de 1 ação do proponente.",
      "Excecoes_Restricoes_Condicoes": "Cartas de Habilidade e de Postura NÃO podem ser negociadas. Se a negociação falhar, a ação não é perdida, mas nova tentativa só ocorre na rodada seguinte."
    },
    {
      "ID_Regra": "R023",
      "Bloco_Tematico": "3. Personagens e Classes",
      "Subtema_Elemento": "Níveis e Progressão de Classe",
      "Secao_Manual": "Seções 8.2, 10.6",
      "Tipo_Entidade": "Persona / Evolução",
      "Regras_Mecanicas_Detalhes": "Progressão do Nível 0 ao 6 via Recompensa de Nível. Ao subir de nível: 1. Substitui até 3 cartas de Habilidade por novas do nível atingido (mantendo 15 no total); 2. Limite de Posturas aumenta; 3. PV máximo aumenta; 4. Carta de Objetivo usada é descartada.",
      "Excecoes_Restricoes_Condicoes": "No nível 6 (teto), ao receber recompensa de nível ainda pode realizar a troca de 3 cartas de Habilidade."
    },
    {
      "ID_Regra": "R024",
      "Bloco_Tematico": "3. Personagens e Classes",
      "Subtema_Elemento": "Alquimista",
      "Secao_Manual": "Seção 12.1",
      "Tipo_Entidade": "Classe / Persona",
      "Regras_Mecanicas_Detalhes": "PV por Nível (0 a 6): 8, 10, 12, 14, 16, 18, 20. Posturas no Deck (0 a 6): 3, 3, 4, 4, 5, 5, 6 (adquiridas via Objetivos, letra 'E'). Habilidades (32): Poções (rápidas, podem ser Preparadas por 1 ação), Elixires (duradouros), Conhecimentos (habilidade passiva extra, Nível 1+, entra no início do turno sem gastar ação).",
      "Excecoes_Restricoes_Condicoes": "Apenas 1 Conhecimento pode estar ativo por vez."
    },
    {
      "ID_Regra": "R025",
      "Bloco_Tematico": "3. Personagens e Classes",
      "Subtema_Elemento": "Bruxo / Bruxa",
      "Secao_Manual": "Seção 12.2",
      "Tipo_Entidade": "Classe / Persona",
      "Regras_Mecanicas_Detalhes": "PV por Nível (0 a 6): 9, 11, 13, 15, 17, 19, 21. Posturas no Deck (0 a 6): 3, 3, 4, 4, 5, 5, 6 (Banco Universal). Habilidades (30): Encantamentos (diretos/descarte rápido), Artefatos Bruxos (permanentes, podem ser Emprestados a outras Personas), Vínculos (substituem passiva da postura).",
      "Excecoes_Restricoes_Condicoes": "Apenas 1 Vínculo ativo por vez."
    },
    {
      "ID_Regra": "R026",
      "Bloco_Tematico": "3. Personagens e Classes",
      "Subtema_Elemento": "Corruptor / Corruptora",
      "Secao_Manual": "Seção 12.3",
      "Tipo_Entidade": "Classe / Persona",
      "Regras_Mecanicas_Detalhes": "PV por Nível (0 a 6): 12, 14, 16, 18, 20, 22, 24. Posturas Inatas (0 a 6): 3, 4, 4, 5, 5, 6, 6. Corrupções Ativas por Nível: 1, 1, 2, 2, 3, 3, 4. Mecânica: sacrifica PV para potencializar ataques. Aplica o Mal exclusivo Corrupção. Habilidades (30): Técnicas e Disciplinas.",
      "Excecoes_Restricoes_Condicoes": "Exceção à regra de não acúmulo: efeitos de Corrupção SE ACUMULAM."
    },
    {
      "ID_Regra": "R027",
      "Bloco_Tematico": "3. Personagens e Classes",
      "Subtema_Elemento": "Feiticeiro / Feiticeira",
      "Secao_Manual": "Seção 12.4",
      "Tipo_Entidade": "Classe / Persona",
      "Regras_Mecanicas_Detalhes": "PV por Nível (0 a 6): 10, 12, 14, 16, 18, 20, 22. Posturas Inatas (0 a 6): 1, 1, 1, 1, 1, 1, 3. Limite de Sobrecarga - LS (0 a 6): 5, 6, 8, 10, 12, 14, 16. Habilidades (33 Feitiços sem nível impresso, todos disponíveis no nível 0). Cada feitiço tem Índice de Sobrecarga (IS).",
      "Excecoes_Restricoes_Condicoes": "Não usa banco universal de posturas. Quando a soma do IS excede o LS da postura ativa, sofre efeitos de Sobrecarga."
    },
    {
      "ID_Regra": "R028",
      "Bloco_Tematico": "3. Personagens e Classes",
      "Subtema_Elemento": "Mago / Maga",
      "Secao_Manual": "Seção 12.5",
      "Tipo_Entidade": "Classe / Persona",
      "Regras_Mecanicas_Detalhes": "PV por Nível (0 a 6): 7, 9, 11, 13, 15, 17, 19. Posturas no Deck (0 a 6): 3, 3, 4, 4, 5, 5, 6 (Banco Universal). Habilidades (33 de Magia Arcana, progressão vertical com 15 de Nível 0 + 3 novas por nível até especialização nos níveis 5 e 6).",
      "Excecoes_Restricoes_Condicoes": "Progressão estritamente definida por níveis de habilidade."
    },
    {
      "ID_Regra": "R029",
      "Bloco_Tematico": "4. Elementos do Jogo e Monstros",
      "Subtema_Elemento": "Monstros e Desafios",
      "Secao_Manual": "Seções 7.5, 9.7, 14",
      "Tipo_Entidade": "Inimigo / Desafio",
      "Regras_Mecanicas_Detalhes": "Possuem Nome, Classe, Nível (1 a 5), PV (invariáveis), Ataque, Defesa e Efeitos Especiais.",
      "Excecoes_Restricoes_Condicoes": "PV dos desafios não variam por efeito de nível."
    },
    {
      "ID_Regra": "R030",
      "Bloco_Tematico": "4. Elementos do Jogo e Monstros",
      "Subtema_Elemento": "Classes de Desafios",
      "Secao_Manual": "Seção 14.1",
      "Tipo_Entidade": "Tipo de Desafio",
      "Regras_Mecanicas_Detalhes": "1. Kérata (criaturas naturais, ataques físicos diretos sem magia); 2. Forjassombra (construtos/mágicos com efeitos de campo); 3. Erratum (criaturas imprevisíveis com condições fora do convencional).",
      "Excecoes_Restricoes_Condicoes": "N/A"
    },
    {
      "ID_Regra": "R031",
      "Bloco_Tematico": "4. Elementos do Jogo e Monstros",
      "Subtema_Elemento": "Engajamento e Limites",
      "Secao_Manual": "Seções 9.7, 14.2",
      "Tipo_Entidade": "Mecânica de Combate",
      "Regras_Mecanicas_Detalhes": "O monstro engaja à Persona que o colocou em jogo e ataca apenas ela. Limite de engajamento: máximo de 2 desafios simultâneos, desde que a soma dos níveis dos desafios <= nível da Persona.",
      "Excecoes_Restricoes_Condicoes": "Se Persona fugir, monstro permanece no cenário e engaja na 1ª Persona que o atacar. Se cenário ficar vazio, monstro é descartado."
    },
    {
      "ID_Regra": "R032",
      "Bloco_Tematico": "4. Elementos del Jogo e Monstros",
      "Subtema_Elemento": "Desafios Incomuns",
      "Secao_Manual": "Seções 7.5, 14.3",
      "Tipo_Entidade": "Desafio Especial",
      "Regras_Mecanicas_Detalhes": "Cartas benéficas reveladas no momento da compra (não são monstros).",
      "Excecoes_Restricoes_Condicoes": "Contam no limite de engajamento de 2 cartas na área do jogador."
    },
    {
      "ID_Regra": "R033",
      "Bloco_Tematico": "4. Elementos do Jogo e Monstros",
      "Subtema_Elemento": "IA e Turno dos Monstros",
      "Secao_Manual": "Seções 9.1, 14.5",
      "Tipo_Entidade": "Turno do Inimigo",
      "Regras_Mecanicas_Detalhes": "Monstros agem após o turno das Personas, em ordem de aparição, realizando 1 ação.",
      "Excecoes_Restricoes_Condicoes": "Se a carta indicar Ataque + Habilidade sem custo de ação separado, a habilidade é passiva/gatilho automático. Se exigir ações separadas, realiza 2 ações no turno."
    },
    {
      "ID_Regra": "R034",
      "Bloco_Tematico": "4. Elementos do Jogo e Monstros",
      "Subtema_Elemento": "Cenários e Regras de Mapa",
      "Secao_Manual": "Seções 7.4, 9.6",
      "Tipo_Entidade": "Cenário / Mapa",
      "Regras_Mecanicas_Detalhes": "Cenários formam mapa por adjacência e permanecem até o fim do jogo. Regras impressas no cenário aplicam-se a qualquer Persona presente nele e prevalecem sobre regras gerais.",
      "Excecoes_Restricoes_Condicoes": "Quando o deck de Cenário acaba, não se pode explorar novos cenários, mas o movimento entre os cenários existentes continua permitido."
    },
    {
      "ID_Regra": "R035",
      "Bloco_Tematico": "4. Elementos do Jogo e Monstros",
      "Subtema_Elemento": "Sistema de Chaves e Não Acúmulo",
      "Secao_Manual": "Seção 8.1",
      "Tipo_Entidade": "Chave / Palavra-Chave",
      "Regras_Mecanicas_Detalhes": "Palavras-chave (Chaves) resumem regras e geram sinergia. Efeitos de chaves de mesmo nome NÃO se acumulam: a chave mais recente substitui a anterior.",
      "Excecoes_Restricoes_Condicoes": "Exceção única: Corrupções da classe Corruptor se acumulam."
    },
    {
      "ID_Regra": "R036",
      "Bloco_Tematico": "4. Elementos do Jogo e Monstros",
      "Subtema_Elemento": "Males / Condições Negativas",
      "Secao_Manual": "Seção 8.6",
      "Tipo_Entidade": "Condição / Status",
      "Regras_Mecanicas_Detalhes": "Incluem: Fadiga, Ferimento, Medo, Silêncio, Veneno e Atordoamento. Efeitos e durações descritos nas cartas. Habilidades de Cura podem ser usadas para remover 1 Mal em vez de restaurar PV.",
      "Excecoes_Restricoes_Condicoes": "Ao usar Cura para remover Mal, o valor numérico de PV curado é totalmente ignorado."
    },
    {
      "ID_Regra": "R037",
      "Bloco_Tematico": "4. Elementos do Jogo e Monstros",
      "Subtema_Elemento": "Chaves de Movimentação de Cartas",
      "Secao_Manual": "Seção 8.9",
      "Tipo_Entidade": "Ação de Carta",
      "Regras_Mecanicas_Detalhes": "Chaves: Emprestar (passar a outro até uso), Espreitar (olhar mão alheia em segredo), Revelar (mostrar a todos), Prever (olhar topo de deck), Retornar (trazer da mesa/descarte para a mão), Preparar (colocar na mesa virada para cima para uso futuro).",
      "Excecoes_Restricoes_Condicoes": "N/A"
    },
    {
      "ID_Regra": "R038",
      "Bloco_Tematico": "5. Exceções, Modos e Apêndices",
      "Subtema_Elemento": "Regras de Morte e Derrota",
      "Secao_Manual": "Seção 11",
      "Tipo_Entidade": "Morte / Derrota",
      "Regras_Mecanicas_Detalhes": "Ocorre quando a Persona chega a 0 PV ou menos. Grupo escolhe o modo antes de iniciar partida: 1. Modo Narrativo Extremo; 2. Modo Menos Extremo.",
      "Excecoes_Restricoes_Condicoes": "Definição do modo de morte deve ser feita obrigatoriamente no setup."
    },
    {
      "ID_Regra": "R039",
      "Bloco_Tematico": "5. Exceções, Modos e Apêndices",
      "Subtema_Elemento": "Modo Narrativo Extremo",
      "Secao_Manual": "Seção 11.1",
      "Tipo_Entidade": "Regra de Morte",
      "Regras_Mecanicas_Detalhes": "Persona é eliminada permanentemente. Descarta mão, postura, títulos e aprimoramentos. Jogador cria nova Persona (qualquer classe) com nível igual ao da Persona de menor nível na mesa, entrando na rodada seguinte no cenário inicial.",
      "Excecoes_Restricoes_Condicoes": "Perda total de progresso da Persona anterior."
    },
    {
      "ID_Regra": "R040",
      "Bloco_Tematico": "5. Exceções, Modos e Apêndices",
      "Subtema_Elemento": "Modo Menos Extremo",
      "Secao_Manual": "Seção 11.2",
      "Tipo_Entidade": "Regra de Morte",
      "Regras_Mecanicas_Detalhes": "Persona descarta a mão, perde o próximo turno e escolhe entre: A) voltar ao cenário inicial ou B) perder 1 nível (restaurando PV máximo e ajustando deck de habilidades).",
      "Excecoes_Restricoes_Condicoes": "Se estiver no Nível 0, não pode perder nível (retorna obrigatoriamente ao cenário inicial)."
    },
    {
      "ID_Regra": "R041",
      "Bloco_Tematico": "5. Exceções, Modos e Apêndices",
      "Subtema_Elemento": "Modos Alternativos de Jogo",
      "Secao_Manual": "Seção 16",
      "Tipo_Entidade": "Variantes de Jogo",
      "Regras_Mecanicas_Detalhes": "1. Campanha (16.1): Guilda de Personas, troca de classe ao nível 6 mantendo narrativa. 2. Morte Súbita (16.2): PvP direto sem renascimento/monstros. 3. Duelo de Marionetes (16.3): Disputa em equipes usando Desafios como pets comandados. 4. Contenda (16.4): 2 jogadores, 5 espaços frente a frente com Decks de Desafio e Posturas Universais.",
      "Excecoes_Restricoes_Condicoes": "Contenda utiliza 2 ações por turno para desvirar, atacar com monstro, atacar adversário, comprar desafio ou trocar postura."
    },
    {
      "ID_Regra": "R042",
      "Bloco_Tematico": "5. Exceções, Modos e Apêndices",
      "Subtema_Elemento": "Mesa Virtual (Apêndice 1)",
      "Secao_Manual": "Apêndice 1",
      "Tipo_Entidade": "Engine / Interface",
      "Regras_Mecanicas_Detalhes": "Privacidade: mão, deck fechado e cartas previstas são privadas; postura ativa, PV, mapa, mercado, desafios engajados e qtd de cartas são públicas. Interface substitui declaração verbal. Chat tem comando !chave <nome>.",
      "Excecoes_Restricoes_Condicoes": "Papel do Arcana Admin: suporte técnico para correção de cliques acidentais sem interferir nas decisões estratégicas."
    },
    {
      "ID_Regra": "R043",
      "Bloco_Tematico": "5. Exceções, Modos e Apêndices",
      "Subtema_Elemento": "Protótipo Web (Apêndice 2)",
      "Secao_Manual": "Apêndice 2",
      "Tipo_Entidade": "Engine / Arquitetura",
      "Regras_Mecanicas_Detalhes": "Máquina de estados: ROUND_START -> PERSONA_TURN -> END_TURN_HAND_CHECK -> MONSTERS_PHASE. ROUND_START: 1ª rodada abre na Alvorada, cenário 0,0 e 3 objetivos; rodadas seguintes avançam período e repõem Mercado. END_TURN_HAND_CHECK: autocompleta se < 5 cartas ou abre modal bloqueante de descarte se > 5 cartas.",
      "Excecoes_Restricoes_Condicoes": "Se compra paga de desafio violar o limite de nível, sistema descarta a carta, consome a ação e registra no log sem opção de desfazer."
    }
  ],
  "fsm": [
    {
      "State_Phase_ID": "ROUND_START",
      "SubState_Trigger_Event": "INIT_ROUND_1",
      "Actor": "System",
      "PreConditions_Validation": "Rodada == 1",
      "State_Mutation_SideEffects": "Período = Alvorada (sem avançar). Instancia Cenário (0,0). Move marcadores. Preenche 3 vagas do Mercado.",
      "Exception_EdgeCase_Handling": "Cenário inicial 0,0 fixo.",
      "UI_Log_Output": "Exibe animação Alvorada + Mapa 0,0 + Mercado cheio.",
      "Manual_Ref": "Apêndice 2 (1.1)"
    },
    {
      "State_Phase_ID": "ROUND_START",
      "SubState_Trigger_Event": "ADVANCE_ROUND_2PLUS",
      "Actor": "System",
      "PreConditions_Validation": "Rodada >= 2",
      "State_Mutation_SideEffects": "Avança Período (Alvorada->Dia->Crepúsculo->Noite->Alvorada). Repõe vagas vazias no Mercado. Recalcula ordem de INI.",
      "Exception_EdgeCase_Handling": "Se Cenário for Atemporal, suspende efeitos de Período.",
      "UI_Log_Output": "Notifica mudança de Período e nova ordem de iniciativa no log.",
      "Manual_Ref": "Seção 9.1, 9.9, Apêndice 2"
    },
    {
      "State_Phase_ID": "PERSONA_TURN",
      "SubState_Trigger_Event": "START_TURN",
      "Actor": "Active Persona",
      "PreConditions_Validation": "Turno da Persona na ordem de INI",
      "State_Mutation_SideEffects": "Persona ganha 2 Ações Padrão (● ●). Garante 5 cartas na mão (ou 6 se PU029).",
      "Exception_EdgeCase_Handling": "Se Conhecimento na mão, pode ativar no início sem gastar ação.",
      "UI_Log_Output": "Habilita botões de Ações Padrão na UI.",
      "Manual_Ref": "Seção 9.1, 9.2, 12.1"
    },
    {
      "State_Phase_ID": "PERSONA_TURN",
      "SubState_Trigger_Event": "BUY_CHALLENGE_FREE",
      "Actor": "Active Persona",
      "PreConditions_Validation": "Engajados == 0 AND CompraGratuitaUsada == False",
      "State_Mutation_SideEffects": "Puxa carta do deck de Desafios, engaja na Persona. Set CompraGratuitaUsada = True.",
      "Exception_EdgeCase_Handling": "Se for Desafio Incomum, aplica efeito benéfico imediato.",
      "UI_Log_Output": "Carta aparece no card de engajamento da Persona.",
      "Manual_Ref": "Seção 9.1, 14.3, Apêndice 2"
    },
    {
      "State_Phase_ID": "PERSONA_TURN",
      "SubState_Trigger_Event": "BUY_CHALLENGE_PAID",
      "Actor": "Active Persona",
      "PreConditions_Validation": "Ações >= 1 AND Engajados == 1 AND NivEngajado < NivPersona",
      "State_Mutation_SideEffects": "Custa 1 Ação. Valida (NivAtivo + NivComprado <= NivPersona). Se Válido: engaja 2º desafio.",
      "Exception_EdgeCase_Handling": "Se ultrapassar nível: AÇÃO É PERDIDA, carta descartada sem descolar. Não pode desfazer!",
      "UI_Log_Output": "Exibe aviso de penalidade no log.",
      "Manual_Ref": "Seção 9.1, 9.7, Apêndice 2"
    },
    {
      "State_Phase_ID": "PERSONA_TURN",
      "SubState_Trigger_Event": "ACTION_ATTACK",
      "Actor": "Active Persona",
      "PreConditions_Validation": "Ações >= 1 AND Alvo no mesmo cenário",
      "State_Mutation_SideEffects": "Custa 1 Ação. Calcula Dano = (ATQ+BdA) - (DEF+BdD). Aplica aos PV do alvo.",
      "Exception_EdgeCase_Handling": "Se Dano <= 0, dano é 0 sem reverter efeito ao atacante.",
      "UI_Log_Output": "Log exibe a fórmula e a perda de PV.",
      "Manual_Ref": "Seção 9.4, Apêndice 2"
    },
    {
      "State_Phase_ID": "PERSONA_TURN",
      "SubState_Trigger_Event": "ACTION_USE_SKILL",
      "Actor": "Active Persona",
      "PreConditions_Validation": "Ações >= 1 AND Custo pago",
      "State_Mutation_SideEffects": "Custa 1 Ação (salvo se a carta disser o contrário). Executa Comandos 1 e 2 em sequência.",
      "Exception_EdgeCase_Handling": "Se Feiticeiro: adiciona IS do feitiço. Se IS > LS, dispara Sobrecarga.",
      "UI_Log_Output": "Carta vai para descarte, mesa ou descarte prolongado conforme texto.",
      "Manual_Ref": "Seção 7.1, 9.3, 12.4"
    },
    {
      "State_Phase_ID": "PERSONA_TURN",
      "SubState_Trigger_Event": "ACTION_CHANGE_STANCE",
      "Actor": "Active Persona",
      "PreConditions_Validation": "Ações >= 1 AND PosturasDisponíveis > 0",
      "State_Mutation_SideEffects": "Custa 1 Ação. Move postura ativa para Descarte. Equipa nova Postura das Disponíveis.",
      "Exception_EdgeCase_Handling": "Se Disponíveis ficar vazio, move Descarte -> Disponíveis.",
      "UI_Log_Output": "Atualiza ATQ, DEF e INI base na UI.",
      "Manual_Ref": "Seção 9.5, 13.2, Apêndice 2"
    },
    {
      "State_Phase_ID": "PERSONA_TURN",
      "SubState_Trigger_Event": "ACTION_EXPLORE",
      "Actor": "Active Persona",
      "PreConditions_Validation": "Ações >= 1",
      "State_Mutation_SideEffects": "Custa 1 Ação. Opção A: Revela novo Cenário em casa adjacente. Opção B: Move para Cenário adjacente.",
      "Exception_EdgeCase_Handling": "Se deck de Cenários zerar, apenas movimento entre cenários existentes é permitido.",
      "UI_Log_Output": "Atualiza grid do mapa no centro da mesa.",
      "Manual_Ref": "Seção 9.6, Apêndice 2"
    },
    {
      "State_Phase_ID": "PERSONA_TURN",
      "SubState_Trigger_Event": "ACTION_FLEE",
      "Actor": "Active Persona",
      "PreConditions_Validation": "Ações == 2 (turno limpo) AND CenárioAdjacenteExiste == True",
      "State_Mutation_SideEffects": "Consome o TURNO INTEIRO (2 ações). Move marcador para cenário adjacente. Monstro NÃO é conquistado.",
      "Exception_EdgeCase_Handling": "Se cenário ficar sem NENHUMA Persona, monstro é descartado.",
      "UI_Log_Output": "Encerra o turno da Persona imediatamente.",
      "Manual_Ref": "Seção 9.8, Apêndice 2"
    },
    {
      "State_Phase_ID": "END_TURN_HAND_CHECK",
      "SubState_Trigger_Event": "CHECK_HAND_LIMIT",
      "Actor": "Active Persona",
      "PreConditions_Validation": "Fim das Ações da Persona",
      "State_Mutation_SideEffects": "Verifica qtd de cartas de Habilidade na mão (Limite standard: 5, PU029: 6).",
      "Exception_EdgeCase_Handling": "Se < 5: autocompleta comprando do deck. Se > 5: modal bloqueante exige descartar excedente.",
      "UI_Log_Output": "Bloqueia passagem de turno até ajustar a mão.",
      "Manual_Ref": "Seção 7.6, 9.2, Apêndice 2"
    },
    {
      "State_Phase_ID": "MONSTERS_PHASE",
      "SubState_Trigger_Event": "ACT_MONSTERS",
      "Actor": "System / AI",
      "PreConditions_Validation": "Todas as Personas encerraram turno",
      "State_Mutation_SideEffects": "Monstros agem 1 a 1 em ordem de aparição (appearanceOrder). Realizam 1 Ação de Ataque contra engajado.",
      "Exception_EdgeCase_Handling": "Abre janela para AFTs defensivas (ex.: Campo de Força). Se monstro tiver 2 ações em texto, executa 2.",
      "UI_Log_Output": "Aplica dano pré-calculado e atualiza PV da Persona.",
      "Manual_Ref": "Seção 9.1.6, 14.4, Apêndice 2"
    }
  ],
  "cards": {
    "C001": {
      "code": "C001",
      "category": "cenario",
      "name": "Portão de Alcor",
      "atemporal": false,
      "rule": "Silêncio: As habilidades passivas de monstros são ignoradas aqui."
    },
    "C002": {
      "code": "C002",
      "category": "cenario",
      "name": "Mercado de Melfelatos",
      "atemporal": false,
      "rule": "Personas podem realizar uma troca de Postura gratuita a cada rodada."
    },
    "C003": {
      "code": "C003",
      "category": "cenario",
      "name": "Muralhas de Ictínea",
      "atemporal": false,
      "rule": "Corruptores ganham Bônus de Defesa +1 enquanto estiverem neste cenário."
    },
    "C004": {
      "code": "C004",
      "category": "cenario",
      "name": "Covil dos Hereges",
      "atemporal": false,
      "rule": "Bruxos podem descartar e comprar uma habilidade por turno gratuitamente enquanto estiverem neste cenário."
    },
    "C005": {
      "code": "C005",
      "category": "cenario",
      "name": "Fenda do Vazio",
      "atemporal": true,
      "rule": "Se o Erratum não tiver habilidade passiva, ataca duas vezes o alvo engajado."
    },
    "C006": {
      "code": "C006",
      "category": "cenario",
      "name": "Vilarejo de Cinzas",
      "atemporal": false,
      "rule": "Forjassombras ganham +1 de Defesa. Se houver mais de um Forjassombra engajado, também ganham +1 de Ataque."
    },
    "C007": {
      "code": "C007",
      "category": "cenario",
      "name": "Praça dos Arcanistas",
      "atemporal": false,
      "rule": "Magos ganham Bônus de Ataque +1 enquanto estiverem neste cenário."
    },
    "C008": {
      "code": "C008",
      "category": "cenario",
      "name": "Ruínas do Antigo Templo",
      "atemporal": false,
      "rule": "Personas recebem Cura 1 após sofrerem Dano de qualquer fonte."
    },
    "C009": {
      "code": "C009",
      "category": "cenario",
      "name": "Floresta Sussurrante",
      "atemporal": false,
      "rule": "Bruxos e Alquimistas podem Retornar (para a mão) cartas de Cura ou Vínculo, em vez de Descartar."
    },
    "C010": {
      "code": "C010",
      "category": "cenario",
      "name": "Biblioteca Proibida",
      "atemporal": true,
      "rule": "Uma vez por rodada, fora de seu turno, qualquer Persona pode olhar o topo do próprio deck de Habilidade sem comprar. Se a carta permitir uso fora do turno, ela pode ser usada imediatamente."
    },
    "C011": {
      "code": "C011",
      "category": "cenario",
      "name": "Campos de Manaturim",
      "atemporal": false,
      "rule": "Ações de Explorar (posicionar ou movimentar) a partir deste cenário não tem custo."
    },
    "C012": {
      "code": "C012",
      "category": "cenario",
      "name": "Universidade de Manaturim",
      "atemporal": false,
      "rule": "Ao usar uma Habilidade Utilitária, se desejar, compre 1 carta a mais ao final do turno, mas você termina com 5 cartas na mão. Se for um Mago ou Alquimista, pode comprar duas na primeira vez."
    },
    "C013": {
      "code": "C013",
      "category": "cenario",
      "name": "Vale das Patronesses",
      "atemporal": false,
      "rule": "Toda Cura realizada neste cenário vale +1."
    },
    "C014": {
      "code": "C014",
      "category": "cenario",
      "name": "Necrópole Esquecida",
      "atemporal": false,
      "rule": "Males aplicados neste cenário duram mais 1 rodada (exceto Atordoar)."
    },
    "C015": {
      "code": "C015",
      "category": "cenario",
      "name": "Labirinto de Espelhos",
      "atemporal": true,
      "rule": "Ao trocar de Postura neste cenário, ignore a necessidade de descarte (devolva para o conjunto disponível). Se desejar, descarte ainda assim."
    },
    "C016": {
      "code": "C016",
      "category": "cenario",
      "name": "Torre do Primeiro Raio",
      "atemporal": false,
      "rule": "Ataques realizados na primeira ação do turno causam +1 de Dano."
    },
    "C017": {
      "code": "C017",
      "category": "cenario",
      "name": "Rota Comercial de Alcor",
      "atemporal": false,
      "rule": "Você pode usar duas ações de Explorar ou Fugir em uma única ação."
    },
    "C018": {
      "code": "C018",
      "category": "cenario",
      "name": "Cais Afogado",
      "atemporal": false,
      "rule": "Personas com menos da metade do PV máximo ganham Bônus de Defesa +1 neste cenário."
    },
    "C019": {
      "code": "C019",
      "category": "cenario",
      "name": "Vulcão Adormecido",
      "atemporal": false,
      "rule": "Toda vez que um Desafio for Revelado neste cenário, todas as Personas presentes sofrem 1 de Dano. Revelação ocorre ao comprar a carta de Desafio."
    },
    "C020": {
      "code": "C020",
      "category": "cenario",
      "name": "Relicário Perdido",
      "atemporal": true,
      "rule": "Personas que entrem nesse cenário recebem Cura +2 imediatamente. Entrar e sair é permitido e aplica novamente o efeito."
    },
    "C021": {
      "code": "C021",
      "category": "cenario",
      "name": "Encruzilhada dos Arautos",
      "atemporal": false,
      "rule": "Enquanto estiverem nesse cenário, Personas podem negociar seus títulos, preferencialmente em seu turno."
    },
    "C022": {
      "code": "C022",
      "category": "cenario",
      "name": "Anfiteatro dos Duelos",
      "atemporal": false,
      "rule": "Ataques entre Personas causam +1 de Dano neste cenário."
    },
    "C023": {
      "code": "C023",
      "category": "cenario",
      "name": "Bosque do Entardecer",
      "atemporal": false,
      "rule": "Bruxos podem usar 1 Encantamento Crepúsculo adicional por turno neste cenário."
    },
    "C024": {
      "code": "C024",
      "category": "cenario",
      "name": "Salão dos Espelhos Quebrados",
      "atemporal": false,
      "rule": "Uma vez por turno, é possível sacrificar 1 PV (+1 PV por nível) para trocar de Postura gratuitamente."
    },
    "C025": {
      "code": "C025",
      "category": "cenario",
      "name": "Portal Instável",
      "atemporal": true,
      "rule": "Ações de combate (Ataque e Defesa) podem ser realizadas entre este cenário e cenários adjacentes, como se fossem o mesmo. Também afeta O Ponto Cego do Mundo, esteja ele onde estiver."
    },
    "C026": {
      "code": "C026",
      "category": "cenario",
      "name": "Jardim Suspenso de Melfelatos",
      "atemporal": false,
      "rule": "Toda Cura realizada neste cenário também remove Fadiga (qualquer grau)."
    },
    "C027": {
      "code": "C027",
      "category": "cenario",
      "name": "Feira das Engrenagens",
      "atemporal": false,
      "rule": "Alquimistas e Bruxos podem trocar 1 Artefato ou Elixir entre si neste cenário, sem custo."
    },
    "C028": {
      "code": "C028",
      "category": "cenario",
      "name": "Esconderijo de Nar",
      "atemporal": false,
      "rule": "Desafios Forjassombra revelados neste cenário entram em jogo com -2 PV e +1 de Ataque."
    },
    "C029": {
      "code": "C029",
      "category": "cenario",
      "name": "Caminho Secreto de Sor",
      "atemporal": false,
      "rule": "Corruptores pagam 1 PV a menos pelo custo de Habilidades neste cenário."
    },
    "C030": {
      "code": "C030",
      "category": "cenario",
      "name": "O Ponto Cego do Mundo",
      "atemporal": true,
      "rule": "Não há regra neste cenário. Será mesmo?..."
    },
    "O1001": {
      "code": "O1001",
      "category": "objetivo",
      "name": "O1001",
      "condition": "Aplique um Mal a um Desafio e derrote-o enquanto ele ainda estiver sob essa condição.",
      "rewardType": "Aprimoramento",
      "rewardDesc": "",
      "progression": "Suba um nível se houver uma Persona com nível superior ao seu.",
      "footnote": "Alquimista: ao conquistar, habilite a carta Nigredo.",
      "isDraft": false
    },
    "O1002": {
      "code": "O1002",
      "category": "objetivo",
      "name": "O1002",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Você e outra Persona no Cenário (a sua escolha) sobem até o nível 1.",
      "footnote": "",
      "isDraft": true
    },
    "O1003": {
      "code": "O1003",
      "category": "objetivo",
      "name": "O1003",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "",
      "footnote": "",
      "isDraft": true
    },
    "O1004": {
      "code": "O1004",
      "category": "objetivo",
      "name": "O1004",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "",
      "footnote": "",
      "isDraft": true
    },
    "O1005": {
      "code": "O1005",
      "category": "objetivo",
      "name": "O1005",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "",
      "footnote": "",
      "isDraft": true
    },
    "O1006": {
      "code": "O1006",
      "category": "objetivo",
      "name": "O1006",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "",
      "footnote": "",
      "isDraft": true
    },
    "O1007": {
      "code": "O1007",
      "category": "objetivo",
      "name": "O1007",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Você pode subir ao nível 1.",
      "footnote": "",
      "isDraft": true
    },
    "O1008": {
      "code": "O1008",
      "category": "objetivo",
      "name": "O1008",
      "condition": "Fuja de 2 cenários diferentes.",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Você pode subir ao nível 1.",
      "footnote": "Alquimista: ao conquistar, habilite a carta Albedo.",
      "isDraft": false
    },
    "O1009": {
      "code": "O1009",
      "category": "objetivo",
      "name": "O1009",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Você pode subir ao nível 1.",
      "footnote": "",
      "isDraft": true
    },
    "O1010": {
      "code": "O1010",
      "category": "objetivo",
      "name": "O1010",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Você pode subir ao nível 1.",
      "footnote": "",
      "isDraft": true
    },
    "O2001": {
      "code": "O2001",
      "category": "objetivo",
      "name": "O2001",
      "condition": "Em uma mesma rodada, use uma Habilidade Ofensiva, uma Defensiva e uma Utilitária.",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Você pode subir ao nível 1.",
      "footnote": "",
      "isDraft": false
    },
    "O2002": {
      "code": "O2002",
      "category": "objetivo",
      "name": "O2002",
      "condition": "Em uma mesma rodada, restaure PV de si mesmo e de um aliado.",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Você pode subir ao nível 1.",
      "footnote": "",
      "isDraft": false
    },
    "O2003": {
      "code": "O2003",
      "category": "objetivo",
      "name": "O2003",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Você pode subir ao nível 1.",
      "footnote": "",
      "isDraft": true
    },
    "O2004": {
      "code": "O2004",
      "category": "objetivo",
      "name": "O2004",
      "condition": "Conclua seu turno derrotando um Desafio, sem usar Ataque.",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Você pode subir ao nível 1.",
      "footnote": "Alquimista: ao conquistar, habilite a carta Citrinitas.",
      "isDraft": false
    },
    "O2005": {
      "code": "O2005",
      "category": "objetivo",
      "name": "O2005",
      "condition": "Explore 3 cenários diferentes.",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 2.",
      "footnote": "",
      "isDraft": false
    },
    "O2006": {
      "code": "O2006",
      "category": "objetivo",
      "name": "O2006",
      "condition": "Cure um total de 8 PV em aliados.",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 2.",
      "footnote": "",
      "isDraft": false
    },
    "O2007": {
      "code": "O2007",
      "category": "objetivo",
      "name": "O2007",
      "condition": "Troque de Postura 3 vezes.",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 2.",
      "footnote": "",
      "isDraft": false
    },
    "O2008": {
      "code": "O2008",
      "category": "objetivo",
      "name": "O2008",
      "condition": "Derrote 2 Desafios da classe Forjassombra.",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 2.",
      "footnote": "",
      "isDraft": false
    },
    "O2009": {
      "code": "O2009",
      "category": "objetivo",
      "name": "O2009",
      "condition": "Derrote um Desafio de nível igual ou superior ao seu nível de Persona.",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 2.",
      "footnote": "",
      "isDraft": false
    },
    "O2010": {
      "code": "O2010",
      "category": "objetivo",
      "name": "O2010",
      "condition": "Conquiste outras 3 cartas de Objetivo e leve essa de brinde.",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 2.",
      "footnote": "Alquimista: ao conquistar, habilite a carta Rubedo.",
      "isDraft": false
    },
    "O3001": {
      "code": "O3001",
      "category": "objetivo",
      "name": "O3001",
      "condition": "Aplique 3 Condições Negativas diferentes a Desafios.",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 2.",
      "footnote": "Alquimista: ao conquistar, habilite a carta Cauda Pavonis.",
      "isDraft": false
    },
    "O3002": {
      "code": "O3002",
      "category": "objetivo",
      "name": "O3002",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 3.",
      "footnote": "",
      "isDraft": true
    },
    "O3003": {
      "code": "O3003",
      "category": "objetivo",
      "name": "O3003",
      "condition": "Participe da derrota de Desafios em 2 cenários diferentes, sem atacá-los.",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 3.",
      "footnote": "",
      "isDraft": false
    },
    "O3004": {
      "code": "O3004",
      "category": "objetivo",
      "name": "O3004",
      "condition": "Derrote 2 Desafios da classe Erratum.",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 3.",
      "footnote": "",
      "isDraft": false
    },
    "O3005": {
      "code": "O3005",
      "category": "objetivo",
      "name": "O3005",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 3.",
      "footnote": "",
      "isDraft": true
    },
    "O3006": {
      "code": "O3006",
      "category": "objetivo",
      "name": "O3006",
      "condition": "Sobreviva a três ataques consecutivos de um mesmo Desafio sem fugir do cenário.",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 3.",
      "footnote": "",
      "isDraft": false
    },
    "O3007": {
      "code": "O3007",
      "category": "objetivo",
      "name": "O3007",
      "condition": "Derrote um Desafio que já tenha reduzido você a menos da metade do PV máximo.",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 3.",
      "footnote": "Alquimista: ao conquistar, habilite a carta Solve et Coagula.",
      "isDraft": false
    },
    "O3008": {
      "code": "O3008",
      "category": "objetivo",
      "name": "O3008",
      "condition": "Em uma mesma rodada, cause Dano a 3 alvos diferentes.",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 4.",
      "footnote": "",
      "isDraft": false
    },
    "O3009": {
      "code": "O3009",
      "category": "objetivo",
      "name": "O3009",
      "condition": "Use a mesma Postura por 4 rodadas seguidas sem trocar.",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 4.",
      "footnote": "",
      "isDraft": false
    },
    "O3010": {
      "code": "O3010",
      "category": "objetivo",
      "name": "O3010",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 4.",
      "footnote": "",
      "isDraft": true
    },
    "O4001": {
      "code": "O4001",
      "category": "objetivo",
      "name": "O4001",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 4.",
      "footnote": "",
      "isDraft": true
    },
    "O4002": {
      "code": "O4002",
      "category": "objetivo",
      "name": "O4002",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 4.",
      "footnote": "Alquimista: ao conquistar, habilite a carta Lapis Philosophorum.",
      "isDraft": true
    },
    "O4003": {
      "code": "O4003",
      "category": "objetivo",
      "name": "O4003",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 5.",
      "footnote": "",
      "isDraft": true
    },
    "O4004": {
      "code": "O4004",
      "category": "objetivo",
      "name": "O4004",
      "condition": "Derrote um monstro de cada classe.",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 5.",
      "footnote": "",
      "isDraft": false
    },
    "O4005": {
      "code": "O4005",
      "category": "objetivo",
      "name": "O4005",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 5.",
      "footnote": "",
      "isDraft": true
    },
    "O4006": {
      "code": "O4006",
      "category": "objetivo",
      "name": "O4006",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até, no máximo, nível 5.",
      "footnote": "",
      "isDraft": true
    },
    "O4007": {
      "code": "O4007",
      "category": "objetivo",
      "name": "O4007",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até o nível 6. Se você já está nesse nível, troque até 3 Cartas de Habilidade.",
      "footnote": "",
      "isDraft": true
    },
    "O4008": {
      "code": "O4008",
      "category": "objetivo",
      "name": "O4008",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até o nível 6. Se você já está nesse nível, troque até 3 Cartas de Habilidade.",
      "footnote": "",
      "isDraft": true
    },
    "O4009": {
      "code": "O4009",
      "category": "objetivo",
      "name": "O4009",
      "condition": "",
      "rewardType": "",
      "rewardDesc": "",
      "progression": "Suba 1 nível até o nível 6. Se você já está nesse nível, troque até 3 Cartas de Habilidade.",
      "footnote": "",
      "isDraft": true
    },
    "O4010": {
      "code": "O4010",
      "category": "objetivo",
      "name": "Pioneirismo",
      "condition": "Este título é inegociável e pertence à primeira Persona a atingir o nível 6 na partida. Se for conquistado com a carta no Mercado, a Persona Titular poderá trocar até 6 Cartas de Habilidade para subir de nível.",
      "rewardType": "Título de Prestígio",
      "rewardDesc": "Título: Eu Cheguei Primeiro!",
      "progression": "Toda vez que você subiria de nível até o Nível 6, livre-se de todos os Males.",
      "footnote": "",
      "isDraft": false
    },
    "DK001": {
      "code": "DK001",
      "category": "desafio",
      "level": 1,
      "name": "Kérata · DK001",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "-",
      "atq": 4,
      "def": 2,
      "pv": 6,
      "footnote": "Ataca em disparada, sem aviso. Poucos o veem antes de sentir suas presas."
    },
    "DK002": {
      "code": "DK002",
      "category": "desafio",
      "level": 1,
      "name": "Kérata · DK002",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "-",
      "atq": 3,
      "def": 2,
      "pv": 6,
      "footnote": "Voa baixo, entre as árvores, à espreita de qualquer coisa que sangre."
    },
    "DK003": {
      "code": "DK003",
      "category": "desafio",
      "level": 1,
      "name": "Kérata · DK003",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "-",
      "atq": 3,
      "def": 3,
      "pv": 7,
      "footnote": "Pequeno e teimoso, defende seu território com fúria desproporcional ao tamanho."
    },
    "DK004": {
      "code": "DK004",
      "category": "desafio",
      "level": 1,
      "name": "Kérata · DK004",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "-",
      "atq": 4,
      "def": 2,
      "pv": 8,
      "footnote": "Expulso da matilha, caça sozinho  e por isso, com mais desespero."
    },
    "DK005": {
      "code": "DK005",
      "category": "desafio",
      "level": 2,
      "name": "Kérata · DK005",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "-",
      "atq": 4,
      "def": 4,
      "pv": 9,
      "footnote": "Suas garras arranham até pedra. Recua apenas quando cansa, nunca por Medo."
    },
    "DK006": {
      "code": "DK006",
      "category": "desafio",
      "level": 2,
      "name": "Fera Doméstica",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "Medo: Toda vez que uma Persona no mesmo cenário Atacar, perderá seu Bônus de Ataque para a próxima ação ou, se for a segunda açao do turno, seu Bônus de Defesa.",
      "atq": 6,
      "def": 7,
      "pv": 10,
      "footnote": "Seu olhar encanta a presa antes que os espinhos revelem sua verdadeira natureza."
    },
    "DK007": {
      "code": "DK007",
      "category": "desafio",
      "level": 2,
      "name": "Kérata · DK007",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "-",
      "atq": 5,
      "def": 3,
      "pv": 10,
      "footnote": "Desliza silenciosa pela relva alta. Quando ataca, já é tarde demais."
    },
    "DK008": {
      "code": "DK008",
      "category": "desafio",
      "level": 2,
      "name": "Kérata · DK008",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "-",
      "atq": 5,
      "def": 4,
      "pv": 11,
      "footnote": "Domina qualquer clareira que escolhe chamar de sua."
    },
    "DK009": {
      "code": "DK009",
      "category": "desafio",
      "level": 3,
      "name": "Kérata · DK009",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "-",
      "atq": 6,
      "def": 5,
      "pv": 12,
      "footnote": "Suas galhadas já derrubaram portões de aldeias inteiras."
    },
    "DK010": {
      "code": "DK010",
      "category": "desafio",
      "level": 3,
      "name": "Kérata · DK010",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "-",
      "atq": 8,
      "def": 4,
      "pv": 12,
      "footnote": "Ataca do escuro. Ninguém a vê chegar duas vezes."
    },
    "DK011": {
      "code": "DK011",
      "category": "desafio",
      "level": 3,
      "name": "Kérata · DK011",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "Quando perde PV, Cura 1 no próprio turno.",
      "atq": 5,
      "def": 6,
      "pv": 13,
      "footnote": "Resiliência é a chave."
    },
    "DK012": {
      "code": "DK012",
      "category": "desafio",
      "level": 3,
      "name": "Kérata · DK012",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "Enquanto tiver mais da metade do PV máximo, ganhe Bônus de Ataque +1.",
      "atq": 7,
      "def": 5,
      "pv": 14,
      "footnote": "Lidera a manada com presas que já perfuraram couraças."
    },
    "DK013": {
      "code": "DK013",
      "category": "desafio",
      "level": 4,
      "name": "Kérata · DK013",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "-",
      "atq": 8,
      "def": 6,
      "pv": 18,
      "footnote": "Ruge, e o vento parece obedecer."
    },
    "DK014": {
      "code": "DK014",
      "category": "desafio",
      "level": 4,
      "name": "Kérata · DK014",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "Se for Noite, recebe Bônus de Ataque +1.",
      "atq": 9,
      "def": 5,
      "pv": 16,
      "footnote": "Caça sob a lua nova, quando ninguém consegue vê-lo chegar."
    },
    "DK015": {
      "code": "DK015",
      "category": "desafio",
      "level": 4,
      "name": "Kérata · DK015",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "Reduz em 1 todo Dano recebido (mínimo 0).",
      "atq": 8,
      "def": 7,
      "pv": 15,
      "footnote": "Sua pele é dura como a montanha de onde veio."
    },
    "DK016": {
      "code": "DK016",
      "category": "desafio",
      "level": 4,
      "name": "Kérata · DK016",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "Uma vez por rodada, ao causar Dano, aplica Fadiga 1 ao alvo.",
      "atq": 10,
      "def": 4,
      "pv": 15,
      "footnote": "Suas garras arrastam presas do tamanho de carroças."
    },
    "DK017": {
      "code": "DK017",
      "category": "desafio",
      "level": 5,
      "name": "Kérata · DK017",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "No início de cada rodada, Cura 2 PV.",
      "atq": 11,
      "def": 8,
      "pv": 25,
      "footnote": "Diz-se que ela é mais velha que as próprias árvores que protege."
    },
    "DK018": {
      "code": "DK018",
      "category": "desafio",
      "level": 5,
      "name": "Kérata · DK018",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "Veneno: Uma vez por rodada, ao causar Dano, causa +1.",
      "atq": 12,
      "def": 7,
      "pv": 20,
      "footnote": "Seu Veneno corre há séculos pelo solo onde repousa."
    },
    "DK019": {
      "code": "DK019",
      "category": "desafio",
      "level": 5,
      "name": "Kérata · DK019",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "Se houver outro monstro no mesmo cenário, ganha Bônus de Ataque +2.",
      "atq": 10,
      "def": 9,
      "pv": 22,
      "footnote": "Sua matilha o segue até onde a própria morte hesita em ir."
    },
    "DK020": {
      "code": "DK020",
      "category": "desafio",
      "level": 5,
      "name": "Kérata · DK020",
      "challengeClass": "Kérata",
      "isUncommon": false,
      "passive": "Atordoamento: na primeira vez que realiza um Ataque, cada Persona no cenário perde o próximo turno. Se estiver engajada, isso ocorre duas vezes (2 primeiros Ataques).",
      "atq": 12,
      "def": 8,
      "pv": 20,
      "footnote": "Seja hábil ou sofra as consequências."
    },
    "DF001": {
      "code": "DF001",
      "category": "desafio",
      "level": 2,
      "name": "Forjassombra · DF001",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "-",
      "atq": 5,
      "def": 5,
      "pv": 6,
      "footnote": "Ergue-se, imóvel, até que alguém cruze a linha que foi programado a proteger."
    },
    "DF002": {
      "code": "DF002",
      "category": "desafio",
      "level": 2,
      "name": "Forjassombra · DF002",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "-",
      "atq": 5,
      "def": 3,
      "pv": 5,
      "footnote": "Suas penas de metal cantam uma música que só os arcanistas entendem."
    },
    "DF003": {
      "code": "DF003",
      "category": "desafio",
      "level": 2,
      "name": "Forjassombra · DF003",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "-",
      "atq": 4,
      "def": 5,
      "pv": 6,
      "footnote": "Construído para servir, aprendeu sozinho a se defender."
    },
    "DF004": {
      "code": "DF004",
      "category": "desafio",
      "level": 2,
      "name": "Forjassombra · DF004",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "-",
      "atq": 4,
      "def": 6,
      "pv": 5,
      "footnote": "Rola sem cocheiro, guiada por um núcleo arcano havia muito esquecido."
    },
    "DF005": {
      "code": "DF005",
      "category": "desafio",
      "level": 2,
      "name": "Forjassombra · DF005",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "-",
      "atq": 6,
      "def": 3,
      "pv": 5,
      "footnote": "Bate as asas de latão em um ritmo perfeitamente mecânico."
    },
    "DF006": {
      "code": "DF006",
      "category": "desafio",
      "level": 3,
      "name": "Forjassombra · DF006",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "-",
      "atq": 7,
      "def": 6,
      "pv": 10,
      "footnote": "Uma armadura vazia que se move como se ainda houvesse alguém dentro."
    },
    "DF007": {
      "code": "DF007",
      "category": "desafio",
      "level": 3,
      "name": "Forjassombra · DF007",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "-",
      "atq": 6,
      "def": 7,
      "pv": 10,
      "footnote": "Pequeno, veloz e capaz de perfurar qualquer couraça com sua broca frontal."
    },
    "DF008": {
      "code": "DF008",
      "category": "desafio",
      "level": 3,
      "name": "Forjassombra · DF008",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "Inato: Bônus de Defesa +2.",
      "atq": 6,
      "def": 7,
      "pv": 8,
      "footnote": "Expele nuvens quentes a cada passo pesado que dá."
    },
    "DF009": {
      "code": "DF009",
      "category": "desafio",
      "level": 3,
      "name": "Forjassombra · DF009",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "Fadiga: A Persona engajada perde uma ação do turno caso use Cura em si mesma. Ela não pode curar se já usou uma ação.",
      "atq": 8,
      "def": 5,
      "pv": 8,
      "footnote": "Suas patas de metal tecem fios que prendem mais que aço."
    },
    "DF010": {
      "code": "DF010",
      "category": "desafio",
      "level": 3,
      "name": "Forjassombra · DF010",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "Se for Noite, reduza em 1 todo Dano recebido (mínimo 0).",
      "atq": 7,
      "def": 6,
      "pv": 9,
      "footnote": "Ilumina seu próprio caminho  e tudo que tentar fugir dele."
    },
    "DF011": {
      "code": "DF011",
      "category": "desafio",
      "level": 4,
      "name": "Forjassombra · DF011",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "-",
      "atq": 9,
      "def": 8,
      "pv": 16,
      "footnote": "Cada rangido que solta é o som de mil peças trabalhando em conjunto."
    },
    "DF012": {
      "code": "DF012",
      "category": "desafio",
      "level": 4,
      "name": "Forjassombra · DF012",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "-",
      "atq": 10,
      "def": 7,
      "pv": 15,
      "footnote": "Voa com asas de couro tensionado sobre um esqueleto de aço."
    },
    "DF013": {
      "code": "DF013",
      "category": "desafio",
      "level": 4,
      "name": "Forjassombra · DF013",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "Uma vez por rodada, ao ser atacado, devolva 1 de Dano ao atacante.",
      "atq": 8,
      "def": 9,
      "pv": 15,
      "footnote": "Respira fumaça e cospe faíscas quando provocado."
    },
    "DF014": {
      "code": "DF014",
      "category": "desafio",
      "level": 4,
      "name": "Forjassombra · DF014",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "A cada rodada completa, ganhe Bônus de Ataque +1 (reinicia ao ser atacado).",
      "atq": 10,
      "def": 7,
      "pv": 14,
      "footnote": "Seus ponteiros marcam o tempo até o próximo golpe."
    },
    "DF015": {
      "code": "DF015",
      "category": "desafio",
      "level": 4,
      "name": "Forjassombra · DF015",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "Uma vez por rodada, ao causar Dano, aplique Ferimento 1 ao alvo.",
      "atq": 9,
      "def": 8,
      "pv": 14,
      "footnote": "Desliza entre paredes como se o metal fosse líquido."
    },
    "DF016": {
      "code": "DF016",
      "category": "desafio",
      "level": 5,
      "name": "Forjassombra · DF016",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "-",
      "atq": 10,
      "def": 12,
      "pv": 22,
      "footnote": "Já foi um bastião. Agora, caminha em busca de algo para proteger  ou destruir."
    },
    "DF017": {
      "code": "DF017",
      "category": "desafio",
      "level": 5,
      "name": "Forjassombra · DF017",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "Inato: Quando é Atingido (por Ataques ou Habilidades) avança na ordem de iniciativa, até ser o primeiro dos Monstros.",
      "atq": 12,
      "def": 9,
      "pv": 20,
      "footnote": "Redesenha a si mesmo a cada batalha, ajustando cada engrenagem."
    },
    "DF018": {
      "code": "DF018",
      "category": "desafio",
      "level": 5,
      "name": "Forjassombra · DF018",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "Reduza em 2 todo Dano recebido (mínimo 0).",
      "atq": 11,
      "def": 10,
      "pv": 20,
      "footnote": "Nenhum mar o afundaria; nenhuma lâmina o corta fundo."
    },
    "DF019": {
      "code": "DF019",
      "category": "desafio",
      "level": 5,
      "name": "Forjassombra · DF019",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "Ganha Bônus de Ataque equivalente aos PV perdidos, até o limite de 5.",
      "atq": 9,
      "def": 9,
      "pv": 19,
      "footnote": "Protege algo em seu peito que ninguém teve coragem de nomear."
    },
    "DF020": {
      "code": "DF020",
      "category": "desafio",
      "level": 5,
      "name": "Forjassombra · DF020",
      "challengeClass": "Forjassombra",
      "isUncommon": false,
      "passive": "Ao chegar à metade do PV máximo, ganha Bônus de Ataque +2 permanentemente.",
      "atq": 14,
      "def": 9,
      "pv": 17,
      "footnote": "Dizem que foi o primeiro Forjassombra  e pode muito bem ser o último a cair."
    },
    "DE001": {
      "code": "DE001",
      "category": "desafio",
      "level": 1,
      "name": "Erratum · DE001",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "Ao ser derrotado, quem estiver engajado descarta 1 carta de Habilidade aleatória da mão.",
      "atq": 3,
      "def": 2,
      "pv": 5,
      "footnote": "Fragmento de algo que talvez nunca tenha sido inteiro."
    },
    "DE002": {
      "code": "DE002",
      "category": "desafio",
      "level": 2,
      "name": "Erratum · DE002",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "A Persona engajada joga precisa Revelar toda Carta de Habilidade que comprar.",
      "atq": 4,
      "def": 3,
      "pv": 8,
      "footnote": "Não ataca. Apenas observa  e, de algum modo, sabe."
    },
    "DE003": {
      "code": "DE003",
      "category": "desafio",
      "level": 3,
      "name": "Erratum · DE003",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "Ao ser atacado, o atacante recebe o último Mal que causou nesta partida.",
      "atq": 6,
      "def": 4,
      "pv": 12,
      "footnote": "Reflete não a luz, mas as intenções de quem o encara."
    },
    "DE004": {
      "code": "DE004",
      "category": "desafio",
      "level": 3,
      "name": "Erratum · DE004",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "Uma vez por rodada, copie o último Bônus de Ataque ou Defesa concedido no jogo.",
      "atq": 5,
      "def": 5,
      "pv": 12,
      "footnote": "Imita perfeitamente o que toca, por um instante breve demais."
    },
    "DE005": {
      "code": "DE005",
      "category": "desafio",
      "level": 3,
      "name": "Erratum · DE005",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "Ao entrar em jogo, fica imune a Dano por Habilidades durante duas rodadas.",
      "atq": 5,
      "def": 5,
      "pv": 11,
      "footnote": "Fala com muitas vozes, nenhuma delas a sua."
    },
    "DE006": {
      "code": "DE006",
      "category": "desafio",
      "level": 3,
      "name": "Erratum · DE006",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "Uma vez por rodada, ataca uma Persona não engajada usando Ataque 4. Depois, ataca normalmente. Cada Ataque é considerado uma ação.",
      "atq": 7,
      "def": 3,
      "pv": 11,
      "footnote": "Existe nas frestas entre uma decisão e a próxima."
    },
    "DE007": {
      "code": "DE007",
      "category": "desafio",
      "level": 3,
      "name": "Erratum · DE007",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "A Persona engajada não pode trocar de Postura.",
      "atq": 6,
      "def": 5,
      "pv": 10,
      "footnote": "Mostra sempre o mesmo rosto  o seu, distorcido."
    },
    "DE008": {
      "code": "DE008",
      "category": "desafio",
      "level": 3,
      "name": "Erratum · DE008",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "Quem comprar este monstro será obrigado a engajar. Isso pode exceder o limite de engajamento, caso o nível da Persona não comporte dois monstros engajados.",
      "atq": 6,
      "def": 4,
      "pv": 15,
      "footnote": "Ninguém a convocou. Ela simplesmente apareceu."
    },
    "DE009": {
      "code": "DE009",
      "category": "desafio",
      "level": 4,
      "name": "Erratum · DE009",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "Quando uma Persona perde PV por seus ataques, também é obrigada a descartar uma carta da mão.",
      "atq": 8,
      "def": 6,
      "pv": 16,
      "footnote": "Cada dedo pertenceu a alguém que tentou detê-la."
    },
    "DE010": {
      "code": "DE010",
      "category": "desafio",
      "level": 4,
      "name": "Erratum · DE010",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "Ignora Bônus de Defesa do alvo. Se já for zero, Ataques efetivos causam Dano 1 adicional.",
      "atq": 9,
      "def": 5,
      "pv": 15,
      "footnote": "Onde deveria haver corpo, há apenas fome."
    },
    "DE011": {
      "code": "DE011",
      "category": "desafio",
      "level": 4,
      "name": "Erratum · DE011",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "Cada vez que usa uma Habilidade, a Persona engajada inverte seus valores de Ataque e Defesa. Bônus não são afetados.",
      "atq": 7,
      "def": 7,
      "pv": 14,
      "footnote": "O equilíbrio é uma confusão premeditada."
    },
    "DE012": {
      "code": "DE012",
      "category": "desafio",
      "level": 4,
      "name": "Erratum · DE012",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "Nenhuma Persona no cenário pode agir fora do seu turno enquanto ela estiver engajada.",
      "atq": 8,
      "def": 6,
      "pv": 18,
      "footnote": "Viu tudo o que aconteceu aqui antes. Não vai contar."
    },
    "DE013": {
      "code": "DE013",
      "category": "desafio",
      "level": 4,
      "name": "Erratum · DE013",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "Ao engajar, causa Dano 1 a TODOS no cenário, inclusive a si.",
      "atq": 8,
      "def": 7,
      "pv": 14,
      "footnote": "Tóxico."
    },
    "DE014": {
      "code": "DE014",
      "category": "desafio",
      "level": 4,
      "name": "Erratum · DE014",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "Uma vez por rodada, ao causar Dano, cure PV igual ao Bônus de Defesa do alvo.",
      "atq": 9,
      "def": 6,
      "pv": 13,
      "footnote": "Cresce a cada golpe que desfere."
    },
    "DE015": {
      "code": "DE015",
      "category": "desafio",
      "level": 5,
      "name": "Erratum · DE015",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "Para cada Persona no cenário, ganha +5 PV.",
      "atq": 10,
      "def": 8,
      "pv": 20,
      "footnote": "Existe fora das regras que o resto do mundo respeita."
    },
    "DE016": {
      "code": "DE016",
      "category": "desafio",
      "level": 5,
      "name": "Erratum · DE016",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "Quando chegar a 1PV, seu ataque é reduzido a 3, mas só pode ser derrotado por outro Desafio.",
      "atq": 11,
      "def": 7,
      "pv": 15,
      "footnote": "Esquece-se quem você era assim que termina com você."
    },
    "DE017": {
      "code": "DE017",
      "category": "desafio",
      "level": 5,
      "name": "Erratum · DE017",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "Quando os PV chegarem a 10, só pode ser Atingido (por Ataques ou Habilidade) por quem estiver engajado.",
      "atq": 10,
      "def": 8,
      "pv": 17,
      "footnote": "Quebra-se em partes que gritam mais alto que o todo."
    },
    "DE018": {
      "code": "DE018",
      "category": "desafio",
      "level": 5,
      "name": "Erratum · DE018",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "Ignora a ordem normal de turnos: age imediatamente após ser revelado. Se não posicionar (engajar), receba Dano 2.",
      "atq": 12,
      "def": 7,
      "pv": 17,
      "footnote": "Chegou antes de ser convocado. Ainda não sabemos como."
    },
    "DE019": {
      "code": "DE019",
      "category": "desafio",
      "level": 5,
      "name": "Erratum · DE019",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "Enquanto estiver engajado, o Mercado de Objetivos fica bloqueado.",
      "atq": 11,
      "def": 9,
      "pv": 16,
      "footnote": "Onde ela pisa, a própria vitória parece adiada."
    },
    "DE020": {
      "code": "DE020",
      "category": "desafio",
      "level": 5,
      "name": "O Erro Final",
      "challengeClass": "Erratum",
      "isUncommon": false,
      "passive": "Ao ser derrotado, revele e resolva imediatamente a próxima carta do deck de Desafio. Se fizer isso sozinho, suba 1 nível.",
      "atq": 13,
      "def": 8,
      "pv": 15,
      "footnote": "Talvez seja o último Erratum. Talvez seja só mais um começo."
    },
    "DI001": {
      "code": "DI001",
      "category": "desafio",
      "level": 1,
      "name": "Canário Girassol",
      "challengeClass": "Desafio Incomum",
      "isUncommon": true,
      "passive": "Ao posicionar, Revele o próximo Desafio e Preveja a próxima carta do deck de Cenário.",
      "atq": null,
      "def": null,
      "pv": null,
      "footnote": "Anuncia o tempo e guia os perdidos."
    },
    "DI002": {
      "code": "DI002",
      "category": "desafio",
      "level": 1,
      "name": "Lágrima da Aurora",
      "challengeClass": "Desafio Incomum",
      "isUncommon": true,
      "passive": "Guarde como uma das cinco cartas da mão ou use imediatamente para Curar 1. Se estiver guardada e você sofrer um Ataque, em vez disso, Cure 2.",
      "atq": null,
      "def": null,
      "pv": null,
      "footnote": "Um presente de um ser radiante."
    },
    "DI003": {
      "code": "DI003",
      "category": "desafio",
      "level": 2,
      "name": "Cascaruga",
      "challengeClass": "Desafio Incomum",
      "isUncommon": true,
      "passive": "Revele o topo de todos os decks, inclusive de habilidades, de todas as Personas, exceto o(s) seu(s). Não desvire até que sejam usados ou descartados.",
      "atq": null,
      "def": null,
      "pv": null,
      "footnote": "Ela viu tudo o que aconteceu aqui. E não esquece nada."
    },
    "DI004": {
      "code": "DI004",
      "category": "desafio",
      "level": 2,
      "name": "Espírito da Floresta",
      "challengeClass": "Desafio Incomum",
      "isUncommon": true,
      "passive": "Liberte-se de todas as Condições Negativas, inclusive aquelas impostas por você.",
      "atq": null,
      "def": null,
      "pv": null,
      "footnote": "Aparece apenas para os de alma pura. Ou para os que a perturbam."
    },
    "DI005": {
      "code": "DI005",
      "category": "desafio",
      "level": 3,
      "name": "Aurora",
      "challengeClass": "Desafio Incomum",
      "isUncommon": true,
      "passive": "Ao engajar, aplique Cura 2 próprio e descarte. Todas as Personas no Cenário recebem Cura 1 se estiverem com menos da metade dos PV.",
      "atq": null,
      "def": null,
      "pv": null,
      "footnote": "Seu canto é vivo e Cura feridas que os olhos não veem."
    },
    "DI006": {
      "code": "DI006",
      "category": "desafio",
      "level": 3,
      "name": "Espírito de Sersy",
      "challengeClass": "Desafio Incomum",
      "isUncommon": true,
      "passive": "Ao engajar, Preveja os dois próximos desafios. Se forem da mesma classe, você pode Revelar ambos e usar seu turno completo para derrotar um deles. Descarte o outro.",
      "atq": null,
      "def": null,
      "pv": null,
      "footnote": "Nenhum sacrifício será em vão para proteger o mundo em que amamos."
    },
    "DI007": {
      "code": "DI007",
      "category": "desafio",
      "level": 4,
      "name": "Matito",
      "challengeClass": "Desafio Incomum",
      "isUncommon": true,
      "passive": "Ao engajar, você pode descartar até 5 cartas de habilidade e comprar novas, sem custo.",
      "atq": null,
      "def": null,
      "pv": null,
      "footnote": "Era como se ele as vigiasse ou as quisesse caçar, mas o porta-harpa não demonstrava qualquer preocupação."
    },
    "DI008": {
      "code": "DI008",
      "category": "desafio",
      "level": 4,
      "name": "Corcel Negro",
      "challengeClass": "Desafio Incomum",
      "isUncommon": true,
      "passive": "Ao engajar, cavalgue no Corcel Negro para até dois cenários adjacentes, sem custo. Você não pode comprar outro desafio neste turno.",
      "atq": null,
      "def": null,
      "pv": null,
      "footnote": "Era o plano, ele pensou: quando o cavalo chegasse, ela partiria ao encontro da amiga, que a estaria esperando na Cachoeira das Auroras."
    },
    "DI009": {
      "code": "DI009",
      "category": "desafio",
      "level": 5,
      "name": "Aurora (Venerável)",
      "challengeClass": "Desafio Incomum",
      "isUncommon": true,
      "passive": "Ao engajar, aplique Cura 2 a todas as Personas no Cenário. Se a sua postura for Defensiva, apenas no seu caso, aplique Cura 3.",
      "atq": null,
      "def": null,
      "pv": null,
      "footnote": "Ela já viu o mundo mudar muitas vezes. E ainda canta."
    },
    "DI010": {
      "code": "DI010",
      "category": "desafio",
      "level": 5,
      "name": "Espada Laprov",
      "challengeClass": "Desafio Incomum",
      "isUncommon": true,
      "passive": "Ela tem Ataque e Iniciativa iguais aos seus. PV = 2 vezes seu nível + 5. Se derrotá-la, coloque-a na mesa e use-a para matar um monstro com um só golpe. Descarte após o uso.",
      "atq": null,
      "def": null,
      "pv": null,
      "footnote": "\"Vem para os meus braços, meu menino radiante!\" (CAROLL, L.)"
    },
    "HA001": {
      "code": "HA001",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Sal Amoníaco Oportunista",
      "type": "Poção",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 1 a um alvo.",
        "Se o alvo já estiver sob algum Mal, cause +1 de Dano."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": "Você pode Preparar esta poção, mantendo-a aberta na mesa para ação futura."
    },
    "HA002": {
      "code": "HA002",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Água-Forte Mal Rotulada",
      "type": "Poção",
      "fn": "Ofensiva",
      "commands": [
        "Ferimento: reduza em 1 a Defesa de um alvo no cenário por até 2 rodadas.",
        "Se o alvo já estava sob Ferimento antes desta carta e tem mais de uma ação por turno, ele recebe Fadiga: perde sua próxima ação padrão."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": "Você pode Preparar esta poção, mantendo-a aberta na mesa para ação futura."
    },
    "HA003": {
      "code": "HA003",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Láudano Diluído",
      "type": "Poção",
      "fn": "Ofensiva",
      "commands": [
        "Fadiga: um alvo no cenário perde sua próxima ação padrão.",
        "Se o alvo já estava sob Fadiga antes desta carta, aplique também Ferimento: reduza em 1 a Defesa dele por até 2 rodadas."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": "Você pode Preparar esta poção, mantendo-a aberta na mesa para ação futura."
    },
    "HA004": {
      "code": "HA004",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Alúmen Fixador",
      "type": "Poção",
      "fn": "Defensiva",
      "commands": [
        "Ganhe Bônus de Defesa +1 até o final do seu próximo turno.",
        "Não é possível Preparar esta poção."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA005": {
      "code": "HA005",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Bórax Vitrificante",
      "type": "Poção",
      "fn": "Defensiva",
      "commands": [
        "Ganhe Bônus de Defesa +2 até o final desta rodada.",
        "Não é possível Preparar esta poção."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA006": {
      "code": "HA006",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Sais Aromáticos",
      "type": "Poção",
      "fn": "Utilitária",
      "commands": [
        "Cura 1 em você mesmo.",
        "Se você tiver 2 PV ou menos, Cura 2."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": "Você pode Preparar esta poção, mantendo-a aberta na mesa para ação futura."
    },
    "HA007": {
      "code": "HA007",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Catalisador de Paciência",
      "type": "Poção",
      "fn": "Utilitária",
      "commands": [
        "Você precisa Preparar esta Poção.",
        "Em um turno posterior, compre 2 cartas do seu deck de Habilidades."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": "Você pode Preparar esta poção, mantendo-a aberta na mesa para ação futura."
    },
    "HA008": {
      "code": "HA008",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Salitre Premeditado",
      "type": "Poção",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 1 a um alvo.",
        "Se sua Postura ativa for Ofensiva, cause +1 de Dano."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA009": {
      "code": "HA009",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Espírito de Vinho",
      "type": "Poção",
      "fn": "Utilitária",
      "commands": [
        "Ganhe Bônus de Ataque +1 até o final do seu próximo turno."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA010": {
      "code": "HA010",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Carvão Ativado",
      "type": "Poção",
      "fn": "Utilitária",
      "commands": [
        "Remova 1 Mal de você mesmo, exceto Atordoamento."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA011": {
      "code": "HA011",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Unguento de Aloe Vera",
      "type": "Elixir",
      "fn": "Defensiva",
      "commands": [
        "Você recebe Bônus de Defesa +1.",
        "Em vez disso, você pode Descartar este Elixir para dar Bônus de Defesa +1 a uma Persona no mesmo Cenário até o final da próxima rodada."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA012": {
      "code": "HA012",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Extrato de Adelfa",
      "type": "Elixir",
      "fn": "Ofensiva",
      "commands": [
        "Seus Ataques efetivos aplicam Veneno: o alvo perde 1 PV no início de cada turno (não cumulativo).",
        "Em vez disso, você pode Descartar este Elixir para aplicar Veneno a uma Persona no mesmo Cenário, mas apenas fora de seu turno."
      ],
      "overload": "",
      "discardRule": "Descarte quando o Veneno se esgotar.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA013": {
      "code": "HA013",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Espinheiro Potável",
      "type": "Elixir",
      "fn": "Utilitária",
      "commands": [
        "Posicione esta carta ao custo de uma ou duas ações. Você também pode fazer isso fora do seu turno.",
        "Ao ser alvo de um Ataque, o escudo devolve 1 ou 2 de Dano ao atacante, de acordo com o custo utilizado."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA014": {
      "code": "HA014",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Licor de Mandrágora",
      "type": "Elixir",
      "fn": "Utilitária",
      "commands": [
        "Ignore os efeitos de Medo e Silêncio aplicados a você ou a um aliado.",
        "Em vez disso, você pode Descartar este Elixir para remover Medo ou Silêncio de uma Persona no mesmo Cenário."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": "A condição continua marcada para sinergia, mas seu efeito é ignorado enquanto durar."
    },
    "HA015": {
      "code": "HA015",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Frasco de Ginseng",
      "type": "Elixir",
      "fn": "Defensiva",
      "commands": [
        "Ganhe Cura 1 no início de cada um dos seus próximos 2 turnos.",
        "Se ainda não tiver curado, em vez disso, você pode aplicar Cura 2 em um aliado, durante o turno dele."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA016": {
      "code": "HA016",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Óleo de Vitríolo",
      "type": "Poção",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 3.",
        "Este Dano ignora Bônus de Defesa (mas não a Defesa base)."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA017": {
      "code": "HA017",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Éter de Sala de Leitura",
      "type": "Poção",
      "fn": "Ofensiva",
      "commands": [
        "Silêncio: um alvo no cenário não pode conjurar Habilidades por até 2 rodadas.",
        "Se ele não Atacar, o efeito se encerra na primeira rodada."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA018": {
      "code": "HA018",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Clorofórmio",
      "type": "Poção",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 1.",
        "Se o alvo já estiver sob Ferimento, ele recebe Atordoamento: perde o próximo turno completo. Caso contrário, ele recebe Ferimento: reduza em 1 a Defesa dele por até 2 rodadas."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA019": {
      "code": "HA019",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Tintura de Dupla Utilidade",
      "type": "Poção",
      "fn": "Utilitária",
      "commands": [
        "Escolha: aplique Cura 2 em você mesmo, ou remova um Mal de um aliado no mesmo cenário."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA020": {
      "code": "HA020",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Troca Equivalente Aproximada",
      "type": "Poção",
      "fn": "Utilitária",
      "commands": [
        "Descarte até 2 cartas da sua mão.",
        "Compre 1 carta do seu deck para cada carta descartada desta forma."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA021": {
      "code": "HA021",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Decocto de Casca de Carvalho",
      "type": "Elixir",
      "fn": "Defensiva",
      "commands": [
        "Você recebe Bônus de Defesa +2.",
        "Em vez disso, você pode Descartar este Elixir para dar Bônus de Defesa +2 a uma Persona no mesmo Cenário até o final da rodada."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA022": {
      "code": "HA022",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Seiva de Dragoeiro",
      "type": "Elixir",
      "fn": "Defensiva",
      "commands": [
        "Na primeira vez em que você chegaria a 0 PV, ganhe Cura 3 em vez disso.",
        "Em vez disso, você pode Descartar este Elixir para aplicar Cura 2 a uma Persona no mesmo Cenário."
      ],
      "overload": "",
      "discardRule": "Descarte em até 3 rodadas ou após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA023": {
      "code": "HA023",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Fumigação de Urtiga",
      "type": "Elixir",
      "fn": "Ofensiva",
      "commands": [
        "Ferimento: reduz em 1 a Defesa de Personas ou monstros que entrarem no cenário.",
        "Em vez disso, você pode Descartar este Elixir para aplicar o Ferimento a uma Persona no mesmo Cenário."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA024": {
      "code": "HA024",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Tônico de Guaraná",
      "type": "Elixir",
      "fn": "Utilitária",
      "commands": [
        "Ganhe Bônus de Ataque +1 e Bônus de Defesa +1.",
        "Em vez disso, você pode Descartar este Elixir para dar Bônus de Ataque +1 a uma Persona no mesmo Cenário até o final do próximo turno dela."
      ],
      "overload": "",
      "discardRule": "Descarte em até 3 rodadas ou até você trocar de Postura.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA025": {
      "code": "HA025",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Precisão Calculada",
      "type": "Conhecimento",
      "fn": "Utilitária",
      "commands": [
        "Se sua Postura ativa for Ofensiva, seus ataques causam +2 de Dano."
      ],
      "overload": "",
      "discardRule": "Quando desejar, troque por outro Conhecimento.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA026": {
      "code": "HA026",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Tratado da Convalescença Sentada",
      "type": "Conhecimento",
      "fn": "Utilitária",
      "commands": [
        "Se sua Postura ativa for Defensiva, ganhe Cura 1 no início de cada um dos seus turnos."
      ],
      "overload": "",
      "discardRule": "Quando desejar, troque por outro Conhecimento.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA027": {
      "code": "HA027",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 3,
      "isSpecialE": false,
      "is": null,
      "name": "Eureca Parcial",
      "type": "Conhecimento",
      "fn": "Utilitária",
      "commands": [
        "Uma vez por turno, ao usar uma Poção, compre 1 carta de Habilidade adicional.",
        "Se desejar, descarte a Habilidade para remover um efeito negativo."
      ],
      "overload": "",
      "discardRule": "Quando desejar, troque por outro Conhecimento.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA028": {
      "code": "HA028",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 3,
      "isSpecialE": false,
      "is": null,
      "name": "Teoria da Destilação Recorrente",
      "type": "Conhecimento",
      "fn": "Utilitária",
      "commands": [
        "Toda vez que você usar uma carta do tipo Elixir, Retorne uma Poção do seu descarte.",
        "Se fizer isso, junte o descarte e embaralhe o deck novamente."
      ],
      "overload": "",
      "discardRule": "Quando desejar, troque por outro Conhecimento.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA029": {
      "code": "HA029",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 5,
      "isSpecialE": false,
      "is": null,
      "name": "Aparato de Mãos Livres",
      "type": "Conhecimento",
      "fn": "Utilitária",
      "commands": [
        "Uma vez por turno, você pode usar 1 Poção sem gastar uma ação padrão.",
        "Alternativamente, você pode fazer isso com 1 Elixir uma única vez."
      ],
      "overload": "",
      "discardRule": "Quando desejar, troque por outro Conhecimento.",
      "favoredPeriod": "",
      "footnote": "Trocar novamente para este Conhecimento restabelece os parâmetros."
    },
    "HA030": {
      "code": "HA030",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 5,
      "isSpecialE": false,
      "is": null,
      "name": "Apêndice de Contingência",
      "type": "Conhecimento",
      "fn": "Utilitária",
      "commands": [
        "Quando seus PV seriam reduzidos a 0 ou menos, sacrifique sua próxima ação para ficar com 1 PV.",
        "Se desejar, descarte duas cartas da mão para evitar a perda de PV."
      ],
      "overload": "",
      "discardRule": "Você pode trocar por outro conhecimento antes de usar.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HA031": {
      "code": "HA031",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 2,
      "isSpecialE": true,
      "is": null,
      "name": "Água-Régia",
      "type": "Poção",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 2.",
        "Se o alvo estiver sob Ferimento, cause +1 de Dano."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": "Esta carta é liberada no nível 2, se você já tiver conquistado uma dessas posturas: Albedo, Nigredo."
    },
    "HA032": {
      "code": "HA032",
      "category": "habilidade",
      "className": "Alquimista",
      "level": 4,
      "isSpecialE": true,
      "is": null,
      "name": "Óleo Essencial Instável",
      "type": "Elixir",
      "fn": "Ofensiva",
      "commands": [
        "Toda vez que você usar uma Poção, cause Dano 1 a um alvo no mesmo Cenário. Se for ofensiva ganhe Bônus de Ataque +1 nesta rodada.",
        "No final de cada rodada, se não tiver atacado (Atacar) nenhum alvo, sofra Dano 1 ou descarte este Elixir."
      ],
      "overload": "",
      "discardRule": "Descarte imediatamente ao trocar de Conhecimento.",
      "favoredPeriod": "",
      "footnote": "Esta carta é liberada no nível 4, se você já tiver conquistado uma dessas posturas: Citrinitas, Rubedo."
    },
    "HB001": {
      "code": "HB001",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Clamor da Alvorada",
      "type": "Encantamento",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 2 a um alvo.",
        "Se for Alvorada, em vez disso, cause Dano 3."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "Alvorada",
      "footnote": ""
    },
    "HB002": {
      "code": "HB002",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Abrigo Encantado",
      "type": "Encantamento",
      "fn": "Defensiva",
      "commands": [
        "Ganhe Bônus de Defesa +1 nesta rodada.",
        "Se for Dia, em vez disso, ganhe Bônus de Defesa +2."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "Dia",
      "footnote": ""
    },
    "HB003": {
      "code": "HB003",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Brisa do Crepúsculo",
      "type": "Encantamento",
      "fn": "Utilitária",
      "commands": [
        "Aplique Cura 1",
        "Se for Crepúsculo, Cura 2 ou Cura 1 a dois alvos."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "Crepúsculo",
      "footnote": ""
    },
    "HB004": {
      "code": "HB004",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Terror Noturno",
      "type": "Encantamento",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 1.",
        "Medo: Se for Noite, o alvo tem seu Ataque reduzido a zero nesta rodada. Bônus permanecem aplicáveis."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "Noite",
      "footnote": ""
    },
    "HB005": {
      "code": "HB005",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Natureza da Ametista",
      "type": "Encantamento",
      "fn": "Defensiva",
      "commands": [
        "Até o fim da rodada, ganhe Bônus de Defesa 0 (+1 a cada 5 PV perdidos).",
        "Você não precisa descartar se não for atacado."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HB006": {
      "code": "HB006",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Segredo do Orvalho",
      "type": "Encantamento",
      "fn": "Utilitária",
      "commands": [
        "Cura 1 em você ou aliado.",
        "Se for Alvorada, Cura 2."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "Alvorada",
      "footnote": ""
    },
    "HB007": {
      "code": "HB007",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Chama Persistente",
      "type": "Encantamento",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 1.",
        "Ferimento: Se for Dia, o alvo perde 1 PV a cada rodada, até o limite do seu nível (Máx. PV perdido = seu nível ao conjurar)."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "Dia",
      "footnote": ""
    },
    "HB008": {
      "code": "HB008",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Névoa Crepuscular",
      "type": "Encantamento",
      "fn": "Defensiva",
      "commands": [
        "Ganhe Bônus de Defesa +1 nesta rodada.",
        "Se for Crepúsculo, ignore Ataques menores do que o valor do seu nível."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "Crepúsculo",
      "footnote": ""
    },
    "HB009": {
      "code": "HB009",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Bálsamo da Lua",
      "type": "Encantamento",
      "fn": "Utilitária",
      "commands": [
        "Cura 1 em um aliado.",
        "Se for Noite, cure +1."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "Noite",
      "footnote": ""
    },
    "HB010": {
      "code": "HB010",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Caçador de Feras",
      "type": "Encantamento",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 1.",
        "Se for um monstro, cause Dano 2."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HB011": {
      "code": "HB011",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Lâmina de Ametista",
      "type": "Artefato",
      "fn": "Ofensiva",
      "commands": [
        "Concede ao usuário Bônus de Ataque +1.",
        "Você pode Emprestar este Artefato fora do seu turno."
      ],
      "overload": "",
      "discardRule": "Substitua ou Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": "Somente artefato em uso por Persona."
    },
    "HB012": {
      "code": "HB012",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Grilhão de Prata",
      "type": "Artefato",
      "fn": "Ofensiva",
      "commands": [
        "Fadiga: Ao Atacar, se o alvo não perder PV, perderá a próxima ação.",
        "Você pode Emprestar este Artefato fora do seu turno."
      ],
      "overload": "",
      "discardRule": "Substitua ou Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": "Somente artefato em uso por Persona."
    },
    "HB013": {
      "code": "HB013",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Broche do Guardião",
      "type": "Artefato",
      "fn": "Defensiva",
      "commands": [
        "Concede ao usuário Bônus de Defesa +1. Se for você, o BdD é +2.",
        "Você pode Emprestar este Artefato fora do seu turno."
      ],
      "overload": "",
      "discardRule": "Substitua ou Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": "Somente artefato em uso por Persona."
    },
    "HB014": {
      "code": "HB014",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Amuleto da Purificação",
      "type": "Artefato",
      "fn": "Defensiva",
      "commands": [
        "O usuário ignora o primeiro Mal recebido na rodada.",
        "Você pode Emprestar este Artefato fora do seu turno."
      ],
      "overload": "",
      "discardRule": "Substitua ou Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": "Somente artefato em uso por Persona."
    },
    "HB015": {
      "code": "HB015",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Raiz Petrificada do Akuanuá",
      "type": "Artefato",
      "fn": "Utilitária",
      "commands": [
        "Concede ao usuário Cura 1 no início do seu turno.",
        "Você pode Emprestar este Artefato fora do seu turno."
      ],
      "overload": "",
      "discardRule": "Substitua ou Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": "Somente artefato em uso por Persona."
    },
    "HB016": {
      "code": "HB016",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Escudo da Aurora",
      "type": "Encantamento",
      "fn": "Defensiva",
      "commands": [
        "Ganhe Bônus de Defesa +2.",
        "Se for Alvorada, ganhe +1 adicional."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "Alvorada",
      "footnote": ""
    },
    "HB017": {
      "code": "HB017",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Luz Purificadora",
      "type": "Encantamento",
      "fn": "Utilitária",
      "commands": [
        "Remova 1 Mal de um aliado.",
        "Se for Dia, cure 1 também."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "Dia",
      "footnote": ""
    },
    "HB018": {
      "code": "HB018",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Encantamento · HB018",
      "type": "Encantamento",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 2.",
        "Se for Crepúsculo, aplique Ferimento 1."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "Crepúsculo",
      "footnote": ""
    },
    "HB019": {
      "code": "HB019",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Encantamento · HB019",
      "type": "Encantamento",
      "fn": "Defensiva",
      "commands": [
        "Ganhe Bônus de Defesa +2.",
        "Se for Noite, também ganhe Bônus de Ataque +1."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "Noite",
      "footnote": ""
    },
    "HB020": {
      "code": "HB020",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Encantamento · HB020",
      "type": "Encantamento",
      "fn": "Utilitária",
      "commands": [
        "Aplique Cura 2 em um alvo, inclusive em cenários adjacentes.",
        "Ou remova um Mal com a chave Veneno ou Ferimento no seu cenário."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HB021": {
      "code": "HB021",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Artefato · HB021",
      "type": "Artefato",
      "fn": "Ofensiva",
      "commands": [
        "Concede ao usuário Bônus de Ataque +2.",
        "Você pode Emprestar este Artefato fora do seu turno."
      ],
      "overload": "",
      "discardRule": "Substitua ou Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": "Somente artefato em uso por Persona."
    },
    "HB022": {
      "code": "HB022",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Artefato · HB022",
      "type": "Artefato",
      "fn": "Ofensiva",
      "commands": [
        "Silêncio: Ao Atacar uma Persona, o alvo deverá descartar uma habilidade da mão ou da mesa.",
        "Você pode Emprestar este Artefato fora do seu turno."
      ],
      "overload": "",
      "discardRule": "Substitua ou Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": "Somente artefato em uso por Persona."
    },
    "HB023": {
      "code": "HB023",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Artefato · HB023",
      "type": "Artefato",
      "fn": "Defensiva",
      "commands": [
        "Concede ao usuário Bônus de Defesa +2.",
        "Você pode Emprestar este Artefato fora do seu turno."
      ],
      "overload": "",
      "discardRule": "Substitua ou Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": "Somente artefato em uso por Persona."
    },
    "HB024": {
      "code": "HB024",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Artefato · HB024",
      "type": "Artefato",
      "fn": "Defensiva",
      "commands": [
        "O usuário remove um Mal no início do seu turno.",
        "Você pode Emprestar este Artefato fora do seu turno."
      ],
      "overload": "",
      "discardRule": "Substitua ou Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": "Somente artefato em uso por Persona."
    },
    "HB025": {
      "code": "HB025",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Artefato · HB025",
      "type": "Artefato",
      "fn": "Utilitária",
      "commands": [
        "O usuário pode comprar 1 carta extra ao final do turno.",
        "Você pode Emprestar este Artefato fora do seu turno."
      ],
      "overload": "",
      "discardRule": "Substitua ou Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": "Somente artefato em uso por Persona."
    },
    "HB026": {
      "code": "HB026",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Chama da Alvorada",
      "type": "Vínculo",
      "fn": "Ofensiva",
      "commands": [
        "Substitui a habilidade passiva da Postura.",
        "Ferimento: Seus Ataques e Habilidades que causarem Dano removem 1 de Defesa do alvo (ou 2 em Alvorada) uma única vez por alvo."
      ],
      "overload": "",
      "discardRule": "Substitua ou Descarte quando desejar.",
      "favoredPeriod": "Alvorada",
      "footnote": "Apenas um Vínculo pode estar ativo por vez."
    },
    "HB027": {
      "code": "HB027",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Prece à Luz Solar",
      "type": "Vínculo",
      "fn": "Defensiva",
      "commands": [
        "Substitui a habilidade passiva da Postura.",
        "Seu Bônus de Defesa é dobrado à luz do Dia (Se for 0, recebe +1)."
      ],
      "overload": "",
      "discardRule": "Substitua ou Descarte quando desejar.",
      "favoredPeriod": "Dia",
      "footnote": "Apenas um Vínculo pode estar ativo por vez."
    },
    "HB028": {
      "code": "HB028",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Encantamento do Crepúsculo",
      "type": "Vínculo",
      "fn": "Utilitária",
      "commands": [
        "Substitui a habilidade passiva da Postura.",
        "Você pode Retornar um Encantamento do descarte uma vez por turno. No Crepúsculo, isso não conta como ação."
      ],
      "overload": "",
      "discardRule": "Substitua ou Descarte quando desejar.",
      "favoredPeriod": "Crepúsculo",
      "footnote": "Apenas um Vínculo pode estar ativo por vez."
    },
    "HB029": {
      "code": "HB029",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Véu da Noite",
      "type": "Vínculo",
      "fn": "Utilitária",
      "commands": [
        "Substitui a habilidade passiva da Postura.",
        "Cura 1 no início de cada um dos seus turnos. Cura 2 à Noite."
      ],
      "overload": "",
      "discardRule": "Substitua ou Descarte quando desejar.",
      "favoredPeriod": "Noite",
      "footnote": "Apenas um Vínculo pode estar ativo por vez."
    },
    "HB030": {
      "code": "HB030",
      "category": "habilidade",
      "className": "Bruxo",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "O Chamado do Tempo",
      "type": "Vínculo",
      "fn": "Utilitária",
      "commands": [
        "Substitui a habilidade passiva da Postura.",
        "1 vez por rodada, permita a um aliado repetir o efeito de uma Habilidade Utilitária que ele tenha usado nesta rodada."
      ],
      "overload": "",
      "discardRule": "Substitua ou Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": "Apenas um Vínculo pode estar ativo por vez."
    },
    "HC001": {
      "code": "HC001",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Técnica · HC001",
      "type": "Técnica",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 1.",
        "Aplique Corrupção: Ferrugem ao alvo."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": "Ferrugem: o alvo sofre +1 de Dano na próxima vez que for atingido."
    },
    "HC002": {
      "code": "HC002",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Técnica · HC002",
      "type": "Técnica",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 1.",
        "Aplique Corrupção: Fratura ao alvo."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": "Fratura: reduz a Defesa do alvo em 1."
    },
    "HC003": {
      "code": "HC003",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Técnica · HC003",
      "type": "Técnica",
      "fn": "Utilitária",
      "commands": [
        "Aplique Corrupção: Vertigem a um alvo."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": "Vertigem: o alvo joga por último na próxima rodada, ignorando Iniciativa."
    },
    "HC004": {
      "code": "HC004",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Técnica · HC004",
      "type": "Técnica",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 1.",
        "Aplique Corrupção: Consumição ao alvo."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": "Consumição: o alvo perde 1 PV no início do seu próximo turno."
    },
    "HC005": {
      "code": "HC005",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Técnica · HC005",
      "type": "Técnica",
      "fn": "Utilitária",
      "commands": [
        "Aplique Corrupção: Ruína a um alvo."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": "Ruína: se o alvo atacar enquanto durar, ele sofre 1 de Dano."
    },
    "HC006": {
      "code": "HC006",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Técnica · HC006",
      "type": "Técnica",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 2."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC007": {
      "code": "HC007",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Técnica · HC007",
      "type": "Técnica",
      "fn": "Ofensiva",
      "commands": [
        "Pague 1 PV.",
        "Cause Dano 3."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC008": {
      "code": "HC008",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Técnica · HC008",
      "type": "Técnica",
      "fn": "Utilitária",
      "commands": [
        "Se o seu Bônus de Ataque for exatamente +1, use esta carta para desferir um Ataque 5 (+1).",
        "Isto conta como uma ação de Ataque. Custo: 2PV."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC009": {
      "code": "HC009",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Técnica · HC009",
      "type": "Técnica",
      "fn": "Utilitária",
      "commands": [
        "Pague 1 PV.",
        "Cura 2."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC010": {
      "code": "HC010",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Técnica · HC010",
      "type": "Técnica",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 1.",
        "Se você tiver menos da metade do seu PV máximo, cause +1 de Dano."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC011": {
      "code": "HC011",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Disciplina · HC011",
      "type": "Disciplina",
      "fn": "Defensiva",
      "commands": [
        "Consuma 1 PV para receber Bônus de Defesa +2 até o fim da rodada."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC012": {
      "code": "HC012",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Disciplina · HC012",
      "type": "Disciplina",
      "fn": "Utilitária",
      "commands": [
        "Consuma 1PV por turno para ignorar Fadiga aplicada a você."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC013": {
      "code": "HC013",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Disciplina · HC013",
      "type": "Disciplina",
      "fn": "Defensiva",
      "commands": [
        "Cura 1 no início do próximo turno.",
        "Se você tiver matado um monstro nesta rodada, Cura 3."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC014": {
      "code": "HC014",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Disciplina · HC014",
      "type": "Disciplina",
      "fn": "Utilitária",
      "commands": [
        "Ignore o primeiro Atordoamento que receber."
      ],
      "overload": "",
      "discardRule": "Descarte ao ser acionada ou após 2 rodadas.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC015": {
      "code": "HC015",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Disciplina · HC015",
      "type": "Disciplina",
      "fn": "Defensiva",
      "commands": [
        "Reduza em 1 todo Dano recebido de Ataques ou Habilidades.",
        "Quando isso acontecer, descarte no final da rodada."
      ],
      "overload": "",
      "discardRule": "Você pode descartar antes.",
      "favoredPeriod": "",
      "footnote": "1 para cada instância de dano."
    },
    "HC016": {
      "code": "HC016",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Técnica · HC016",
      "type": "Técnica",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 2.",
        "Aplique Corrupção: Colapso ao alvo."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": "Colapso: ignore o próximo Bônus de Defesa do alvo."
    },
    "HC017": {
      "code": "HC017",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Técnica · HC017",
      "type": "Técnica",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 2.",
        "Aplique Corrupção: Cicatriz ao alvo."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": "Cicatriz: o alvo recebe +1 de todo Dano sofrido enquanto durar."
    },
    "HC018": {
      "code": "HC018",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Técnica · HC018",
      "type": "Técnica",
      "fn": "Utilitária",
      "commands": [
        "Aplique Corrupção: Cegueira a um alvo.",
        "Consuma 3 PV para aplicar uma segunda vez, somente se o alvo tiver o seu nível ou mais."
      ],
      "overload": "",
      "discardRule": "Descarte após ser efetivo.",
      "favoredPeriod": "",
      "footnote": "Cegueira: o Ataque do alvo é reduzido à metade (arred. para baixo) enquanto durar."
    },
    "HC019": {
      "code": "HC019",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Técnica · HC019",
      "type": "Técnica",
      "fn": "Ofensiva",
      "commands": [
        "Pague 1 PV.",
        "Cause Dano 2 e aplique Corrupção: Fratura ao alvo."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC020": {
      "code": "HC020",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Técnicas Aprimoradas",
      "type": "Técnica",
      "fn": "Utilitária",
      "commands": [
        "Mantenha uma corrupção ativa por mais uma rodada."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC021": {
      "code": "HC021",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Disciplina · HC021",
      "type": "Disciplina",
      "fn": "Defensiva",
      "commands": [
        "Ganhe Bônus de Defesa +2."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC022": {
      "code": "HC022",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Vontade de Ferro",
      "type": "Disciplina",
      "fn": "Utilitária",
      "commands": [
        "Ignore Medo e Silêncio aplicados a você.",
        "Se você receber essas Condições Negativas, ainda que involuntariamente, pode consumir 2 PV (no total) para devolvê-las a quem aplicou."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": "Ver Seção 14.4 do Manual"
    },
    "HC023": {
      "code": "HC023",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Disciplina · HC023",
      "type": "Disciplina",
      "fn": "Defensiva",
      "commands": [
        "Pague 1 PV no início do seu turno.",
        "Ganhe Bônus de Defesa +2 nesta rodada."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC024": {
      "code": "HC024",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Disciplina · HC024",
      "type": "Disciplina",
      "fn": "Utilitária",
      "commands": [
        "Enquanto na mesa, você não pode ser Atordoado."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC025": {
      "code": "HC025",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Disciplina · HC025",
      "type": "Disciplina",
      "fn": "Defensiva",
      "commands": [
        "Enquanto na mesa, reduza em 1 todo Dano recebido (mínimo 0)."
      ],
      "overload": "",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC026": {
      "code": "HC026",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 2,
      "isSpecialE": false,
      "is": null,
      "name": "Disciplina · HC026",
      "type": "Disciplina",
      "fn": "Utilitária",
      "commands": [
        "Uma vez por partida, pague metade do seu PV atual (arred. para baixo).",
        "Remova todas as Condições Negativas de você e de um aliado no mesmo cenário."
      ],
      "overload": "",
      "discardRule": "Descarte ao ser acionada, ou permanece na mesa até então.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC027": {
      "code": "HC027",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 2,
      "isSpecialE": false,
      "is": null,
      "name": "Disciplina · HC027",
      "type": "Disciplina",
      "fn": "Defensiva",
      "commands": [
        "Enquanto na mesa, ignore o primeiro Mal que você receber a cada rodada."
      ],
      "overload": "",
      "discardRule": "Permanece na mesa até ser descartada voluntariamente.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC028": {
      "code": "HC028",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 2,
      "isSpecialE": false,
      "is": null,
      "name": "Disciplina · HC028",
      "type": "Disciplina",
      "fn": "Utilitária",
      "commands": [
        "Uma vez por partida, se você chegaria a 0 PV, fique com 1 PV em vez disso.",
        "Quando isso ocorrer, aplique Corrupção: Consumição a si mesmo."
      ],
      "overload": "",
      "discardRule": "Descarte ao ser acionada, ou permanece na mesa até então.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC029": {
      "code": "HC029",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 2,
      "isSpecialE": false,
      "is": null,
      "name": "Disciplina · HC029",
      "type": "Disciplina",
      "fn": "Ofensiva",
      "commands": [
        "Pague metade do seu PV atual (arred. para baixo).",
        "Cause Dano igual ao valor pago."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HC030": {
      "code": "HC030",
      "category": "habilidade",
      "className": "Corruptor",
      "level": 2,
      "isSpecialE": false,
      "is": null,
      "name": "Disciplina · HC030",
      "type": "Disciplina",
      "fn": "Utilitária",
      "commands": [
        "Enquanto na mesa, seu limite de Corrupções Ativas aumenta em 1."
      ],
      "overload": "",
      "discardRule": "Permanece na mesa até ser descartada voluntariamente.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF001": {
      "code": "HF001",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 1,
      "name": "Ímpeto Solar",
      "type": "Feitiço",
      "fn": "Utilitária",
      "commands": [
        "Ganhe Bônus de Ataque +1"
      ],
      "overload": "Fadiga: perca 1 ação na próxima rodada e descarte.",
      "discardRule": "Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF002": {
      "code": "HF002",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 1,
      "name": "Calor Vital",
      "type": "Feitiço",
      "fn": "Utilitária",
      "commands": [
        "Cura 1 em você mesmo."
      ],
      "overload": "Sofra 1 de Dano.",
      "discardRule": "Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF003": {
      "code": "HF003",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 1,
      "name": "Couraça de Âmbar",
      "type": "Feitiço",
      "fn": "Defensiva",
      "commands": [
        "Ganhe Bônus de Defesa +1"
      ],
      "overload": "Aplique Ferimento 1 a si mesmo.",
      "discardRule": "Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF004": {
      "code": "HF004",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 1,
      "name": "Raio Incandescente",
      "type": "Feitiço",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 1 a um alvo."
      ],
      "overload": "Sofra Dano 1.",
      "discardRule": "Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF005": {
      "code": "HF005",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 1,
      "name": "Temor do Zênite",
      "type": "Feitiço",
      "fn": "Utilitária",
      "commands": [
        "Medo: o alvo fica impedido de usar Bônus de Combate nesta rodada."
      ],
      "overload": "Aplique Medo a si mesmo também.",
      "discardRule": "Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": "Bônus de Combate: Bônus de Ataque e Bônus de Defesa."
    },
    "HF006": {
      "code": "HF006",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 1,
      "name": "Fulgor Errante",
      "type": "Feitiço",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 1 a cada monstro engajado ou a uma Persona."
      ],
      "overload": "Cause Dano 1 a todos no Cenário, inclusive a si mesmo.",
      "discardRule": "Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF007": {
      "code": "HF007",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 1,
      "name": "Acúmulo Fulgurante",
      "type": "Feitiço",
      "fn": "Utilitária",
      "commands": [
        "Amplifique o seu Bônus de Ataque em +1."
      ],
      "overload": "Descarte 1 carta da sua mão.",
      "discardRule": "Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF008": {
      "code": "HF008",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 1,
      "name": "Domínio do Equinócio",
      "type": "Feitiço",
      "fn": "Utilitária",
      "commands": [
        "Seu Bônus de Ataque fica igual ao seu Bônus de Defesa, se o segundo for maior."
      ],
      "overload": "Use as duas ações do turno para causar Dano igual ao seu Bônus de Defesa.",
      "discardRule": "Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF009": {
      "code": "HF009",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 2,
      "name": "Lança Solar",
      "type": "Feitiço",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 2 a um alvo."
      ],
      "overload": "Sofra Dano 1.",
      "discardRule": "Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF010": {
      "code": "HF010",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 2,
      "name": "Muralha de Ouro",
      "type": "Feitiço",
      "fn": "Defensiva",
      "commands": [
        "Ganhe Bônus de Defesa +2 nesta rodada."
      ],
      "overload": "Ferimento: Reduza a sua Defesa em 1, em vez disso.",
      "discardRule": "Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF011": {
      "code": "HF011",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 2,
      "name": "Pavor do Meio-Dia",
      "type": "Feitiço",
      "fn": "Utilitária",
      "commands": [
        "Aplique Medo a um alvo."
      ],
      "overload": "Aplique Medo a todos os alvos no cenário, incluindo aliados.",
      "discardRule": "Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF012": {
      "code": "HF012",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 2,
      "name": "Cicatriz Radiante",
      "type": "Feitiço",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 1 e aplique Ferimento 1 a um alvo."
      ],
      "overload": "Aplique Ferimento 1 a si mesmo também.",
      "discardRule": "Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF013": {
      "code": "HF013",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 2,
      "name": "Transfusão Solar",
      "type": "Feitiço",
      "fn": "Utilitária",
      "commands": [
        "Posicionar na mesa não custa nenhuma ação. Não tem efeito sem Sobrecarga."
      ],
      "overload": "Quando causar dano, Cura 2 próprio. Cura 1 a outra Persona no Cenário.",
      "discardRule": "Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": "Inclusive dano autoinfligido. Lembre-se do IS 2 da carta."
    },
    "HF014": {
      "code": "HF014",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 2,
      "name": "Equilíbrio Coronário",
      "type": "Feitiço",
      "fn": "Defensiva",
      "commands": [
        "Ganhe Bônus de Defesa +1 e Bônus de Ataque +1."
      ],
      "overload": "Em vez disso, ganhe apenas Bônus de Defesa +2.",
      "discardRule": "Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": "Bônus de Ataque de outra fonte permanece, mesmo em sobrecarga."
    },
    "HF015": {
      "code": "HF015",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 2,
      "name": "Estilhaços de Luz",
      "type": "Feitiço",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 1 a até 2 alvos no mesmo cenário."
      ],
      "overload": "O efeito aumenta para Dano 2, mas monstros engajados com você são imunes.",
      "discardRule": "Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF016": {
      "code": "HF016",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 2,
      "name": "Clarividência Ardente",
      "type": "Feitiço",
      "fn": "Utilitária",
      "commands": [
        "Descarte diretamente da mão para comprar até duas cartas, sem recompor o deck."
      ],
      "overload": "Faça isso sem custo. Você ignora Curar nesta rodada.",
      "discardRule": "Descarte quando desejar.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF017": {
      "code": "HF017",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 3,
      "name": "Descarga Radiante",
      "type": "Feitiço",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 3 a um alvo."
      ],
      "overload": "Sofra Dano 1.",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF018": {
      "code": "HF018",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 3,
      "name": "Égide Cintilante",
      "type": "Feitiço",
      "fn": "Defensiva",
      "commands": [
        "Ganhe Bônus de Defesa +2."
      ],
      "overload": "Aplique Ferimento 1 a si mesmo.",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF019": {
      "code": "HF019",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 3,
      "name": "Frenesi do Zênite",
      "type": "Feitiço",
      "fn": "Utilitária",
      "commands": [
        "Ganhe Bônus de Ataque +2 até o final do seu próximo turno."
      ],
      "overload": "Aplique Fadiga 1 a si mesmo no início do seu próximo turno.",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF020": {
      "code": "HF020",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 3,
      "name": "Erupção Fotosférica",
      "type": "Feitiço",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 2 a todos os alvos no cenário, exceto você."
      ],
      "overload": "Cause +1 de Dano adicional a todos os alvos, incluindo aliados.",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF021": {
      "code": "HF021",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 3,
      "name": "Rejuvenescência Helíaca",
      "type": "Feitiço",
      "fn": "Utilitária",
      "commands": [
        "Cura 3 em você mesmo."
      ],
      "overload": "Descarte todas as suas cartas de Habilidade ativas na mesa.",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF022": {
      "code": "HF022",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 3,
      "name": "Dardo de Fogo Branco",
      "type": "Feitiço",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 2 a um alvo."
      ],
      "overload": "Sofra Dano 1.",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF023": {
      "code": "HF023",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 3,
      "name": "Rigidez Ígnea",
      "type": "Feitiço",
      "fn": "Defensiva",
      "commands": [
        "Ganhe Bônus de Defesa +2."
      ],
      "overload": "Bônus de Defesa +2 será o limite para todos no cenário nesta rodada.",
      "discardRule": "Descarte em até 2 rodadas.",
      "favoredPeriod": "",
      "footnote": "O efeito de sobrecarga não concede Bônus de Defesa, apenas limita em +2."
    },
    "HF024": {
      "code": "HF024",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 4,
      "name": "Chama Branca",
      "type": "Feitiço",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 3 a um alvo."
      ],
      "overload": "Sofra Dano 2.",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF025": {
      "code": "HF025",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 4,
      "name": "Fortaleza Apolínea",
      "type": "Feitiço",
      "fn": "Defensiva",
      "commands": [
        "Ganhe Bônus de Defesa +3."
      ],
      "overload": "Sua Defesa passa a valer zero, mas dobra o Valor do seu Bônus de Defesa.",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF026": {
      "code": "HF026",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 4,
      "name": "Purificação pelo Fogo",
      "type": "Feitiço",
      "fn": "Utilitária",
      "commands": [
        "Cura 3 em você mesmo e remova 1 Mal."
      ],
      "overload": "Aplique Fadiga 1 a si mesmo.",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF027": {
      "code": "HF027",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 4,
      "name": "Refração Caótica",
      "type": "Feitiço",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 2 a até 2 alvos no mesmo cenário."
      ],
      "overload": "Um dos alvos é escolhido aleatoriamente, podendo ser um aliado.",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF028": {
      "code": "HF028",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 4,
      "name": "Terror do Eclipse",
      "type": "Feitiço",
      "fn": "Utilitária",
      "commands": [
        "Aplique Medo e Fadiga 1 a um alvo."
      ],
      "overload": "Aplique Medo a si mesmo também.",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF029": {
      "code": "HF029",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 4,
      "name": "Pele de Ouro",
      "type": "Feitiço",
      "fn": "Defensiva",
      "commands": [
        "Ganhe Bônus de Defesa +2 e ignore o próximo Ferimento recebido."
      ],
      "overload": "Perca 1 PV ao final do turno.",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF030": {
      "code": "HF030",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 5,
      "name": "Lança da Coroa Solar",
      "type": "Feitiço",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 4 a um alvo."
      ],
      "overload": "Sofra 2 de Dano e aplique Fadiga 1 a si mesmo.",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF031": {
      "code": "HF031",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 5,
      "name": "Trono do Meio-Dia",
      "type": "Feitiço",
      "fn": "Defensiva",
      "commands": [
        "Ganhe Bônus de Defesa +4 nesta rodada."
      ],
      "overload": "Ao final da rodada, perca 2 PV.",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF032": {
      "code": "HF032",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 5,
      "name": "Coração de Fênix",
      "type": "Feitiço",
      "fn": "Utilitária",
      "commands": [
        "Cura 5 em você mesmo."
      ],
      "overload": "Descarte 2 cartas aleatórias da sua mão.",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HF033": {
      "code": "HF033",
      "category": "habilidade",
      "className": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "is": 6,
      "name": "Apoteose Solar",
      "type": "Feitiço",
      "fn": "Ofensiva",
      "commands": [
        "Cause Dano 5 a todos os alvos no cenário, exceto você."
      ],
      "overload": "Cause também 3 de Dano a si mesmo.",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": "É matematicamente impossível usar esta carta sem Sobrecarregar no nível 0."
    },
    "HM001": {
      "code": "HM001",
      "category": "habilidade",
      "className": "Mago",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Ruptura Exponencial",
      "type": "Magia Arcana",
      "fn": "Ofensiva",
      "commands": [
        "Causa Dano 1 a um alvo.",
        "Se o alvo for um monstro, causa +1 para cada carta descartada nesta roda."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM002": {
      "code": "HM002",
      "category": "habilidade",
      "className": "Mago",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Paradoxo do Retorno",
      "type": "Magia Arcana",
      "fn": "Ofensiva",
      "commands": [
        "Realize um Ataque com Bônus de Ataque +1.",
        "Se for a sua primeira ação do turno, Retorne a carta para sua mão."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM003": {
      "code": "HM003",
      "category": "habilidade",
      "className": "Mago",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Reação em Cadeia",
      "type": "Magia Arcana",
      "fn": "Ofensiva",
      "commands": [
        "Causa Dano 1 a um alvo.",
        "Ou descarte uma carta da mão para causar Dano 2, em vez disso."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM004": {
      "code": "HM004",
      "category": "habilidade",
      "className": "Mago",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Corolário Hemodinâmico",
      "type": "Magia Arcana",
      "fn": "Ofensiva",
      "commands": [
        "Ferimento: Escolha um alvo no cenário para remover 1 de Defesa até o final do seu turno.",
        "Se você Atingir o alvo em seguida, receba Cura 1, mesmo que ele não perca PV."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": "Atingir: com Ataque ou Habilidade."
    },
    "HM005": {
      "code": "HM005",
      "category": "habilidade",
      "className": "Mago",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Teorema da Violência",
      "type": "Magia Arcana",
      "fn": "Ofensiva",
      "commands": [
        "Realize um Ataque 5 a um único alvo."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM006": {
      "code": "HM006",
      "category": "habilidade",
      "className": "Mago",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Campo de Força",
      "type": "Magia Arcana",
      "fn": "Defensiva",
      "commands": [
        "Descarte (esta carta) da mão a qualquer tempo para evitar perder até 2 PV em um único Ataque.",
        "Ou coloque-a em jogo para receber Bônus de Defesa 2 contra monstros engajados no próximo Ataque."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": "Não é necessário descartar se não for atacado."
    },
    "HM007": {
      "code": "HM007",
      "category": "habilidade",
      "className": "Mago",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Reconstituição Hermética",
      "type": "Magia Arcana",
      "fn": "Defensiva",
      "commands": [
        "Consome as duas ações do turno para receber Cura 1 + 1 por nível.",
        "Não pode ser aplicado a outra Persona ou monstro."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM008": {
      "code": "HM008",
      "category": "habilidade",
      "className": "Mago",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Negação Ontológica",
      "type": "Magia Arcana",
      "fn": "Defensiva",
      "commands": [
        "Coloque esta carta na mesa, descarte-a para ignorar completamente um Ataque."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM009": {
      "code": "HM009",
      "category": "habilidade",
      "className": "Mago",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Contramedida Arcana",
      "type": "Magia Arcana",
      "fn": "Defensiva",
      "commands": [
        "Aumenta em +1 seu Bônus de Defesa até o fim da rodada.",
        "(Se o seu Bônus de Defesa for zero, considere +1)"
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM010": {
      "code": "HM010",
      "category": "habilidade",
      "className": "Mago",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Escudo Arcano",
      "type": "Magia Arcana",
      "fn": "Defensiva",
      "commands": [
        "Recebe um Escudo igual ao seu Bônus de Defesa.",
        "O Dano recebido (perda de PV) será aplicado primeiro no Escudo. O Escudo segue na rodada, até ser consumido."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": "Se seu Bônus de Defesa for zero, não há Escudo."
    },
    "HM011": {
      "code": "HM011",
      "category": "habilidade",
      "className": "Mago",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Alinhamento Celeste",
      "type": "Magia Arcana",
      "fn": "Utilitária",
      "commands": [
        "Acrescente 1+ ao seu Bônus de Ataque ou Bônus de Defesa até o fim da rodada."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM012": {
      "code": "HM012",
      "category": "habilidade",
      "className": "Mago",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Destino Inexorável",
      "type": "Magia Arcana",
      "fn": "Utilitária",
      "commands": [
        "Coloque esta carta na mesa ao custo de uma ação. Ela dura até que você precise dela ou decida descartar.",
        "Descarte a qualquer tempo para ignorar efeitos que impediriam você de atacar ou causar dano."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM013": {
      "code": "HM013",
      "category": "habilidade",
      "className": "Mago",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Catalisador Arcano",
      "type": "Magia Arcana",
      "fn": "Utilitária",
      "commands": [
        "Na próxima ação do turno, acrescente +1 ao(s) valor(es) de qualquer Magia Arcana.",
        "Não tem efeito como segunda ação do turno."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM014": {
      "code": "HM014",
      "category": "habilidade",
      "className": "Mago",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Experimento Arcano",
      "type": "Magia Arcana",
      "fn": "Utilitária",
      "commands": [
        "Se algum monstro no cenário estiver sob Ferimento, você Cura 1 ao Atacar qualquer alvo.",
        "A partir do nível 3, você pode Retornar esta carta para a mão, em vez de descartar."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM015": {
      "code": "HM015",
      "category": "habilidade",
      "className": "Mago",
      "level": 0,
      "isSpecialE": false,
      "is": null,
      "name": "Presságio",
      "type": "Magia Arcana",
      "fn": "Utilitária",
      "commands": [
        "Coloque esta carta na mesa e outra (da mão) sobre ela. A carta de cima ficará Preparada para uso posterior.",
        "Elas serão descartadas juntas."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM016": {
      "code": "HM016",
      "category": "habilidade",
      "className": "Mago",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Ruptura Exponencial II",
      "type": "Magia Arcana II",
      "fn": "Ofensiva II",
      "commands": [
        "Causa Dano 1 a 2 alvos.",
        "Se os alvos forem monstros, causa +1 para cada carta descartada nesta roda."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM017": {
      "code": "HM017",
      "category": "habilidade",
      "className": "Mago",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Campo de Força II",
      "type": "Magia Arcana II",
      "fn": "Defensiva II",
      "commands": [
        "Descarte da mão a qualquer tempo para evitar completamente um Ataque bem sucedido."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM018": {
      "code": "HM018",
      "category": "habilidade",
      "className": "Mago",
      "level": 1,
      "isSpecialE": false,
      "is": null,
      "name": "Poltroneria  Perspicaz",
      "type": "Magia Arcana",
      "fn": "Utilitária",
      "commands": [
        "Realize a próxima ação em um cenário adjacente.",
        "Ou mova-se para um cenário livre, mesmo que esteja engajado. Eventual monstro engajado será descartado."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM019": {
      "code": "HM019",
      "category": "habilidade",
      "className": "Mago",
      "level": 2,
      "isSpecialE": false,
      "is": null,
      "name": "Paradoxo do Retorno II",
      "type": "Magia Arcana II",
      "fn": "Ofensiva II",
      "commands": [
        "Realize um Ataque com Bônus de Ataque +2.",
        "Se o seu Bônus de Ataque for maior ou igual a 3, em vez disso, cause Dano 5 a um alvo."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM020": {
      "code": "HM020",
      "category": "habilidade",
      "className": "Mago",
      "level": 2,
      "isSpecialE": false,
      "is": null,
      "name": "Reconstituição Hermética II",
      "type": "Magia Arcana II",
      "fn": "Defensiva II",
      "commands": [
        "Consome as duas ações do turno para aplicar Cura 1 + 2 por nível.",
        "Não pode ultrapassar o seu cenário, mesmo que outra carta diga o contrário."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM021": {
      "code": "HM021",
      "category": "habilidade",
      "className": "Mago",
      "level": 2,
      "isSpecialE": false,
      "is": null,
      "name": "Prognóstico da Retribuição",
      "type": "Magia Arcana",
      "fn": "Utilitária",
      "commands": [
        "Se você receber Cura por outra Persona, ela será Curada na mesma quantidade.",
        "Se até o seu próximo turno, você não receber cura, descarte para receber Cura 1. Isso não conta como ação."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM022": {
      "code": "HM022",
      "category": "habilidade",
      "className": "Mago",
      "level": 3,
      "isSpecialE": false,
      "is": null,
      "name": "Reação em Cadeia II",
      "type": "Magia Arcana II",
      "fn": "Ofensiva II",
      "commands": [
        "Causa Dano 1 (+1 por alvo) a quantos monstros houver no cenário."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": "Ex.: se houver 3 monstros, cause Dano 3 em cada um deles."
    },
    "HM023": {
      "code": "HM023",
      "category": "habilidade",
      "className": "Mago",
      "level": 3,
      "isSpecialE": false,
      "is": null,
      "name": "Negação Ontológica II",
      "type": "Magia Arcana II",
      "fn": "Defensiva II",
      "commands": [
        "Por uma rodada, você ignora o primeiro Ataque de cada Persona ou monstro."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM024": {
      "code": "HM024",
      "category": "habilidade",
      "className": "Mago",
      "level": 3,
      "isSpecialE": false,
      "is": null,
      "name": "Prova de Generosidade",
      "type": "Magia Arcana",
      "fn": "Utilitária",
      "commands": [
        "Sacrifique seu Bônus de Defesa nesta rodada para curar outra Persona no mesmo valor.",
        "Esta carta não pode ser descartada até o fim da rodada."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM025": {
      "code": "HM025",
      "category": "habilidade",
      "className": "Mago",
      "level": 4,
      "isSpecialE": false,
      "is": null,
      "name": "Corolário Hemodinâmico II",
      "type": "Magia Arcana II",
      "fn": "Ofensiva II",
      "commands": [
        "Ferimento: Escolha um alvo no cenário para remover 2 de Defesa até o final do seu turno.",
        "Se você Atingir o alvo em seguida, receba Cura 1, mesmo que ele não perca PV."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM026": {
      "code": "HM026",
      "category": "habilidade",
      "className": "Mago",
      "level": 4,
      "isSpecialE": false,
      "is": null,
      "name": "Contramedida Arcana II",
      "type": "Magia Arcana II",
      "fn": "Defensiva II",
      "commands": [
        "Aumenta em +1 seu Bônus de Defesa até o fim da rodada. II",
        "(Se o seu Bônus de Defesa for zero, considere +1) II"
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM027": {
      "code": "HM027",
      "category": "habilidade",
      "className": "Mago",
      "level": 4,
      "isSpecialE": false,
      "is": null,
      "name": "Reversão Causal",
      "type": "Magia Arcana",
      "fn": "Utilitária",
      "commands": [
        "Escolha uma Magia Arcana no seu descarte e Retorne-a para sua mão.",
        "Se a carta retornada for de nível 0, você pode realizar imediatamente seu Comando 1, sem custo de ação."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM028": {
      "code": "HM028",
      "category": "habilidade",
      "className": "Mago",
      "level": 5,
      "isSpecialE": false,
      "is": null,
      "name": "Teorema da Violência II",
      "type": "Magia Arcana II",
      "fn": "Ofensiva II",
      "commands": [
        "Realize um Ataque 5 a um único alvo.",
        "Se ele morrer, realize outro. Tudo conta como uma única ação."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM029": {
      "code": "HM029",
      "category": "habilidade",
      "className": "Mago",
      "level": 5,
      "isSpecialE": false,
      "is": null,
      "name": "Escudo Arcano II",
      "type": "Magia Arcana II",
      "fn": "Defensiva II",
      "commands": [
        "Recebe um Escudo igual a 30% do seu PV máximo. Dura até duas rodadas ou até perder PV.",
        "O Dano recebido (perda de PV) será aplicado primeiro no Escudo. O Escudo segue na rodada, até ser consumido."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM030": {
      "code": "HM030",
      "category": "habilidade",
      "className": "Mago",
      "level": 5,
      "isSpecialE": false,
      "is": null,
      "name": "Elemento Surpresa",
      "type": "Magia Arcana",
      "fn": "Utilitária",
      "commands": [
        "Manipule a iniciativa de um Monstro ou Persona nesta rodada.",
        "Você pode usar esta carta fora do seu turno."
      ],
      "overload": "",
      "discardRule": "Descarte após o uso.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM031": {
      "code": "HM031",
      "category": "habilidade",
      "className": "Mago",
      "level": 6,
      "isSpecialE": false,
      "is": null,
      "name": "Especialização: Mestre Arcanista",
      "type": "Magia Arcana",
      "fn": "Ofensiva",
      "commands": [
        "Posicione esta carta na Mesa. Somente uma Especialização é permitida por vez.",
        "Quando causar Dano com uma Magia Arcana Ofensiva, cause +1. Se o alvo morrer, cause Dano 1 em outro alvo no cenário."
      ],
      "overload": "",
      "discardRule": "Substitua ou descarte.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM032": {
      "code": "HM032",
      "category": "habilidade",
      "className": "Mago",
      "level": 6,
      "isSpecialE": false,
      "is": null,
      "name": "Especialização: Ocultista",
      "type": "Magia Arcana",
      "fn": "Defensiva",
      "commands": [
        "Posicione esta carta na Mesa. Somente uma Especialização é permitida por vez.",
        "Silêncio: Se sofrer dano de uma Persona, ela não poderá usar habilidades por duas ações, independentemente da rodada."
      ],
      "overload": "",
      "discardRule": "Substitua ou descarte.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "HM033": {
      "code": "HM033",
      "category": "habilidade",
      "className": "Mago",
      "level": 6,
      "isSpecialE": false,
      "is": null,
      "name": "Especialização: Astromante",
      "type": "Magia Arcana",
      "fn": "Utilitária",
      "commands": [
        "Posicione esta carta na Mesa. Somente uma Especialização é permitida por vez.",
        "Você pode Retornar as cartas utilitárias para a mão, em vez de descartar."
      ],
      "overload": "",
      "discardRule": "Substitua ou descarte.",
      "favoredPeriod": "",
      "footnote": ""
    },
    "PU001": {
      "code": "PU001",
      "category": "postura",
      "owner": "Universal",
      "level": 0,
      "isSpecialE": false,
      "name": "Concentração",
      "fn": "Ofensiva",
      "passive": "Se você não foi alvo de nenhum Ataque desde o seu último turno, ganhe Bônus de Ataque +1.",
      "ini": 20,
      "iniOptions": [
        20
      ],
      "atq": 3,
      "def": 1,
      "ls": null,
      "footnote": ""
    },
    "PU002": {
      "code": "PU002",
      "category": "postura",
      "owner": "Universal",
      "level": 0,
      "isSpecialE": false,
      "name": "Exaustão",
      "fn": "Ofensiva",
      "passive": "Uma vez por alvo, ao causar Dano, aplique Fadiga 1.",
      "ini": 30,
      "iniOptions": [
        30
      ],
      "atq": 3,
      "def": 1,
      "ls": null,
      "footnote": ""
    },
    "PU003": {
      "code": "PU003",
      "category": "postura",
      "owner": "Universal",
      "level": 0,
      "isSpecialE": false,
      "name": "Firmeza",
      "fn": "Defensiva",
      "passive": "Reduza em 1 todo Dano recebido com uso de habilidades (inclusive de monstros).",
      "ini": 50,
      "iniOptions": [
        50
      ],
      "atq": 1,
      "def": 3,
      "ls": null,
      "footnote": ""
    },
    "PU004": {
      "code": "PU004",
      "category": "postura",
      "owner": "Universal",
      "level": 0,
      "isSpecialE": false,
      "name": "Prontidão",
      "fn": "Defensiva",
      "passive": "No início do seu turno, remova Fadiga própria.",
      "ini": 60,
      "iniOptions": [
        60
      ],
      "atq": 1,
      "def": 3,
      "ls": null,
      "footnote": ""
    },
    "PU005": {
      "code": "PU005",
      "category": "postura",
      "owner": "Universal",
      "level": 0,
      "isSpecialE": false,
      "name": "Hipertrofia",
      "fn": "Utilitária",
      "passive": "Depois da primeira vez que for atacado a cada rodada, ganhe Bônus de Defesa +1.",
      "ini": 10,
      "iniOptions": [
        10
      ],
      "atq": 2,
      "def": 2,
      "ls": null,
      "footnote": ""
    },
    "PU006": {
      "code": "PU006",
      "category": "postura",
      "owner": "Universal",
      "level": 0,
      "isSpecialE": false,
      "name": "Resiliência",
      "fn": "Utilitária",
      "passive": "No início do seu turno, se estiver com menos da metade do PV máximo, ganhe Cura 1.",
      "ini": 40,
      "iniOptions": [
        40
      ],
      "atq": 2,
      "def": 2,
      "ls": null,
      "footnote": ""
    },
    "PU007": {
      "code": "PU007",
      "category": "postura",
      "owner": "Universal",
      "level": 1,
      "isSpecialE": false,
      "name": "Contrapeso",
      "fn": "Ofensiva",
      "passive": "Se não usou habilidade ofensiva, ganhe Bônus de Ataque +1 na segunda ação do turno.",
      "ini": 21,
      "iniOptions": [
        21
      ],
      "atq": 4,
      "def": 2,
      "ls": null,
      "footnote": ""
    },
    "PU008": {
      "code": "PU008",
      "category": "postura",
      "owner": "Universal",
      "level": 1,
      "isSpecialE": false,
      "name": "Cicatrização",
      "fn": "Defensiva",
      "passive": "Ignore o primeiro Ferimento recebido a cada rodada.",
      "ini": 61,
      "iniOptions": [
        61
      ],
      "atq": 2,
      "def": 4,
      "ls": null,
      "footnote": ""
    },
    "PU009": {
      "code": "PU009",
      "category": "postura",
      "owner": "Universal",
      "level": 1,
      "isSpecialE": false,
      "name": "Tolerância",
      "fn": "Utilitária",
      "passive": "No início do seu turno, se sua mão tiver 3 cartas ou menos, compre 1 carta extra.",
      "ini": 31,
      "iniOptions": [
        31
      ],
      "atq": 3,
      "def": 3,
      "ls": null,
      "footnote": ""
    },
    "PU010": {
      "code": "PU010",
      "category": "postura",
      "owner": "Universal",
      "level": 1,
      "isSpecialE": false,
      "name": "Egrégora",
      "fn": "Utilitária",
      "passive": "Se houver ao menos uma Persona no mesmo cenário, ganhe Bônus de Ataque +1.",
      "ini": 32,
      "iniOptions": [
        32
      ],
      "atq": 3,
      "def": 3,
      "ls": null,
      "footnote": ""
    },
    "PU011": {
      "code": "PU011",
      "category": "postura",
      "owner": "Universal",
      "level": 2,
      "isSpecialE": false,
      "name": "Exposição",
      "fn": "Ofensiva",
      "passive": "Ao causar Dano a um alvo sob Ferimento, cause +1 de Dano.",
      "ini": 22,
      "iniOptions": [
        22
      ],
      "atq": 5,
      "def": 2,
      "ls": null,
      "footnote": ""
    },
    "PU012": {
      "code": "PU012",
      "category": "postura",
      "owner": "Universal",
      "level": 2,
      "isSpecialE": false,
      "name": "Sabedoria",
      "fn": "Defensiva",
      "passive": "Enquanto ativa, você não pode ser Atordoado.",
      "ini": 62,
      "iniOptions": [
        62
      ],
      "atq": 2,
      "def": 5,
      "ls": null,
      "footnote": ""
    },
    "PU013": {
      "code": "PU013",
      "category": "postura",
      "owner": "Universal",
      "level": 2,
      "isSpecialE": false,
      "name": "Tenacidade",
      "fn": "Utilitária",
      "passive": "Uma vez por rodada, ignore o primeiro Mal recebido.",
      "ini": 41,
      "iniOptions": [
        41
      ],
      "atq": 4,
      "def": 4,
      "ls": null,
      "footnote": ""
    },
    "PU014": {
      "code": "PU014",
      "category": "postura",
      "owner": "Universal",
      "level": 2,
      "isSpecialE": false,
      "name": "Adaptação",
      "fn": "Utilitária",
      "passive": "Se estiver com menos da metade do PV máximo, ganhe Bônus de Ataque +1 e Bônus de Defesa +1.",
      "ini": 42,
      "iniOptions": [
        42
      ],
      "atq": 3,
      "def": 4,
      "ls": null,
      "footnote": ""
    },
    "PU015": {
      "code": "PU015",
      "category": "postura",
      "owner": "Universal",
      "level": 3,
      "isSpecialE": false,
      "name": "Hiperfoco",
      "fn": "Ofensiva",
      "passive": "Uma vez por rodada, ao usar uma Habilidade Ofensiva, cause +1 de Dano.",
      "ini": 23,
      "iniOptions": [
        23
      ],
      "atq": 6,
      "def": 3,
      "ls": null,
      "footnote": ""
    },
    "PU016": {
      "code": "PU016",
      "category": "postura",
      "owner": "Universal",
      "level": 3,
      "isSpecialE": false,
      "name": "Consistência",
      "fn": "Defensiva",
      "passive": "Reduza em 1 todo Dano recebido (mínimo 0).",
      "ini": 70,
      "iniOptions": [
        70
      ],
      "atq": 2,
      "def": 6,
      "ls": null,
      "footnote": ""
    },
    "PU017": {
      "code": "PU017",
      "category": "postura",
      "owner": "Universal",
      "level": 3,
      "isSpecialE": false,
      "name": "Tortura",
      "fn": "Utilitária",
      "passive": "Se o alvo do seu Ataque estiver sob Veneno, cause +1 de Dano.",
      "ini": 43,
      "iniOptions": [
        43
      ],
      "atq": 5,
      "def": 5,
      "ls": null,
      "footnote": ""
    },
    "PU018": {
      "code": "PU018",
      "category": "postura",
      "owner": "Universal",
      "level": 3,
      "isSpecialE": false,
      "name": "Retaliação",
      "fn": "Utilitária",
      "passive": "Na primeira vez que for atacado a cada rodada, devolva 1 de Dano ao atacante.",
      "ini": 51,
      "iniOptions": [
        51
      ],
      "atq": 4,
      "def": 5,
      "ls": null,
      "footnote": ""
    },
    "PU019": {
      "code": "PU019",
      "category": "postura",
      "owner": "Universal",
      "level": 4,
      "isSpecialE": false,
      "name": "Intimidação",
      "fn": "Ofensiva",
      "passive": "Ao causar Dano, aplique Medo ao alvo (uma vez por rodada).",
      "ini": 24,
      "iniOptions": [
        24
      ],
      "atq": 7,
      "def": 3,
      "ls": null,
      "footnote": ""
    },
    "PU020": {
      "code": "PU020",
      "category": "postura",
      "owner": "Universal",
      "level": 4,
      "isSpecialE": false,
      "name": "Destreza",
      "fn": "Defensiva",
      "passive": "Ignore o primeiro Ferimento e a primeira Fadiga recebidos a cada rodada.",
      "ini": 71,
      "iniOptions": [
        71
      ],
      "atq": 3,
      "def": 7,
      "ls": null,
      "footnote": ""
    },
    "PU021": {
      "code": "PU021",
      "category": "postura",
      "owner": "Universal",
      "level": 4,
      "isSpecialE": false,
      "name": "Premonição",
      "fn": "Utilitária",
      "passive": "No início do seu turno, Preveja até duas cartas do topo seu deck de Habilidade.",
      "ini": 52,
      "iniOptions": [
        52
      ],
      "atq": 5,
      "def": 6,
      "ls": null,
      "footnote": ""
    },
    "PU022": {
      "code": "PU022",
      "category": "postura",
      "owner": "Universal",
      "level": 4,
      "isSpecialE": false,
      "name": "Medicina",
      "fn": "Utilitária",
      "passive": "Uma vez por rodada, cure 1 PV em um aliado no mesmo cenário.",
      "ini": 53,
      "iniOptions": [
        53
      ],
      "atq": 6,
      "def": 5,
      "ls": null,
      "footnote": ""
    },
    "PU023": {
      "code": "PU023",
      "category": "postura",
      "owner": "Universal",
      "level": 5,
      "isSpecialE": false,
      "name": "Fragilização",
      "fn": "Ofensiva",
      "passive": "Se o alvo tiver menos da metade do PV máximo, cause +2 de Dano.",
      "ini": 25,
      "iniOptions": [
        25
      ],
      "atq": 8,
      "def": 4,
      "ls": null,
      "footnote": ""
    },
    "PU024": {
      "code": "PU024",
      "category": "postura",
      "owner": "Universal",
      "level": 5,
      "isSpecialE": false,
      "name": "Robustez",
      "fn": "Defensiva",
      "passive": "Reduza em 2 todo Dano recebido (mínimo 0).",
      "ini": 80,
      "iniOptions": [
        80
      ],
      "atq": 4,
      "def": 8,
      "ls": null,
      "footnote": ""
    },
    "PU025": {
      "code": "PU025",
      "category": "postura",
      "owner": "Universal",
      "level": 5,
      "isSpecialE": false,
      "name": "Purificação",
      "fn": "Utilitária",
      "passive": "No início do seu turno, remova 1 Mal de você mesmo.",
      "ini": 63,
      "iniOptions": [
        63
      ],
      "atq": 6,
      "def": 7,
      "ls": null,
      "footnote": ""
    },
    "PU026": {
      "code": "PU026",
      "category": "postura",
      "owner": "Universal",
      "level": 5,
      "isSpecialE": false,
      "name": "Determinação",
      "fn": "Utilitária",
      "passive": "Uma vez por rodada, ignore Silêncio ou Medo recebido.",
      "ini": 64,
      "iniOptions": [
        64
      ],
      "atq": 7,
      "def": 6,
      "ls": null,
      "footnote": ""
    },
    "PU027": {
      "code": "PU027",
      "category": "postura",
      "owner": "Universal",
      "level": 6,
      "isSpecialE": false,
      "name": "Soberania",
      "fn": "Ofensiva",
      "passive": "Uma vez por partida, ao derrotar um alvo, ganhe Bônus de Ataque +1 pelo restante da partida.",
      "ini": 26,
      "iniOptions": [
        26
      ],
      "atq": 9,
      "def": 4,
      "ls": null,
      "footnote": ""
    },
    "PU028": {
      "code": "PU028",
      "category": "postura",
      "owner": "Universal",
      "level": 6,
      "isSpecialE": false,
      "name": "Sobrevivência",
      "fn": "Defensiva",
      "passive": "Uma vez por partida, ao chegar a 0 PV ou menos, fique com 1 PV em vez disso.",
      "ini": 90,
      "iniOptions": [
        90
      ],
      "atq": 4,
      "def": 9,
      "ls": null,
      "footnote": ""
    },
    "PU029": {
      "code": "PU029",
      "category": "postura",
      "owner": "Universal",
      "level": 6,
      "isSpecialE": false,
      "name": "Hipermnésia",
      "fn": "Utilitária",
      "passive": "Aumente o limite da mão para 6 cartas.",
      "ini": 72,
      "iniOptions": [
        72
      ],
      "atq": 7,
      "def": 8,
      "ls": null,
      "footnote": ""
    },
    "PU030": {
      "code": "PU030",
      "category": "postura",
      "owner": "Universal",
      "level": 6,
      "isSpecialE": false,
      "name": "Mimetismo",
      "fn": "Utilitária",
      "passive": "Uma vez por rodada, repita o efeito da última Habilidade que você usou, sem pagar custos adicionais.",
      "ini": 73,
      "iniOptions": [
        73
      ],
      "atq": 8,
      "def": 7,
      "ls": null,
      "footnote": ""
    },
    "PA001": {
      "code": "PA001",
      "category": "postura",
      "owner": "Alquimista",
      "level": 0,
      "isSpecialE": true,
      "name": "Nigredo",
      "fn": "Utilitária",
      "passive": "Você pode sacrificar até 3 cartas da mão (por rodada, após o seu turno) para evitar perder até 3 PV (+ seu nível) por carta. Você morrerá se, por qualquer razão, ficar com 0 cartas.",
      "ini": 22,
      "iniOptions": [
        22
      ],
      "atq": 2,
      "def": 1,
      "ls": null,
      "footnote": "Ver Manual, seção 13.1."
    },
    "PA002": {
      "code": "PA002",
      "category": "postura",
      "owner": "Alquimista",
      "level": 0,
      "isSpecialE": true,
      "name": "Albedo",
      "fn": "Utilitária",
      "passive": "Se você não tiver um conhecimento ativo, eleve o seu limite de Habilidades da mão para 6. Você pode Retornar para a mão habilidades em Preparação.",
      "ini": 22,
      "iniOptions": [
        22
      ],
      "atq": 2,
      "def": 2,
      "ls": null,
      "footnote": "Ver Manual, seção 13.1."
    },
    "PA003": {
      "code": "PA003",
      "category": "postura",
      "owner": "Alquimista",
      "level": 0,
      "isSpecialE": true,
      "name": "Citrinitas",
      "fn": "Utilitária",
      "passive": "Esta postura pode ser considerada Ofensiva, Defensiva ou Utilitária, conforme for conveniente. Anuncie a Iniciativa desejada (11, 22 ou 33) no começo da rodada.",
      "ini": 11,
      "iniOptions": [
        11,
        22,
        33
      ],
      "atq": 3,
      "def": 2,
      "ls": null,
      "footnote": "Ver Manual, seção 13.1."
    },
    "PA004": {
      "code": "PA004",
      "category": "postura",
      "owner": "Alquimista",
      "level": 0,
      "isSpecialE": true,
      "name": "Rubedo",
      "fn": "Utilitária",
      "passive": "Em vez de Descartar, se desejar, Retorne para a mão suas Poções e Elixires. Respeite o limite de cartas na mão.",
      "ini": 22,
      "iniOptions": [
        22
      ],
      "atq": 3,
      "def": 3,
      "ls": null,
      "footnote": "Ver Manual, seção 13.1."
    },
    "PA005": {
      "code": "PA005",
      "category": "postura",
      "owner": "Alquimista",
      "level": 0,
      "isSpecialE": true,
      "name": "Cauda Pavonis",
      "fn": "Utilitária",
      "passive": "Uma vez por turno, você pode preparar uma Poção para outra Persona gratuitamente. Para ela, usar terá o custo normal, de uma ação. Se ela não usar, descarte no seu turno.",
      "ini": 22,
      "iniOptions": [
        22
      ],
      "atq": 4,
      "def": 3,
      "ls": null,
      "footnote": "Ver Manual, seção 13.1."
    },
    "PA006": {
      "code": "PA006",
      "category": "postura",
      "owner": "Alquimista",
      "level": 0,
      "isSpecialE": true,
      "name": "Solve et Coagula",
      "fn": "Utilitária",
      "passive": "No começo do turno, você pode descartar todas as suas habilidades, da mão e da mesa, para embaralhar e comprar a mão inteira novamente. Isso não conta como uma ação.",
      "ini": 22,
      "iniOptions": [
        22
      ],
      "atq": 4,
      "def": 4,
      "ls": null,
      "footnote": "Ver Manual, seção 13.1."
    },
    "PA007": {
      "code": "PA007",
      "category": "postura",
      "owner": "Alquimista",
      "level": 0,
      "isSpecialE": true,
      "name": "Lapis Philosophorum",
      "fn": "Utilitária",
      "passive": "Efeito Persistente: Seus Conhecimentos não precisam mais ser comprados e não ocupam espaço na mão, mas substituir um Conhecimento custa uma ação. Descartar esta postura não desativa o efeito; para desativar, retire a postura da partida após um evento de Progressão.",
      "ini": 22,
      "iniOptions": [
        22
      ],
      "atq": 5,
      "def": 5,
      "ls": null,
      "footnote": "Ver Manual, seção 13.1."
    },
    "PC001": {
      "code": "PC001",
      "category": "postura",
      "owner": "Corruptor",
      "level": 0,
      "isSpecialE": false,
      "name": "Marca do Recruta",
      "fn": "Utilitária",
      "passive": "Ao pagar PV como custo de uma Habilidade, pague 1 PV a menos (mínimo 1).",
      "ini": 44,
      "iniOptions": [
        44
      ],
      "atq": 2,
      "def": 1,
      "ls": null,
      "footnote": ""
    },
    "PC002": {
      "code": "PC002",
      "category": "postura",
      "owner": "Corruptor",
      "level": 1,
      "isSpecialE": false,
      "name": "Disciplina de Ictínea",
      "fn": "Utilitária",
      "passive": "Ignore a primeira Fadiga que receber a cada rodada.",
      "ini": 44,
      "iniOptions": [
        44
      ],
      "atq": 2,
      "def": 2,
      "ls": null,
      "footnote": ""
    },
    "PC003": {
      "code": "PC003",
      "category": "postura",
      "owner": "Corruptor",
      "level": 2,
      "isSpecialE": false,
      "name": "Sangue Frio",
      "fn": "Utilitária",
      "passive": "Se você tiver menos da metade do seu PV máximo (o da Ficha de Classe), ganhe Bônus de Defesa +1.",
      "ini": 44,
      "iniOptions": [
        44
      ],
      "atq": 3,
      "def": 2,
      "ls": null,
      "footnote": ""
    },
    "PC004": {
      "code": "PC004",
      "category": "postura",
      "owner": "Corruptor",
      "level": 3,
      "isSpecialE": false,
      "name": "Resiliência Forjada",
      "fn": "Utilitária",
      "passive": "Sempre que pagar PV como custo de uma Habilidade, ganhe Bônus de Ataque +1 até o final do turno.",
      "ini": 44,
      "iniOptions": [
        44
      ],
      "atq": 3,
      "def": 3,
      "ls": null,
      "footnote": ""
    },
    "PC005": {
      "code": "PC005",
      "category": "postura",
      "owner": "Corruptor",
      "level": 4,
      "isSpecialE": false,
      "name": "Fôlego do Sacrifício",
      "fn": "Utilitária",
      "passive": "Uma vez por rodada, pague 1 PV (+1 por nível): remova 1 Mal de você mesmo.",
      "ini": 44,
      "iniOptions": [
        44
      ],
      "atq": 4,
      "def": 3,
      "ls": null,
      "footnote": ""
    },
    "PC006": {
      "code": "PC006",
      "category": "postura",
      "owner": "Corruptor",
      "level": 5,
      "isSpecialE": false,
      "name": "Vontade de Ictínea",
      "fn": "Utilitária",
      "passive": "Ignore Medo e Silêncio aplicados a você.",
      "ini": 44,
      "iniOptions": [
        44
      ],
      "atq": 4,
      "def": 4,
      "ls": null,
      "footnote": ""
    },
    "PC007": {
      "code": "PC007",
      "category": "postura",
      "owner": "Corruptor",
      "level": 6,
      "isSpecialE": false,
      "name": "Fúria de Ictínea",
      "fn": "Ofensiva",
      "passive": "Ao pagar PV como custo de uma Habilidade ofensiva, cause +1 de Dano adicional.",
      "ini": 44,
      "iniOptions": [
        44
      ],
      "atq": 5,
      "def": 5,
      "ls": null,
      "footnote": ""
    },
    "PC008": {
      "code": "PC008",
      "category": "postura",
      "owner": "Corruptor",
      "level": 6,
      "isSpecialE": false,
      "name": "Couraça Definitiva",
      "fn": "Defensiva",
      "passive": "Enquanto ativa, reduza em 2 todo Dano recebido (mínimo 0).",
      "ini": 44,
      "iniOptions": [
        44
      ],
      "atq": 5,
      "def": 5,
      "ls": null,
      "footnote": ""
    },
    "PC009": {
      "code": "PC009",
      "category": "postura",
      "owner": "Corruptor",
      "level": 6,
      "isSpecialE": false,
      "name": "Domínio Total",
      "fn": "Utilitária",
      "passive": "Enquanto ativa, seu limite de Corrupções Ativas aumenta em 1.",
      "ini": 44,
      "iniOptions": [
        44
      ],
      "atq": 5,
      "def": 5,
      "ls": null,
      "footnote": ""
    },
    "PF001": {
      "code": "PF001",
      "category": "postura",
      "owner": "Feiticeiro",
      "level": 0,
      "isSpecialE": false,
      "name": "Chama Contida",
      "fn": "Utilitária",
      "passive": "Ignore a Fadiga que você aplicaria a si mesmo por Sobrecarga, uma vez por rodada.",
      "ini": 33,
      "iniOptions": [
        33
      ],
      "atq": 1,
      "def": 2,
      "ls": 5,
      "footnote": ""
    },
    "PF002": {
      "code": "PF002",
      "category": "postura",
      "owner": "Feiticeiro",
      "level": 1,
      "isSpecialE": false,
      "name": "Brasas Vivas",
      "fn": "Utilitária",
      "passive": "Ganhe Cura 1 no início de cada um dos seus turnos.",
      "ini": 33,
      "iniOptions": [
        33
      ],
      "atq": 2,
      "def": 2,
      "ls": 6,
      "footnote": ""
    },
    "PF003": {
      "code": "PF003",
      "category": "postura",
      "owner": "Feiticeiro",
      "level": 2,
      "isSpecialE": false,
      "name": "Fogo Instintivo",
      "fn": "Utilitária",
      "passive": "Se você não Sobrecarregou no seu último turno, ganhe Bônus de Ataque +1 neste turno.",
      "ini": 33,
      "iniOptions": [
        33
      ],
      "atq": 2,
      "def": 3,
      "ls": 8,
      "footnote": ""
    },
    "PF004": {
      "code": "PF004",
      "category": "postura",
      "owner": "Feiticeiro",
      "level": 3,
      "isSpecialE": false,
      "name": "Estrela do Dia",
      "fn": "Utilitária",
      "passive": "Reduza em 1 o IS de habilidades com a palavra Solar no título.",
      "ini": 33,
      "iniOptions": [
        33
      ],
      "atq": 3,
      "def": 3,
      "ls": 10,
      "footnote": ""
    },
    "PF005": {
      "code": "PF005",
      "category": "postura",
      "owner": "Feiticeiro",
      "level": 4,
      "isSpecialE": false,
      "name": "Fúria Equilibrada",
      "fn": "Utilitária",
      "passive": "Uma vez por rodada, ao Sobrecarregar, ignore completamente efeitos de Sobrecarga que reduziriam seus PV.",
      "ini": 33,
      "iniOptions": [
        33
      ],
      "atq": 3,
      "def": 4,
      "ls": 12,
      "footnote": ""
    },
    "PF006": {
      "code": "PF006",
      "category": "postura",
      "owner": "Feiticeiro",
      "level": 5,
      "isSpecialE": false,
      "name": "Domínio da Chama",
      "fn": "Utilitária",
      "passive": "Enquanto ativa, reduza em 2 a soma de IS do turno antes de verificar Sobrecarga (mínimo 0).",
      "ini": 33,
      "iniOptions": [
        33
      ],
      "atq": 4,
      "def": 4,
      "ls": 14,
      "footnote": ""
    },
    "PF007": {
      "code": "PF007",
      "category": "postura",
      "owner": "Feiticeiro",
      "level": 6,
      "isSpecialE": false,
      "name": "Incêndio Pleno",
      "fn": "Ofensiva",
      "passive": "Enquanto ativa, toda vez que Sobrecarregar, o próximo Feitiço Ofensivo que usar causa +1 de Dano.",
      "ini": 33,
      "iniOptions": [
        33
      ],
      "atq": 5,
      "def": 5,
      "ls": 16,
      "footnote": ""
    },
    "PF008": {
      "code": "PF008",
      "category": "postura",
      "owner": "Feiticeiro",
      "level": 6,
      "isSpecialE": false,
      "name": "Cinzas Eternas",
      "fn": "Defensiva",
      "passive": "Enquanto ativa, toda vez que Sobrecarregar, ganhe Bônus de Defesa +1 até o final da rodada.",
      "ini": 33,
      "iniOptions": [
        33
      ],
      "atq": 5,
      "def": 5,
      "ls": 16,
      "footnote": ""
    },
    "PF009": {
      "code": "PF009",
      "category": "postura",
      "owner": "Feiticeiro",
      "level": 6,
      "isSpecialE": false,
      "name": "Equilíbrio Final",
      "fn": "Utilitária",
      "passive": "Enquanto ativa, reduza em 3 a soma de IS do turno antes de verificar Sobrecarga (mínimo 0).",
      "ini": 33,
      "iniOptions": [
        33
      ],
      "atq": 5,
      "def": 5,
      "ls": 16,
      "footnote": ""
    }
  }
};
