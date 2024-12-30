import React from 'react';
import { useInView } from '../marketing/hooks/useInView';

export function AboutContent() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <div 
      ref={ref}
      className={`h-full transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}
    >
      <div className="h-full rounded-2xl bg-gradient-to-br from-[#38c3f9] to-[#1a6b9f] p-12 shadow-xl
        flex items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            About Us
          </h2>
          <p className="text-white/90 text-lg leading-relaxed">
            Sigma in math represents the sum of all parts, SIGMA MEDIA is the total of all digital marketing elements, our dedicated team of marketing experts is committed to building your brand presence online, engaging your audience, and driving meaningful growth across all platforms.
          </p>
        </div>
      </div>
    </div>
  );
}