import React from 'react';
import { useInView } from '../marketing/hooks/useInView';

export function LogoDisplay() {
  const { ref, isVisible } = useInView(0.1);
  
  return (
    <div 
      ref={ref}
      className={`h-full transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
    >
      <div className="h-full w-full p-8 rounded-2xl bg-white
        hover:scale-105 transition-transform duration-300
        bg-gradient-to-br from-white to-blue-50
        border-[4px] border-[#38c3f9]
        flex items-center justify-center
        shadow-[0_0_25px_rgba(56,195,249,0.3)]">
        <img 
          src="https://i.ibb.co/GQ2r64Y/SIGMA-LOGO-FINAL1.png"
          alt="Sigma Media Logo"
          className="w-48 h-auto"
        />
      </div>
    </div>
  );
}