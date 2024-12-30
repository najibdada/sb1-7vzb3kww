import React from 'react';
import { useSmoothScroll } from '../navigation/hooks/useSmoothScroll';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export function FooterLink({ href, children }: FooterLinkProps) {
  const { scrollToSection } = useSmoothScroll();

  return (
    <a
      href={href}
      onClick={scrollToSection}
      className="text-white hover:text-[#00B5E2] transition-colors"
    >
      {children}
    </a>
  );
}