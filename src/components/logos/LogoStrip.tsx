import React from 'react';
import { LogoImage } from './LogoImage';
import { logos } from './logoData';

export function LogoStrip() {
  return (
    <>
      {/* First set of logos */}
      {logos.map((logo, index) => (
        <LogoImage key={`first-${index}`} {...logo} />
      ))}
      {/* Duplicate set for seamless loop */}
      {logos.map((logo, index) => (
        <LogoImage key={`second-${index}`} {...logo} />
      ))}
    </>
  );
}