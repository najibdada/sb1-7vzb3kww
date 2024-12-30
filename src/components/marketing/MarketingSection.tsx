import React from 'react';
import { MarketingMetrics } from './MarketingMetrics';
import { CampaignShowcase } from './CampaignShowcase';
import { BackgroundPattern } from './BackgroundPattern';

export function MarketingSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a6b9f] via-[#38c3f9] to-[#1a6b9f]">
        <BackgroundPattern />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transform Your Brand, <span className="text-white/90">Sigma Media</span> Leads the Way
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Sigma Media crafts marketing solutions tailored to your brand, from foundational strategies 
            to advanced campaigns that drive results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <CampaignShowcase />
          <div className="flex flex-col justify-center">
            <MarketingMetrics />
          </div>
        </div>
      </div>
    </section>
  );
}