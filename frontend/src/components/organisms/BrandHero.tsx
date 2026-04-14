// created by risyandi.com - 2026
import React from "react";

interface BrandHeroProps {
  variant: "login" | "register";
}

export function BrandHero({ variant }: BrandHeroProps) {
  if (variant === "login") {
    return (
      <div className="hidden lg:flex w-full h-full relative bg-surface-container-low p-20 flex-col justify-between items-start">
        <div className="z-10">
          <span className="font-headline font-extrabold text-2xl tracking-tight text-primary">TaskHub+</span>
        </div>
        <div className="relative z-10 max-w-lg">
          <h1 className="font-headline text-[3.5rem] leading-[1.1] font-extrabold text-primary tracking-tight mb-8">
            Organize with <br />Intention.
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-sm">
            A task workspace designed for deep focus and clarity. Elevate your daily tasks into a masterpiece of productivity.
          </p>
        </div>
        <div className="w-full relative z-10">
          <div className="editorial-shadow rounded-xl overflow-hidden aspect-[4/3] bg-surface-container-lowest">
            <img className="w-full h-full object-cover" alt="Minimalist desk setup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc5k07Ss2QJeIBRoWlRDklYlDxNe7cZkkMyu46p6SNd_sZsD1fq0YSQVxrhdja5kTxL94J9jMBmdIiLvQajQKqKknCuoi3QMI5bGwOiLpR4VCWlPvV-zLzylPiE-XuR8MT50wcgPSjrRUff_O46iyiSL8vKhWlg-l-9kDccacE8FWtg4WMFHU5tgp3QAwmRXw2w8MTuO68LCCKt2XpKJTd8ZV5i780ItaNXlxGBd1VIbOxR0_DtZD3OsftT56ih5F7_TpIstt8qidB" />
          </div>
        </div>
        {/* Subtle Texture Background */}
        <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
      </div>
    );
  }

  // Register Hero
  return (
    <section className="hidden lg:flex flex-col justify-between p-16 h-full bg-primary-container relative overflow-hidden">
      <div className="relative z-10">
        <h1 className="font-headline text-5xl lg:text-6xl text-on-primary-container font-extrabold tracking-tight mb-4">
          TaskHub+
        </h1>
        <p className="font-body text-on-primary-container/80 text-xl max-w-md leading-relaxed">
          Transforming task management into a focused, calm, and premium experience. Welcome to your workspace.
        </p>
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-on-primary-container/30"></div>
          <span className="font-label text-sm uppercase tracking-widest text-on-primary-container/60">Digital Minimalism</span>
        </div>
        <blockquote className="font-headline text-2xl text-on-primary-container font-light italic">
          "Information given room to breathe."
        </blockquote>
      </div>
      {/* Background Aesthetic */}
      <div className="absolute inset-0 z-0">
        <img alt="Minimalist modern workspace" className="w-full h-full object-cover opacity-20 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO0OQCg0Xl7sppamNIgAIhT3FW24yYc6JzdtmICS3hzAMsc3evayPbTQfknNV4EvEqmySfFrMsNwUyC4FK5gnkqTv5ViaQMAW4kzZu-Oge0CpmC_s7xePBuu1fEmYEHzffaC__bGf1ArZSXmOVkMV_mQ20OIp-09pStOgaKLMDoPCNgmyWR22BfLKVJCPQ1qg6UssUUAVoIanaDRrEirzXrhV3ljepImXWkTqdFO5dxO1j5hr1cis24Mt2P7xSkDFmof7tU-afvYz6" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-container/50 opacity-90"></div>
      </div>
    </section>
  );
}
