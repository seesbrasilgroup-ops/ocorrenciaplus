
import { Language } from './types';

export const translations = {
  'pt-BR': {
    nav: {
      services: 'Soluções',
      drivers: 'Para Motoristas',
      shops: 'Para Oficinas',
      mechanics: 'Para Mecânicos',
      analysis: 'Análise',
      history: 'Histórico',
      plans: 'Planos',
      admin: 'Gestão',
      about: 'Sobre',
      login: 'Entrar',
      logout: 'Sair',
      welcome: 'Olá,',
      shopBadge: 'Parceiro',
      mechanicBadge: 'Expert',
      notifications: 'Alertas',
      markAllRead: 'Limpar',
      empty: 'Tudo limpo',
    },
    auth: {
      title: 'Acesse o Sistema',
      subtitle: 'Inteligência automotiva.',
      tabDriver: 'Motorista',
      tabShop: 'Oficina',
      tabMechanic: 'Mecânico',
      tabAdmin: 'Admin',
      emailPlaceholder: 'email@exemplo.com',
      passwordPlaceholder: 'senha',
      button: 'Entrar',
      basicLabel: 'Motorista (Grátis)',
      premiumLabel: 'Motorista (Premium)',
    },
    emergency: {
      title: 'Emergência',
      subtitle: 'Estamos com você.',
      btnHelp: 'Guia Emocional',
      btnHelpDesc: 'Fale com especialista.',
      btnSolution: 'Resolva Agora',
      btnSolutionDesc: 'Guincho ou Mecânico.',
      questions: {
        drivable: 'O carro anda?',
        people: 'Pessoas?',
        injured: 'Feridos?',
        kids: 'Crianças?',
        fire: 'Fogo?',
        location: 'Localização?',
        details: 'Resumo:',
      },
      finding: 'Buscando...',
      driverFound: 'Encontrado.',
      driverArriving: 'Chegando em',
      contacting: 'Conectando...',
      agentCall: 'Aguarde ligação.',
      mapBadge: 'Rede Ativa',
      cancel: 'Cancelar'
    },
    financialAidSection: {
      badge: 'Crédito',
      title: 'Conserte agora.',
      titleHighlight: 'Pague depois.',
      subtitle: 'Capital aprovado para o seu reparo.',
      desc: 'Linhas de crédito imediatas. Sem burocracia.',
      cards: {
        loan: {
          title: 'Parcelamento',
          desc: 'Crédito na hora.',
          highlight: 'Até 24x'
        },
        insurance: {
          title: 'Seguro',
          desc: 'Nós resolvemos a papelada.',
          highlight: 'Reembolso Rápido'
        }
      },
      cta: 'Ver Crédito'
    },
    superAdmin: {
      title: 'Comando Global',
      menu: {
        overview: 'Visão',
        history: 'Ocorrências',
        service: 'Atendimento',
        monitoring: 'Tempo Real',
        costs: 'Custos',
        earnings: 'Receita',
        sales: 'Vendas',
        partnerships: 'Parceiros',
        legal: 'Jurídico',
        reports: 'BI',
      },
      stats: {
        activeCalls: 'Chamados',
        avgTime: 'TMA',
        satisfaction: 'NPS',
        totalRevenue: 'Receita',
        totalCosts: 'Custos',
        netProfit: 'Lucro',
        activePartners: 'Online',
      },
      users: 'Usuários',
      financial: 'Financeiro',
      totalUsers: 'Total',
      activeShops: 'Oficinas',
      conversionRate: 'Conversão',
      recentActivity: 'Feed',
      userList: 'Contas',
      filterDriver: 'Motoristas',
      filterShop: 'Oficinas',
      role: 'Perfil',
      status: 'Status',
      actions: 'Ação',
    },
    mechanicDashboard: {
      title: 'Painel Expert',
      verifiedBadge: 'Certificado',
      verifiedDesc: 'Elite.',
      quickActions: 'Ações',
      newDiagnostic: 'Diagnosticar',
      maintenance: 'Revisión',
      partsOrder: 'Peças',
      stats: {
        activeJobs: 'Ativos',
        partsStock: 'Stock',
        efficiency: 'Eficiência'
      },
      jobs: {
        title: 'Fila',
        engine: 'Motor',
        brakes: 'Freios',
        suspension: 'Suspensión',
        electronics: 'Elétrica',
        pending: 'Fila',
        inProgress: 'Andamento',
        completed: 'Feito'
      },
      tabs: {
        dashboard: 'Visão',
        history: 'Histórico',
        requests: 'Oportunidades'
      },
      requestsView: {
        title: 'SOS',
        subtitle: 'Demandas próximas.',
        empty: 'Sem chamados.',
        accept: 'Aceitar',
        decline: 'Ignorar',
        navigating: 'Indo...',
        contact: 'Ligar',
        distance: 'km'
      }
    },
    shopDashboard: {
      title: 'Gestão',
      verifiedBadge: 'Verificado',
      verifiedDesc: 'Auditado.',
      quickActions: 'Ações',
      newEstimate: 'Orçar',
      checklist: 'Checklist',
      whatsapp: 'Whatsapp',
      lastEstimates: 'Recentes',
      pending: 'Pendente',
      approved: 'Aprovado',
      tabs: {
        dashboard: 'Painel',
        history: 'Histórico',
        requests: 'Leads'
      },
      requestsView: {
        title: 'Leads',
        subtitle: 'Clientes na área.',
        empty: 'Buscando...',
        accept: 'Captar',
        decline: 'Dispensar',
        navigating: 'A caminho...',
        contact: 'Falar',
        distance: 'km'
      }
    },
    aboutPage: {
      title: 'Verdade Automotiva',
      subtitle: 'Conectamos pontas soltas via dados.',
      mission: {
        title: 'Propósito',
        text: 'Transparencia radical. Protegemos quem dirige, impulsionamos quem trabalha.'
      },
      pillars: {
        driver: {
          title: 'Motorista',
          desc: 'Blindagem contra fraudes.'
        },
        shop: {
          title: 'Oficinas',
          desc: 'Clientes prontos.'
        },
        mechanic: {
          title: 'Mecânicos',
          desc: 'Valorização real.'
        }
      },
      stats: {
        users: 'Usuários',
        partners: 'Parceiros',
        accuracy: 'Precisão'
      }
    },
    driversLanding: {
      hero: {
        tag: 'PARA MOTORISTAS PREVENIDOS',
        title: 'Bateu o carro?',
        titleHighlight: 'O OC+ resolve tudo.',
        desc: 'Do dinheiro para o conserto até a burocracia de derrubar um poste. Somos o seu copiloto quando tudo dá errado.',
        cta: 'Usar Scanner Grátis',
        secondaryCta: 'Planos',
        trust: '12k+ protegidos',
        cardTitle: 'Relatório de Incidente',
        cardSubtitle: 'Gerado pelo OC+ em 2 segundos',
        cardItem1: 'Costo Estimado',
        cardValue1: 'R$ 4.250,00',
        cardItem2: 'Risco Infraestrutura',
        cardValue2: 'Alto (Poste)',
        cardItem3: 'Crédito Aprovado',
        cardValue3: 'Sim (24x)'
      },
      creditSection: {
        title: 'Bateu e está sem grana?',
        desc: 'Acidentes não avisam quando vão chegar. Por isso, o OC+ oferece crédito imediato para o seu conserto.',
        items: [
          'Parcelamento em até 24x',
          'Pagamento direto à oficina',
          'Aprovação em segundos pelo App'
        ],
        card: {
          label: 'Valor do Reparo',
          value: 'R$ 2.500,00',
          button: 'Solicitar Parcelamento'
        }
      },
      legalSection: {
        title: 'Derrubou um poste ou placa?',
        desc: 'Danos ao patrimônio público geram multas e processos se não forem tratados corretamente. O OC+ te guia.',
        items: [
          'Passo a passo legal automático',
          'Contatos de emergência (Energia/CET)',
          'Evite processos por evasão do local'
        ],
        cardTitle: 'Alerta OC+ Ativado',
        cardItem1Title: 'Dano a Rede Elétrica Detectado',
        cardItem1Desc: 'NÃO SAIA DO CARRO. Risco de choque elétrico. Aguarde o socorro.',
        cardItem2Title: 'Protocolo Legal',
        cardItem2Desc: 'Sua localização foi salva. O boletim de ocorrência online foi pré-preenchido.'
      },
      towSection: {
        title: 'O carro não anda? O guincho chega.',
        desc: 'Nossa rede de parceiros cobre todo o território nacional. Com o OC+ Prime, você tem desconto e prioridade.',
        card1Title: 'Geolocalização',
        card1Desc: 'Encontramos o guincho mais próximo via GPS em segundos.',
        card2Title: 'Preço Tabelado',
        card2Desc: 'Sem surpresas na hora de pagar. Você aprova o valor antes.',
        card3Title: 'Acompanhamento',
        card3Desc: 'Veja o deslocamento do socorro em tempo real no mapa.'
      },
      problem: {
        title: 'O Problema',
        p1: { title: 'Orçamento "Chute"', desc: 'Preços aleatórios.' },
        p2: { title: 'Insegurança', desc: 'Serviço duvidoso.' },
        p3: { title: 'Burocracia', desc: 'Tempo perdido.' }
      },
      solution: {
        title: 'A Solução',
        s1: { title: 'Raio-X', desc: 'Diagnóstico exato via foto.' },
        s2: { title: 'Lei', desc: 'Análise automática de culpa.' },
        s3: { title: 'Crédito', desc: 'Dinheiro para consertar.' }
      },
      features: {
        title: 'Por que OC++?',
        f1: { title: 'Validador', desc: 'Auditamos seu orçamento.' },
        f2: { title: 'SOS', desc: 'Ajuda real, rápido.' },
        f3: { title: 'Dossiê', desc: 'Valorize seu carro.' }
      },
      ctaBox: {
        title: 'Proteja seu patrimônio.',
        desc: '',
        button: 'Começar'
      }
    },
    shopsLanding: {
      hero: {
        title: 'Mais Lucro. Zero Ruído.',
        subtitle: 'B2B Intelligence',
        desc: 'Clientes chegam com diagnóstico e dinheiro. Você só executa.',
        cta: 'Cadastrar Oficina',
      },
      benefits: {
        title: 'Eficiência',
        b1: { title: 'Financeiro', desc: 'Gestão automática.' },
        b2: { title: 'Produtividade', desc: 'Controle de tempo.' },
        b3: { title: 'Foco', desc: 'Serviços rentáveis.' }
      }
    },
    mechanicsLanding: {
      hero: {
        title: 'Sua Carreira. Seu Comando.',
        subtitle: 'Seja Parceiro',
        desc: 'Receba chamados. Execute. Receba. Sem patrão.',
        cta: 'Credenciar',
      },
      benefits: {
        title: 'Vantagens',
        b1: { title: 'Qualidade', desc: 'Serviços prontos.' },
        b2: { title: 'Status', desc: 'Sello de Expert.' },
        b3: { title: 'Gestão', desc: 'Agenda no bolso.' }
      }
    },
    hero: {
      tag: 'TECNOLOGIA OC+ 3.0',
      titlePrefix: 'Ocorrência',
      titleHighlight: 'Mais',
      description: 'Do diagnóstico caótico, até a leveza e o alívio da solução.',
      btnDriver: 'Sou Motorista',
      btnShop: 'Sou Oficina',
      scannerTitle: 'Scanner de Dados',
      scannerOnline: 'ONLINE',
      scannerFooter1: '2 MINUTOS',
      scannerFooter2: 'LAUDO CTB',
      scannerFooter3: 'ORÇAMENTO',
    },
    videoSection: {
      badge: 'TECNOLOGIA EM AÇÃO',
      title: 'Do caos à solução em segundos',
      cta: 'VER COMO FUNCIONA'
    },
    solutions: {
      title: 'Um app, duas Soluções',
      subtitle: 'Resolvemos a dor de quem bateu e a ineficiência de quem conserta.',
      driver: {
        title: 'Para Conductores',
        desc: 'Bateu? Escaneie o dano, receba o orçamento justo, consiga empréstimo para pagar e chame o guincho. Tudo em um lugar.',
        cta: 'Saiba mais',
      },
      shop: {
        title: 'Para Oficinas',
        desc: 'Faça orçamentos em 2 minutos, proteja sua margem de lucro nas peças e receba leads qualificados na sua região.',
        cta: 'Saiba mais',
      }
    },
    journeySection: {
      title: 'Sua jornada recomeça com',
      titleHighlight: 'OC+',
      subtitle: 'Busque a total segurança durante um imprevisto.',
    },
    features: {
      tag: 'Ecossistema',
      title: 'Integração Total',
      item1: {
        title: 'Motoristas',
        desc: 'Segurança absoluta.'
      },
      item2: {
        title: 'Oficinas',
        desc: 'Leads qualificados.'
      },
      item3: {
        title: 'Laudo',
        desc: 'Prova técnica.'
      }
    },
    history: {
      title: 'Laudos',
      empty: 'Vazio.',
      cost: 'Estimativa',
      delete: 'Apagar',
    },
    howItWorks: {
      tag: 'Processo',
      title: 'Como Funciona',
      step1: 'Diagnóstico',
      desc1: 'IA identifica o dano.',
      step2: 'Laudo',
      desc2: 'Custo e Lei.',
      step3: 'Solução',
      desc3: 'Reparo ou Crédito.',
    },
    video: {
      overlayTitle: 'Futuro',
    },
    upload: {
      title: 'Toque para Avaliar',
      analyzing: 'Processando...',
      dragDrop: 'Envie uma foto da batida',
      aiSteps: 'Auditando...',
      button: 'Avaliar',
      error: 'Erro na imagem.',
    },
    analysis: {
      title: 'Relatório Técnico',
      newAnalysis: 'Novo',
      severity: 'Gravidade',
      summary: 'Parecer',
      parts: {
        title: 'Peças',
        replace: 'Trocar',
        repair: 'Reparar',
        check: 'Verificar',
      },
      legal: {
        title: 'Jurídico',
        assessment: 'Culpabilidade',
        advice: 'Conselho',
        disclaimer: 'Informativo.'
      },
      recommendations: {
        title: 'Parceiros',
      },
      costs: {
        title: 'Mercado',
        partsTotal: 'Peças',
        labor: 'Mão de Obra',
        totalEstimated: 'Total',
        disclaimer: '*Estimativa.',
        cta: 'Ver Premium',
        lockedTitle: 'Bloqueado',
        lockedDesc: 'Acesse preços detalhados.',
        lockedButton: 'Desbloquear',
        unlockedCta: 'Baixar PDF',
      },
      services: {
        loan: {
          title: 'Parcelar?',
          desc: 'Crédito aprovado.',
          cta: 'Simular',
        },
        publicProperty: {
          title: 'Dano Público',
          desc: 'Regularize.',
          cta: 'Guia',
        }
      }
    },
    pricing: {
      header: 'Planos',
      title: 'Escolha',
      subtitle: 'Tecnologia acessível.',
      tabs: {
        driver: 'Motorista',
        shop: 'Oficina',
        mechanic: 'Mecânico',
      },
      cta: 'Assinar',
      mostPopular: 'Popular',
    },
    admin: {
      title: 'Dashboard',
      revenue: 'Potencial',
      analyses: 'Orçamentos',
      users: 'Clientes',
      critical: 'Prioridade',
      chartVolume: 'Volume',
      chartRevenue: 'Financeiro',
      latestInsight: 'Insight',
      profileLabels: {
        segment: 'Carro',
        churn: 'Risco',
        upsell: 'Sugestão',
      },
    },
    footer: {
      desc: 'Tecnologia líder em orçamentação automotiva e inteligência de mercado para reparadoras e motoristas.',
      col1: 'Soluções',
      link1: 'Para Motoristas',
      link2: 'Para Oficinas',
      link3: 'Scanner OC+',
      col2: 'Empresa',
      link4: 'Sobre Nós',
      link5: 'Contato Comercial',
      link6: 'Termos de Uso',
      copyright: '© 2024 OC+ Tecnologia Automotiva Ltda. Todos os direitos reservados.',
    }
  },
  'en': {
    nav: { services: 'Solutions', drivers: 'Drivers', shops: 'Shops', mechanics: 'Mechanics', analysis: 'Start', history: 'History', plans: 'Pricing', admin: 'Dashboard', about: 'About', login: 'Login', logout: 'Logout', welcome: 'Hi', shopBadge: 'Partner', mechanicBadge: 'Expert', notifications: 'Alerts', markAllRead: 'Clear', empty: 'Empty' },
    auth: { title: 'System Access', subtitle: 'Auto Intelligence.', tabDriver: 'Driver', tabShop: 'Shop', tabMechanic: 'Mechanic', tabAdmin: 'Admin', emailPlaceholder: 'email', passwordPlaceholder: 'pass', button: 'Enter', basicLabel: 'Driver (Free)', premiumLabel: 'Driver (Premium)' },
    emergency: { title: 'Emergency', subtitle: 'We are here.', btnHelp: 'Guide', btnHelpDesc: 'Talk to expert.', btnSolution: 'Solve Now', btnSolutionDesc: 'Tow or Mech.', questions: { drivable: 'Drivable?', people: 'People?', injured: 'Injuries?', kids: 'Kids?', fire: 'Fire?', location: 'Location?', details: 'Summary:' }, finding: 'Searching...', driverFound: 'Found.', driverArriving: 'Arriving in', contacting: 'Connecting...', agentCall: 'Wait for call.', mapBadge: 'Active', cancel: 'Cancel' },
    financialAidSection: { badge: 'Credit', title: 'Fix now.', titleHighlight: 'Pay later.', subtitle: 'Approved capital.', desc: 'Immediate credit lines.', cards: { loan: { title: 'Installments', desc: 'Instant credit.', highlight: 'Up to 24x' }, insurance: { title: 'Insurance', desc: 'We handle paperwork.', highlight: 'Fast Refund' } }, cta: 'Check Credit' },
    superAdmin: { title: 'Global Command', menu: { overview: 'View', history: 'Incidents', service: 'Support', monitoring: 'Real-time', costs: 'Costs', earnings: 'Revenue', sales: 'Sales', partnerships: 'Partners', legal: 'Legal', reports: 'BI' }, stats: { activeCalls: 'Calls', avgTime: 'AHT', satisfaction: 'NPS', totalRevenue: 'Revenue', totalCosts: 'Costs', netProfit: 'Profit', activePartners: 'Online' }, users: 'Users', financial: 'Finance', totalUsers: 'Total', activeShops: 'Shops', conversionRate: 'Conversion', recentActivity: 'Feed', userList: 'Accounts', filterDriver: 'Drivers', filterShop: 'Shops', role: 'Role', status: 'Status', actions: 'Action' },
    mechanicDashboard: { title: 'Expert Panel', verifiedBadge: 'Certified', verifiedDesc: 'Elite.', quickActions: 'Actions', newDiagnostic: 'Diagnose', maintenance: 'Service', partsOrder: 'Parts', stats: { activeJobs: 'Active', partsStock: 'Stock', efficiency: 'Efficiency' }, jobs: { title: 'Queue', engine: 'Engine', brakes: 'Brakes', suspension: 'Suspension', electronics: 'Electric', pending: 'Queue', inProgress: 'Running', completed: 'Done' }, tabs: { dashboard: 'View', history: 'History', requests: 'Leads' }, requestsView: { title: 'SOS', subtitle: 'Nearby.', empty: 'No calls.', accept: 'Accept', decline: 'Ignore', navigating: 'Going...', contact: 'Call', distance: 'km' } },
    shopDashboard: { title: 'Management', verifiedBadge: 'Verified', verifiedDesc: 'Audited.', quickActions: 'Actions', newEstimate: 'Estimate', checklist: 'Checklist', whatsapp: 'Whatsapp', lastEstimates: 'Recientes', pending: 'Pendiente', approved: 'Approved', tabs: { dashboard: 'Panel', history: 'History', requests: 'Leads' }, requestsView: { title: 'Leads', subtitle: 'Clients nearby.', empty: 'Searching...', accept: 'Capture', decline: 'Dismiss', navigating: 'En route...', contact: 'Talk', distance: 'km' } },
    aboutPage: { title: 'Automotive Truth', subtitle: 'Connecting via data.', mission: { title: 'Purpose', text: 'Radical transparency.' }, pillars: { driver: { title: 'Driver', desc: 'Scam shield.' }, shop: { title: 'Shops', desc: 'Ready clients.' }, mechanic: { title: 'Mechanics', desc: 'Real value.' } }, stats: { users: 'Users', partners: 'Partners', accuracy: 'Accuracy' } },
    driversLanding: { hero: { tag: 'FOR PREPARED DRIVERS', title: 'Crashed your car?', titleHighlight: 'OC+ solves it all.', desc: 'From repair money to bureaucracy. We are your copilot when everything goes wrong.', cta: 'Use Free Scanner', secondaryCta: 'Plans', trust: '12k+ protected', cardTitle: 'Incident Report', cardSubtitle: 'Generated by OC+ in 2s', cardItem1: 'Estimated Cost', cardValue1: '$ 850.00', cardItem2: 'Infra Risk', cardValue2: 'High (Pole)', cardItem3: 'Credit Approved', cardValue3: 'Yes (24x)' }, creditSection: { title: 'Crashed and broke?', desc: 'Accidents do not warn when they arrive. That\'s why OC+ offers immediate credit for your repair.', items: ['Installments up to 24x', 'Direct payment to shop', 'Approval in seconds'], card: { label: 'Repair Cost', value: '$ 2,500.00', button: 'Request Installments' } }, legalSection: { title: 'Hit a pole or sign?', desc: 'Damage to public property generates fines and lawsuits if not handled correctly. OC+ guides you.', items: ['Automatic legal walkthrough', 'Emergency contacts (Utility/Traffic)', 'Avoid hit-and-run charges'], cardTitle: 'OC+ Alert Activated', cardItem1Title: 'Power Grid Damage Detected', cardItem1Desc: 'DO NOT EXIT CAR. Risk of electric shock. Wait for help.', cardItem2Title: 'Legal Protocol', cardItem2Desc: 'Your location has been saved. The online police report has been pre-filled.' }, towSection: { title: "Car won't start? The tow truck is coming.", desc: "Our partner network covers the entire national territory. With OC+ Prime, you get discounts and priority.", card1Title: "Geolocation", card1Desc: "We find the nearest tow truck via GPS in seconds.", card2Title: "Fixed Price", card2Desc: "No surprises when paying. You approve the value beforehand.", card3Title: "Tracking", card3Desc: "See the rescue displacement in real time on the map." }, problem: { title: 'The Problem', p1: { title: 'Guesswork', desc: 'Random prices.' }, p2: { title: 'Insecurity', desc: 'Doubts.' }, p3: { title: 'Red Tape', desc: 'Wasted time.' } }, solution: { title: 'The Solution', s1: { title: 'X-Ray', desc: 'Photo diagnosis.' }, s2: { title: 'Law', desc: 'Liability check.' }, s3: { title: 'Credit', desc: 'Money to fix.' } }, features: { title: 'Why OC++?', f1: { title: 'Validator', desc: 'We audit quotes.' }, f2: { title: 'SOS', desc: 'Real help.' }, f3: { title: 'Dossier', desc: 'Car value.' } }, ctaBox: { title: 'Protect your asset.', desc: '', button: 'Start' } },
    shopsLanding: { hero: { title: 'More Profit. Zero Noise.', subtitle: 'B2B Intelligence', desc: 'Clients arrive with diagnosis and money. You just execute.', cta: 'Register Shop' }, benefits: { title: 'Efficiency', b1: { title: 'Finance', desc: 'Auto mgmt.' }, b2: { title: 'Productivity', desc: 'Time control.' }, b3: { title: 'Foco', desc: 'Profitable services.' } } },
    mechanicsLanding: { hero: { title: 'Your Career. Your Command.', subtitle: 'Be a Partner', desc: 'Get calls. Execute. Get paid. No boss.', cta: 'Join' }, benefits: { title: 'Perks', b1: { title: 'Quality', desc: 'Ready jobs.' }, b2: { title: 'Status', desc: 'Expert badge.' }, b3: { title: 'Mgmt', desc: 'Pocket schedule.' } } },
    hero: {
      tag: 'OC+ TECHNOLOGY 3.0',
      titlePrefix: 'OC+',
      titleHighlight: 'Smart Repair.',
      description: 'From chaotic diagnosis to the lightness and relief of the solution.',
      btnDriver: 'I am a Driver',
      btnShop: 'I am a Shop',
      scannerTitle: 'Data Scanner',
      scannerOnline: 'ONLINE',
      scannerFooter1: '2 MINUTES',
      scannerFooter2: 'CTB REPORT',
      scannerFooter3: 'ESTIMATE',
    },
    videoSection: {
      badge: 'TECHNOLOGY IN ACTION',
      title: 'From chaos to solution in seconds',
      cta: 'SEE HOW IT WORKS'
    },
    solutions: {
      title: 'One app, two Solutions',
      subtitle: 'We solve the pain of those who crashed and the inefficiency of those who fix it.',
      driver: {
        title: 'For Drivers',
        desc: 'Crashed? Scan the damage, get a fair quote, get a loan to pay, and call a tow truck. All in one place.',
        cta: 'Learn more',
      },
      shop: {
        title: 'For Shops',
        desc: 'Create quotes in 2 minutes, protect your profit margin on parts, and get qualified leads in your region.',
        cta: 'Learn more',
      }
    },
    journeySection: {
      title: 'Your journey restarts with',
      titleHighlight: 'OC+',
      subtitle: 'From accident to road, we are with you.',
    },
    features: { tag: 'Ecosistema', title: 'Total Integration', item1: { title: 'Drivers', desc: 'Absolute safety.' }, item2: { title: 'Shops', desc: 'Qualified leads.' }, item3: { title: 'Report', desc: 'Technical proof.' } },
    history: { title: 'Reports', empty: 'Empty.', cost: 'Estimate', delete: 'Delete' },
    howItWorks: { tag: 'Process', title: 'How it Works', step1: 'Diagnosis', desc1: 'AI identifies.', step2: 'Report', desc2: 'Cost & Law.', step3: 'Solution', desc3: 'Fix or Credit.' },
    video: { overlayTitle: 'Future' },
    upload: { title: 'Tap to Evaluate', analyzing: 'Processing...', dragDrop: 'Upload damage photo', aiSteps: 'Auditing...', button: 'Generate Report', error: 'Image error.' },
    analysis: { title: 'Tech Report', newAnalysis: 'New', severity: 'Severity', summary: 'Opinion', parts: { title: 'Parts', replace: 'Replace', repair: 'Repair', check: 'Check' }, legal: { title: 'Legal', assessment: 'Liability', advice: 'Advice', disclaimer: 'Info only.' }, recommendations: { title: 'Partners' }, costs: { title: 'Market', partsTotal: 'Parts', labor: 'Labor', totalEstimated: 'Total', disclaimer: '*Estimate.', cta: 'Go Premium', lockedTitle: 'Locked', lockedDesc: 'Get details.', lockedButton: 'Unlock', unlockedCta: 'Download PDF' }, services: { loan: { title: 'Installments?', desc: 'Approved.', cta: 'Simulate' }, publicProperty: { title: 'Public Dmg', desc: 'Comply.', cta: 'Guide' } } },
    pricing: { header: 'Plans', title: 'Choose', subtitle: 'Accessible tech.', tabs: { driver: 'Driver', shop: 'Shop', mechanic: 'Mechanic' }, cta: 'Subscribe', mostPopular: 'Popular' },
    admin: { title: 'Dashboard', revenue: 'Potencial', analyses: 'Quotes', users: 'Clients', critical: 'Priority', chartVolume: 'Volume', chartRevenue: 'Financial', latestInsight: 'Insight', profileLabels: { segment: 'Car', churn: 'Risk', upsell: 'Tip' } },
    footer: {
      desc: 'Leading automotive estimating technology and market intelligence for repairers and drivers.',
      col1: 'Solutions',
      link1: 'For Drivers',
      link2: 'For Shops',
      link3: 'Scanner OC+',
      col2: 'Company',
      link4: 'About Us',
      link5: 'Contact Sales',
      link6: 'Terms of Use',
      copyright: '© 2024 OC+ Automotive Technology Ltd. All rights reserved.',
    }
  },
  'es': {
    nav: { services: 'Soluciones', drivers: 'Conductores', shops: 'Talleres', mechanics: 'Mecánicos', analysis: 'Análisis', history: 'Historial', plans: 'Precios', admin: 'Gestión', about: 'Sobre', login: 'Entrar', logout: 'Salir', welcome: 'Hola', shopBadge: 'Socio', mechanicBadge: 'Experto', notifications: 'Alertas', markAllRead: 'Limpiar', empty: 'Vacío' },
    auth: { title: 'Acceso', subtitle: 'Inteligencia Auto.', tabDriver: 'Conductor', tabShop: 'Taller', tabMechanic: 'Mecánico', tabAdmin: 'Admin', emailPlaceholder: 'email', passwordPlaceholder: 'clave', button: 'Entrar', basicLabel: 'Conductor (Gratis)', premiumLabel: 'Conductor (Premium)' },
    emergency: { title: 'Emergencia', subtitle: 'Estamos contigo.', btnHelp: 'Guía', btnHelpDesc: 'Habla con experto.', btnSolution: 'Resolver', btnSolutionDesc: 'Grúa o Mec.', questions: { drivable: '¿Anda?', people: '¿Gente?', injured: '¿Heridos?', kids: '¿Niños?', fire: '¿Fuego?', location: '¿Ubicación?', details: 'Resumen:' }, finding: 'Buscando...', driverFound: 'Encontrado.', driverArriving: 'Llegando en', contacting: 'Conectando...', agentCall: 'Espera llamada.', mapBadge: 'Activa', cancel: 'Cancelar' },
    financialAidSection: { badge: 'Crédito', title: 'Arregla ya.', titleHighlight: 'Paga luego.', subtitle: 'Capital aprobado.', desc: 'Crédito inmediato.', cards: { loan: { title: 'Cuotas', desc: 'Crédito ya.', highlight: 'Hasta 24x' }, insurance: { title: 'Seguro', desc: 'Hacemos el trámite.', highlight: 'Reembolso Rápido' } }, cta: 'Ver Crédito' },
    superAdmin: { title: 'Comando Global', menu: { overview: 'Visión', history: 'Incidentes', service: 'Atención', monitoring: 'Tiempo Real', costs: 'Costos', earnings: 'Ingresos', sales: 'Ventas', partnerships: 'Socios', legal: 'Legal', reports: 'BI' }, stats: { activeCalls: 'Llamadas', avgTime: 'TMA', satisfaction: 'NPS', totalRevenue: 'Ingresos', totalCosts: 'Costos', netProfit: 'Lucro', activePartners: 'Online' }, users: 'Usuarios', financial: 'Finanzas', totalUsers: 'Total', activeShops: 'Talleres', conversionRate: 'Conversión', recentActivity: 'Feed', userList: 'Cuentas', filterDriver: 'Conductores', filterShop: 'Talleres', role: 'Rol', status: 'Estado', actions: 'Acción' },
    mechanicDashboard: { title: 'Panel Experto', verifiedBadge: 'Certificado', verifiedDesc: 'Elite.', quickActions: 'Acciones', newDiagnostic: 'Diagnosticar', maintenance: 'Revisión', partsOrder: 'Piezas', stats: { activeJobs: 'Activos', partsStock: 'Activos', efficiency: 'Eficiencia' }, jobs: { title: 'Cola', engine: 'Motor', brakes: 'Frenos', suspension: 'Suspensión', electronics: 'Eléctrica', pending: 'Cola', inProgress: 'Curso', completed: 'Listo' }, tabs: { dashboard: 'Visión', history: 'Historial', requests: 'Leads' }, requestsView: { title: 'SOS', subtitle: 'Cercanos.', empty: 'Sin llamadas.', accept: 'Aceptar', decline: 'Ignorar', navigating: 'Yendo...', contact: 'Llamar', distance: 'km' } },
    shopDashboard: { title: 'Gestión', verifiedBadge: 'Verificado', verifiedDesc: 'Auditado.', quickActions: 'Acciones', newEstimate: 'Presupuesto', checklist: 'Checklist', whatsapp: 'Whatsapp', lastEstimates: 'Recientes', pending: 'Pendiente', approved: 'Aprobado', tabs: { dashboard: 'Panel', history: 'Historial', requests: 'Leads' }, requestsView: { title: 'Leads', subtitle: 'Clientes cerca.', empty: 'Buscando...', accept: 'Captar', decline: 'Descartar', navigating: 'En camino...', contact: 'Hablar', distance: 'km' } },
    aboutPage: { title: 'Verdad Automotriz', subtitle: 'Conexión vía datos.', mission: { title: 'Propósito', text: 'Transparencia radical.' }, pillars: { driver: { title: 'Conductor', desc: 'Blindaje.' }, shop: { title: 'Talleres', desc: 'Clientes listos.' }, mechanic: { title: 'Mecánicos', desc: 'Valor real.' } }, stats: { users: 'Usuarios', partners: 'Socios', accuracy: 'Precisión' } },
    driversLanding: { hero: { tag: 'PARA CONDUCTORES PREVENIDOS', title: '¿Chocaste?', titleHighlight: 'OC+ lo resuelve.', desc: 'Del dinero para el arreglo a la burocracia. Somos tu copiloto.', cta: 'Usar Escáner Gratis', secondaryCta: 'Planes', trust: '12k+ protegidos', cardTitle: 'Informe de Incidente', cardSubtitle: 'Generado por OC+ en 2s', cardItem1: 'Costo Estimado', cardValue1: '$ 850.00', cardItem2: 'Riesgo Infra', cardValue2: 'Alto (Poste)', cardItem3: 'Crédito Aprobado', cardValue3: 'Sí (24x)' }, creditSection: { title: '¿Chocaste y sin dinero?', desc: 'Los accidentes no avisan. Por eso, OC+ ofrece crédito inmediato para tu reparación.', items: ['Cuotas hasta 24x', 'Pago directo al taller', 'Aprobación en segundos'], card: { label: 'Costo Reparación', value: '$ 2,500.00', button: 'Solicitar Cuotas' } }, legalSection: { title: '¿Golpeaste un poste o señal?', desc: 'Los daños al patrimonio público generan multas y demandas si no se manejan correctamente. OC+ te guía.', items: ['Guía legal automática', 'Contactos de emergencia (Servicios/Tráfico)', 'Evita demandas por fuga'], cardTitle: 'Alerta OC+ Activada', cardItem1Title: 'Daño a Red Eléctrica Detectado', cardItem1Desc: 'NO SALGA DEL AUTO. Riesgo de descarga eléctrica. Espere ayuda.', cardItem2Title: 'Protocolo Legal', cardItem2Desc: 'Tu ubicación fue guardada. El informe policial online fue prellenado.' }, towSection: { title: "¿El auto no arranca? La grúa llega.", desc: "Nuestra red de socios cubre todo el territorio nacional. Con OC+ Prime, tienes descuento y prioridad.", card1Title: "Geolocalización", card1Desc: "Encontramos la grúa más cercana vía GPS en segundos.", card2Title: "Precio Fijo", card2Desc: "Sin sorpresas a la hora de pagar. Apruebas el valor antes.", card3Title: "Seguimiento", card3Desc: "Ve el desplazamiento del auxilio en tiempo real en el mapa." }, problem: { title: 'El Problema', p1: { title: 'Adivinanzas', desc: 'Precios al azar.' }, p2: { title: 'Inseguridad', desc: 'Dudas.' }, p3: { title: 'Burocracia', desc: 'Tiempo perdido.' } }, solution: { title: 'La Solución', s1: { title: 'Rayos-X', desc: 'Diagnóstico foto.' }, s2: { title: 'Ley', desc: 'Análisis culpa.' }, s3: { title: 'Crédito', desc: 'Dinero ya.' } }, features: { title: '¿Por qué OC++?', f1: { title: 'Validador', desc: 'Auditamos seu orçamento.' }, f2: { title: 'SOS', desc: 'Ajuda real, rápido.' }, f3: { title: 'Dossiê', desc: 'Valorize seu carro.' } }, ctaBox: { title: 'Protege tu patrimonio.', desc: '', button: 'Empezar' } },
    shopsLanding: { hero: { title: 'Más Lucro. Cero Ruido.', subtitle: 'B2B Intelligence', desc: 'Clientes llegan con diagnóstico y dinero. Solo ejecutas.', cta: 'Registrar Taller' }, benefits: { title: 'Eficiencia', b1: { title: 'Finanzas', desc: 'Gestión auto.' }, b2: { title: 'Productividad', desc: 'Time control.' }, b3: { title: 'Foco', desc: 'Serviços rentables.' } } },
    mechanicsLanding: { hero: { title: 'Tu Carrera. Tu Mando.', subtitle: 'Sé Socio', desc: 'Recibe llamadas. Ejecuta. Cobra. Sin jefe.', cta: 'Unirme' }, benefits: { title: 'Ventajas', b1: { title: 'Calidad', desc: 'Trabajos listos.' }, b2: { title: 'Estatus', desc: 'Sello Experto.' }, b3: { title: 'Gestión', desc: 'Agenda móvil.' } } },
    hero: {
      tag: 'TECNOLOGIA OC+ 3.0',
      titlePrefix: 'Ocorrência',
      titleHighlight: 'Mais',
      description: 'Do diagnóstico caótico, até a leveza e o alívio da solução.',
      btnDriver: 'Sou Motorista',
      btnShop: 'Sou Oficina',
      scannerTitle: 'Scanner de Dados',
      scannerOnline: 'ONLINE',
      scannerFooter1: '2 MINUTOS',
      scannerFooter2: 'LAUDO CTB',
      scannerFooter3: 'ORÇAMENTO',
    },
    videoSection: {
      badge: 'TECNOLOGÍA EN ACCIÓN',
      title: 'Del caos a la solución en segundos',
      cta: 'VER CÓMO FUNCIONA'
    },
    solutions: {
      title: 'Una app, dos Soluciones',
      subtitle: 'Resolvemos el dolor de quien chocó y la ineficiencia de quien repara.',
      driver: {
        title: 'Para Conductores',
        desc: '¿Chocaste? Escanea el daño, recibe presupuesto justo, consigue crédito para pagar y pide grúa. Todo en un lugar.',
        cta: 'Saber más',
      },
      shop: {
        title: 'Para Talleres',
        desc: 'Haz presupuestos en 2 minutos, protege tu margen en piezas y recibe leads calificados en tu zona.',
        cta: 'Saber más',
      }
    },
    journeySection: {
      title: 'Tu jornada reinicia con',
      titleHighlight: 'OC+',
      subtitle: 'Del accidente al camino, estamos contigo.',
    },
    features: { tag: 'Ecosistema', title: 'Integración Total', item1: { title: 'Conductores', desc: 'Seguridad total.' }, item2: { title: 'Talleres', desc: 'Leads calificados.' }, item3: { title: 'Informe', desc: 'Prueba técnica.' } },
    history: { title: 'Informes', empty: 'Vacío.', cost: 'Estimación', delete: 'Borrar' },
    howItWorks: { tag: 'Proceso', title: 'Cómo Funciona', step1: 'Diagnóstico', desc1: 'IA identifica.', step2: 'Informe', desc2: 'Costo y Ley.', step3: 'Solución', desc3: 'Arreglo o Crédito.' },
    video: { overlayTitle: 'Futuro' },
    upload: { title: 'Toque para Evaluar', analyzing: 'Procesando...', dragDrop: 'Sube una foto del daño', aiSteps: 'Auditando...', button: 'Generar Informe', error: 'Error imagen.' },
    analysis: { title: 'Informe Técnico', newAnalysis: 'Nuevo', severity: 'Gravedad', summary: 'Opinión', parts: { title: 'Piezas', replace: 'Reemplazar', repair: 'Reparar', check: 'Revisar' }, legal: { title: 'Legal', assessment: 'Culpabilidad', advice: 'Consejo', disclaimer: 'Informativo.' }, recommendations: { title: 'Socios' }, costs: { title: 'Mercado', partsTotal: 'Piezas', labor: 'Mano Obra', totalEstimated: 'Total', disclaimer: '*Estimado.', cta: 'Ir Premium', lockedTitle: 'Bloqueado', lockedDesc: 'Ver detalles.', lockedButton: 'Desbloquear', unlockedCta: 'Descargar PDF' }, services: { loan: { title: '¿Cuotas?', desc: 'Aprobado.', cta: 'Simular' }, publicProperty: { title: 'Daño Público', desc: 'Cumplimiento.', cta: 'Guía' } } },
    pricing: { header: 'Planes', title: 'Elige', subtitle: 'Tecnología accesible.', tabs: { driver: 'Conductor', shop: 'Taller', mechanic: 'Mecánico' }, cta: 'Suscribir', mostPopular: 'Popular' },
    admin: { title: 'Panel', revenue: 'Potencial', analyses: 'Cotizaciones', users: 'Clientes', critical: 'Prioridad', chartVolume: 'Volumen', chartRevenue: 'Financiero', latestInsight: 'Insight', profileLabels: { segment: 'Auto', churn: 'Riesgo', upsell: 'Tip' } },
    footer: {
      desc: 'Tecnología líder en presupuestos automotrices e inteligencia de mercado para talleres y conductores.',
      col1: 'Soluciones',
      link1: 'Para Conductores',
      link2: 'Para Talleres',
      link3: 'Escáner OC+',
      col2: 'Empresa',
      link4: 'Sobre Nosotros',
      link5: 'Contacto Comercial',
      link6: 'Términos de Uso',
      copyright: '© 2024 OC+ Tecnología Automotriz Ltda. Todos los derechos reservados.',
    }
  }
};

export const partActionMap: Record<Language, Record<string, string>> = {
  'pt-BR': {
    REPLACE: 'Trocar',
    REPAIR: 'Reparar',
    CHECK: 'Checar'
  },
  'en': {
    REPLACE: 'Replace',
    REPAIR: 'Repair',
    CHECK: 'Check'
  },
  'es': {
    REPLACE: 'Cambiar',
    REPAIR: 'Reparar',
    CHECK: 'Revisar'
  }
};
