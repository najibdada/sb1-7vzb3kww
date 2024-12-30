import React from 'react';
import { RatingCard } from './RatingCard';

const ratings = [
  {
    quote: "Exceptional service! They transformed our social media presence completely.",
    delay: 0
  },
  {
    quote: "The team's creativity and strategic approach exceeded our expectations.",
    delay: 100
  },
  {
    quote: "Outstanding results and professional team. Highly recommended!",
    delay: 200
  },
  {
    quote: "Best decision we made for our brand's digital marketing needs.",
    delay: 300
  }
];

export function RatingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
      {ratings.map((rating, index) => (
        <RatingCard key={index} {...rating} />
      ))}
    </div>
  );
}