import React from 'react';
import { PortfolioCard } from './PortfolioCard';

const portfolioItems = [
  {
    title: "Branding",
    category: "BRANDING",
    description: "Created a unique and timeless visual identity for Barbero to elevate their brand presence and resonate with their target audience.",
    imageUrl: "https://i.ibb.co/vxr4s05/Barbero-Visual-Identity.jpg",
    link: "https://www.behance.net/gallery/211613039/Barbero-Visual-Identity"
  },
  {
    title: "Content Creation",
    category: "CONTENT CREATION",
    description: "Developed engaging and informative content to help Career Advisor connect with their audience and provide value-driven career insights.",
    imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop",
    link: "https://www.instagram.com/career.advisor.ma/"
  },
  {
    title: "Social Media Management",
    category: "SOCIAL MEDIA",
    description: "Managed Marist Travel's social media platforms, crafting captivating posts to promote their travel services and boost customer engagement.",
    imageUrl: "https://i.ibb.co/wsWHYRB/Travel-Social-Media-Posts.jpg",
    link: "https://www.behance.net/gallery/211255739/Travel-Social-Media-Posts"
  },
  {
    title: "Branding",
    category: "BRANDING",
    description: "Designed a modern and inviting brand identity for Diego, reflecting the warmth and sophistication of their coffee shop.",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    link: "https://www.behance.net/gallery/211619649/Coffee-shop-Visual-Identity"
  },
  {
    title: "Event Coverage",
    category: "EVENTS",
    description: "Provided comprehensive media coverage for The Higher School of Technology events, capturing moments that showcased the organization's professionalism and success.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
    link: "https://www.behance.net/gallery/211997779/ESTL-Events-Media-Coverage"
  }
];

interface PortfolioCarouselProps {
  activeIndex: number;
  isPaused: boolean;
  setIsPaused: (paused: boolean) => void;
}

export function PortfolioCarousel({ activeIndex, isPaused, setIsPaused }: PortfolioCarouselProps) {
  return (
    <div 
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ 
          transform: `translateX(-${activeIndex * (window.innerWidth < 768 ? 100 : 33.333)}%)`,
        }}
      >
        {[...portfolioItems, ...portfolioItems.slice(0, 2)].map((item, index) => (
          <div 
            key={index} 
            className="w-full md:w-1/3 flex-shrink-0 px-4"
          >
            <PortfolioCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}