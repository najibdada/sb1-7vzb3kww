import React from 'react';
import { FooterHeading } from '../FooterHeading';
import { Facebook, Instagram } from 'lucide-react';
import { SocialLink } from '../SocialLink';

const socialLinks = [
  {
    href: 'https://www.facebook.com/profile.php?id=100075708377514',
    icon: Facebook,
    label: 'Facebook'
  },
  {
    href: 'https://www.instagram.com/sigmamedia.agency/',
    icon: Instagram,
    label: 'Instagram'
  },
  {
    href: 'https://www.linkedin.com/company/sigma-media-agency/posts/?feedView=all',
    icon: ({ className }) => (
      <div className={`${className} flex items-center justify-center font-bold text-[18px]`}>
        in
      </div>
    ),
    label: 'LinkedIn'
  },
  {
    href: 'https://www.behance.net/sigmamediaagency',
    icon: ({ className }) => (
      <div className={`${className} flex items-center justify-center font-bold text-[18px]`}>
        Be
      </div>
    ),
    label: 'Behance'
  }
];

export function SocialColumn() {
  return (
    <div>
      <FooterHeading>Follow Us</FooterHeading>
      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <SocialLink
            key={link.label}
            href={link.href}
            icon={link.icon}
            label={link.label}
          />
        ))}
      </div>
    </div>
  );
}