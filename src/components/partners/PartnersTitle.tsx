import React from 'react';
import { useInView } from '../marketing/hooks/useInView';

export function PartnersTitle() {
  const { ref, isVisible } = useInView(0.1);
  
  return (
    <div 
      ref={ref}
      className={`text-center mb-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <h3 className="text-2xl font-semibold text-gray-900">
        Our Partners
      </h3>
    </div>
  );
}