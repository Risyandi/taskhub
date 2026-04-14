// created by risyandi.com - 2026
import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  highlighted?: boolean;
}

export function StatCard({ label, value, highlighted = false }: StatCardProps) {
  if (highlighted) {
    return (
      <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary">
        <span className="text-label text-[10px] uppercase tracking-widest text-outline">{label}</span>
        <div className="text-3xl font-headline font-bold mt-2">{value}</div>
      </div>
    );
  }
  
  return (
    <div className="bg-surface-container-highest p-6 rounded-xl">
      <span className="text-label text-[10px] uppercase tracking-widest text-outline">{label}</span>
      <div className="text-3xl font-headline font-bold mt-2">{value}</div>
    </div>
  );
}
