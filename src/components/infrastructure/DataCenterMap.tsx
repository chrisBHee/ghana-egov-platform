"use client";

import { motion } from "framer-motion";
import { MapPin, Server } from "lucide-react";
import { dataCenters } from "@/lib/data/infrastructure";
import { cn } from "@/lib/utils";
import type { DataCenter } from "@/types";

const statusStyles = {
  operational: { dot: "bg-emerald-500", text: "text-emerald-400", bg: "bg-emerald-500/10" },
  construction: { dot: "bg-amber-500", text: "text-amber-400", bg: "bg-amber-500/10" },
  planned: { dot: "bg-blue-500", text: "text-blue-400", bg: "bg-blue-500/10" },
};

function DataCenterRow({ dc, index }: { dc: DataCenter; index: number }) {
  const style = statusStyles[dc.status];
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/30 p-4 transition-colors hover:border-gray-700"
    >
      <div className={cn("rounded-lg p-2.5", style.bg)}>
        <Server className={cn("h-5 w-5", style.text)} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-semibold text-white truncate">
            {dc.name}
          </h4>
          <span className={cn("h-2 w-2 rounded-full", style.dot)} />
        </div>
        <div className="mt-0.5 flex items-center gap-2 text-xs text-gray-500">
          <MapPin className="h-3 w-3" />
          {dc.location}, {dc.country}
        </div>
      </div>

      <div className="hidden gap-6 text-right sm:flex">
        <div>
          <div className="text-xs text-gray-500">Capacity</div>
          <div className="text-sm font-medium text-white">
            {dc.capacityMW} MW
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Tier</div>
          <div className="text-sm font-medium text-white">{dc.tier}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Launch</div>
          <div className="text-sm font-medium text-white">{dc.launchYear}</div>
        </div>
      </div>

      <span
        className={cn(
          "rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
          style.bg,
          style.text
        )}
      >
        {dc.status}
      </span>
    </motion.div>
  );
}

export function DataCenterMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="rounded-xl border border-gray-800 bg-gray-900/50 p-6"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Data Center Network
          </h3>
          <p className="text-sm text-gray-400">
            African data center facilities — operational, under construction, and planned
          </p>
        </div>
        <div className="hidden items-center gap-4 sm:flex">
          {(["operational", "construction", "planned"] as const).map((s) => (
            <div key={s} className="flex items-center gap-1.5">
              <span className={cn("h-2 w-2 rounded-full", statusStyles[s].dot)} />
              <span className="text-xs capitalize text-gray-400">{s}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {dataCenters.map((dc, index) => (
          <DataCenterRow key={dc.id} dc={dc} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
