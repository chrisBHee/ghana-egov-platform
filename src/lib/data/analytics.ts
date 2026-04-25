import { AIInsight, PredictionDataPoint, ResourceAllocationItem } from "@/types";

export const aiInsights: AIInsight[] = [
  {
    id: "INS-001",
    title: "Payment Processing Efficiency Up 23%",
    description: "ML analysis shows digital payment processing times decreased from 4.2 days to 3.2 days across centralized agencies, with projected further improvement to 2.1 days by Q2 2025.",
    impact: "high",
    category: "Payments",
    confidence: 94,
  },
  {
    id: "INS-002",
    title: "Inter-Agency Data Silos Detected",
    description: "Pattern analysis reveals 12 agencies sharing less than 30% of interoperable datasets. Centralizing these could reduce duplicate data entry by an estimated 40%.",
    impact: "high",
    category: "Data Quality",
    confidence: 87,
  },
  {
    id: "INS-003",
    title: "Citizen Engagement Trending Upward",
    description: "Portal usage analytics show a 156% increase in citizen service requests processed digitally compared to 2023, with mobile access accounting for 68% of interactions.",
    impact: "medium",
    category: "Citizen Services",
    confidence: 91,
  },
  {
    id: "INS-004",
    title: "Budget Allocation Optimization Available",
    description: "Resource allocation model suggests reallocating 8% of infrastructure budget from legacy maintenance to cloud migration would yield 3x ROI within 18 months.",
    impact: "high",
    category: "Resource Planning",
    confidence: 82,
  },
  {
    id: "INS-005",
    title: "Cybersecurity Risk Score: Moderate",
    description: "Automated threat analysis detected 340 potential vulnerabilities across 8 legacy systems. Recommend prioritizing authentication upgrades for 3 critical agencies.",
    impact: "medium",
    category: "Security",
    confidence: 88,
  },
  {
    id: "INS-006",
    title: "NLA Digital Transition Ahead of Schedule",
    description: "National Lottery Authority digitalization tracking shows 45% completion, ahead of the projected 38% milestone for this quarter toward Q3 2026 full digital operations.",
    impact: "low",
    category: "Agency Progress",
    confidence: 95,
  },
];

export const predictionData: PredictionDataPoint[] = [
  { month: "Jan 24", actual: 62, predicted: 60 },
  { month: "Feb 24", actual: 64, predicted: 63 },
  { month: "Mar 24", actual: 66, predicted: 65 },
  { month: "Apr 24", actual: 68, predicted: 67 },
  { month: "May 24", actual: 69, predicted: 69 },
  { month: "Jun 24", actual: 71, predicted: 70 },
  { month: "Jul 24", actual: 72, predicted: 72 },
  { month: "Aug 24", actual: 73, predicted: 73 },
  { month: "Sep 24", actual: 74, predicted: 74 },
  { month: "Oct 24", actual: 75, predicted: 75 },
  { month: "Nov 24", actual: null, predicted: 77 },
  { month: "Dec 24", actual: null, predicted: 78 },
  { month: "Jan 25", actual: null, predicted: 80 },
  { month: "Feb 25", actual: null, predicted: 82 },
  { month: "Mar 25", actual: null, predicted: 84 },
];

export const resourceAllocation: ResourceAllocationItem[] = [
  { name: "Cloud Infrastructure", value: 35, color: "#3b82f6" },
  { name: "Cybersecurity", value: 20, color: "#ef4444" },
  { name: "AI/ML Development", value: 18, color: "#8b5cf6" },
  { name: "Legacy Maintenance", value: 12, color: "#f59e0b" },
  { name: "Training & Capacity", value: 10, color: "#10b981" },
  { name: "Data Center Ops", value: 5, color: "#6366f1" },
];
