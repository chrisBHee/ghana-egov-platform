"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { paymentRecords } from "@/lib/data/payments";
import { formatCurrency, formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { PaymentRecord } from "@/types";

const statusStyles: Record<PaymentRecord["status"], string> = {
  completed: "bg-emerald-500/10 text-emerald-400",
  pending: "bg-amber-500/10 text-amber-400",
  failed: "bg-red-500/10 text-red-400",
};

const typeStyles: Record<PaymentRecord["type"], string> = {
  salary: "bg-blue-500/10 text-blue-400",
  pension: "bg-purple-500/10 text-purple-400",
  grant: "bg-teal-500/10 text-teal-400",
  contract: "bg-orange-500/10 text-orange-400",
};

export function PaymentTable() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filtered = paymentRecords.filter((p) => {
    const matchesSearch =
      p.recipient.toLowerCase().includes(search.toLowerCase()) ||
      p.agency.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="rounded-xl border border-gray-800 bg-gray-900/50"
    >
      <div className="flex flex-col gap-3 border-b border-gray-800 p-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-white">
          Transaction Records
        </h3>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 w-48 rounded-lg border border-gray-700 bg-gray-800 pl-9 pr-3 text-sm text-white placeholder-gray-500 outline-none focus:border-emerald-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-9 rounded-lg border border-gray-700 bg-gray-800 px-3 text-sm text-gray-300 outline-none focus:border-emerald-500"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800 text-left text-xs font-medium uppercase text-gray-500">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Agency</th>
              <th className="px-4 py-3">Recipient</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((payment) => (
              <tr
                key={payment.id}
                className="border-b border-gray-800/50 transition-colors hover:bg-gray-800/30"
              >
                <td className="px-4 py-3 text-sm font-mono text-gray-300">
                  {payment.id}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
                      typeStyles[payment.type]
                    )}
                  >
                    {payment.type}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-300">
                  {payment.agency}
                </td>
                <td className="px-4 py-3 text-sm text-white">
                  {payment.recipient}
                </td>
                <td className="px-4 py-3 text-sm font-medium text-white">
                  {formatCurrency(payment.amount)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-400">
                  {formatDate(payment.date)}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
                      statusStyles[payment.status]
                    )}
                  >
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <div className="py-8 text-center text-sm text-gray-500">
          No transactions found matching your criteria.
        </div>
      )}
    </motion.div>
  );
}
