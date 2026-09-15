import React from "react";
import { AppHeader } from "./app-header";
import { AppSidebar } from "./app-sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen w-full bg-white overflow-hidden text-slate-900 font-sans">
      <AppSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AppHeader />
        <main className="flex-1 overflow-y-auto bg-white p-5">{children}</main>
      </div>
    </div>
  );
}
