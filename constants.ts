import { PricingPlan, Language } from './types';

export const APP_NAME = "OC++";

export const getPricingPlans = (lang: Language): PricingPlan[] => {
  const suffixMonth = lang === 'pt-BR' ? '/mês' : lang === 'es' ? '/mes' : '/mo';
  const suffixClaim = lang === 'pt-BR' ? '/sinistro' : lang === 'es' ? '/caso' : '/claim';

  const isPt = lang === 'pt-BR';
  const isEn = lang === 'en';

  return [
    // --- DRIVERS ---
    {
      id: 'driver-free',
      name: isPt ? 'Básico' : 'Basic',
      price: isPt ? 'Grátis' : 'Free',
      period: '',
      category: 'DRIVER',
      features: [
        { text: isPt ? 'Diagnóstico visual IA' : 'AI Visual Diagnosis', included: true },
        { text: isPt ? 'Identificação de peças' : 'Parts Identification', included: true },
        { text: isPt ? 'Buscar oficinas próximas' : 'Find nearby shops', included: true },
        { text: isPt ? 'Análise Jurídica' : 'Legal Analysis', included: false },
        { text: isPt ? 'Estimativa de preços' : 'Cost Estimation', included: false },
      ]
    },
    {
      id: 'driver-premium',
      name: isPt ? 'Protegido' : 'Protected',
      price: isPt ? 'R$ 19,90' : '$4.99',
      period: suffixClaim,
      category: 'DRIVER',
      popular: true,
      features: [
        { text: isPt ? 'Laudo Completo (PDF)' : 'Full Report (PDF)', included: true },
        { text: isPt ? 'Análise de Culpabilidade (CTB)' : 'Liability Analysis', included: true },
        { text: isPt ? 'Valores de Mercado' : 'Market Values', included: true },
        { text: isPt ? 'Suporte via Chat' : 'Chat Support', included: true },
        { text: isPt ? 'Acesso a Crédito' : 'Loan Access', included: true },
      ]
    },

    // --- SHOPS (RESTAURADORES) ---
    {
      id: 'shop-start',
      name: isPt ? 'Oficina Digital' : 'Digital Shop',
      price: isPt ? 'R$ 299' : '$59',
      period: suffixMonth,
      category: 'SHOP',
      features: [
        { text: isPt ? 'Painel de Gestão' : 'Management Dashboard', included: true },
        { text: isPt ? 'Receba 10 Leads/mês' : 'Get 10 Leads/mo', included: true },
        { text: isPt ? 'Orçamentos via Foto' : 'Photo Estimates', included: true },
        { text: isPt ? 'API de Integração' : 'Integration API', included: false },
      ]
    },
    {
      id: 'shop-pro',
      name: isPt ? 'Rede Premium' : 'Premium Network',
      price: isPt ? 'R$ 599' : '$119',
      period: suffixMonth,
      category: 'SHOP',
      popular: true,
      features: [
        { text: isPt ? 'Painel Avançado + BI' : 'Advanced Dashboard + BI', included: true },
        { text: isPt ? 'Leads Ilimitados' : 'Unlimited Leads', included: true },
        { text: isPt ? 'Selo de Verificado OC++' : 'OC++ Verified Badge', included: true },
        { text: isPt ? 'API e Multi-lojas' : 'API & Multi-store', included: true },
      ]
    },

    // --- MECHANICS (MECÂNICOS) ---
    {
      id: 'mech-partner',
      name: isPt ? 'Mecânico Parceiro' : 'Partner Mechanic',
      price: isPt ? 'Grátis' : 'Free',
      period: '',
      category: 'MECHANIC',
      features: [
        { text: isPt ? 'Perfil Profissional' : 'Professional Profile', included: true },
        { text: isPt ? 'Agenda Digital' : 'Digital Schedule', included: true },
        { text: isPt ? 'Receba Chamados (Raio 5km)' : 'Receive Calls (5km)', included: true },
        { text: isPt ? 'Selo de Especialista' : 'Expert Badge', included: false },
      ]
    },
    {
      id: 'mech-pro',
      name: isPt ? 'Especialista Pro' : 'Pro Expert',
      price: isPt ? 'R$ 99' : '$19',
      period: suffixMonth,
      category: 'MECHANIC',
      popular: true,
      features: [
        { text: isPt ? 'Selo Mecânico Verificado' : 'Verified Mechanic Badge', included: true },
        { text: isPt ? 'Destaque na Busca' : 'Search Highlight', included: true },
        { text: isPt ? 'Raio de Atendimento Ilimitado' : 'Unlimited Radius', included: true },
        { text: isPt ? 'Gestão de Estoque' : 'Inventory Management', included: true },
        { text: isPt ? 'Clube de Descontos (Peças)' : 'Parts Discount Club', included: true },
      ]
    }
  ];
};

export const getAdminStats = (lang: Language) => {
  const isPt = lang === 'pt-BR';
  const isEn = lang === 'en';
  
  const months = isPt 
    ? ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'] 
    : isEn 
      ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      : ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'];

  return [
    { name: months[0], analyses: 400, revenue: 2400 },
    { name: months[1], analyses: 300, revenue: 1398 },
    { name: months[2], analyses: 200, revenue: 9800 },
    { name: months[3], analyses: 278, revenue: 3908 },
    { name: months[4], analyses: 189, revenue: 4800 },
    { name: months[5], analyses: 239, revenue: 3800 },
    { name: months[6], analyses: 349, revenue: 4300 },
  ];
};