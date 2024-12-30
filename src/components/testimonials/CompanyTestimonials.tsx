import React from 'react';
import { CompanyTestimonial } from './CompanyTestimonial';

const testimonials = [
  {
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
    quote: "Sigma Media's strategic approach and creative solutions have been instrumental in our brand's growth. Their team's dedication and expertise are truly exceptional.",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    delay: 0
  },
  {
    logo: "https://images.unsplash.com/photo-1599305446868-59d6a9c21728?w=200&h=100&fit=crop",
    quote: "Working with Sigma Media has been transformative for our business. Their innovative strategies and attention to detail have delivered outstanding results.",
    name: "Michael Chen",
    role: "CEO",
    company: "Innovate Inc",
    delay: 200
  },
  {
    logo: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?w=200&h=100&fit=crop",
    quote: "The level of professionalism and creativity from the Sigma Media team is unmatched. They've helped us achieve and exceed our marketing goals.",
    name: "Emily Rodriguez",
    role: "Brand Manager",
    company: "Global Solutions",
    delay: 400
  }
];

export function CompanyTestimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <CompanyTestimonial key={index} {...testimonial} />
      ))}
    </div>
  );
}