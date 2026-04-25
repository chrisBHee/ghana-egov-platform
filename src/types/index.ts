export interface AdoptionDataPoint {
  year: number;
  rate: number;
  agencies: number;
}

export interface PaymentRecord {
  id: string;
  type: "salary" | "pension" | "grant" | "contract";
  agency: string;
  amount: number;
  status: "completed" | "pending" | "failed";
  date: string;
  recipient: string;
}

export interface GovernmentAgency {
  id: string;
  name: string;
  category: string;
  digitalizationRate: number;
  status: "active" | "transitioning" | "planned";
  employeeCount: number;
  dataConnections: string[];
  budget: number;
}

export interface AIInsight {
  id: string;
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  category: string;
  confidence: number;
}

export interface PredictionDataPoint {
  month: string;
  actual: number;
  predicted: number;
}

export interface ResourceAllocationItem {
  name: string;
  value: number;
  color: string;
}

export interface DataCenter {
  id: string;
  name: string;
  location: string;
  country: string;
  capacityMW: number;
  tier: number;
  status: "operational" | "construction" | "planned";
  costPerMW: number;
  launchYear: number;
}

export interface ActivityItem {
  id: string;
  type: "payment" | "agency" | "system" | "alert";
  title: string;
  description: string;
  timestamp: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}
