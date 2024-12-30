import React from 'react';
import { useInView } from '../marketing/hooks/useInView';

interface TimelineNumberProps {
  number: number;
  top: string;
}

export function TimelineNumber({ number, top }: TimelineNumberProps) {
  const { ref, isVisible } = useInView(0.2);
  
  return (
    <div 
      ref={ref}
      className={`absolute left-1/2 transform -translate-x-1/2 ${top} 
        transition-all duration-500 hidden md:block ${
        isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
      }`}
      style={{ zIndex: 2 }}
    >
      <div className="w-10 h-10 rounded-full bg-[#38c3f9] hover:bg-black
        transition-colors duration-300
        flex items-center justify-center text-white font-bold text-lg
        shadow-[0_0_15px_rgba(56,195,249,0.4)] hover:scale-110">
        {number}
      </div>
    </div>
  );
}