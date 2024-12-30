import React from 'react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    title: "Diverse Marketing Solutions",
    description: "From social media strategies to content creation, we tailor solutions that align with your brand's unique goals.",
    gradient: "from-orange-500 to-pink-400",
    delay: 0
  },
  {
    title: "Complete Brand Control",
    description: "Maintain your brand's voice and identity with strategies designed to meet your exact preferences and market demands.",
    gradient: "from-blue-600 to-cyan-400",
    delay: 200
  },
  {
    title: "AI-Driven Insights",
    description: "Leverage AI tools to analyze trends and optimize your campaigns for maximum ROI with minimal effort.",
    gradient: "from-teal-500 to-lime-400",
    delay: 400
  }
];

export function WhyChooseSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          Why Choose Sigma Media?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}