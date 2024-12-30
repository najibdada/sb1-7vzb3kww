import React from 'react';
import { CompanyTestimonials } from './CompanyTestimonials';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-50 via-white to-blue-100">
        <div className="absolute inset-0 bg-radial-gradient opacity-40" />
      </div>
      
      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Hear From Our Satisfied Clients
        </h2>
        <CompanyTestimonials />
      </div>
    </section>
  );
}