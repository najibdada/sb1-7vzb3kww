import React from 'react';

interface PartnerLogoProps {
  url: string;
  name: string;
}

export function PartnerLogo({ url, name }: PartnerLogoProps) {
  return (
    <div className="inline-flex flex-shrink-0 mx-8 h-20 items-center">
      <div className="w-auto max-w-[200px] min-w-[100px] h-full flex items-center justify-center">
        <img 
          src={url} 
          alt={`${name} logo`} 
          className="max-h-full w-auto object-contain filter grayscale hover:grayscale-0 
            transition-all duration-300 transform hover:scale-110"
          loading="lazy"
        />
      </div>
    </div>
  );
}