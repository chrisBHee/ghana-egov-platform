import { PaymentRecord } from "@/types";

export const paymentRecords: PaymentRecord[] = [
  { id: "PAY-001", type: "salary", agency: "Ministry of Finance", amount: 45_200, status: "completed", date: "2024-11-15", recipient: "Kwame Mensah" },
  { id: "PAY-002", type: "pension", agency: "Social Security Authority", amount: 12_800, status: "completed", date: "2024-11-14", recipient: "Ama Darko" },
  { id: "PAY-003", type: "grant", agency: "Ministry of Education", amount: 250_000, status: "pending", date: "2024-11-13", recipient: "University of Ghana" },
  { id: "PAY-004", type: "salary", agency: "Ghana Health Service", amount: 38_500, status: "completed", date: "2024-11-12", recipient: "Kofi Asante" },
  { id: "PAY-005", type: "contract", agency: "Ministry of Roads", amount: 1_200_000, status: "pending", date: "2024-11-11", recipient: "BuildGhana Ltd" },
  { id: "PAY-006", type: "pension", agency: "Social Security Authority", amount: 15_600, status: "completed", date: "2024-11-10", recipient: "Akua Boateng" },
  { id: "PAY-007", type: "salary", agency: "Ghana Education Service", amount: 42_000, status: "completed", date: "2024-11-09", recipient: "Yaw Owusu" },
  { id: "PAY-008", type: "grant", agency: "Ministry of Trade", amount: 180_000, status: "failed", date: "2024-11-08", recipient: "Export Dev. Board" },
  { id: "PAY-009", type: "salary", agency: "Ghana Police Service", amount: 35_000, status: "completed", date: "2024-11-07", recipient: "Adjoa Mensah" },
  { id: "PAY-010", type: "contract", agency: "Ministry of Energy", amount: 890_000, status: "completed", date: "2024-11-06", recipient: "PowerGrid Solutions" },
  { id: "PAY-011", type: "pension", agency: "Social Security Authority", amount: 11_200, status: "completed", date: "2024-11-05", recipient: "Nana Appiah" },
  { id: "PAY-012", type: "salary", agency: "Judicial Service", amount: 52_000, status: "pending", date: "2024-11-04", recipient: "Efua Tetteh" },
  { id: "PAY-013", type: "grant", agency: "Ministry of Agriculture", amount: 320_000, status: "completed", date: "2024-11-03", recipient: "AgriTech Ghana" },
  { id: "PAY-014", type: "salary", agency: "Ministry of Finance", amount: 48_700, status: "completed", date: "2024-11-02", recipient: "Kwesi Amoako" },
  { id: "PAY-015", type: "contract", agency: "National Lottery Authority", amount: 560_000, status: "pending", date: "2024-11-01", recipient: "Digital Ops Inc" },
  { id: "PAY-016", type: "pension", agency: "Social Security Authority", amount: 13_400, status: "completed", date: "2024-10-31", recipient: "Abena Frimpong" },
  { id: "PAY-017", type: "salary", agency: "Ghana Revenue Authority", amount: 44_600, status: "completed", date: "2024-10-30", recipient: "Kojo Nyarko" },
  { id: "PAY-018", type: "grant", agency: "Ministry of Communications", amount: 750_000, status: "completed", date: "2024-10-29", recipient: "TechHub Accra" },
  { id: "PAY-019", type: "salary", agency: "Immigration Service", amount: 36_800, status: "failed", date: "2024-10-28", recipient: "Esi Adjei" },
  { id: "PAY-020", type: "contract", agency: "Ministry of Defence", amount: 2_100_000, status: "completed", date: "2024-10-27", recipient: "SecureTech Ltd" },
];

export const monthlyPaymentData = [
  { month: "Jan", volume: 12_400, value: 185_000_000 },
  { month: "Feb", volume: 11_800, value: 172_000_000 },
  { month: "Mar", volume: 13_200, value: 198_000_000 },
  { month: "Apr", volume: 12_900, value: 191_000_000 },
  { month: "May", volume: 14_100, value: 212_000_000 },
  { month: "Jun", volume: 13_600, value: 205_000_000 },
  { month: "Jul", volume: 14_800, value: 224_000_000 },
  { month: "Aug", volume: 13_950, value: 210_000_000 },
  { month: "Sep", volume: 15_200, value: 231_000_000 },
  { month: "Oct", volume: 14_600, value: 220_000_000 },
  { month: "Nov", volume: 15_800, value: 238_000_000 },
  { month: "Dec", volume: 16_100, value: 245_000_000 },
];

export const paymentSummary = {
  totalDisbursed: 2_531_000_000,
  pendingAmount: 142_500_000,
  failedAmount: 23_800_000,
  completedCount: 138_420,
  pendingCount: 3_240,
  failedCount: 1_190,
};
