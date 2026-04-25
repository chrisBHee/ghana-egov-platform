"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { agencies, agencySummary } from "@/lib/data/agencies";
import { AgencyCard } from "./AgencyCard";
import { cn, formatNumber } from "@/lib/utils";

const filters = ["all", "active", "transitioning", "planned"] as const;

export function AgencyGrid() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filtered = agencies.filter((a) => {
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || a.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Total Agencies", value: agencySummary.total, color: "text-white" },
          { label: "Active", value: agencySummary.active, color: "text-emerald-400" },
          { label: "Transitioning", value: agencySummary.transitioning, color: "text-amber-400" },
          { label: "Planned", value: agencySummary.planned, color: "text-blue-400" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-gray-800 bg-gray-900/50 p-4 text-center"
          >
            <div className={`text-2xl font-bold ${stat.color}`}>
              {formatNumber(stat.value)}
            </div>
            <div className="mt-1 text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setStatusFilter(f)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-sm font-medium capitalize transition-colors",
                statusFilter === f
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search agencies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 w-full rounded-lg border border-gray-700 bg-gray-800 pl-9 pr-3 text-sm text-white placeholder-gray-500 outline-none focus:border-emerald-500 sm:w-56"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((agency, index) => (
          <AgencyCard key={agency.id} agency={agency} index={index} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-12 text-center text-sm text-gray-500">
          No agencies found matching your criteria.
        </div>
      )}
    </div>
  );
}
