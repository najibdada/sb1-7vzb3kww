import React from 'react';
import { ProcessStep } from './ProcessStep';
import { TimelineNumber } from './TimelineNumber';
import { Search, ClipboardList, Rocket, BarChart3 } from 'lucide-react';

const steps = [
  {
    title: "Research",
    description: "We dive deep into understanding your brand, audience, and industry trends to gather meaningful insights.",
    icon: Search,
    position: 'left'
  },
  {
    title: "Planification",
    description: "Crafting a comprehensive strategy tailored to your specific goals and objectives.",
    icon: ClipboardList,
    position: 'right'
  },
  {
    title: "Execution",
    description: "Bringing the plan to life with innovative campaigns, creative designs, and flawless implementation.",
    icon: Rocket,
    position: 'left'
  },
  {
    title: "Optimization",
    description: "Continuously analyzing results and fine-tuning strategies to maximize your success.",
    icon: BarChart3,
    position: 'right'
  }
] as const;

const numberPositions = ['top-[12.5%]', 'top-[37.5%]', 'top-[62.5%]', 'top-[87.5%]'];

export function ProcessTimeline() {
  return (
    <div className="relative max-w-7xl mx-auto min-h-[800px]">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#38c3f9] 
        hover:bg-black transition-colors duration-300
        shadow-[0_0_10px_rgba(56,195,249,0.3)]" />
      
      {/* Timeline numbers */}
      {numberPositions.map((position, index) => (
        <TimelineNumber 
          key={index}
          number={index + 1}
          top={position}
        />
      ))}
      
      {/* Steps */}
      <div className="space-y-32 py-16">
        {steps.map((step, index) => (
          <ProcessStep 
            key={index} 
            {...step}
          />
        ))}
      </div>
    </div>
  );
}