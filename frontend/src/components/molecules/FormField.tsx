// created by risyandi.com - 2026
import React from "react";
import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  variant?: "login" | "register";
  error?: string | null;
}

export function FormField({ label, id, variant = "login", error, ...props }: FormFieldProps) {
  return (
    <div className={`group ${variant === "login" ? "space-y-2" : ""}`}>
      <Label htmlFor={id} variant={variant}>{label}</Label>
      <div className="relative">
        <Input id={id} name={id} variant={variant} isError={!!error} {...props} />
      </div>
      {error && (
        <p className="text-error text-xs font-bold mt-1 animate-in fade-in slide-in-from-top-1 duration-200">
          {error}
        </p>
      )}
    </div>
  );
}
