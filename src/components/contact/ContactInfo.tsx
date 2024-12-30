import React from 'react';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { ContactInfoItem } from './ContactInfoItem';
import { SocialLink } from '../footer/SocialLink';

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

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-black mb-4">Contact Us</h2>
      <p className="text-[#00B5E2] text-lg mb-12 max-w-[400px]">
        We're here to assist with your social media marketing needs. Reach out today!
      </p>

      <div className="space-y-6 mb-12">
        <ContactInfoItem 
          icon={Phone} 
          text="+1 (555) 123-4567"
          href="tel:+15551234567"
        />
        <ContactInfoItem 
          icon={Mail} 
          text="contact@sigmamedia.com"
          href="mailto:contact@sigmamedia.com"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-black mb-4">Follow Us</h3>
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
    </div>
  );
}