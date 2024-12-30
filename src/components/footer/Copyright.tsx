import React from 'react';

export function Copyright() {
  return (
    <div className="text-center text-white/80 text-sm pt-8 border-t border-white/10">
      © {new Date().getFullYear()} Sigma Media. All Rights Reserved.
    </div>
  );
}