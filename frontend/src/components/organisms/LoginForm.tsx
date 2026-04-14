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

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
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
      setError(err.message || 'Login failed');
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
        />
        
        <PasswordField 
          label="Password"
          id="password"
          placeholder="••••••••"
          variant="login"
          forgotLink
        />

        <div className="pt-4">
          {error && <p className="text-error text-sm mb-4 font-bold">{error}</p>}
          <Button type="submit" disabled={isLoading}>{isLoading ? "Signing in..." : "Sign in to Workspace"}</Button>
        </div>
      </form>

      <div className="space-y-6">
        <div className="relative flex items-center">
          <div className="flex-grow border-t border-outline-variant"></div>
          <span className="flex-shrink mx-4 text-xs font-label text-outline uppercase tracking-widest">or continue with</span>
          <div className="flex-grow border-t border-outline-variant"></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <SocialAuthButton provider="google" />
          <SocialAuthButton provider="apple" />
        </div>
      </div>

      <div className="text-center pt-8">
        <p className="text-on-surface-variant text-sm">
          Don't have an editorial account? 
          <Link href="/register" className="font-bold text-primary hover:underline decoration-2 underline-offset-4 ml-1">
            Request Access
          </Link>
        </p>
      </div>
    </div>
  );
}
