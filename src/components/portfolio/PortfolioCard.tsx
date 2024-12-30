import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../marketing/hooks/useInView';

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export function PortfolioCard({ title, category, description, imageUrl, link }: PortfolioCardProps) {
  const { ref, isVisible } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
      }`}
    >
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[300px] md:h-[400px] object-contain bg-white"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-4 md:p-6
          transform transition-transform duration-500">
          <div className="text-sm font-bold text-gray-900 mb-2">{category}</div>
          <p className="text-gray-600 mb-4 text-sm md:text-base">{description}</p>
          {link ? (
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#38c3f9] font-medium
                hover:text-[#1a6b9f] transition-colors group/btn"
            >
              View More
              <ArrowRight className="w-4 h-4 transform transition-transform
                group-hover/btn:translate-x-1" />
            </a>
          ) : (
            <button className="flex items-center gap-2 text-[#38c3f9] font-medium
              hover:text-[#1a6b9f] transition-colors group/btn">
              View More
              <ArrowRight className="w-4 h-4 transform transition-transform
                group-hover/btn:translate-x-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}