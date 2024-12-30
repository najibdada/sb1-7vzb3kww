import React from 'react';

export function BackgroundPattern() {
  return (
    <>
      {/* Diagonal Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, 
            rgba(255, 255, 255, 0.1) 25%, 
            transparent 25%, 
            transparent 50%, 
            rgba(255, 255, 255, 0.1) 50%, 
            rgba(255, 255, 255, 0.1) 75%, 
            transparent 75%, 
            transparent)`,
          backgroundSize: '64px 64px'
        }}/>
      </div>
      
      {/* Soft Light Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"/>
      
      {/* Dynamic Shadow */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"/>
    </>
  );
}