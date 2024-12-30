import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactLinkProps {
  icon: LucideIcon;
  text: string;
  href: string;
}

export function ContactLink({ icon: Icon, text, href }: ContactLinkProps) {
  return (
    <a 
      href={href}
      className="flex items-center gap-3 text-white hover:text-[#00B5E2] transition-colors"
    >
      <Icon className="w-5 h-5" />
      <span>{text}</span>
    </a>
  );
}