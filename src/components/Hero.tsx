import React from 'react';
import { HeroBackground } from './hero/HeroBackground';
import { useInView } from './marketing/hooks/useInView';
import { ConsultationButton } from './ui/ConsultationButton';

export function Hero() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <div className="relative min-h-[calc(100vh-80px)] sm:min-h-screen flex items-center py-20 sm:py-0">
      <HeroBackground />
      
      {/* Animated circles - Adjusted for better mobile display */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-48 sm:w-96 h-48 sm:h-96 
          bg-[#38c3f9]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-48 sm:w-96 h-48 sm:h-96 
          bg-cyan-400/10 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '200ms' }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 
            mb-4 sm:mb-6 leading-tight sm:leading-tight md:leading-tight
            px-4 sm:px-6">
            Your full-service digital marketing agency
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed
            px-4 sm:px-6 max-w-2xl mx-auto">
            Focused on driving growth and engagement, our team combines creativity, strategy, 
            and technology to craft solutions that connect with your audience.
          </p>
          <div className="relative inline-block px-4 sm:px-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#38c3f9] to-cyan-400 
              rounded-full blur-md opacity-75 animate-pulse" />
            <ConsultationButton className="relative w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}