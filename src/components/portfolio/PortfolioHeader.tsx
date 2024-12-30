import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioHeaderProps {
  onPrev: () => void;
  onNext: () => void;
}

export function PortfolioHeader({ onPrev, onNext }: PortfolioHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
        <p className="text-xl text-gray-600">
          Explore our success stories showcasing creativity, strategy, and measurable impact.
        </p>
      </div>
      <div className="flex gap-4">
        <button 
          onClick={onPrev}
          className="w-12 h-12 rounded-full bg-white shadow-lg
            flex items-center justify-center 
            hover:bg-[#38c3f9] hover:text-white
            active:scale-95 transform transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-[#38c3f9] focus:ring-offset-2"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={onNext}
          className="w-12 h-12 rounded-full bg-white shadow-lg
            flex items-center justify-center 
            hover:bg-[#38c3f9] hover:text-white
            active:scale-95 transform transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-[#38c3f9] focus:ring-offset-2"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}