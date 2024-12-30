import React from 'react';
import { PartnersTitle } from './PartnersTitle';
import { PartnersScroll } from './PartnersScroll';

export function PartnersSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <PartnersTitle />
        <PartnersScroll />
      </div>
    </div>
  );
}