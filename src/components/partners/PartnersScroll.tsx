import React from 'react';
import { LogoStrip } from './LogoStrip';

export function PartnersScroll() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
      
      {/* Scrolling container */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-flex logo-scroll">
          <LogoStrip />
        </div>
      </div>
    </div>
  );
}