"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Calendar } from "lucide-react";
import { infraTimeline } from "@/lib/data/infrastructure";
import { cn } from "@/lib/utils";

const statusConfig = {
  completed: { icon: CheckCircle, color: "text-emerald-400", line: "bg-emerald-500" },
  "in-progress": { icon: Clock, color: "text-amber-400", line: "bg-amber-500" },
  upcoming: { icon: Calendar, color: "text-blue-400", line: "bg-blue-500/30" },
};

export function ProjectTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="rounded-xl border border-gray-800 bg-gray-900/50 p-6"
    >
      <h3 className="mb-6 text-lg font-semibold text-white">
        Infrastructure Timeline
      </h3>

      <div className="relative space-y-6">
        {infraTimeline.map((item, index) => {
          const config = statusConfig[item.status];
          const Icon = config.icon;
          const isLast = index === infraTimeline.length - 1;

          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex gap-4 pl-2"
            >
              <div className="relative flex flex-col items-center">
                <div
                  className={cn(
                    "z-10 flex h-8 w-8 items-center justify-center rounded-full border-2",
                    item.status === "completed"
                      ? "border-emerald-500 bg-emerald-500/10"
                      : item.status === "in-progress"
                        ? "border-amber-500 bg-amber-500/10"
                        : "border-blue-500/30 bg-blue-500/10"
                  )}
                >
                  <Icon className={cn("h-4 w-4", config.color)} />
                </div>
                {!isLast && (
                  <div
                    className={cn(
                      "absolute top-8 h-full w-0.5",
                      config.line
                    )}
                  />
                )}
              </div>

              <div className="flex-1 pb-2">
                <div className="flex items-center gap-2">
                  <span className={cn("text-sm font-bold", config.color)}>
                    {item.year}
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-xs capitalize",
                      item.status === "completed"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : item.status === "in-progress"
                          ? "bg-amber-500/10 text-amber-400"
                          : "bg-blue-500/10 text-blue-400"
                    )}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-400">{item.event}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
