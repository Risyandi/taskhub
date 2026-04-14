// created by risyandi.com - 2026
import React from 'react';
import { SearchBar } from '../molecules/SearchBar';
import { Avatar } from '../atoms/Avatar';
import { IconButton } from '../atoms/IconButton';

interface TopNavBarProps {
  variant?: 'dashboard' | 'details';
}

export function TopNavBar({ variant = 'dashboard' }: TopNavBarProps) {
  if (variant === 'details') {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#fff8ef] dark:bg-stone-950 flex justify-between items-center px-12 py-6 font-headline tracking-tight border-b border-surface-container-low">
        <div className="text-2xl font-bold tracking-tighter text-[#228B22] dark:text-emerald-500">
          The Curator
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a className="text-stone-500 dark:text-stone-400 font-medium hover:text-[#228B22] dark:hover:text-emerald-400 transition-colors duration-300 ease-in-out" href="#">Inbox</a>
          <a className="text-[#228B22] dark:text-emerald-400 font-semibold border-b-2 border-[#228B22] transition-colors duration-300 ease-in-out" href="#">Studio</a>
          <a className="text-stone-500 dark:text-stone-400 font-medium hover:text-[#228B22] dark:hover:text-emerald-400 transition-colors duration-300 ease-in-out" href="#">Archives</a>
        </div>

        <div className="flex items-center gap-6">
          <SearchBar variant="details" placeholder="Search tasks..." />
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <Avatar 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTvF0EzE6HKmB_Kw-SkRVO2H5DlG2cuECdNZgawgDWvbN2pyNwbSNuTWEKqgJ8K3rMfYIw4ALKXDAuMSsv-oe_Lrlv3hE_bEkhbmIvXu06yJNJ-osp7t_uF-kkO-G9ivHrfQpJophN8KCpkmS_kPsG-bUe1blPrjbMQCTf_scZMYy453VG_mDHEC_HieM6iYwEHwXef295fEXcaw-PJf3h-rV93ctVOsdlA2KeGWFJbmd06KlAhvg3VKEO9KVFHqXpQVQqNlCj0UUT" 
            alt="Lead Curator Profile" 
            size="sm" 
          />
        </div>
      </nav>
    );
  }

  // Dashboard variant
  return (
    <header className="sticky top-0 w-full z-40 flex justify-between items-center px-8 md:px-12 py-4 bg-[#fff8ef] dark:bg-stone-950 font-headline tracking-tight">
      <div className="flex items-center gap-8">
        <span className="text-2xl font-bold text-[#228B22] dark:text-[#418340] md:hidden">The Curator</span>
        <SearchBar variant="dashboard" />
      </div>

      <div className="flex items-center gap-6">
        <IconButton icon="notifications" badge={true} />
        <IconButton icon="settings" />
        
        <div className="w-10 h-10 rounded-full overflow-hidden ghost-border">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCijyJyKWOZJoqAxSjWK8jdmkBm8KcOLpYjpDYbo60f7RFEKQIIEBA2jpMIcsVUp0x7hqRM8i8CRaSquklK58egjEPY-UiqSvPY8fTfEPyPlE6Z5gs3PQaoIcV8eLny8VTWQHsiXLPD_GXHdFsJ6iIxczqVvPt_V5M4_RRo8kS53FDgtdIe1U6cUKhiVYEeW-kXDMkRGkNRlN88hjnoVxrLFEQOcVPZyWoUJRQU9msjJz1xvVQRr6Zrvl6EEhYLW_64GIQXQeoLgsN5" 
            alt="User avatar" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </header>
  );
}
