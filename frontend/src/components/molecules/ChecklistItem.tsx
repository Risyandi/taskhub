// created by risyandi.com - 2026
import React from 'react';

interface ChecklistItemProps {
  label: string;
  completed?: boolean;
}

export function ChecklistItem({ label, completed = false }: ChecklistItemProps) {
  return (
    <div className="flex items-center gap-4 group cursor-pointer">
      {completed ? (
        <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-on-primary">
          <span className="material-symbols-outlined text-sm font-bold">check</span>
        </div>
      ) : (
        <div className="w-6 h-6 rounded-md border-2 border-outline/30 group-hover:border-primary transition-colors"></div>
      )}
      
      <span className={`font-body ${completed ? 'text-on-surface-variant line-through opacity-50' : 'text-on-surface'}`}>
        {label}
      </span>
    </div>
  );
}
