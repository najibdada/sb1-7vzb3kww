import React from 'react';
import { PartnerLogo } from './PartnerLogo';
import { partners } from './partnersData';

export function LogoStrip() {
  return (
    <>
      {/* First set of logos */}
      {partners.map((partner, index) => (
        <PartnerLogo key={`first-${index}`} {...partner} />
      ))}
      {/* Duplicate set for seamless loop */}
      {partners.map((partner, index) => (
        <PartnerLogo key={`second-${index}`} {...partner} />
      ))}
    </>
  );
}