// created by risyandi.com - 2026
import React from "react";
import { Checkbox } from "../atoms/Checkbox";

interface CheckboxFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export function CheckboxField({ label, id, ...props }: CheckboxFieldProps) {
  return (
    <div className="flex items-center gap-4 py-4 group">
      <div className="relative flex items-center">
        <Checkbox id={id} name={id} {...props} />
      </div>
      <label className="font-body text-sm text-on-surface-variant cursor-pointer select-none" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
