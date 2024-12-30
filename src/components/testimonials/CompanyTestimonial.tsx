import React from 'react';
import { useInView } from '../marketing/hooks/useInView';
import { StarRating } from './StarRating';

interface CompanyTestimonialProps {
  logo: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  delay: number;
}

export function CompanyTestimonial({ 
  logo, 
  quote, 
  name, 
  role, 
  company,
  delay 
}: CompanyTestimonialProps) {
  const { ref, isVisible } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl 
        transition-all duration-300 hover:-translate-y-1 h-full">
        <img
          src={logo}
          alt={`${company} logo`}
          className="h-12 mb-6 object-contain"
          loading="lazy"
        />
        <StarRating />
        <blockquote className="text-gray-600 leading-relaxed mb-6">
          "{quote}"
        </blockquote>
        <div>
          <div className="font-bold text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
}