// created by risyandi.com - 2026
import React from 'react';
import Link from 'next/link';
import { NavItem } from '../atoms/NavItem';

interface SideNavBarProps {
  variant?: 'dashboard' | 'details';
}

export function SideNavBar({ variant = 'dashboard' }: SideNavBarProps) {
  if (variant === 'details') {
    return (
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#fbf3e4] dark:bg-stone-900 hidden md:flex flex-col py-8 z-40 mt-20">
        <div className="px-6 mb-10">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
            </div>
            <div>
              <h2 className="font-manrope font-bold text-lg text-[#228B22]">The Curator</h2>
              <p className="text-[10px] uppercase tracking-widest text-outline">Editorial Workspace</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          <NavItem href="/dashboard" icon="grid_view" label="Dashboard" variant="details" />
          <NavItem href="#" icon="layers" label="Task Board" active={true} variant="details" />
          <NavItem href="#" icon="auto_stories" label="Collections" variant="details" />
          <NavItem href="#" icon="group" label="Team" variant="details" />
          <NavItem href="#" icon="history" label="Activity" variant="details" />
        </nav>

        <div className="px-6 mt-6">
          <button className="w-full bg-primary text-on-primary py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-sm hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-sm">add</span> New Collection
          </button>
        </div>

        <div className="mt-auto border-t border-outline/10 pt-6">
          <NavItem href="#" icon="help_outline" label="Help" variant="details" />
          <NavItem href="/login" icon="logout" label="Sign Out" variant="details" />
        </div>
      </aside>
    );
  }

  // Dashboard variant
  return (
    <aside className="hidden md:flex flex-col py-8 gap-2 h-screen w-72 sticky left-0 top-0 bg-[#fbf3e4] dark:bg-stone-900 border-r border-stone-200/50 dark:border-stone-800/50 font-['Inter'] text-sm tracking-wide">
      <div className="px-8 mb-10">
        <h1 className="text-xl font-extrabold text-[#228B22] dark:text-[#418340]">Taskmaster</h1>
        <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mt-1">Editorial Workspace</p>
      </div>

      {/* <nav className="flex-1 space-y-1">
        <NavItem href="#" icon="calendar_today" label="Today" active={true} variant="dashboard" />
        <NavItem href="#" icon="all_inbox" label="Inbox" variant="dashboard" />
        <NavItem href="#" icon="folder_open" label="Projects" variant="dashboard" />
        <NavItem href="#" icon="inventory_2" label="Archive" variant="dashboard" />
        <NavItem href="#" icon="menu_book" label="Resources" variant="dashboard" />
      </nav> */}

      <div className="px-6 mt-auto">
        <Link href="/tasks/new" className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-bold flex items-center justify-center gap-2 editorial-shadow transition-transform active:scale-95">
          <span className="material-symbols-outlined text-lg">add</span>
          <span>Create New Task</span>
        </Link>
      </div>
    </aside>
  );
}
