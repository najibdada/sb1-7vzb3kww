import React from 'react';
import { ServicesSectionTitle } from './ServicesSectionTitle';
import { ServicesGrid } from './ServicesGrid';

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-50 via-white to-blue-100">
        <div className="absolute inset-0 bg-radial-gradient opacity-40" />
      </div>
      
      <div className="relative container mx-auto px-4">
        <ServicesSectionTitle />
        <ServicesGrid />
      </div>
    </section>
  );
}