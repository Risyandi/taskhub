// created by risyandi.com - 2026
"use client";

import React from 'react';
import { DashboardTemplate } from '@/components/templates/DashboardTemplate';
import { StatCard } from '@/components/molecules/StatCard';
import { TaskRow, TaskRowProps } from '@/components/molecules/TaskRow';

const MOCK_TASKS: TaskRowProps[] = [
  {
    title: "Revise Fall Lookbook Copy",
    description: "Finalize descriptions for the knitwear collection...",
    users: [
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVjsrSGAnnGLKVe29ngU6delAYIPKnFtNnmEw5-UPmtR9eZ8lEpoYD0MhiHhXCY4xWUH-cchTdchl1v7TBpuwktZarBKJr4hRA8LMhz7wiEM9WiAKtDizs8WrK_-SzTuZV5tUnKWWjv0HtNQCO5RZPM25vxp4zr99v6ByPuIDblS4p3hpOKmnoz7K8gi5LYipmwOord_GtqDbggQ0OQXI7bnwuym5YPV00P9Vos1Z4xzLw66DME_zxQCBbcWc7uakVlj6secP4Ecso", alt: "Avatar 1" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ5pc4K6v8MWwS3Ew2EFXUz4OqVudZxCkIDqXvQ2QqPPt-rUH5-bdpQijxUXyVUG1ZQZr-5CCEaQbqx1nRRpG6LsBr3zX2IAci3AfN5QSxVvLRMu_QxNhLFCQfmSSblG9p79upWZmdHItGNWYlZuigjnD53LASBXSaWGttLf_l9v15rgF4klsYPpTB7_UENoCb3ChWzPOEBmMo0HVt-KrQaDi7I8xweaVSF4UZZKLTZ7phC8WRjjIlkL4v_wxRh3iEPBBXhVlsNMRY", alt: "Avatar 2" }
    ],
    priority: "High",
    deadline: "Oct 24, 2023"
  },
  {
    title: "Vendor Selection: Packaging",
    description: "Reviewing sustainable options for the 2024 launch.",
    users: [
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCNJn12NxGkHm-1KUrvh2kGEdEWcxNzPY9oXlZATM88ZpucOETVWx4ZNvdbG-NVyEPkNkSK3auHBpU4Amg6v2GONay98OyEJYmUFCSU2roNra-yjbQqSHFJgTnlolS46rn74xwbVTeIwfoR_iWC2--PelxrLItlN6FC7_NM3gbCFuUCox0MGB3X0ZvGgpJLKVVUD9lisJqpMWJWuFsCrreiFUCo7nm3PruNhVTGN280XVKenl8XxcI_SqHcWS0fbB0WiYWJ0pJcgl5", alt: "Avatar 3" }
    ],
    priority: "Medium",
    deadline: "Oct 28, 2023"
  },
  {
    title: "Product Photography Sync",
    description: "Meeting with the studio team to discuss lighting...",
    users: [
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBW0Al5h1AtVX_NCYRVAuIvXduuOAhE0Nm7MYEcF4uhHv8b-VmAJb_tgfl2OKeS1VdLgNZcKCcAn05D-QlJ3Si_Kayd9s5j2DqkS0qYCXTk0QWVoI5qA8WFwVCcSeEM05zVyVEM3jTWf8O6InBWI7GO78n9TOHLu6oyfza_hIAFv74pyA-dSRt9GPxlMt9oC6Qu0ptumXf4aFpIvCTFoPx0JTu8er8voiE2OymBj_wc9bcgPSEsazeDiCH-qnLNzZR24N2LXEHEtkIP", alt: "Avatar 4" }
    ],
    priority: "Low",
    deadline: "Completed",
    completed: true
  },
  {
    title: "Social Media Strategy H2",
    description: "Plan and schedule posts for Q3 and Q4 campaigns.",
    users: [
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVWqTIHqnEAX-B58DYNhV4CcM1809FBrxtxiJyZhpfSDQMc6mhOMYBcsWgUODsvcH8idkZXuvTqrUtJPppOU4hi51ZEDgckcFVgsHqoF6bQJ0yjqWAjVkp_57g9s3AhCS49R9yIilbvytNcTsX8MX145CYqH3JwnU7iJCBNx-ZLodbBMCodbe3UV25dMYBBq8MKUjfEQYe627fv9RW9mGExI-e_5gjSeEryKWB5OLwjxs_L3O8XsPIrCAKmM6RLO_7yjsb8qNDgulX", alt: "Avatar 5" },
      { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjmuChSOSsNk0lbVH66dLIH3DIHrOPsMWxzvj_15zgwFwuwQiDOG3U_eFbvdfjEo3LYQ6iYJPET5wy09NmS6TZ8AO4bsKnvNi5ZRPbla0YFglF7D9IRAw16cZOP3KhsuchfqU8XR7atiycSEK81WA9QS2AtrhbQicOk7eL4Yoic4rMIsKXon5An366EryOY4KZF08VRTHxV-9VD-T9FFSLKt5o4r_XundrmxzSXXTxyzIteX0xppfeosyXSkJaEDb5BsK50KjzGfAP", alt: "Avatar 6" }
    ],
    priority: "High",
    deadline: "Nov 02, 2023"
  }
];

