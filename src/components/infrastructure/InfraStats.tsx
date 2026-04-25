"use client";

import { motion } from "framer-motion";
import { Server, HardDrive, Zap, DollarSign, Target, Building } from "lucide-react";
import { infraSummary } from "@/lib/data/infrastructure";
import { formatNumber } from "@/lib/utils";

const stats = [
  {
    label: "Total Facilities",
    value: formatNumber(infraSummary.totalFacilities),
    icon: Building,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    label: "Operational",
    value: formatNumber(infraSummary.operational),
    icon: Server,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    label: "Under Construction",
    value: formatNumber(infraSummary.underConstruction),
    icon: HardDrive,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    label: "Total Capacity",
    value: `${infraSummary.totalCapacityMW.toFixed(1)} MW`,
    icon: Zap,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    label: "Avg Cost / MW",
    value: `$${(infraSummary.avgCostPerMW / 1_000_000).toFixed(1)}M`,
    icon: DollarSign,
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/20",
  },
  {
    label: "Needed for AfCFTA",
    value: formatNumber(infraSummary.facilitiesNeeded),
    icon: Target,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
];

export function InfraStats() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`rounded-xl border p-4 text-center ${stat.bg}`}
          >
            <Icon className={`mx-auto h-5 w-5 ${stat.color}`} />
            <div className={`mt-2 text-lg font-bold ${stat.color}`}>
              {stat.value}
            </div>
            <div className="mt-0.5 text-xs text-gray-500">{stat.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
}
