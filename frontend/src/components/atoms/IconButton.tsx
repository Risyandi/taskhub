// created by risyandi.com - 2026
import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  badge?: boolean;
}

export function IconButton({ icon, badge = false, className = '', ...props }: IconButtonProps) {
  return (
    <button className={`p-2 text-on-surface-variant hover:bg-[#e9e2d3] transition-colors rounded-full relative active:scale-95 duration-150 ${className}`} {...props}>
      <span className="material-symbols-outlined" data-icon={icon}>{icon}</span>
      {badge && <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>}
    </button>
  );
}
