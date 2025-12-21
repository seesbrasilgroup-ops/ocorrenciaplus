import { Language } from './types';

export const translations = {
  'pt-BR': {
    nav: {
      services: 'Serviços',
      drivers: 'Para Motoristas',
      shops: 'Para Reparadores',
      analysis: 'Começar',
      history: 'Meus Laudos',
      plans: 'Planos',
      admin: 'Painel',
      about: 'Quem Somos',
    },
    aboutPage: {
      title: 'A Solução Automotiva',
      subtitle: 'Conheça a tecnologia que está mudando como lidamos com colisões.',
    },
    driversLanding: {
      hero: {
        title: 'Não é Seguro. É sua Solução Pós-Colisão.',
        subtitle: 'Seu guia técnico e jurídico quando o imprevisto acontece.',
        desc: 'Nós não vendemos seguro. Entregamos relatórios precisos sobre o que fazer após colidir. Seja com outro veículo ou patrimônio público, saiba seus direitos, custos reais e tenha acesso a crédito facilitado em situações desconfortáveis.',
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
        subtitle: 'Inteligência de Dados para Funilarias',
        desc: 'Chega de gerenciar sua oficina no escuro. Tenha um painel completo que mostra exatamente onde você está ganhando dinheiro, seus gargalos de produção e seu Ticket Médio em tempo real.',
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
      description: 'A plataforma definitiva de orientação automotiva. Não somos seguradora: entregamos a verdade técnica e jurídica para você resolver conflitos e consertar seu carro sem ser enganado.',
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
        title: 'Para Funilarias: Orçamento Automático',
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
      tag: 'Visão Computacional',
      title: 'Precisão que gera Confiança',
      subtitle: 'Nossa IA foi treinada com milhões de colisões para entregar a verdade técnica para o motorista e eficiência operacional para a oficina.',
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
        title: 'Oficinas Parceiras Próximas',
      },
      costs: {
        title: 'Estimativa de Mercado Justo',
        partsTotal: 'Custo de Peças',
        labor: 'Mão de Obra Média',
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
      b2b: 'Tenho Oficina',
      cta: 'Selecionar Plano',
      mostPopular: 'Recomendado',
    },
    admin: {
      title: 'Painel da Oficina Parceira',
      revenue: 'Potencial de Vendas',
      analyses: 'Orçamentos Recebidos',
      users: 'Clientes na Região',
      critical: 'Ticket Alto',
      chartVolume: 'Leads Recebidos',
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
    nav: {
      services: 'Services',
      drivers: 'For Drivers',
      shops: 'For Shops',
      analysis: 'Start',
      history: 'My Reports',
      plans: 'Plans',
      admin: 'Dashboard',
      about: 'About Us',
    },
    aboutPage: {
      title: 'The Automotive Solution',
      subtitle: 'Meet the technology changing how we handle collisions.',
    },
    driversLanding: {
      hero: {
        title: 'Not Insurance. It\'s Your Post-Collision Solution.',
        subtitle: 'Your technical and legal guide when the unexpected happens.',
        desc: 'We do not sell insurance. We deliver accurate reports on what to do after a crash. Whether with another vehicle or public property, know your rights, real costs, and access easy credit in uncomfortable situations.',
        cta: 'Generate Report Now',
      },
      benefits: {
        title: 'Why choose OC+?',
        b1: { title: 'Technical Truth', desc: 'Don\'t rely solely on shop estimates. Know the real repair value before negotiating.' },
        b2: { title: 'Legal Direction', desc: 'Hit a pole or another car? Our reports guide you step-by-step to avoid lawsuits.' },
        b3: { title: 'Financial Aid', desc: 'Subscribers get exclusive access to credit lines to fix the car when cash is tight.' }
      }
    },
    shopsLanding: {
      hero: {
        title: 'Take Full Control of Your Operation',
        subtitle: 'Data Intelligence for Body Shops',
        desc: 'Stop managing your shop in the dark. Get a complete dashboard that shows exactly where you are making money, your production bottlenecks, and your Average Ticket in real-time.',
        cta: 'View Dashboard Demo',
      },
      benefits: {
        title: 'End of "Guesswork" Management',
        b1: { title: 'Financial X-Ray', desc: 'Visualize Gross Revenue, Net Profit, and Parts Cost in clear, automatic charts.' },
        b2: { title: 'Productivity Metrics', desc: 'Know exactly how long each repair takes and your team\'s efficiency.' },
        b3: { title: 'Average Ticket Analysis', desc: 'Discover which car types and services bring the highest profit margin to focus on what matters.' }
      }
    },
    hero: {
      title: 'Occurrence',
      subtitle: 'The intelligence guiding drivers after an accident',
      description: 'The definitive automotive guidance platform. We are not an insurer: we deliver technical and legal truth for you to resolve conflicts and fix your car without being misled.',
      steps: {
        step1: 'Damage Photo',
        step2: 'Smart Report',
        step3: 'Solution',
      }
    },
    features: {
      tag: 'Support Technology',
      title: 'One App, Two Solutions',
      item1: {
        title: 'For Drivers: Total Guidance',
        desc: 'Crashed and don\'t know what to do? Receive an immediate technical and legal step-by-step.'
      },
      item2: {
        title: 'For Shops: Automated Estimates',
        desc: 'Receive pre-estimated cars. Save hours on evaluation and access qualified leads in your area.'
      },
      item3: {
        title: 'Unbiased Report',
        desc: 'A standardized document that serves as a technical basis for negotiations, without insurer bias.'
      }
    },
    history: {
      title: 'Claim History',
      empty: 'No records found.',
      cost: 'Pre-Estimate',
      delete: 'Remove',
    },
    howItWorks: {
      tag: 'Smart Flow',
      title: 'How OC+ Works',
      step1: 'Visual Diagnosis',
      desc1: 'Upload a photo. AI detects body and mechanical damage instantly.',
      step2: 'Report & Guidance',
      desc2: 'We calculate fair costs and provide legal guidance on liability and public damage.',
      step3: 'Problem Solution',
      desc3: 'We connect you with shops or offer credit for immediate repair.',
    },
    video: {
      tag: 'Computer Vision',
      title: 'Precision builds Trust',
      subtitle: 'Our AI was trained on millions of collisions to deliver technical truth for drivers and operational efficiency for shops.',
    },
    upload: {
      title: 'Vehicle Photo',
      analyzing: 'Generating Technical Report & Guidance...',
      dragDrop: 'Take a photo to start analysis',
      aiSteps: 'Identifying parts, checking prices and traffic regulations...',
      button: 'Generate Report Now',
      error: 'Could not analyze. Try better lighting.',
    },
    analysis: {
      title: 'Integrated Technical Report',
      newAnalysis: 'New Analysis',
      severity: 'Damage Level',
      summary: 'AI Opinion',
      parts: {
        title: 'Parts Detail',
        replace: 'Replace',
        repair: 'Body/Paint',
        check: 'Check',
      },
      legal: {
        title: 'Legal Guidance (Traffic Law)',
        assessment: 'Preliminary Opinion',
        advice: 'Recommended Next Steps',
        disclaimer: 'This report guides the driver on procedures and liability. It is not insurance.'
      },
      recommendations: {
        title: 'Nearby Partner Shops',
      },
      costs: {
        title: 'Fair Market Estimate',
        partsTotal: 'Parts Cost',
        labor: 'Avg Labor',
        totalEstimated: 'Final Estimate',
        disclaimer: '*Values based on regional average table.',
        cta: 'View Premium Details',
        lockedTitle: 'Unlock Full Report',
        lockedDesc: 'Access detailed prices and complete legal guidance to avoid being taken advantage of.',
        lockedButton: 'Unlock Report ($4.00)',
        unlockedCta: 'Download PDF Report',
      },
      services: {
        loan: {
          title: 'Uncomfortable situation?',
          desc: 'Short on cash for repairs? Subscribers have access to easy loans.',
          cta: 'Simulate Credit',
        },
        publicProperty: {
          title: 'Public Property Damage?',
          desc: 'Hit a pole or sign? See how to settle it to avoid lawsuits.',
          cta: 'View Conduct Guide',
        }
      }
    },
    pricing: {
      header: 'Access Plans',
      title: 'Choose Your Profile',
      subtitle: 'Accessible solutions for diagnostics and financial ease.',
      b2c: 'I am a Driver',
      b2b: 'I own a Shop',
      cta: 'Select Plan',
      mostPopular: 'Recommended',
    },
    admin: {
      title: 'Partner Shop Dashboard',
      revenue: 'Sales Potential',
      analyses: 'Estimates Received',
      users: 'Clients in Area',
      critical: 'Ticket Alto',
      chartVolume: 'Leads Entrantes',
      chartRevenue: 'Service Conversion',
      latestInsight: 'Última Oportunidad',
      profileLabels: {
        segment: 'Vehicle',
        churn: 'Close Prob.',
        upsell: 'Extra Services',
      },
    },
    footer: {
      rights: 'All rights reserved.',
      madeFor: 'Guidance technology for drivers and repairers.',
    }
  },
  'es': {
    nav: {
      services: 'Servicios',
      drivers: 'Para Conductores',
      shops: 'Para Talleres',
      analysis: 'Comenzar',
      history: 'Historial',
      plans: 'Planes',
      admin: 'Panel',
      about: 'Quiénes Somos',
    },
    aboutPage: {
      title: 'La Solución Automotriz',
      subtitle: 'Conoce la tecnología que está cambiando cómo manejamos las colisiones.',
    },
    driversLanding: {
      hero: {
        title: 'No es Seguro. Es tu Solución Post-Colisión.',
        subtitle: 'Tu guía técnico y legal cuando ocurre lo inesperado.',
        desc: 'No vendemos seguros. Entregamos informes precisos sobre qué hacer después de chocar. Ya sea con otro vehículo o propiedad pública, conoce tus derechos, costos reales y accede a crédito fácil en situaciones incómodas.',
        cta: 'Generar Informe Ahora',
      },
      benefits: {
        title: '¿Por qué elegir OC+?',
        b1: { title: 'Verdad Técnica', desc: 'No dependas solo de talleres. Conoce el valor real de la reparación antes de negociar.' },
        b2: { title: 'Dirección Legal', desc: '¿Chocaste un poste u otro auto? Nuestros informes te guían paso a paso para evitar demandas.' },
        b3: { title: 'Ayuda Financiera', desc: 'Los suscriptores tienen acceso exclusivo a líneas de crédito para arreglar el auto cuando falta dinero.' }
      }
    },
    shopsLanding: {
      hero: {
        title: 'Toma el Control Total de tu Operación',
        subtitle: 'Inteligencia de Datos para Talleres',
        desc: 'Deja de gestionar tu taller a ciegas. Ten un panel completo que muestra exactamente dónde estás ganando dinero, tus cuellos de botella y tu Ticket Promedio en tiempo real.',
        cta: 'Ver Demo del Panel',
      },
      benefits: {
        title: 'El Fin de la Gestión por "Suposición"',
        b1: { title: 'Radiografía Financiera', desc: 'Visualiza Facturación Bruta, Beneficio Neto y Costo de Piezas en gráficos claros.' },
        b2: { title: 'Métricas de Productividad', desc: 'Sepa exactamente cuánto tarda cada reparación y la eficiencia de su equipo.' },
        b3: { title: 'Análisis de Ticket Promedio', desc: 'Descubre qué tipos de auto y servicio traen mayor margen para enfocarte en lo que importa.' }
      }
    },
    hero: {
      title: 'Ocurrencia',
      subtitle: 'La inteligencia que guía conductores tras un accidente',
      description: 'La plataforma definitiva de orientación automotriz. No somos aseguradora: entregamos la verdad técnica y legal para que resuelvas conflictos y arregles tu auto sin ser engañado.',
      steps: {
        step1: 'Foto del Daño',
        step2: 'Informe Inteligente',
        step3: 'Solución',
      }
    },
    features: {
      tag: 'Tecnología de Apoyo',
      title: 'Una App, Dos Soluciones',
      item1: {
        title: 'Para Conductores: Guía Total',
        desc: '¿Chocaste y no sabes qué hacer? Recibe un paso a paso técnico y legal inmediato.'
      },
      item2: {
        title: 'Para Talleres: Presupuesto Automático',
        desc: 'Reciba el auto ya presupuestado. Ahorre horas de evaluación y acceda a leads calificados.'
      },
      item3: {
        title: 'Informe Imparcial',
        desc: 'Un documento estandarizado que sirve como base técnica para negociaciones, sin sesgo de aseguradora.'
      }
    },
    history: {
      title: 'Historial de Siniestros',
      empty: 'Ningún análisis registrado.',
      cost: 'Pre-Presupuesto',
      delete: 'Eliminar',
    },
    howItWorks: {
      tag: 'Flujo Inteligente',
      title: 'Cómo Funciona OC+',
      step1: 'Diagnóstico Visual',
      desc1: 'Sube una foto. La IA detecta daños en carrocería y mecánica instantáneamente.',
      step2: 'Informe y Guía',
      desc2: 'Calculamos costos justos y orientamos legalmente sobre culpabilidad y daños públicos.',
      step3: 'Solución del Problema',
      desc3: 'Te conectamos con talleres u ofrecemos crédito para reparación inmediata.',
    },
    video: {
      tag: 'Visión Computacional',
      title: 'Precisión que genera Confianza',
      subtitle: 'Nuestra IA fue entrenada con millones de colisiones para entregar la verdad técnica al conductor y eficiencia al taller.',
    },
    upload: {
      title: 'Foto del vehículo',
      analyzing: 'Generando Informe Técnico y Guía...',
      dragDrop: 'Toma una foto para iniciar el análisis',
      aiSteps: 'Identificando piezas, consultando precios y normas de tráfico...',
      button: 'Generar Informe Ahora',
      error: 'No se pudo analizar. Intente con mejor iluminación.',
    },
    analysis: {
      title: 'Informe Técnico Integrado',
      newAnalysis: 'Nuevo Análisis',
      severity: 'Nivel de Daño',
      summary: 'Opinión de IA',
      parts: {
        title: 'Detalle de Piezas',
        replace: 'Reemplazar',
        repair: 'Chapa/Pintura',
        check: 'Revisión',
      },
      legal: {
        title: 'Orientación Legal (Ley)',
        assessment: 'Opinión Preliminar',
        advice: 'Próximos Pasos Recomendados',
        disclaimer: 'Este informe guía al conductor sobre procedimientos y culpabilidad. No es un seguro.'
      },
      recommendations: {
        title: 'Talleres Asociados Cercanos',
      },
      costs: {
        title: 'Estimación de Mercado Justo',
        partsTotal: 'Costo Piezas',
        labor: 'Mano de Obra Prom.',
        totalEstimated: 'Estimación Final',
        disclaimer: '*Valores basados en tabla promedio regional.',
        cta: 'Ver Detalles Premium',
        lockedTitle: 'Desbloquea Informe Completo',
        lockedDesc: 'Acceda a precios detallados y guía legal completa para no ser engañado.',
        lockedButton: 'Desbloquear Informe ($4.00)',
        unlockedCta: 'Descargar Informe PDF',
      },
      services: {
        loan: {
          title: '¿Situación incómoda?',
          desc: '¿Poco dinero para el arreglo? Los suscriptores tienen acceso a préstamos fáciles.',
          cta: 'Simular Crédito',
        },
        publicProperty: {
          title: '¿Daño a Propiedad Pública?',
          desc: '¿Chocó un poste o señal? Vea cómo regularizar para evitar demandas.',
          cta: 'Ver Guía de Conducta',
        }
      }
    },
    pricing: {
      header: 'Planes de Acceso',
      title: 'Elige tu Perfil',
      subtitle: 'Soluciones accesibles para diagnósticos y facilidad financiera.',
      b2c: 'Soy Conductor',
      b2b: 'Tengo Taller',
      cta: 'Seleccionar Plano',
      mostPopular: 'Recomendado',
    },
    admin: {
      title: 'Panel del Taller Socio',
      revenue: 'Potencial de Ventas',
      analyses: 'Presupuestos Recibidos',
      users: 'Clientes en Zona',
      critical: 'Ticket Alto',
      chartVolume: 'Leads Entrantes',
      chartRevenue: 'Conversión Servicios',
      latestInsight: 'Última Oportunidad',
      profileLabels: {
        segment: 'Vehículo',
        churn: 'Prob. Cierre',
        upsell: 'Servicios Extra',
      },
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      madeFor: 'Tecnología de orientación para conductores y reparadores.',
    }
  }
};

export const partActionMap = {
  'pt-BR': { REPLACE: 'Substituir', REPAIR: 'Reparar', CHECK: 'Verificar' },
  'en': { REPLACE: 'Replace', REPAIR: 'Repair', CHECK: 'Check' },
  'es': { REPLACE: 'Reemplazar', REPAIR: 'Reparar', CHECK: 'Verificar' }
};