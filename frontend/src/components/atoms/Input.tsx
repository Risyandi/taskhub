// created by risyandi.com - 2026
import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  variant?: "login" | "register";
  isError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", variant = "login", isError = false, ...props }, ref) => {
    let baseStyles = "w-full bg-surface-container-high border-none border-b-2 border-transparent transition-all focus:ring-0 font-body placeholder:text-outline-variant";

    if (variant === "login") {
      baseStyles = `w-full bg-surface-container-high border-none border-b-2 ${
        isError ? "border-error" : "border-transparent focus:border-primary"
      } focus:ring-0 transition-all px-4 py-4 rounded-lg placeholder-on-surface-variant/40 font-body`;
    } else {
      // register
      baseStyles = `w-full bg-surface-container-high border-0 border-b-2 ${
        isError ? "border-error" : "border-outline-variant focus:border-primary"
      } focus:ring-0 px-0 py-3 text-on-surface placeholder:text-outline-variant transition-all font-body`;
    }

    return (
      <input
        ref={ref}
        className={`${baseStyles} ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
