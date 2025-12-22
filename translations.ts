import { Language } from './types';

export const translations = {
  'pt-BR': {
    nav: {
      services: 'Serviços',
      drivers: 'Para Motoristas',
      shops: 'Para Restauradores',
      analysis: 'Começar',
      history: 'Meus Laudos',
      plans: 'Planos',
      admin: 'Painel',
      about: 'Quem Somos',
      login: 'Entrar',
      logout: 'Sair',
      welcome: 'Olá,',
      shopBadge: 'Restaurador',
      notifications: 'Notificações',
      markAllRead: 'Limpar',
      empty: 'Sem novas notificações',
    },
    auth: {
      title: 'Acesse sua conta',
      subtitle: 'Escolha seu perfil para continuar',
      tabDriver: 'Motorista',
      tabShop: 'Restaurador',
      tabAdmin: 'Admin',
      emailPlaceholder: 'seu@email.com',
      passwordPlaceholder: '••••••••',
      button: 'Entrar na Plataforma',
      basicLabel: 'Login como Básico (Demo)',
      premiumLabel: 'Login como Premium (Demo)',
    },
    emergency: {
      title: 'Central de Apoio OC+',
      subtitle: 'Como podemos ajudar você agora?',
      btnHelp: 'Solicitar Ajuda',
      btnHelpDesc: 'Falar com atendente, suporte emocional e orientação.',
      btnSolution: 'Solicitar Solução',
      btnSolutionDesc: 'Chamar guincho/restaurador parceiro imediatamente.',
      questions: {
        drivable: 'O veículo tem condições de rodar?',
        people: 'Quantas pessoas envolvidas?',
        injured: 'Alguém está ferido?',
        kids: 'Há crianças no local?',
        fire: 'Existe risco de incêndio/fumaça?',
        location: 'Confirmar localização atual?',
        details: 'Relate brevemente o ocorrido:',
      },
      finding: 'Localizando parceiros próximos...',
      driverFound: 'Restaurador a caminho!',
      driverArriving: 'Chegada estimada em',
      contacting: 'Acionando nossa central...',
      agentCall: 'Um atendente especialista ligará em instantes.',
      mapBadge: 'Restauradores Ativos',
      cancel: 'Cancelar Solicitação'
    },
    superAdmin: {
      title: 'Gestão da Plataforma',
      menu: {
        overview: 'Visão Geral',
        history: 'Histórico de Ocorrências',
        service: 'Atendimento',
        monitoring: 'Monitoramento',
        costs: 'Custos Financeiros',
        earnings: 'Ganhos Financeiros',
        sales: 'Vendas',
        partnerships: 'Anúncios & Parcerias',
        legal: 'Casos Jurídicos',
        reports: 'Relatórios',
      },
      stats: {
        activeCalls: 'Chamados em Aberto',
        avgTime: 'Tempo Médio Atend.',
        satisfaction: 'Satisfação (CSAT)',
        totalRevenue: 'Receita Total',
        totalCosts: 'Custos Operacionais',
        netProfit: 'Lucro Líquido',
        activePartners: 'Parceiros Online',
      },
      users: 'Usuários',
      financial: 'Financeiro',
      totalUsers: 'Total de Usuários',
      activeShops: 'Restauradores Ativos',
      conversionRate: 'Taxa de Conversão',
      recentActivity: 'Atividade Recente na Plataforma',
      userList: 'Gerenciamento de Usuários',
      filterDriver: 'Motoristas',
      filterShop: 'Restauradores',
      role: 'Perfil',
      status: 'Status',
      actions: 'Ações',
    },
    shopDashboard: {
      title: 'Painel do Restaurador',
      verifiedBadge: 'Restaurador Verificado OC+',
      verifiedDesc: 'Você pratica preços justos auditados pela OC+.',
      quickActions: 'Ações Rápidas',
      newEstimate: 'Novo Orçamento (Scanner)',
      checklist: 'Checklist de Entrada',
      whatsapp: 'Enviar via WhatsApp',
      lastEstimates: 'Últimos Orçamentos',
      pending: 'Pendente',
      approved: 'Aprovado',
    },
    aboutPage: {
      title: 'O Fim da Incerteza no Trânsito',
      subtitle: 'Descubra como o OC+ transforma uma simples foto na solução dos problemas gerados na colisão.',
    },
    driversLanding: {
      hero: {
        title: 'Solução Pós-Colisão.',
        subtitle: 'Ocorrência Plus',
        desc: 'Obtenha um laudo técnico instantâneo com IA, orientação jurídica sobre culpabilidade e acesso direto a oficinas verificadas para realizar o reparo.',
        cta: 'Gerar Laudo Agora',
      },
      benefits: {
        title: 'Por que ter um plano OC+?',
        b1: { title: 'Verdade Técnica', desc: 'Não fique na mão de orçamentos de oficina. Saiba o valor real do reparo antes de negociar.' },
        b2: { title: 'Direção Jurídica', desc: 'Bateu em um poste ou outro carro? Nossos laudos orientam passo-a-passo como proceder para evitar processos.' },
        b3: { title: 'Socorro Financeiro', desc: 'Assinantes têm acesso exclusivo a linhas de crédito para consertar o carro quando a grana está curta.' }
      }
    },
    shopsLanding: {
      hero: {
        title: 'Assuma o Controle Total da Sua Operação',
        subtitle: 'Inteligência de Dados para Restauradores',
        desc: 'Chega de gerenciar sua restauradora no escuro. Tenha um painel completo que mostra exatamente onde você está ganhando dinheiro, seus gargalos de produção e seu Ticket Médio em tempo real.',
        cta: 'Ver Demonstração do Painel',
      },
      benefits: {
        title: 'O Fim da Gestão por "Achismo"',
        b1: { title: 'Raio-X Financeiro', desc: 'Visualize Faturamento Bruto, Lucro Líquido e Custo de Peças em gráficos claros e automáticos.' },
        b2: { title: 'Métricas de Produtividade', desc: 'Saiba exatamente quanto tempo cada reparo leva e qual a eficiência da sua equipe.' },
        b3: { title: 'Análise de Ticket Médio', desc: 'Descubre quais tipos de carro e serviço trazem maior margem de lucro para focar no que importa.' }
      }
    },
    hero: {
      title: 'Ocorrência',
      subtitle: 'A inteligência que guia motoristas após o acidente',
      description: 'Diagnóstico técnico via IA e amparo jurídico. A verdade que você precisa para resolver conflitos e reparar sem prejuízos.',
      welcomeUser: 'Olá, {name}. Sentimos muito pelo ocorrido.',
      descriptionUser: 'Vamos resolver isso juntos. Tire uma foto do dano e nós cuidaremos de toda a burocracia técnica e jurídica para você.',
      steps: {
        step1: 'Foto do Dano',
        step2: 'Laudo Inteligente',
        step3: 'Solução',
      }
    },
    features: {
      tag: 'Tecnologia de Apoio',
      title: 'Um App, Duas Soluções',
      item1: {
        title: 'Para Motoristas: Orientação Total',
        desc: 'Bateu e não sabe o que fazer? Receba um passo-a-passo técnico e jurídico imediato.'
      },
      item2: {
        title: 'Para Restauradores: Orçamento Automático',
        desc: 'Receba o carro já orçado pela IA. Economize horas de avaliação e ganhe acesso a leads qualificados na sua região.'
      },
      item3: {
        title: 'Laudo Imparcial',
        desc: 'Um documento padronizado que serve como base técnica para negociações, sem viés de seguradora.'
      }
    },
    history: {
      title: 'Histórico de serviços',
      empty: 'Nenhuma análise registrada.',
      cost: 'Orçamento Prévio',
      delete: 'Remover',
    },
    howItWorks: {
      tag: 'Fluxo Inteligente',
      title: 'Como o OC+ Funciona',
      step1: 'Diagnóstico Visual',
      desc1: 'Envie a foto. A IA detecta danos na lataria e peças mecânicas instantaneamente.',
      step2: 'Laudo & Orientação',
      desc2: 'Calculamos o custo justo e orientamos juridicamente sobre culpabilidade e danos públicos.',
      step3: 'Solução do Problema',
      desc3: 'Conectamos com oficinas ou oferecemos crédito para o reparo imediato.',
    },
    video: {
      overlayTitle: 'Inteligência Artificial no Trânsito',
    },
    upload: {
      title: 'Foto do veículo',
      analyzing: 'Gerando Laudo Técnico e Orientações...',
      dragDrop: 'Tire ou envie uma foto',
      aiSteps: 'Identificando peças, consultando preços e normas de trânsito...',
      button: 'Gerar Laudo Agora',
      error: 'Não foi possível analisar. Tente uma foto com melhor iluminação.',
    },
    analysis: {
      title: 'Relatório Técnico Integrado',
      newAnalysis: 'Nova Análise',
      severity: 'Nível de Dano',
      summary: 'Parecer da IA',
      parts: {
        title: 'Detalhamento de Peças',
        replace: 'Substituir',
        repair: 'Funilaria/Pintura',
        check: 'Vistoria Presencial',
      },
      legal: {
        title: 'Orientação Jurídica (CTB)',
        assessment: 'Parecer Preliminar',
        advice: 'Próximos Passos Recomendados',
        disclaimer: 'Este laudo visa orientar o condutor sobre procedimentos e culpabilidade. Não é um seguro.'
      },
      recommendations: {
        title: 'Restauradores Parceiros Próximos',
      },
      costs: {
        title: 'Estimativa de Mercado Justo',
        partsTotal: 'Custo de Peças',
        labor: 'Mano de Obra Média',
        totalEstimated: 'Estimativa Final',
        disclaimer: '*Valores baseados na tabela média da região.',
        cta: 'Ver Detalhes Premium',
        lockedTitle: 'Desbloqueie o Laudo Completo',
        lockedDesc: 'Tenha acesso aos preços detalhados e orientação jurídica completa para não ser lesado.',
        lockedButton: 'Desbloquear Laudo (R$ 19,90)',
        unlockedCta: 'Baixar Relatório em PDF',
      },
      services: {
        loan: {
          title: 'Situação desconfortável?',
          desc: 'Não tem o valor do reparo agora? Assinantes têm acesso a empréstimo facilitado.',
          cta: 'Simular Crédito',
        },
        publicProperty: {
          title: 'Dano ao Patrimônio Público?',
          desc: 'Derrubou poste ou placa? Saiba as providências para evitar problemas judiciais.',
          cta: 'Ver Guia de Conduta',
        }
      }
    },
    pricing: {
      header: 'Planos de Acesso',
      title: 'Escolha seu Perfil',
      subtitle: 'Soluções acessíveis para diagnósticos e facilidades financeiras.',
      b2c: 'Sou Motorista',
      b2b: 'Sou Restaurador',
      cta: 'Selecionar Plano',
      mostPopular: 'Recomendado',
    },
    admin: {
      title: 'Painel da Oficina Parceira',
      revenue: 'Potencial de Vendas',
      analyses: 'Orçamentos Recebidos',
      users: 'Clientes na Região',
      critical: 'Ticket Alto',
      chartVolume: 'Leads Entrantes',
      chartRevenue: 'Conversão em Serviços',
      latestInsight: 'Última Oportunidade',
      profileLabels: {
        segment: 'Veículo',
        churn: 'Prob. Fechamento',
        upsell: 'Serviços Extras',
      },
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      madeFor: 'Tecnologia de orientação para motoristas e reparadores.',
    }
  },
  'en': {
    nav: { services: 'Services', drivers: 'Drivers', shops: 'Restorers', analysis: 'Start', history: 'History', plans: 'Plans', admin: 'Dashboard', about: 'About', login: 'Login', logout: 'Logout', welcome: 'Hello', shopBadge: 'Restorer', notifications: 'Notifications', markAllRead: 'Clear', empty: 'No new notifications' },
    auth: { title: 'Login', subtitle: 'Choose profile', tabDriver: 'Driver', tabShop: 'Restorer', tabAdmin: 'Admin', emailPlaceholder: 'email', passwordPlaceholder: 'pass', button: 'Login', basicLabel: 'Basic', premiumLabel: 'Premium' },
    emergency: { title: 'Support Center', subtitle: 'How can we help?', btnHelp: 'Request Help', btnHelpDesc: 'Call agent', btnSolution: 'Request Solution', btnSolutionDesc: 'Call Towing', questions: { drivable: 'Drivable?', people: 'People?', injured: 'Injuries?', kids: 'Kids?', fire: 'Fire Risk?', location: 'Location?', details: 'Details:' }, finding: 'Locating...', driverFound: 'Restorer found!', driverArriving: 'Arriving in', contacting: 'Contacting...', agentCall: 'Agent calling...', mapBadge: 'Active Restorers', cancel: 'Cancel' },
    superAdmin: { title: 'Platform Management', menu: { overview: 'Overview', history: 'Occurrence History', service: 'Service', monitoring: 'Monitoring', costs: 'Costs', earnings: 'Earnings', sales: 'Sales', partnerships: 'Partnerships', legal: 'Legal', reports: 'Reports' }, stats: { activeCalls: 'Active Calls', avgTime: 'Avg Time', satisfaction: 'CSAT', totalRevenue: 'Revenue', totalCosts: 'Costs', netProfit: 'Profit', activePartners: 'Active Partners' }, users: 'Users', financial: 'Financial', totalUsers: 'Total Users', activeShops: 'Active Restorers', conversionRate: 'Conversion', recentActivity: 'Activity', userList: 'Users', filterDriver: 'Drivers', filterShop: 'Restorers', role: 'Role', status: 'Status', actions: 'Actions' },
    shopDashboard: { title: 'Restorer Dashboard', verifiedBadge: 'Verified', verifiedDesc: 'Fair prices', quickActions: 'Actions', newEstimate: 'New Estimate', checklist: 'Checklist', whatsapp: 'WhatsApp', lastEstimates: 'Estimates', pending: 'Pending', approved: 'Approved' },
    aboutPage: { title: 'End Uncertainty', subtitle: 'AI Solution' },
    driversLanding: { hero: { title: 'Post-Collision', subtitle: 'OC+', desc: 'Get an instant technical report via AI, legal guidance on liability, and direct access to verified shops for repairs.', cta: 'Start' }, benefits: { title: 'Why OC+?', b1: { title: 'Truth', desc: 'Real value' }, b2: { title: 'Legal', desc: 'Guidance' }, b3: { title: 'Finance', desc: 'Credit' } } },
    shopsLanding: { hero: { title: 'Control', subtitle: 'Intelligence', desc: 'Manage', cta: 'Demo' }, benefits: { title: 'No Guesswork', b1: { title: 'Finance', desc: 'X-Ray' }, b2: { title: 'Metrics', desc: 'Productivity' }, b3: { title: 'Ticket', desc: 'Analysis' } } },
    hero: { title: 'Occurrence', subtitle: 'Intelligence', description: 'AI technical diagnosis and legal support. The truth you need to resolve conflicts and repair without losses.', welcomeUser: 'Hello', descriptionUser: 'Lets solve', steps: { step1: 'Photo', step2: 'Report', step3: 'Solution' } },
    features: { tag: 'Tech', title: 'Solutions', item1: { title: 'Drivers', desc: 'Guidance' }, item2: { title: 'Restorers', desc: 'Estimates' }, item3: { title: 'Report', desc: 'Unbiased' } },
    history: { title: 'History', empty: 'Empty', cost: 'Cost', delete: 'Delete' },
    howItWorks: { tag: 'Flow', title: 'How it Works', step1: 'Diagnosis', desc1: 'Upload', step2: 'Report', desc2: 'Calc', step3: 'Solution', desc3: 'Connect' },
    video: { overlayTitle: 'AI' },
    upload: { title: 'Photo', analyzing: 'Analyzing...', dragDrop: 'Drop here', aiSteps: 'Thinking...', button: 'Generate', error: 'Error' },
    analysis: { title: 'Report', newAnalysis: 'New', severity: 'Severity', summary: 'Summary', parts: { title: 'Parts', replace: 'Replace', repair: 'Repair', check: 'Check' }, legal: { title: 'Legal', assessment: 'Assessment', advice: 'Advice', disclaimer: 'Disclaimer' }, recommendations: { title: 'Nearby' }, costs: { title: 'Estimate', partsTotal: 'Parts', labor: 'Labor', totalEstimated: 'Total', disclaimer: 'Disclaimer', cta: 'Premium', lockedTitle: 'Locked', lockedDesc: 'Upgrade', lockedButton: 'Unlock', unlockedCta: 'Download' }, services: { loan: { title: 'Loan', desc: 'Need cash?', cta: 'Simulate' }, publicProperty: { title: 'Public Property', desc: 'Damage?', cta: 'Guide' } } },
    pricing: { header: 'Plans', title: 'Choose', subtitle: 'Solutions', b2c: 'Driver', b2b: 'Restorer', cta: 'Select', mostPopular: 'Popular' },
    admin: { title: 'Dashboard', revenue: 'Revenue', analyses: 'Analyses', users: 'Users', critical: 'Critical', chartVolume: 'Volumen', chartRevenue: 'Conversión', latestInsight: 'Insight', profileLabels: { segment: 'Segmento', churn: 'Abandono', upsell: 'Venta' } },
    footer: { rights: 'Reserved', madeFor: 'Tech' }
  },
  'es': {
    nav: { services: 'Servicios', drivers: 'Conductores', shops: 'Restauradores', analysis: 'Inicio', history: 'Historial', plans: 'Planes', admin: 'Panel', about: 'Nosotros', login: 'Entrar', logout: 'Salir', welcome: 'Hola', shopBadge: 'Restaurador', notifications: 'Notificaciones', markAllRead: 'Limpiar', empty: 'Sin notificaciones' },
    auth: { title: 'Entrar', subtitle: 'Perfil', tabDriver: 'Conductor', tabShop: 'Restaurador', tabAdmin: 'Admin', emailPlaceholder: 'email', passwordPlaceholder: 'pass', button: 'Entrar', basicLabel: 'Básico', premiumLabel: 'Premium' },
    emergency: { title: 'Centro de Soporte', subtitle: '¿Cómo ayudar?', btnHelp: 'Solicitar Ayuda', btnHelpDesc: 'Llamar agente', btnSolution: 'Solicitar Solución', btnSolutionDesc: 'Llamar Grúa', questions: { drivable: '¿Conducible?', people: '¿Gente?', injured: '¿Heridos?', kids: '¿Niños?', fire: '¿Fuego?', location: '¿Ubicación?', details: 'Detalles:' }, finding: 'Localizando...', driverFound: '¡Restaurador encontrado!', driverArriving: 'Llegando en', contacting: 'Contactando...', agentCall: 'Agente llamando...', mapBadge: 'Restauradores Activos', cancel: 'Cancelar' },
    superAdmin: { title: 'Gestión Plataforma', menu: { overview: 'Visión General', history: 'Historial de Ocurrencias', service: 'Servicio', monitoring: 'Monitoreo', costs: 'Costos', earnings: 'Ganancias', sales: 'Ventas', partnerships: 'Alianzas', legal: 'Legal', reports: 'Reportes' }, stats: { activeCalls: 'Llamadas Activas', avgTime: 'Tiempo Prom.', satisfaction: 'CSAT', totalRevenue: 'Ingresos', totalCosts: 'Costos', netProfit: 'Beneficio', activePartners: 'Socios Activos' }, users: 'Usuarios', financial: 'Financiero', totalUsers: 'Total Usuarios', activeShops: 'Talleres Activos', conversionRate: 'Tasa de Conversión', recentActivity: 'Actividad Reciente', userList: 'Gestión de Usuarios', filterDriver: 'Conductores', filterShop: 'Restauradores', role: 'Rol', status: 'Estado', actions: 'Acciones' },
    shopDashboard: { title: 'Panel Restaurador', verifiedBadge: 'Taller Verificado OC+', verifiedDesc: 'Practicas precios justos auditados por OC+.', quickActions: 'Acciones Rápidas', newEstimate: 'Nuevo Presupuesto (Escáner)', checklist: 'Lista de Verificación', whatsapp: 'Enviar por WhatsApp', lastEstimates: 'Últimos Presupuestos', pending: 'Pendiente', approved: 'Aprobado' },
    aboutPage: { title: 'El Fin de la Incertidumbre', subtitle: 'Descubre cómo OC+ transforma una simple foto en la solución a los problemas generados por la colisión.', },
    driversLanding: { hero: { title: 'No es Seguro. Es tu Solución Post-Colisión.', subtitle: 'Tu guía técnico y legal cuando ocurre lo inesperado.', desc: 'Obtenga un informe técnico instantáneo con IA, orientación legal sobre responsabilidad y acceso directo a talleres verificados para realizar la reparación.', cta: 'Generar Informe Ahora', }, benefits: { title: '¿Por qué elegir OC+?', b1: { title: 'Verdad Técnica', desc: 'No dependas solo de talleres. Conoce el valor real de la reparación antes de negociar.' }, b2: { title: 'Dirección Legal', desc: '¿Chocaste un poste u otro auto? Nuestros informes te guían paso a paso para evitar demandas.' }, b3: { title: 'Ayuda Financiera', desc: 'Los suscriptores tienen acceso exclusivo a líneas de crédito para arreglar el auto cuando falta dinero.' } } },
    shopsLanding: { hero: { title: 'Toma el Control Total de tu Operación', subtitle: 'Inteligencia de Datos para Talleres', desc: 'Deja de gestionar tu taller a ciegas. Ten un panel completo que muestra exactamente dónde estás ganando dinero, tus cuellos de botella y tu Ticket Promedio en tiempo real.', cta: 'Ver Demo del Panel', }, benefits: { title: 'El Fin de la Gestión por "Suposición"', b1: { title: 'Radiografía Financiera', desc: 'Visualiza Facturación Bruta, Beneficio Neto y Costo de Piezas en gráficos claros.' }, b2: { title: 'Métricas de Productividad', desc: 'Sepa exactamente cuánto tarda cada reparación y la eficiencia de su equipo.' }, b3: { title: 'Análisis de Ticket Promedio', desc: 'Descubre qué tipos de auto y servicio traen mayor margen para enfocarte en lo que importa.' } } },
    hero: { title: 'Ocurrencia', subtitle: 'La inteligencia que guía conductores tras un accidente', description: 'Diagnóstico técnico vía IA y amparo jurídico. La verdad que necesitas para resolver conflictos y reparar sin pérdidas.', welcomeUser: 'Hola, {name}. Lamentamos lo sucedido.', descriptionUser: 'Vamos a resolver esto juntos. Tome una foto del daño y nos encargaremos de toda la burocracia técnica y legal por usted.', steps: { step1: 'Foto del Daño', step2: 'Informe Inteligente', step3: 'Solución', } },
    features: { tag: 'Tecnología de Apoyo', title: 'Una App, Dos Soluciones', item1: { title: 'Para Conductores: Guía Total', desc: '¿Chocaste y no sabes qué hacer? Recibe un paso a paso técnico y legal inmediato.' }, item2: { title: 'Para Talleres: Presupuesto Automático', desc: 'Reciba el auto ya presupuestado. Ahorre horas de evaluación y acceda a leads calificados.' }, item3: { title: 'Informe Imparcial', desc: 'Un documento estandarizado que sirve como base técnica para negociaciones, sin sesgo de aseguradora.' } },
    history: { title: 'Historial de Siniestros', empty: 'Ningún análisis registrado.', cost: 'Pre-Presupuesto', delete: 'Eliminar', },
    howItWorks: { tag: 'Flujo Inteligente', title: 'Cómo Funciona OC+', step1: 'Diagnóstico Visual', desc1: 'Sube una foto. La IA detecta daños en carrocería y mecánica instantáneamente.', step2: 'Informe y Guía', desc2: 'Calculamos costos justos y orientamos legalmente sobre culpabilidad y daños públicos.', step3: 'Solución del Problema', desc3: 'Te conectamos con talleres u ofrecemos crédito para reparación inmediata.', },
    video: { overlayTitle: 'Inteligencia Artificial en el Tráfico', },
    upload: { title: 'Foto del vehículo', analyzing: 'Generando Informe Técnico y Guía...', dragDrop: 'Toma una foto para iniciar el análisis', aiSteps: 'Identificando piezas, consultando precios y normas de tráfico...', button: 'Generar Informe Ahora', error: 'No se pudo analizar. Intente con mejor iluminación.', },
    analysis: { title: 'Informe Técnico Integrado', newAnalysis: 'Nuevo Análisis', severity: 'Nivel de Daño', summary: 'Opinión de IA', parts: { title: 'Detalle de Piezas', replace: 'Reemplazar', repair: 'Chapa/Pintura', check: 'Revisión', }, legal: { title: 'Orientación Legal (Ley)', assessment: 'Opinión Preliminar', advice: 'Próximos Pasos Recomendados', disclaimer: 'Este informe guía al conductor sobre procedimientos y culpabilidad. No es un seguro.' }, recommendations: { title: 'Talleres Asociados Cercanos', }, costs: { title: 'Estimación de Mercado Justo', partsTotal: 'Costo Piezas', labor: 'Mano de Obra Prom.', totalEstimated: 'Estimación Final', disclaimer: '*Valores basados en tabla promedio regional.', cta: 'Ver Detalles Premium', lockedTitle: 'Desbloquea Informe Completo', lockedDesc: 'Acceda a precios detallados y guía legal completa para no ser engañado.', lockedButton: 'Desbloquear Informe ($4.00)', unlockedCta: 'Descargar Informe PDF', }, services: { loan: { title: '¿Situación incómoda?', desc: '¿Poco dinero para el arreglo? Los suscriptores tienen acceso a préstamos fáciles.', cta: 'Simular Crédito', }, publicProperty: { title: '¿Daño a Propiedad Pública?', desc: '¿Chocó un poste o señal? Vea cómo regularizar para evitar demandas.', cta: 'Ver Guía de Conducta', } } },
    pricing: { header: 'Planes de Acceso', title: 'Elige tu Perfil', subtitle: 'Soluciones accesibles para diagnósticos y facilidad financiera.', b2c: 'Soy Conductor', b2b: 'Soy Restaurador', cta: 'Seleccionar Plano', mostPopular: 'Recomendado', },
    admin: { title: 'Panel del Taller Socio', revenue: 'Potencial de Ventas', analyses: 'Presupuestos Recibidos', users: 'Clientes en Zona', critical: 'Ticket Alto', chartVolume: 'Leads Entrantes', chartRevenue: 'Conversión Servicios', latestInsight: 'Última Oportunidade', profileLabels: { segment: 'Vehículo', churn: 'Prob. Cierre', upsell: 'Servicios Extra', }, },
    footer: { rights: 'Todos los derechos reservados.', madeFor: 'Tecnología de orientación para conductores y reparadores.', }
  }
};

export const partActionMap: Record<Language, Record<string, string>> = {
  'pt-BR': {
    REPLACE: 'Substituir',
    REPAIR: 'Reparar',
    CHECK: 'Verificar'
  },
  'en': {
    REPLACE: 'Replace',
    REPAIR: 'Repair',
    CHECK: 'Check'
  },
  'es': {
    REPLACE: 'Reemplazar',
    REPAIR: 'Reparar',
    CHECK: 'Verificar'
  }
};