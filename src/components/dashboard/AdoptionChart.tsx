"use client";

import { motion } from "framer-motion";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { TrendingUp } from "lucide-react";
import { adoptionData } from "@/lib/data/adoption";

export function AdoptionChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="rounded-xl border border-gray-800 bg-gray-900/50 p-6"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            E-Government Adoption Rate
          </h3>
          <p className="text-sm text-gray-400">
            Platform adoption across government agencies (2020–2024)
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-400">
          <TrendingUp className="h-4 w-4" />
          +60pp
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={adoptionData}>
            <defs>
              <linearGradient id="adoptionGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis
              dataKey="year"
              stroke="#6b7280"
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <YAxis
              stroke="#6b7280"
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              domain={[0, 100]}
              tickFormatter={(v) => `${v}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #374151",
                borderRadius: "8px",
                color: "#fff",
              }}
              formatter={(value) => [`${value}%`, "Adoption Rate"]}
            />
            <Area
              type="monotone"
              dataKey="rate"
              stroke="#10b981"
              strokeWidth={3}
              fill="url(#adoptionGradient)"
              dot={{ fill: "#10b981", strokeWidth: 2, r: 5 }}
              activeDot={{ r: 7 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-gray-800 pt-4">
        <div className="text-sm text-gray-400">
          <span className="font-medium text-white">15.0%</span> in 2020
        </div>
        <div className="text-sm text-gray-400">
          <span className="font-medium text-emerald-400">75.0%</span> in 2024
        </div>
      </div>
    </motion.div>
  );
}
