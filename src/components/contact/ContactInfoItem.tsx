import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactInfoItemProps {
  icon: LucideIcon;
  text: string;
  href: string;
}

export function ContactInfoItem({ icon: Icon, text, href }: ContactInfoItemProps) {
  return (
    <a 
      href={href}
      className="flex items-center gap-4 group hover:text-[#00B5E2] transition-colors"
    >
      <div className="w-10 h-10 rounded-full bg-[#00B5E2]/10 flex items-center justify-center
        group-hover:bg-[#00B5E2] transition-colors">
        <Icon className="w-6 h-6 text-[#00B5E2] group-hover:text-white transition-colors" />
      </div>
      <span className="text-gray-600 group-hover:text-[#00B5E2] transition-colors">
        {text}
      </span>
    </a>
  );
}