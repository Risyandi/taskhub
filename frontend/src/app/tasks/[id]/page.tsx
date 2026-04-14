// created by risyandi.com - 2026
"use client";

import React from 'react';
import { TaskDetailsTemplate } from '@/components/templates/TaskDetailsTemplate';
import { ChecklistItem } from '@/components/molecules/ChecklistItem';
import { CommentItem } from '@/components/molecules/CommentItem';
import { useAuth } from '@/hooks/useAuth';

export default function TaskDetailsPage() {
  useAuth();
  
  return (
    <TaskDetailsTemplate>
      <nav className="flex items-center gap-2 text-xs font-medium text-outline uppercase tracking-widest mb-6">
        <a className="hover:text-primary transition-colors" href="#">Projects</a>
        <span className="material-symbols-outlined text-[10px]">chevron_right</span>
        <a className="hover:text-primary transition-colors" href="#">Fall Collection 2024</a>
      </nav>

      <div className="mb-10">
        <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-on-surface mb-6 leading-tight">
          Revise Fall <span className="text-primary italic">Lookbook</span> Copy
        </h1>
        <div className="flex items-center gap-4 mb-8">
          <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">In Progress</span>
          <div className="h-4 w-px bg-outline/20"></div>
          <div className="flex -space-x-2">
            <img className="w-8 h-8 rounded-full border-2 border-surface object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARa-CDU2mPdWpUIa4tWpVWufA9euLjhwjIo15ckmHn5njNMIhEbAmMrk8G8GLksRwsLqvIitkYcjf0McgglRmQd1_M6s_MPdBs3e3dlfs9Zhpb4uhlJezJDbYdZdbyoIreqP7xZSGX5XpyvriL65RMgC5VE5LdRNfjEP2z2Y4SvvTsjZpDzqPfVBQ7ZpPYyRQqHWBZLHOo39L4iCwThKh9DqareiLkEZ2sjB8M7LDiCq9UHrHvYoXIqh8lsGIwumLT3MDXvAs_7ILt" alt="Assignee 1"/>
            <img className="w-8 h-8 rounded-full border-2 border-surface object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5FM3cPSE-ucueQEjPFktd-8zRWQoJBYvNzGfYflfHG49SrO2yBxdR01eu1WLCqk51_QtB_p4VAlpwjCyVLUwLEu8rYKMAvE3CmQRESAR_JWQ_V_aDGXbqU8jnkDOqj99aEaHVDeYQLO4nvczNLU9oemPY2A1z4dRu8lZoZg0Jgq6RMF2ixU2lcVZ6rz44hu3pSsy83WFjh_OChXbezr4YRRQ-8ZD4dCYm4uTOT_VDngHt5cCgqAblsL2oH2nLTeGX7rM8NQ_2idOq" alt="Assignee 2"/>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-low p-8 rounded-xl mb-10">
        <h3 className="text-xs font-bold text-outline uppercase tracking-widest mb-4">Task Description</h3>
        <p className="font-body text-lg leading-relaxed text-on-surface-variant max-w-2xl">
          Finalize descriptions for the knitwear collection. Ensure tone is consistent with the brand's <span className="text-primary italic">"quiet luxury"</span> aesthetic. Check for SEO keywords in all product blurbs.
        </p>
      </div>

      <div className="mb-12">
        <h3 className="text-xs font-bold text-outline uppercase tracking-widest mb-6 flex items-center gap-2">
          Checklist <span className="bg-surface-container-highest px-2 py-0.5 rounded text-[10px]">1/3</span>
        </h3>
        <div className="space-y-4">
          <ChecklistItem label="Review knitwear draft" completed />
          <ChecklistItem label="Approve final copy" />
          <ChecklistItem label="Send to CMS" />
        </div>
      </div>

      <div className="border-t border-outline/10 pt-12">
        <h3 className="text-xs font-bold text-outline uppercase tracking-widest mb-8">Activity & Comments</h3>
        <div className="space-y-8">
          <CommentItem 
            user={{name: "Sarah Jenkins", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSiiieKTaoN0YIFOY767017FG6TjARaT-2jYdHwoS_vTRac7WYZX-KAgAOhOGTcBBcOB4_7UjRTuh8lNWUurx7DIsjrBzY3dms8Ju2gAOZgQSO8LlE82Z5hCKIZaxNtuRzABSAQOmYSWyt3uXBUhfF2jeyZLAnjdlbcg343YmiN0o8D1HVg-NCTECZ_4xMt38eZM_94XcaDWbKLVyZpddGKHpid-nfgA83RR0F1aaRVTAgKlmMSHGOoX14QLHvvCTv2N3qbDfQLkQI"}}
            time="2 hours ago"
            message="I've uploaded the initial draft for the cashmere sweaters. Let's focus on the 'sensory' experience of the fabric."
          />
          <CommentItem 
            user={{name: "Marcus Thorne", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkET8b0YuftzY7h2rxODFOdvJvQzoI4jnFfAO0PAsszKqIoMEqn4htL-8YjW0kLWQhykauOkvL695l2lnBlTrllr3GpwqsMu5Sbd9dTBfKXcKLt3Puluagaj9w8PjZA6q-YIzH71ftJ5ARAQ6D6J0r-Ossc4d3-xp4WDE3FIJO6aAy1GzohiFOvdWZmQYoten09oSEI2jrfld2dIBK_BuwZVbg4gDpC5VRO6zgMbQFgbq9eVNx6rWIdW5uIukpluEX-bwn-zlSxn7D"}}
            time="45 minutes ago"
            message="Looks great so far. I'll take a pass at the SEO optimization once the tone is locked in."
          />

          <div className="flex gap-4 mt-10">
            <img className="w-10 h-10 rounded-full object-cover shrink-0 opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQhwXWQw5ZubY_XWy08zwPg1TOslYkYRH7QZs7TZKVvrFnVeAgPcMH9qF0s69oRW0vLNJLWzZod2KQn63H7xtwYt54d-8jJ1KfjSuCZK13S1665Jx3qPPBzWsvNNeH8xP48Zqkz5ip04Dtv4QZBmD7cuHd0Hhqon3gWLF6mM1pN2mI5pCLSXM0_aI2oAhh7544_AZ1qKUbNhEcmU4zwh6-Pk8GVE3MD7pqkf-FVfdS8ycQ5ZEKoW6ZyaSbZVx1H06zX7XeAigxjtbP" alt="Current User" />
            <div className="flex-1 relative">
              <input className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:ring-0 py-3 text-sm transition-all placeholder:text-outline/50" placeholder="Add a comment or @mention someone..." type="text"/>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-3">
                <button className="text-outline hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">attach_file</span>
                </button>
                <button className="text-primary">
                  <span className="material-symbols-outlined text-lg">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TaskDetailsTemplate>
  );
}
