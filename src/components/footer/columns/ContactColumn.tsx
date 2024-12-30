import React from 'react';
import { FooterHeading } from '../FooterHeading';
import { Phone, Mail } from 'lucide-react';
import { ContactLink } from '../ContactLink';

export function ContactColumn() {
  return (
    <div>
      <FooterHeading>Get in Touch</FooterHeading>
      <div className="space-y-4">
        <ContactLink
          icon={Phone}
          text="+1 (555) 123-4567"
          href="tel:+15551234567"
        />
        <ContactLink
          icon={Mail}
          text="contact@sigmamedia.com"
          href="mailto:contact@sigmamedia.com"
        />
        <a 
          href="#contact"
          className="inline-block text-white hover:text-[#00B5E2] transition-colors"
        >
          Contact Us →
        </a>
      </div>
    </div>
  );
}