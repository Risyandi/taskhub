// created by risyandi.com - 2026
"use client";

import React, { useEffect, useState } from 'react';
import { DashboardTemplate } from '@/components/templates/DashboardTemplate';
import { StatCard } from '@/components/molecules/StatCard';
import { TaskRow } from '@/components/molecules/TaskRow';
import { fetchApi } from '@/lib/api';
import { useAuth } from '@/hooks/useAuth';

export default function DashboardPage() {
  const { isAuthenticated } = useAuth();
  const PER_PAGE = 5;

  const [tasks, setTasks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [sortParam, setSortParam] = useState<string>('newest');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [meta, setMeta] = useState({ current_page: 1, last_page: 1, per_page: PER_PAGE, total: 0, from: 0, to: 0 });

  // Reset to page 1 whenever filter or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, sortParam]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchTasks();
    }
  }, [isAuthenticated, activeFilter, sortParam, currentPage]);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const params = new URLSearchParams();
      if (activeFilter === 'high_priority') params.append('priority', 'high');
      if (activeFilter === 'deadline_approaching') params.append('deadline', 'approaching');
      if (activeFilter === 'in_progress') params.append('status', 'pending');
      if (sortParam) params.append('sort', sortParam);
      params.append('page', String(currentPage));
      params.append('per_page', String(PER_PAGE));

      const res = await fetchApi(`/tasks?${params.toString()}`);
      setTasks(res?.data || []);
      if (res?.meta) setMeta(res.meta);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggle = async (id: number | string) => {
    try {
      await fetchApi(`/tasks/${id}/completed`, { method: 'PUT' });
      // update local
      setTasks(prev => prev.map(t => t.id === id ? { ...t, is_completed: true } : t));
    } catch (e) {
      console.error(e);
    }
  };

  const inProgressCount = tasks.filter(t => !t.is_completed).length;
  const completedCount = tasks.filter(t => t.is_completed).length;

  // Build smart page-number list with ellipsis
  const buildPageNumbers = (): (number | '...')[] => {
    const total = meta.last_page;
    const cur = meta.current_page;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const pages: (number | '...')[] = [1];
    if (cur > 3) pages.push('...');
    for (let p = Math.max(2, cur - 1); p <= Math.min(total - 1, cur + 1); p++) pages.push(p);
    if (cur < total - 2) pages.push('...');
    pages.push(total);
    return pages;
  };

  return (
    <DashboardTemplate>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-7">
          <h2 className="text-5xl font-headline font-extrabold text-primary leading-tight mb-4">Overview</h2>
          <p className="text-on-surface-variant max-w-md text-lg leading-relaxed">Prioritized tasks for workspace.</p>
        </div>
        <div className="md:col-span-5 grid grid-cols-2 gap-4">
          <StatCard label="In Progress" value={inProgressCount.toString()} highlighted />
          <StatCard label="Completed" value={completedCount.toString()} />
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-between gap-6 bg-surface-container-low/50 p-2 rounded-full ghost-border px-6 py-3">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-colors whitespace-nowrap ${activeFilter === 'all' ? 'bg-primary text-white' : 'hover:bg-surface-container-highest text-on-surface-variant'}`}
          >
            All Tasks
          </button>
          <button
            onClick={() => setActiveFilter('high_priority')}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-colors whitespace-nowrap ${activeFilter === 'high_priority' ? 'bg-primary text-white' : 'hover:bg-surface-container-highest text-on-surface-variant'}`}
          >
            High Priority
          </button>
          <button
            onClick={() => setActiveFilter('deadline_approaching')}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-colors whitespace-nowrap ${activeFilter === 'deadline_approaching' ? 'bg-primary text-white' : 'hover:bg-surface-container-highest text-on-surface-variant'}`}
          >
            Deadline Approaching
          </button>
          <button
            onClick={() => setActiveFilter('in_progress')}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-colors whitespace-nowrap ${activeFilter === 'in_progress' ? 'bg-primary text-white' : 'hover:bg-surface-container-highest text-on-surface-variant'}`}
          >
            In Progress
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-label text-[10px] uppercase tracking-widest text-outline mr-2">Sort by:</span>
          <select
            value={sortParam}
            onChange={(e) => setSortParam(e.target.value)}
            className="bg-transparent border-none text-sm font-semibold focus:ring-0 cursor-pointer text-primary"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="priority">Priority</option>
            <option value="deadline">Deadline</option>
          </select>
        </div>
      </section>

      <section className="overflow-x-auto">
        <div className="min-w-[800px]">
          <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-outline-variant/30 text-label text-[10px] uppercase tracking-widest text-outline font-bold">
            <div className="col-span-5">Task Details</div>
            {/* <div className="col-span-2">Owner</div> */}
            <div className="col-span-2">Priority</div>
            <div className="col-span-2 text-center">Deadline</div>
            <div className="col-span-1"></div>
          </div>

          <div className="space-y-3 mt-4">
            {isLoading ? (
              <div className="text-center py-8 text-on-surface-variant text-sm tracking-widest font-label uppercase">Loading tasks...</div>
            ) : tasks.length === 0 ? (
              <div className="text-center py-8 text-on-surface-variant text-sm tracking-widest font-label uppercase">No tasks available</div>
            ) : (
              tasks.map((task) => (
                <TaskRow
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description || ''}
                  priority={task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                  deadline={task.date_deadline}
                  completed={task.is_completed}
                  onToggle={handleToggle}
                />
              ))
            )}
          </div>
        </div>
      </section>

      <section className="flex items-center justify-between pt-8 border-t border-outline-variant/20">
        <div className="text-sm text-on-surface-variant">
          Showing{' '}
          <span className="font-bold text-on-surface">
            {meta.total > 0 ? meta.from : 0}–{meta.to}
          </span>{' '}
          of{' '}
          <span className="font-bold text-on-surface">{meta.total}</span> tasks
        </div>
        <div className="flex items-center gap-2">
          <button
            disabled={meta.current_page <= 1}
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            className="p-2 rounded-full hover:bg-surface-container-high text-outline-variant hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="flex items-center gap-1">
            {buildPageNumbers().map((item, idx) =>
              item === '...' ? (
                <span key={`ellipsis-${idx}`} className="mx-1 text-outline-variant text-xs">...</span>
              ) : (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item as number)}
                  className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
                    item === meta.current_page
                      ? 'bg-primary text-white'
                      : 'hover:bg-surface-container-high text-on-surface-variant'
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>
          <button
            disabled={meta.current_page >= meta.last_page}
            onClick={() => setCurrentPage(p => Math.min(meta.last_page, p + 1))}
            className="p-2 rounded-full hover:bg-surface-container-high text-outline-variant hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>
    </DashboardTemplate>
  );
}
