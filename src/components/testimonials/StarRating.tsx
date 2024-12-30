import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating?: number;
}

export function StarRating({ rating = 5 }: StarRatingProps) {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 fill-current text-[#38c3f9]"
        />
      ))}
    </div>
  );
}