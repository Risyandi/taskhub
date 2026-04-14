// created by risyandi.com - 2026
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  children: React.ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "transition-all active:scale-[0.98] focus:outline-none flex items-center justify-center";
  
  const variants = {
    primary: "w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30",
    ghost: "w-full py-3 px-4 rounded-lg bg-surface-container-low ghost-border hover:bg-surface-container-high text-sm font-medium gap-3"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
