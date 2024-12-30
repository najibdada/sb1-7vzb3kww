import React from 'react';
import { Button } from './Button';

interface ConsultationButtonProps {
  className?: string;
}

export function ConsultationButton({ className }: ConsultationButtonProps) {
  return (
    <Button
      size="lg"
      className={className}
      onClick={() => window.open('https://calendly.com/najibdidi55/30min', '_blank')}
    >
      Get a Free Consultation
    </Button>
  );
}