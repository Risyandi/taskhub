// created by risyandi.com - 2026
"use client";

import React from "react";
import Link from "next/link";
import { FormField } from "../molecules/FormField";
import { PasswordField } from "../molecules/PasswordField";
import { CheckboxField } from "../molecules/CheckboxField";
import { Button } from "../atoms/Button";

export function RegisterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-md mx-auto w-full">
      <header className="mb-10">
        <span className="font-label text-sm text-primary font-bold uppercase tracking-widest mb-2 block">Get Started</span>
        <h2 className="font-headline text-4xl font-bold text-on-surface tracking-tight mb-2">Create Account</h2>
        <p className="text-on-surface-variant font-body leading-relaxed">
          Join the community of curators today. Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold hover:underline decoration-2 underline-offset-4">
            Log in
          </Link>
        </p>
      </header>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <FormField 
          label="FULL NAME"
          id="fullname"
          type="text"
          placeholder="Evelyn S. Miller"
          variant="register"
        />

        <FormField 
          label="EMAIL ADDRESS"
          id="email"
          type="email"
          placeholder="evelyn@curator.io"
          variant="register"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PasswordField 
            label="PASSWORD"
            id="password"
            placeholder="••••••••"
            variant="register"
          />
          <PasswordField 
            label="CONFIRM"
            id="confirm_password"
            placeholder="••••••••"
            variant="register"
          />
        </div>

        <CheckboxField 
          label="I confirm that I am a verified human curator"
          id="human"
        />

        <div className="pt-4">
          <Button type="submit">Create Account</Button>
        </div>

        <p className="text-center text-sm text-outline-variant mt-8 font-label px-8">
          By registering, you agree to our <a className="text-primary hover:underline" href="#">Terms</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
}
