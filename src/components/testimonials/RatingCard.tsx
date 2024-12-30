import React from 'react';
import { Star } from 'lucide-react';
import { useInView } from '../marketing/hooks/useInView';

interface RatingCardProps {
  quote: string;
  delay: number;
}

export function RatingCard({ quote, delay }: RatingCardProps) {
  const { ref, isVisible } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
        transition-all duration-300 hover:-translate-y-1">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-current text-[#38c3f9]"
            />
          ))}
        </div>
        <p className="text-gray-600 leading-relaxed">{quote}</p>
      </div>
    </div>
  );
}