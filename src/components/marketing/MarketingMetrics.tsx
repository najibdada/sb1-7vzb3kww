import React from 'react';
import { MarketingMetric } from './MarketingMetric';

export function MarketingMetrics() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl max-w-sm mx-auto">
      <MarketingMetric 
        value="75%"
        label="Increase in Brand Awareness"
      />
      <MarketingMetric 
        value="5x"
        label="Higher Engagement Rates"
      />
      <MarketingMetric 
        value="60%"
        label="Boost in Sales Conversions"
      />
    </div>
  );
}