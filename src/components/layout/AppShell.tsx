"use client";

import { type ReactNode } from "react";
import { SidebarProvider, useSidebar } from "@/context/SidebarContext";
import { Sidebar } from "./Sidebar";

function ShellInner({ children }: { children: ReactNode }) {
  const { collapsed } = useSidebar();
  return (
    <>
      <Sidebar />
      <main
        className="transition-all duration-300"
        style={{ paddingLeft: collapsed ? 72 : 256 }}
      >
        {children}
      </main>
    </>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <ShellInner>{children}</ShellInner>
    </SidebarProvider>
  );
}
