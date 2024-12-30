import React from 'react';
import { useInView } from './hooks/useInView';

interface MarketingMetricProps {
  value: string;
  label: string;
}

export function MarketingMetric({ value, label }: MarketingMetricProps) {
  const { ref, isVisible } = useInView(0.5);

  return (
    <div ref={ref} className="text-center mb-8 last:mb-0">
      <div className={`text-3xl font-bold text-[#1a6b9f] transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        {value}
      </div>
      <div className="text-gray-600 mt-1">{label}</div>
    </div>
  );
}