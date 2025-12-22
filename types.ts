
export enum ViewState {
  HOME = 'HOME',
  ANALYSIS = 'ANALYSIS',
  PRICING = 'PRICING',
  SHOP_DASHBOARD = 'SHOP_DASHBOARD',
  SUPER_ADMIN_DASHBOARD = 'SUPER_ADMIN_DASHBOARD',
  LANDING_DRIVERS = 'LANDING_DRIVERS',
  LANDING_SHOPS = 'LANDING_SHOPS',
  ABOUT = 'ABOUT',
}

export type Language = 'pt-BR' | 'en' | 'es';

export type UserRole = 'DRIVER_BASIC' | 'DRIVER_PREMIUM' | 'SHOP' | 'SUPER_ADMIN';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  shopName?: string; // Only for shops
  verified?: boolean; // Only for shops (OC+ Badge)
}

export interface VehicleInfo {
  make: string;
  model: string;
  year: string;
  type: string;
}

export interface PartItem {
  name: string;
  action: 'REPLACE' | 'REPAIR' | 'CHECK';
  estimatedCost: number;
  status: 'CRITICAL' | 'MAJOR' | 'MINOR';
}

export interface DamageAnalysis {
  severityScore: number; // 0-100
  collisionType: string;
  structuralIntegrity: string;
  summary: string;
}

export interface LegalAnalysis {
  liabilityAssessment: string;
  ctbReference: string; // Brazilian Traffic Code reference
  advice: string;
}

export interface CostEstimation {
  partsTotal: number;
  laborHours: number;
  laborRate: number; // hourly rate
  totalMin: number;
  totalMax: number;
  currency: string;
}

export interface UserProfile {
  segment: string;
  churnRisk: string;
  upsellOpportunity: string;
  recommendedServices: string[];
}

export interface AnalysisResult {
  id: string;
  timestamp: number;
  vehicle: VehicleInfo;
  damage: DamageAnalysis;
  legal: LegalAnalysis;
  parts: PartItem[];
  costs: CostEstimation;
  profile: UserProfile;
}

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: PlanFeature[];
  popular?: boolean;
  category: 'B2C' | 'B2B';
}
