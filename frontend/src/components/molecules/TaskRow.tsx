// created by risyandi.com - 2026
import React from 'react';
import { Badge } from '../atoms/Badge';
import { Avatar } from '../atoms/Avatar';

interface User {
  src: string;
  alt: string;
}

export interface TaskRowProps {
  id?: number | string;
  title: string;
  description: string;
  users?: User[];
  priority: 'High' | 'Medium' | 'Low' | string;
  deadline: string;
  completed?: boolean;
  onToggle?: (id: number | string) => void;
}

export function TaskRow({ id, title, description, users = [], priority, deadline, completed = false, onToggle }: TaskRowProps) {
  return (
    <div className="grid grid-cols-12 gap-4 px-6 py-6 items-center bg-surface-container-lowest rounded-xl hover:bg-surface-container transition-colors group">
      <div className="col-span-5 flex items-start gap-4">
        {completed ? (
          <div
            onClick={() => id && onToggle && onToggle(id)}
            className="mt-1 w-5 h-5 rounded-md border-2 border-primary bg-primary flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-white text-[14px]">check</span>
          </div>
        ) : (
          <div
            onClick={() => id && onToggle && onToggle(id)}
            className="mt-1 w-5 h-5 rounded-md border-2 border-outline-variant flex items-center justify-center group-hover:border-primary transition-colors cursor-pointer"
          ></div>
        )}

        <div>
          <h4 className={`font-bold transition-colors ${completed ? 'text-on-surface-variant line-through' : 'text-on-surface group-hover:text-primary'}`}>
            {title}
          </h4>
          <p className={`text-sm mt-1 ${completed ? 'text-outline-variant' : 'text-on-surface-variant'}`}>{description}</p>
        </div>
      </div>

      {/* <div className="col-span-2 flex -space-x-2">
        {users.map((u, i) => (
          <Avatar key={i} src={u.src} alt={u.alt} size="sm" />
        ))}
      </div> */}

      <div className="col-span-4">
        <Badge variant={priority.toLowerCase() as any}>{priority}</Badge>
      </div>

      <div className={`col-span-2 text-center text-sm font-medium ${completed ? 'text-outline-variant' : 'text-on-surface-variant'}`}>
        {deadline}
      </div>

      {/* <div className="col-span-1 flex justify-end">
        <button className="material-symbols-outlined text-outline-variant hover:text-primary">more_horiz</button>
      </div> */}
    </div>
  );
}
