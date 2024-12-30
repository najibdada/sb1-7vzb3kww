import React from 'react';
import { ContactColumn } from './columns/ContactColumn';
import { QuickLinksColumn } from './columns/QuickLinksColumn';
import { SocialColumn } from './columns/SocialColumn';

export function FooterColumns() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
        <ContactColumn />
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
        <QuickLinksColumn />
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
        <SocialColumn />
      </div>
    </div>
  );
}