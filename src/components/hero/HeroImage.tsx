import React from 'react';

export function HeroImage() {
  return (
    <div className="relative w-full max-w-[480px] xl:max-w-[520px] -ml-16 md:-ml-20 lg:-ml-24">
      {/* Decorative circle */}
      <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2
        w-[120%] h-[120%] rounded-full
        bg-gradient-to-br from-[#38c3f9]/20 to-cyan-400/20
        blur-3xl -z-10" />
      
      {/* Image */}
      <img 
        src="https://html.fleexstudio.com/seomax/assets/img/hero/hero1-main-img.png"
        alt="Digital Marketing Solutions"
        className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500
          filter drop-shadow-xl relative z-10"
        style={{
          maxHeight: 'calc(100vh - 200px)',
          objectPosition: 'center right'
        }}
      />
    </div>
  );
}