import React from 'react';

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient base - Adjusted for better mobile display */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-90" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 animate-gradient-shift opacity-75">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent 
          via-blue-100/30 to-transparent" />
      </div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,195,249,0.15)_0%,_transparent_70%)]" />
      </div>
      
      {/* Blur effect - Reduced for better mobile performance */}
      <div className="absolute inset-0 backdrop-blur-2xl sm:backdrop-blur-3xl" />
    </div>
  );
}