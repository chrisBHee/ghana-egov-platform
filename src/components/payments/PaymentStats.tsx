"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, XCircle, Banknote } from "lucide-react";
import { paymentSummary } from "@/lib/data/payments";
import { formatCurrency, formatNumber } from "@/lib/utils";

const stats = [
  {
    label: "Total Disbursed",
    value: formatCurrency(paymentSummary.totalDisbursed),
    sub: `${formatNumber(paymentSummary.completedCount)} transactions`,
    icon: Banknote,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    label: "Pending",
    value: formatCurrency(paymentSummary.pendingAmount),
    sub: `${formatNumber(paymentSummary.pendingCount)} transactions`,
    icon: Clock,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    label: "Failed",
    value: formatCurrency(paymentSummary.failedAmount),
    sub: `${formatNumber(paymentSummary.failedCount)} transactions`,
    icon: XCircle,
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
  },
  {
    label: "Success Rate",
    value: "96.9%",
    sub: "Above 95% target",
    icon: CheckCircle,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
];

export function PaymentStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`rounded-xl border p-5 ${stat.bg}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">{stat.label}</span>
              <Icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <div className={`mt-2 text-xl font-bold ${stat.color}`}>
              {stat.value}
            </div>
            <div className="mt-1 text-xs text-gray-500">{stat.sub}</div>
          </motion.div>
        );
      })}
    </div>
  );
}
