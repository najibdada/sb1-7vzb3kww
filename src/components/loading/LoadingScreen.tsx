import React from 'react';
import { useInView } from '../marketing/hooks/useInView';

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const { ref, isVisible } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-blue-50 via-white to-blue-100
        flex items-center justify-center transition-opacity duration-700
        ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Blur effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,195,249,0.15)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative text-center">
        <div className="mb-8 flex items-center justify-center">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#38c3f9]/20 blur-xl rounded-full animate-pulse" />
            
            {/* Logo */}
            <img 
              src="https://i.ibb.co/GQ2r64Y/SIGMA-LOGO-FINAL1.png"
              alt="Sigma Media Logo"
              className="relative w-32 h-32 object-contain transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        {/* Loading dots */}
        <div className="flex gap-2 justify-center">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-[#38c3f9] animate-bounce
                shadow-[0_0_10px_rgba(56,195,249,0.5)]"
              style={{ 
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}