// created by risyandi.com - 2026
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormField } from "../molecules/FormField";
import { PasswordField } from "../molecules/PasswordField";
import { CheckboxField } from "../molecules/CheckboxField";
import { Button } from "../atoms/Button";
import { fetchApi } from "@/lib/api";

import { validateEmail, validatePassword, validateRequired } from "@/lib/validation";

export function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string | null }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    const fullname = formData.get("fullname") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirm_password = formData.get("confirm_password") as string;

    // Client-side validation
    const nameError = validateRequired(fullname, "Full name");
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    let confirmError = null;

    if (password !== confirm_password) {
      confirmError = "Passwords do not match";
    }

    if (nameError || emailError || passwordError || confirmError) {
      setFieldErrors({
        fullname: nameError,
        email: emailError,
        password: passwordError,
        confirm_password: confirmError,
      });
      return;
    }

    setIsLoading(true);
    const data = Object.fromEntries(formData.entries());

    // Map human checkbox to boolean
    const payload = {
      ...data,
      verified_human: data.verified_human === "on"
    };

    try {
      const response = await fetchApi('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response && response.accessToken) {
        localStorage.setItem('accessToken', response.accessToken);
        router.push('/dashboard');
      }
    } catch (err: any) {
      if (err.errors) {
        const errors: { [key: string]: string | null } = {};
        Object.keys(err.errors).forEach((key) => {
          errors[key] = err.errors[key][0];
        });
        setFieldErrors(errors);
        setError("Please check the fields above");
      } else {
        setError(err.message || 'Registration failed');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto w-full">
      <header className="mb-10">
        <span className="font-label text-sm text-primary font-bold uppercase tracking-widest mb-2 block">Get Started</span>
        <h2 className="font-headline text-4xl font-bold text-on-surface tracking-tight mb-2">Create Account</h2>
        <p className="text-on-surface-variant font-body leading-relaxed">
          Already have an account?{" "}
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
          error={fieldErrors.fullname}
        />

        <FormField
          label="EMAIL ADDRESS"
          id="email"
          type="email"
          placeholder="evelyn@curator.io"
          variant="register"
          error={fieldErrors.email}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PasswordField
            label="PASSWORD"
            id="password"
            placeholder="••••••••"
            variant="register"
            error={fieldErrors.password}
          />
          <PasswordField
            label="CONFIRM"
            id="confirm_password"
            placeholder="••••••••"
            variant="register"
            error={fieldErrors.confirm_password}
          />
        </div>

        <CheckboxField
          label="I confirm, I am a verified human"
          id="verified_human"
        />

        <div className="pt-4">
          {error && <p className="text-error text-sm mb-4 font-bold">{error}</p>}
          <Button type="submit" disabled={isLoading}>{isLoading ? "Creating..." : "Create"}</Button>
        </div>

        <p className="text-center text-sm text-outline-variant mt-8 font-label px-8">
          By registering, you agree to our <a className="text-primary hover:underline" href="#">Terms</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
}
