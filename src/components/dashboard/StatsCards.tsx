"use client";

import { motion } from "framer-motion";
import { Building2, TrendingUp, ArrowUpRight, Activity, CreditCard, Server } from "lucide-react";
import { dashboardStats } from "@/lib/data/adoption";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";

const stats = [
  {
    label: "Total Agencies",
    value: formatNumber(dashboardStats.totalAgencies),
    change: "+12 this year",
    icon: Building2,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    label: "Adoption Rate",
    value: formatPercent(dashboardStats.adoptionRate),
    change: "+16.5% from 2023",
    icon: TrendingUp,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    label: "Total Transactions",
    value: formatNumber(dashboardStats.totalTransactions),
    change: formatCurrency(dashboardStats.totalDisbursed),
    icon: CreditCard,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    label: "System Uptime",
    value: `${dashboardStats.systemUptime}%`,
    change: "All systems operational",
    icon: Activity,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
  },
  {
    label: "Active Data Centers",
    value: formatNumber(dashboardStats.activeDataCenters),
    change: "3 under construction",
    icon: Server,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
  },
  {
    label: "AI Models Deployed",
    value: formatNumber(dashboardStats.aiModelsDeployed),
    change: "94% avg accuracy",
    icon: ArrowUpRight,
    color: "text-rose-400",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`rounded-xl border ${stat.borderColor} ${stat.bgColor} p-5`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">{stat.label}</span>
              <Icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <div className={`mt-2 text-2xl font-bold ${stat.color}`}>
              {stat.value}
            </div>
            <div className="mt-1 text-xs text-gray-500">{stat.change}</div>
          </motion.div>
        );
      })}
    </div>
  );
}
