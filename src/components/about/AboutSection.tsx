import React from 'react';
import { LogoDisplay } from './LogoDisplay';
import { AboutContent } from './AboutContent';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-12 gap-12 max-w-7xl mx-auto min-h-[350px]">
          <div className="md:col-span-4">
            <LogoDisplay />
          </div>
          <div className="md:col-span-8">
            <AboutContent />
          </div>
        </div>
      </div>
    </section>
  );
}