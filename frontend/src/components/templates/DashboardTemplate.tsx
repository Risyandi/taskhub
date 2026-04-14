// created by risyandi.com - 2026
import React from 'react';
import { SideNavBar } from '../organisms/SideNavBar';
// import { TopNavBar } from '../organisms/TopNavBar';

interface DashboardTemplateProps {
  children: React.ReactNode;
}

export function DashboardTemplate({ children }: DashboardTemplateProps) {
  return (
    <div className="flex min-h-screen">
      <SideNavBar variant="dashboard" />

      <main className="flex-1 flex flex-col min-w-0">
        {/* <TopNavBar variant="dashboard" /> */}

        <div className="p-8 md:p-12 max-w-7xl mx-auto w-full space-y-12">
          {children}
        </div>
      </main>

      {/* Mobile Navigation (BottomNavBar) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#fbf3e4] dark:bg-stone-900 border-t border-stone-200/50 dark:border-stone-800/50 px-6 py-3 flex justify-between items-center z-50">
        <button className="flex flex-col items-center gap-1 text-[#228B22] font-bold">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
          <span className="text-[10px] uppercase">Today</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">all_inbox</span>
          <span className="text-[10px] uppercase">Inbox</span>
        </button>
        <div className="-mt-12">
          <button className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center editorial-shadow active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-3xl">add</span>
          </button>
        </div>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">folder_open</span>
          <span className="text-[10px] uppercase">Projects</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="text-[10px] uppercase">Library</span>
        </button>
      </nav>
    </div>
  );
}
