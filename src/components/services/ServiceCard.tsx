import React from 'react';
import { useInView } from '../marketing/hooks/useInView';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
  featured?: boolean;
}

export function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  delay,
  featured = false 
}: ServiceCardProps) {
  const { ref, isVisible } = useInView(0.1);
  
  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`rounded-xl p-8 shadow-lg hover:shadow-xl 
        transition-all duration-300 group-hover:-translate-y-1 h-full
        group-hover:bg-gradient-to-br group-hover:from-[#38c3f9] group-hover:to-[#1a6b9f]
        ${featured 
          ? 'bg-gradient-to-br from-[#38c3f9] to-[#1a6b9f] text-white' 
          : 'bg-white'
        }`}
      >
        <Icon className={`w-10 h-10 mb-6 transition-colors duration-300 ${
          featured 
            ? 'text-white' 
            : 'text-[#38c3f9] group-hover:text-white'
        }`} />
        <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300
          ${featured ? 'text-white' : 'text-gray-900 group-hover:text-white'}`}
        >
          {title}
        </h3>
        <p className={`transition-colors duration-300 ${
          featured ? 'text-white/90' : 'text-gray-600 group-hover:text-white/90'
        }`}>
          {description}
        </p>
      </div>
    </div>
  );
}