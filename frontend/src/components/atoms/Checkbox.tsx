// created by risyandi.com - 2026
import React, { forwardRef } from "react";

export const Checkbox = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        className={`w-5 h-5 rounded border-2 border-outline-variant text-primary focus:ring-primary focus:ring-offset-surface-container-lowest transition-all cursor-pointer ${className}`}
        {...props}
      />
    );
  }
);
Checkbox.displayName = "Checkbox";
