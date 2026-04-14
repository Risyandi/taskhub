// created by risyandi.com - 2026
import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Avatar({ src, alt, className = '', size = 'md' }: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8 border-2 border-white',
    md: 'w-10 h-10 border-2 border-surface-container-high',
    lg: 'w-12 h-12 border-2 border-surface'
  };

  return (
    <img 
      src={src} 
      alt={alt} 
      data-alt={alt}
      className={`rounded-full object-cover ${sizes[size]} ${className}`} 
    />
  );
}
