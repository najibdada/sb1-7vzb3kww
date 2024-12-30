import React from 'react';
import { ProcessTimeline } from './ProcessTimeline';
import { SectionTitle } from './SectionTitle';

export function ProcessSection() {
  return (
    <section className="relative py-32">
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-3xl" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4">
        <SectionTitle />
        <ProcessTimeline />
      </div>
    </section>
  );
}