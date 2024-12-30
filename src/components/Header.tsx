import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Logo } from './navigation/Logo';
import { NavLinks } from './navigation/NavLinks';
import { MobileNav } from './navigation/MobileNav';
import { ConsultationButton } from './ui/ConsultationButton';

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      <nav className="mx-4 my-4 bg-white/80 backdrop-blur-lg rounded-full border border-[#38c3f9]/20">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <Logo />
          <NavLinks />
          <div className="hidden md:block">
            <ConsultationButton />
          </div>
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMobileNavOpen(true)}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </nav>

      <MobileNav 
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </header>
  );
}