// created by risyandi.com - 2026
"use client";

import React from 'react';
import { DashboardTemplate } from '@/components/templates/DashboardTemplate';
import { TaskFormModal } from '@/components/organisms/TaskFormModal';

export default function NewTaskPage() {
  return (
    <>
      <DashboardTemplate>
        <div className="opacity-0">
          {/* We're using DashboardTemplate to provide the exact background context of SideNavBar and TopBar, 
          while hiding the main content because the modal will capture focus perfectly replicating the design */}
        </div>
      </DashboardTemplate>
      <TaskFormModal />
    </>
  );
}
