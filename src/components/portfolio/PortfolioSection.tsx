import React from 'react';
import { PortfolioHeader } from './PortfolioHeader';
import { PortfolioCarousel } from './PortfolioCarousel';
import { usePortfolioCarousel } from './hooks/usePortfolioCarousel';

const ITEM_COUNT = 5; // Updated to match new number of items

export function PortfolioSection() {
  const carousel = usePortfolioCarousel({
    itemsCount: ITEM_COUNT,
    interval: 2000
  });

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-50 via-white to-blue-100">
        <div className="absolute inset-0 bg-radial-gradient opacity-40" />
      </div>
      
      <div className="relative container mx-auto px-4">
        <PortfolioHeader onNext={carousel.next} onPrev={carousel.prev} />
        <PortfolioCarousel {...carousel} />
      </div>
    </section>
  );
}