// created by risyandi.com - 2026
import React from 'react';
import { Avatar } from '../atoms/Avatar';

interface CommentItemProps {
  user: {
    name: string;
    avatar: string;
  };
  time: string;
  message: string;
}

export function CommentItem({ user, time, message }: CommentItemProps) {
  return (
    <div className="flex gap-4">
      <Avatar src={user.avatar} alt={user.name} className="shrink-0" />
      <div className="flex-1">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-bold text-sm">{user.name}</span>
          <span className="text-[10px] text-outline uppercase">{time}</span>
        </div>
        <div className="bg-surface-container-highest/40 p-4 rounded-xl rounded-tl-none">
          <p className="text-sm text-on-surface-variant leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
