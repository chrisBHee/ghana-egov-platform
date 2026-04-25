import { AdoptionDataPoint } from "@/types";

export const adoptionData: AdoptionDataPoint[] = [
  { year: 2020, rate: 15.0, agencies: 12 },
  { year: 2021, rate: 28.5, agencies: 24 },
  { year: 2022, rate: 42.0, agencies: 38 },
  { year: 2023, rate: 58.5, agencies: 52 },
  { year: 2024, rate: 75.0, agencies: 68 },
];

export const dashboardStats = {
  totalAgencies: 68,
  adoptionRate: 75.0,
  totalTransactions: 142_850,
  systemUptime: 99.7,
  totalDisbursed: 2_450_000_000,
  pendingPayments: 3_240,
  activeDataCenters: 8,
  aiModelsDeployed: 12,
};
