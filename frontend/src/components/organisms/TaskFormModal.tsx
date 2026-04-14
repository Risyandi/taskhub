"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { fetchApi } from '@/lib/api';

export function TaskFormModal() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Convert date YYYY-MM-DD to DD/MM/YYYY
    let rawDate = data.date_deadline as string;
    if (rawDate) {
      const [year, month, day] = rawDate.split("-");
      data.date_deadline = `${day}/${month}/${year}`;
    }

    try {
      await fetchApi('/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          date_deadline: data.date_deadline,
        }),
      });
      router.push('/dashboard');
      router.refresh(); // Ensure dashboard updates
    } catch (err: any) {
      if (err.errors) {
        const firstErrorKey = Object.keys(err.errors)[0];
        setError(err.errors[firstErrorKey][0]);
      } else {
        setError(err.message || 'Error publishing task');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 sm:p-12">
      <div className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"></div>

      <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-full max-h-[700px] ghost-border">
        
        {/* Left Side: Visual/Context */}
        <div className="w-full md:w-1/3 bg-primary p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-headline font-bold text-on-primary editorial-tracking">Define the Next Milestone</h3>
            <p className="text-on-primary/70 mt-4 text-sm leading-relaxed">Great work starts with intentionality. Set your vision, assign a deadline, and curator the future.</p>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-on-primary/60 text-xs font-label uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm" data-icon="tips_and_updates">tips_and_updates</span>
              Pro Tip: Keep titles concise.
            </div>
          </div>
          
          <div className="absolute bottom-[-10%] right-[-10%] w-48 h-48 bg-on-primary-container/20 rounded-full blur-3xl"></div>
          <div className="absolute top-[10%] left-[-10%] w-32 h-32 bg-primary-fixed/20 rounded-full blur-2xl"></div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 p-10 bg-surface flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant/60">New Task Entry</span>
            <Link href="/dashboard" className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant" data-icon="close">close</span>
            </Link>
          </div>

          <form className="space-y-6 flex-1 overflow-y-auto pr-2" onSubmit={handleSubmit} id="task-form">
            <div className="space-y-1">
              <label className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold ml-1">Task Title</label>
              <input 
                type="text"
                name="title"
                required
                className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface py-3 px-1 transition-all font-headline text-lg placeholder:text-on-surface-variant/30" 
                placeholder="e.g. Website Rebranding Strategy" 
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold ml-1">Context & Details</label>
              <textarea 
                name="description"
                className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface py-3 px-1 transition-all resize-none font-body text-sm placeholder:text-on-surface-variant/30" 
                placeholder="Describe the core objectives..." 
                rows={3}
              ></textarea>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold ml-1">Deadline</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-1 top-1/2 -translate-y-1/2 text-primary text-lg" data-icon="calendar_month">calendar_month</span>
                  <input 
                    type="date"
                    name="date_deadline"
                    required
                    className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface py-3 pl-8 pr-1 transition-all font-body text-sm" 
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold ml-1">Priority Level</label>
                <select name="priority" className="w-full bg-surface-container-low border-none border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface py-3 px-1 transition-all font-body text-sm appearance-none cursor-pointer">
                  <option value="low">Low Priority</option>
                  <option value="moderate" defaultValue="moderate">Moderate Priority</option>
                  <option value="high">High Priority</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              <button type="button" className="px-4 py-1.5 rounded-full bg-surface-container-high text-[10px] font-label uppercase tracking-widest text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-colors">Add Label</button>
              <button type="button" className="px-4 py-1.5 rounded-full bg-surface-container-high text-[10px] font-label uppercase tracking-widest text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-colors">Attach File</button>
            </div>
          </form>

          {error && <p className="text-error text-sm mt-4 font-bold">{error}</p>}

          <div className="mt-10 flex gap-4">
            <Link href="/dashboard" className="flex-1 py-4 text-center text-sm font-label uppercase tracking-widest font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-xl flex items-center justify-center">Discard</Link>
            <button type="submit" form="task-form" disabled={isLoading} className="flex-[2] py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest text-sm disabled:opacity-50 disabled:pointer-events-none">
              {isLoading ? 'Publishing...' : 'Publish Task'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
