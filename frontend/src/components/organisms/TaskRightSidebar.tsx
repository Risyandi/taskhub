// created by risyandi.com - 2026
import React from 'react';

export function TaskRightSidebar() {
  return (
    <aside className="w-full lg:w-80 shrink-0">
      <div className="bg-surface-container rounded-2xl p-8 sticky top-32">
        <div className="space-y-10">
          
          <div className="space-y-6">
            <div>
              <h4 className="text-[10px] font-bold text-outline uppercase tracking-[0.15em] mb-3">Status</h4>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-highest rounded-lg w-fit">
                <div className="w-2 h-2 rounded-full bg-[#228B22]"></div>
                <span className="text-sm font-semibold">In Progress</span>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-outline uppercase tracking-[0.15em] mb-3">Priority</h4>
              <div className="flex items-center gap-2 text-[#228B22]">
                <span className="material-symbols-outlined text-lg">arrow_upward</span>
                <span className="text-sm font-bold">High</span>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-outline uppercase tracking-[0.15em] mb-3">Deadline</h4>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg text-outline">calendar_today</span>
                <span className="text-sm font-medium">Oct 24, 2023</span>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-outline uppercase tracking-[0.15em] mb-3">Project</h4>
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-lg">folder</span>
                <span className="text-sm font-bold">Fall Collection 2024</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-outline/10"></div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-[10px] font-bold text-outline uppercase tracking-[0.15em]">Attachments</h4>
              <button className="text-[10px] text-primary font-bold uppercase tracking-widest hover:underline">Add</button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-xl hover:bg-white transition-colors group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500">
                  <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-xs font-semibold truncate">knitwear_draft_v1.pdf</p>
                  <p className="text-[10px] text-outline">1.2 MB</p>
                </div>
                <span className="material-symbols-outlined text-outline/30 group-hover:text-primary transition-colors">download</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-xl hover:bg-white transition-colors group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                  <span className="material-symbols-outlined text-lg">description</span>
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-xs font-semibold truncate">seo_keywords_master.docx</p>
                  <p className="text-[10px] text-outline">450 KB</p>
                </div>
                <span className="material-symbols-outlined text-outline/30 group-hover:text-primary transition-colors">download</span>
              </div>
            </div>
          </div>

          <button className="w-full py-4 border-2 border-primary text-primary font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300">
            Mark as Completed
          </button>
          
        </div>
      </div>
    </aside>
  );
}
