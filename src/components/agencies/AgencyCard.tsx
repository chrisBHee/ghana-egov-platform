"use client";

import { motion } from "framer-motion";
import { Building2, Users, Link2 } from "lucide-react";
import { cn, formatNumber, formatCurrency } from "@/lib/utils";
import type { GovernmentAgency } from "@/types";

const statusStyles = {
  active: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  transitioning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  planned: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

interface AgencyCardProps {
  agency: GovernmentAgency;
  index: number;
}

export function AgencyCard({ agency, index }: AgencyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group rounded-xl border border-gray-800 bg-gray-900/50 p-5 transition-all hover:border-gray-700 hover:bg-gray-900"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-gray-800 p-2">
            <Building2 className="h-5 w-5 text-gray-400" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">{agency.name}</h3>
            <span className="text-xs text-gray-500">{agency.category}</span>
          </div>
        </div>
        <span
          className={cn(
            "rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize",
            statusStyles[agency.status]
          )}
        >
          {agency.status}
        </span>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Digitalization</span>
          <span className="font-medium text-white">
            {agency.digitalizationRate}%
          </span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${agency.digitalizationRate}%` }}
            transition={{ delay: index * 0.05 + 0.3, duration: 0.8 }}
            className={cn(
              "h-full rounded-full",
              agency.digitalizationRate >= 80
                ? "bg-emerald-500"
                : agency.digitalizationRate >= 50
                  ? "bg-amber-500"
                  : "bg-red-500"
            )}
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-gray-800/50 px-3 py-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Users className="h-3 w-3" />
            Employees
          </div>
          <div className="mt-0.5 text-sm font-medium text-white">
            {formatNumber(agency.employeeCount)}
          </div>
        </div>
        <div className="rounded-lg bg-gray-800/50 px-3 py-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link2 className="h-3 w-3" />
            Connections
          </div>
          <div className="mt-0.5 text-sm font-medium text-white">
            {agency.dataConnections.length}
          </div>
        </div>
      </div>

      <div className="mt-3 border-t border-gray-800 pt-3">
        <p className="text-xs text-gray-500">Budget</p>
        <p className="text-sm font-medium text-white">
          {formatCurrency(agency.budget)}
        </p>
      </div>
    </motion.div>
  );
}
