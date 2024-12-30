import React from 'react';
import { useInView } from '../marketing/hooks/useInView';

export function SectionTitle() {
  const { ref, isVisible } = useInView(0.1);
  
  return (
    <div ref={ref} className="text-center mb-24">
      <div className={`inline-block transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="inline-block bg-[#38c3f9] hover:bg-black transition-colors duration-300
          rounded-full px-12 py-3 shadow-lg mx-auto whitespace-nowrap">
          <h2 className="text-3xl font-bold text-white">
            Our Work Process
          </h2>
        </div>
        <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
          A systematic approach to transform your digital presence
        </p>
      </div>
    </div>
  );
}