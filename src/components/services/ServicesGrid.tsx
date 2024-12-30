import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Share2, Palette, FileEdit, Target, Camera, Video } from 'lucide-react';

const services = [
  {
    title: "Social Media Management",
    description: "Handling all aspects of your social media presence, from content creation to engagement, ensuring consistent growth and connection with your audience.",
    icon: Share2,
    featured: true
  },
  {
    title: "Branding",
    description: "We craft a unique brand identity that resonates with your audience, helping you stand out and build long-lasting relationships.",
    icon: Palette
  },
  {
    title: "Content Marketing",
    description: "Creating and distributing valuable content designed to attract, engage, and retain your target audience while driving measurable results.",
    icon: FileEdit
  },
  {
    title: "Paid Campaigns",
    description: "We design and manage targeted paid campaigns that maximize your reach, drive traffic, and deliver a strong return on investment.",
    icon: Target
  },
  {
    title: "Events Coverage",
    description: "Capturing the essence of your events through live updates, visuals, and post-event highlights to amplify their impact and reach.",
    icon: Camera
  },
  {
    title: "Video Production",
    description: "We create high-quality, visually engaging videos that tell your brand's story, captivate your audience, and drive meaningful engagement.",
    icon: Video
  }
];

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          {...service}
          delay={index * 100}
        />
      ))}
    </div>
  );
}