"use client";

import { motion } from "framer-motion";
import { CreditCard, Building2, Settings, AlertTriangle } from "lucide-react";
import { recentActivity } from "@/lib/data/activity";
import type { ActivityItem } from "@/types";

const iconMap = {
  payment: CreditCard,
  agency: Building2,
  system: Settings,
  alert: AlertTriangle,
};

const colorMap = {
  payment: "text-emerald-400 bg-emerald-500/10",
  agency: "text-blue-400 bg-blue-500/10",
  system: "text-purple-400 bg-purple-500/10",
  alert: "text-amber-400 bg-amber-500/10",
};

function formatTimestamp(ts: string): string {
  const date = new Date(ts);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  if (diffHours < 1) return "Just now";
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}

function ActivityRow({ item }: { item: ActivityItem }) {
  const Icon = iconMap[item.type];
  const colors = colorMap[item.type];

  return (
    <div className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-800/50">
      <div className={`mt-0.5 rounded-lg p-2 ${colors}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white">{item.title}</p>
        <p className="mt-0.5 text-xs text-gray-400 truncate">
          {item.description}
        </p>
      </div>
      <span className="flex-shrink-0 text-xs text-gray-500">
        {formatTimestamp(item.timestamp)}
      </span>
    </div>
  );
}

export function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="rounded-xl border border-gray-800 bg-gray-900/50 p-6"
    >
      <h3 className="mb-4 text-lg font-semibold text-white">
        Recent Activity
      </h3>
      <div className="space-y-1">
        {recentActivity.map((item) => (
          <ActivityRow key={item.id} item={item} />
        ))}
      </div>
    </motion.div>
  );
}
