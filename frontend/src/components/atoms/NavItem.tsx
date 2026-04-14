// created by risyandi.com - 2026
import React from 'react';
import Link from 'next/link';

interface NavItemProps {
  href: string;
  icon: string;
  label: string;
  active?: boolean;
  variant?: 'dashboard' | 'details';
}

export function NavItem({ href, icon, label, active = false, variant = 'dashboard' }: NavItemProps) {
  if (variant === 'details') {
     const activeStyles = active 
       ? "text-[#228B22] dark:text-emerald-400 font-bold bg-[#fff8ef]/50 dark:bg-stone-800/50 rounded-r-full" 
       : "text-stone-600 dark:text-stone-400 hover:bg-[#e9e2d3] dark:hover:bg-stone-800";
     
     return (
       <Link href={href} className={`flex items-center gap-3 py-3 px-6 transition-all duration-200 ease-in-out font-inter text-sm tracking-wide ${activeStyles}`}>
         <span className="material-symbols-outlined">{icon}</span> {label}
       </Link>
     );
  }

  const activeStyles = active
    ? "text-[#228B22] dark:text-[#418340] font-bold border-l-4 border-[#228B22] bg-[#fff8ef] dark:bg-stone-950"
    : "text-[#3f4a3b] dark:text-stone-400 hover:bg-[#e9e2d3] dark:hover:bg-stone-800";

  return (
    <Link href={href} className={`flex items-center gap-4 px-6 py-3 transition-all active:-translate-y-px duration-200 ${activeStyles}`}>
      <span className="material-symbols-outlined" data-icon={icon}>{icon}</span>
      <span className="font-label">{label}</span>
    </Link>
  );
}
