// created by risyandi.com - 2026
import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  variant?: "login" | "register";
}

export function Label({ children, className = "", variant = "login", ...props }: LabelProps) {
  let baseStyles = "block text-xs font-label font-semibold text-outline tracking-wider uppercase";

  if (variant === "register") {
    baseStyles = "font-label text-label-md text-outline mb-2 block group-focus-within:text-primary transition-colors uppercase";
  }

  return (
    <label className={`${baseStyles} ${className}`} {...props}>
      {children}
    </label>
  );
}
