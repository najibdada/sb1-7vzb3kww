import React from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';

const links = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Our Services' },
  { href: '#portfolio', label: 'Our Portfolio' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact Us' },
];

interface NavLinksProps {
  orientation?: 'horizontal' | 'vertical';
  onLinkClick?: () => void;
}

export function NavLinks({ orientation = 'horizontal', onLinkClick }: NavLinksProps) {
  const { scrollToSection } = useSmoothScroll();
  const baseStyles = "text-gray-600 hover:text-[#38c3f9] transition-colors duration-300";
  const orientationStyles = orientation === 'vertical' 
    ? 'flex flex-col items-center space-y-6 text-xl' 
    : 'hidden md:flex items-center justify-center space-x-8';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToSection(e);
    onLinkClick?.();
  };

  return (
    <nav className={orientationStyles}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={baseStyles}
          onClick={handleClick}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}