import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
}

export function SocialLink({ href, icon: Icon }: SocialLinkProps) {
  return (
    <a 
      href={href}
      className="w-8 h-8 rounded-full bg-[#00B5E2] flex items-center justify-center
        hover:opacity-80 transition-opacity"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-5 h-5 text-white" />
    </a>
  );
}