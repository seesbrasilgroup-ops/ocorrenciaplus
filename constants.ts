import { PricingPlan, Language } from './types';

export const APP_NAME = "OC+";

export const getPricingPlans = (lang: Language): PricingPlan[] => {
  const suffix = lang === 'pt-BR' ? '/mês' : lang === 'es' ? '/mes' : '/mo';

  const isPt = lang === 'pt-BR';
  const isEn = lang === 'en';

  return [
    {
      id: 'free',
      name: isPt ? 'Motorista Básico' : isEn ? 'Driver Basic' : 'Conductor Básico',
      price: isPt ? 'Grátis' : 'Free',
      period: '',
      category: 'B2C',
      features: [
        { text: isPt ? 'Identificação visual de danos' : isEn ? 'Visual damage identification' : 'Identificación visual de daños', included: true },
        { text: isPt ? 'Lista de peças afetadas' : isEn ? 'List of affected parts' : 'Lista de piezas afectadas', included: true },
        { text: isPt ? 'Localizar Oficinas Próximas' : isEn ? 'Find Nearby Shops' : 'Encontrar Talleres Cercanos', included: true },
        { text: isPt ? 'Análise Jurídica/Culpabilidade' : isEn ? 'Legal/Liability Analysis' : 'Análisis Legal/Culpabilidad', included: false },
        { text: isPt ? 'Estimativa de custos' : isEn ? 'Cost estimation' : 'Estimación de costos', included: false },
      ]
    },
    {
      id: 'plus',
      name: isPt ? 'Motorista Protegido' : isEn ? 'Protected Driver' : 'Conductor Protegido',
      price: isPt ? 'R$ 19,90' : '$4',
      period: isPt ? '/sinistro' : isEn ? '/claim' : '/siniestro', // Pay per use logic
      category: 'B2C',
      popular: true,
      features: [
        { text: isPt ? 'Laudo Completo para Acordo' : isEn ? 'Full Settlement Report' : 'Informe Completo para Acuerdo', included: true },
        { text: isPt ? 'Análise de Culpabilidade (CTB)' : isEn ? 'Liability Analysis (Traffic Laws)' : 'Análisis de Culpabilidad (Leyes)', included: true },
        { text: isPt ? 'Valores Justos de Mercado' : isEn ? 'Fair Market Values' : 'Valores Justos de Mercado', included: true },
        { text: isPt ? 'Download em PDF Oficial' : isEn ? 'Official PDF Download' : 'Descarga PDF Oficial', included: true },
        { text: isPt ? 'Suporte via Chat' : isEn ? 'Chat Support' : 'Soporte vía Chat', included: true },
      ]
    },
    {
      id: 'b2b-pro',
      name: isPt ? 'Oficina Parceira' : isEn ? 'Partner Shop' : 'Taller Socio',
      price: isPt ? 'R$ 199' : '$40',
      period: suffix,
      category: 'B2B',
      popular: true,
      features: [
        { text: isPt ? 'Receba Leads (Motoristas)' : isEn ? 'Receive Leads (Drivers)' : 'Reciba Leads (Conductores)', included: true },
        { text: isPt ? 'Sistema Integrado de Gestão (Dashboard)' : isEn ? 'Integrated Management Dashboard System' : 'Sistema de Panel de Gestión Integrado', included: true },
        { text: isPt ? 'Orçamentos via Foto Ilimitados' : isEn ? 'Unlimited Photo Estimates' : 'Presupuestos por Foto Ilimitados', included: true },
        { text: isPt ? 'Selo de Oficina Verificada' : isEn ? 'Verified Shop Badge' : 'Insignia de Taller Verificado', included: true },
      ]
    },
    {
      id: 'b2b-corp',
      name: isPt ? 'Rede de Funilarias' : isEn ? 'Shop Network' : 'Red de Talleres',
      price: isPt ? 'Sob Consulta' : 'Contact Us',
      period: '',
      category: 'B2B',
      features: [
        { text: isPt ? 'API de Vistoria Digital' : isEn ? 'Digital Inspection API' : 'API de Inspección Digital', included: true },
        { text: isPt ? 'Integração com ERP' : isEn ? 'ERP Integration' : 'Integración ERP', included: true },
        { text: isPt ? 'Gestão Multi-lojas' : isEn ? 'Multi-store Management' : 'Gestión Multi-tienda', included: true },
        { text: isPt ? 'Relatórios de Mercado' : isEn ? 'Market Reports' : 'Informes de Mercado', included: true },
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