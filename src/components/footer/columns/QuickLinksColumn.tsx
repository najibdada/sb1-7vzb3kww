import React from 'react';
import { FooterHeading } from '../FooterHeading';
import { FooterLink } from '../FooterLink';

const links = [
  { href: '#about', text: 'About Us' },
  { href: '#services', text: 'Our Services' },
  { href: '#portfolio', text: 'Our Portfolio' },
  { href: '#testimonials', text: 'Testimonials' },
  { href: '#contact', text: 'Contact Us' }
];

export function QuickLinksColumn() {
  return (
    <div>
      <FooterHeading>Quick Links</FooterHeading>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <FooterLink href={link.href}>{link.text}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}