// created by risyandi.com - 2026
import React from 'react';

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  variant?: 'dashboard' | 'details';
}

export function SearchBar({ placeholder = "Search curated tasks...", variant = 'dashboard', className = '', ...props }: SearchBarProps) {
  if (variant === 'details') {
    return (
      <div className={`relative hidden lg:block ${className}`}>
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
        <input 
          className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant/50" 
          placeholder={placeholder} 
          {...props}
        />
      </div>
    );
  }

  return (
    <div className={`hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-full ghost-border w-80 ${className}`}>
      <span className="material-symbols-outlined text-outline">search</span>
      <input 
        className="bg-transparent border-none focus:ring-0 text-sm w-full font-body placeholder:text-outline-variant" 
        placeholder={placeholder} 
        {...props}
      />
    </div>
  );
}
