// created by risyandi.com - 2026
import React from 'react';
import { SideNavBar } from '../organisms/SideNavBar';
// import { TopNavBar } from '../organisms/TopNavBar';
import { TaskRightSidebar } from '../organisms/TaskRightSidebar';

interface TaskDetailsTemplateProps {
  children: React.ReactNode;
}

export function TaskDetailsTemplate({ children }: TaskDetailsTemplateProps) {
  return (
    <>
      {/* <TopNavBar variant="details" /> */}
      <SideNavBar variant="details" />

      <main className="md:ml-64 pt-24 min-h-screen">
        <div className="max-w-6xl mx-auto px-8 lg:px-12 py-8 flex flex-col lg:flex-row gap-12">

          <div className="flex-1">
            {children}
          </div>

          <TaskRightSidebar />
        </div>
      </main>
    </>
  );
}
