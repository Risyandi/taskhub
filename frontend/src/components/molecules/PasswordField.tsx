// created by risyandi.com - 2026
"use client";

import React, { useState } from "react";
import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";

interface PasswordFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  variant?: "login" | "register";
  forgotLink?: boolean;
  error?: string | null;
}

export function PasswordField({ label, id, variant = "login", forgotLink = false, error, ...props }: PasswordFieldProps) {
  const [show, setShow] = useState(false);

  return (
    <div className={`group ${variant === "login" ? "space-y-2" : ""}`}>
      <div className="flex justify-between items-center">
        <Label htmlFor={id} variant={variant}>{label}</Label>
        {forgotLink && (
          <a className="text-xs font-label font-bold text-primary hover:text-primary-container transition-colors" href="#">Forgot?</a>
        )}
      </div>
      <div className={`relative ${variant === "register" ? "flex items-center" : ""}`}>
        <Input 
          id={id} 
          name={id} 
          type={show ? "text" : "password"} 
          variant={variant} 
          className={variant === "register" ? "pr-10" : ""}
          isError={!!error}
          {...props} 
        />
        <button 
          type="button"
          onClick={() => setShow(!show)}
          className={`absolute ${variant === "login" ? "right-4 top-1/2 -translate-y-1/2" : "right-0"} text-on-surface-variant hover:text-primary transition-colors`}
        >
          <span className="material-symbols-outlined" data-icon="visibility">
            {show ? "visibility_off" : "visibility"}
          </span>
        </button>
      </div>
      {error && (
        <p className="text-error text-xs font-bold mt-1 animate-in fade-in slide-in-from-top-1 duration-200">
          {error}
        </p>
      )}
    </div>
  );
}