export default function DashboardPage() {
  return (
    <DashboardTemplate>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-7">
          <h2 className="text-5xl font-headline font-extrabold text-primary leading-tight mb-4">Daily Editorial <br/>Overview</h2>
          <p className="text-on-surface-variant max-w-md text-lg leading-relaxed">Your curated selection of prioritized tasks for the spring collection workspace.</p>
        </div>
        <div className="md:col-span-5 grid grid-cols-2 gap-4">
          <StatCard label="In Progress" value="24" highlighted />
          <StatCard label="Completed" value="182" />
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-between gap-6 bg-surface-container-low/50 p-2 rounded-full ghost-border px-6 py-3">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
          <button className="px-5 py-2 rounded-full bg-primary text-white font-medium text-sm whitespace-nowrap">All Tasks</button>
          <button className="px-5 py-2 rounded-full hover:bg-surface-container-highest text-on-surface-variant font-medium text-sm transition-colors whitespace-nowrap">High Priority</button>
          <button className="px-5 py-2 rounded-full hover:bg-surface-container-highest text-on-surface-variant font-medium text-sm transition-colors whitespace-nowrap">Deadline Approaching</button>
          <button className="px-5 py-2 rounded-full hover:bg-surface-container-highest text-on-surface-variant font-medium text-sm transition-colors whitespace-nowrap">Unassigned</button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-label text-[10px] uppercase tracking-widest text-outline mr-2">Sort by:</span>
          <select className="bg-transparent border-none text-sm font-semibold focus:ring-0 cursor-pointer text-primary">
            <option>Newest First</option>
            <option>Oldest First</option>
            <option>Priority</option>
          </select>
        </div>
      </section>

      <section className="overflow-x-auto">
        <div className="min-w-[800px]">
          <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-outline-variant/30 text-label text-[10px] uppercase tracking-widest text-outline font-bold">
            <div className="col-span-5">Task Details</div>
            <div className="col-span-2">Owner</div>
            <div className="col-span-2">Priority</div>
            <div className="col-span-2 text-center">Deadline</div>
            <div className="col-span-1"></div>
          </div>
          
          <div className="space-y-3 mt-4">
            {MOCK_TASKS.map((task, i) => (
              <TaskRow key={i} {...task} />
            ))}
          </div>
        </div>
      </section>

      <section className="flex items-center justify-between pt-8 border-t border-outline-variant/20">
        <div className="text-sm text-on-surface-variant">
          Showing <span className="font-bold text-on-surface">1-10</span> of <span className="font-bold text-on-surface">42</span> tasks
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-surface-container-high text-outline-variant hover:text-primary transition-all">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 rounded-full bg-primary text-white text-xs font-bold">1</button>
            <button className="w-8 h-8 rounded-full hover:bg-surface-container-high text-on-surface-variant text-xs font-bold transition-all">2</button>
            <button className="w-8 h-8 rounded-full hover:bg-surface-container-high text-on-surface-variant text-xs font-bold transition-all">3</button>
            <span className="mx-1 text-outline-variant">...</span>
            <button className="w-8 h-8 rounded-full hover:bg-surface-container-high text-on-surface-variant text-xs font-bold transition-all">5</button>
          </div>
          <button className="p-2 rounded-full hover:bg-surface-container-high text-outline-variant hover:text-primary transition-all">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>
    </DashboardTemplate>
  );
}
