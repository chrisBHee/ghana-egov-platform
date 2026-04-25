"use client";

import { motion } from "framer-motion";
import { Brain, Lightbulb } from "lucide-react";
import { aiInsights } from "@/lib/data/analytics";
import { cn } from "@/lib/utils";
import type { AIInsight } from "@/types";

const impactStyles = {
  high: "bg-red-500/10 text-red-400 border-red-500/20",
  medium: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  low: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

function InsightCard({ insight, index }: { insight: AIInsight; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 transition-colors hover:border-gray-700"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-purple-500/10 p-2">
            <Lightbulb className="h-4 w-4 text-purple-400" />
          </div>
          <span className="text-xs text-gray-500">{insight.category}</span>
        </div>
        <span
          className={cn(
            "rounded-full border px-2 py-0.5 text-xs font-medium capitalize",
            impactStyles[insight.impact]
          )}
        >
          {insight.impact} impact
        </span>
      </div>

      <h4 className="mt-3 text-sm font-semibold text-white">
        {insight.title}
      </h4>
      <p className="mt-2 text-xs leading-relaxed text-gray-400">
        {insight.description}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-gray-800 pt-3">
        <span className="text-xs text-gray-500">Confidence</span>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-20 overflow-hidden rounded-full bg-gray-800">
            <div
              className="h-full rounded-full bg-purple-500"
              style={{ width: `${insight.confidence}%` }}
            />
          </div>
          <span className="text-xs font-medium text-purple-400">
            {insight.confidence}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function AIInsights() {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Brain className="h-5 w-5 text-purple-400" />
        <h3 className="text-lg font-semibold text-white">AI-Generated Insights</h3>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {aiInsights.map((insight, index) => (
          <InsightCard key={insight.id} insight={insight} index={index} />
        ))}
      </div>
    </div>
  );
}
