// created by risyandi.com - 2026
import React from "react";
import { BrandHero } from "../organisms/BrandHero";

interface AuthLayoutProps {
  children: React.ReactNode;
  variant: "login" | "register";
}

export function AuthLayout({ children, variant }: AuthLayoutProps) {
  if (variant === "login") {
    return (
      <div className="flex min-h-screen">
        <div className="hidden lg:flex w-1/2">
          <BrandHero variant="login" />
        </div>
        <main className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-24 bg-surface">
          {children}
        </main>
        {/* Background Decorative Elements */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
          <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[60%] rounded-full bg-primary/5 blur-[120px]"></div>
          <div className="absolute top-[60%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary-container/10 blur-[100px]"></div>
        </div>
      </div>
    );
  }

  // Register variant
  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-12 relative">
      <main className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-xl bg-surface-container-low shadow-2xl shadow-on-surface/5 relative z-10">
        <BrandHero variant="register" />
        <section className="p-8 md:p-16 lg:p-20 bg-surface-container-lowest flex flex-col justify-center">
          {children}
        </section>
      </main>

      {/* Support Aesthetic Element */}
      <div className="fixed bottom-8 right-8 hidden md:block z-20">
        <div className="flex items-center gap-3 bg-surface-container-highest/80 backdrop-blur-md px-4 py-2 rounded-full ghost-border">
          <span className="material-symbols-outlined text-primary text-sm" data-icon="lock" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
          <span className="text-[10px] font-label text-on-surface-variant tracking-widest uppercase">End-to-End Secure</span>
        </div>
      </div>
    </div>
  );
}
