// created by risyandi.com - 2026
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'high' | 'medium' | 'low' | 'completed' | 'in-progress' | 'default';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    high: 'bg-tertiary-fixed text-on-tertiary-fixed',
    medium: 'bg-secondary-container text-on-secondary-container',
    low: 'bg-surface-container-highest text-outline',
    completed: 'bg-surface-container-highest text-outline',
    "in-progress": 'bg-secondary-container text-on-secondary-container',
    default: 'bg-surface-container-highest text-on-surface-variant'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
