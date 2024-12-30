import React from 'react';

interface FooterHeadingProps {
  children: React.ReactNode;
}

export function FooterHeading({ children }: FooterHeadingProps) {
  return (
    <h3 className="text-xl font-semibold text-white mb-6">
      {children}
    </h3>
  );
}