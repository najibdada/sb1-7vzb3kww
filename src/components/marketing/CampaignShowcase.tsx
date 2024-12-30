import React from 'react';
import { useInView } from './hooks/useInView';

export function CampaignShowcase() {
  const { ref, isVisible } = useInView(0.3);

  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden rounded-2xl transition-all duration-1000 shadow-2xl mx-auto ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"
        alt="Marketing campaign showcase"
        className="w-[600px] h-[400px] object-cover rounded-2xl"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-8">
        <p className="text-white text-lg">
          Transforming brands through strategic digital marketing campaigns
        </p>
      </div>
    </div>
  );
}