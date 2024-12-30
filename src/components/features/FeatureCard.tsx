import React from 'react';
import { useInView } from '../marketing/hooks/useInView';

interface FeatureCardProps {
  title: string;
  description: string;
  gradient: string;
  delay: number;
}

export function FeatureCard({ title, description, gradient, delay }: FeatureCardProps) {
  const { ref, isVisible } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`relative group transition-all duration-700 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div 
        className={`h-full rounded-xl bg-gradient-to-br ${gradient} p-8 shadow-lg 
          transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl
          relative overflow-hidden`}
      >
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 
            transition-opacity duration-300"
          style={{
            background: `linear-gradient(45deg, 
              transparent 0%, 
              rgba(255,255,255,0.2) 50%, 
              transparent 100%)`
          }}
        />

        <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
          {title}
        </h3>
        <p className="text-white/90 text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}