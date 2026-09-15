import React from "react";
import { AppHeader } from "./app-header";
import { AppSidebar } from "./app-sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-col h-screen w-full bg-app-bg overflow-hidden text-slate-900 font-sans">
      <AppHeader />
      <div className="flex flex-1 overflow-hidden">
        <AppSidebar />
        <main className="flex-1 overflow-y-auto bg-app-bg">
          <div className="mx-auto w-full max-w-2xl px-4 py-10">{children}</div>
        </main>
      </div>
    </div>
  );
}
