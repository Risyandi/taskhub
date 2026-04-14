// created by risyandi.com - 2026
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormField } from "../molecules/FormField";
import { PasswordField } from "../molecules/PasswordField";
import { SocialAuthButton } from "../molecules/SocialAuthButton";
import { Button } from "../atoms/Button";
import { fetchApi } from "@/lib/api";

import { validateEmail, validatePassword } from "@/lib/validation";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string | null }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Client-side validation
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setFieldErrors({
        email: emailError,
        password: passwordError,
      });
      return;
    }

    setIsLoading(true);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetchApi('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response && response.accessToken) {
        localStorage.setItem('accessToken', response.accessToken);
        router.push('/dashboard');
      }
    } catch (err: any) {
      if (err.errors) {
        // Map backend validation errors
        const errors: { [key: string]: string | null } = {};
        Object.keys(err.errors).forEach((key) => {
          errors[key] = err.errors[key][0];
        });
        setFieldErrors(errors);
        setError("Please check the fields above");
      } else {
        setError(err.message || 'Login failed. Please check your credentials.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-12">
      <div className="space-y-4">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">Welcome Back</h2>
        <p className="text-on-surface-variant text-sm font-label tracking-wide uppercase">Enter your credentials to access your workspace</p>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit}>
        <FormField
          label="Email Address"
          id="email"
          type="email"
          placeholder="name@studio.com"
          variant="login"
          error={fieldErrors.email}
        />

        <PasswordField
          label="Password"
          id="password"
          placeholder="••••••••"
          variant="login"
          error={fieldErrors.password}
        // forgotLink
        />

        <div className="pt-4">
          {error && <p className="text-error text-sm mb-4 font-bold">{error}</p>}
          <Button type="submit" disabled={isLoading}>{isLoading ? "Signing in..." : "Sign in"}</Button>
        </div>
      </form>

      {/* <div className="space-y-6">
        <div className="relative flex items-center">
          <div className="flex-grow border-t border-outline-variant"></div>
          <span className="flex-shrink mx-4 text-xs font-label text-outline uppercase tracking-widest">or continue with</span>
          <div className="flex-grow border-t border-outline-variant"></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <SocialAuthButton provider="google" />
          <SocialAuthButton provider="apple" />
        </div>
      </div> */}

      <div className="text-center pt-8">
        <p className="text-on-surface-variant text-sm">
          Don't have an account?
          <Link href="/register" className="font-bold text-primary hover:underline decoration-2 underline-offset-4 ml-1">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
