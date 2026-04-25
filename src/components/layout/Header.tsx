"use client";

import { Bell, Search, User } from "lucide-react";

interface HeaderProps {
  title: string;
  description?: string;
}

export function Header({ title, description }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-800 bg-gray-950/80 px-6 backdrop-blur-md">
      <div>
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        {description && (
          <p className="text-sm text-gray-400">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search platform..."
            className="h-9 w-64 rounded-lg border border-gray-800 bg-gray-900 pl-9 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-emerald-500"
          />
        </div>
        <button className="relative rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-emerald-500" />
        </button>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-medium text-white">
          <User className="h-4 w-4" />
        </div>
      </div>
    </header>
  );
}
