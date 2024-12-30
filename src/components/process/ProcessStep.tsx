import React from 'react';
import { useInView } from '../marketing/hooks/useInView';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  position: 'left' | 'right';
}

export function ProcessStep({ title, description, icon: Icon, position }: ProcessStepProps) {
  const { ref, isVisible } = useInView(0.2);
  
  const containerClasses = position === 'left'
    ? 'md:pr-16 md:ml-auto md:mr-[calc(50%+2rem)]'
    : 'md:pl-16 md:mr-auto md:ml-[calc(50%+2rem)]';
    
  const animationClasses = position === 'left'
    ? (isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0')
    : (isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0');

  return (
    <div 
      ref={ref}
      className={`w-full md:w-[calc(50%-2rem)] group 
        transition-all duration-1000 ${animationClasses} ${containerClasses}`}
    >
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
        transition-all duration-300 group-hover:-translate-y-1">
        <div className="flex items-start gap-6">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-[#38c3f9]/10 rounded-full animate-pulse" />
            <div className="relative z-10 w-16 h-16 rounded-full 
              bg-[#38c3f9] hover:bg-black transition-colors duration-300
              flex items-center justify-center shadow-lg">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}