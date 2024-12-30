import React from 'react';
import { FooterColumns } from './FooterColumns';
import { Copyright } from './Copyright';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#00B5E2] to-[#003366]">
      <div className="container mx-auto px-4 py-12">
        <FooterColumns />
        <Copyright />
      </div>
    </footer>
  );
}