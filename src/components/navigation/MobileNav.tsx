import React from 'react';
import { X } from 'lucide-react';
import { NavLinks } from './NavLinks';
import { Button } from '../ui/Button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <div 
      className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-end mb-8">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        <div className="flex flex-col items-center space-y-8">
          <NavLinks orientation="vertical" onLinkClick={onClose} />
          <Button size="lg" onClick={onClose}>
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}