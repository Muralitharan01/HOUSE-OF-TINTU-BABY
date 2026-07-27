'use client';

import React from 'react';

export const ThemeEngine: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-[#FAF6F0] text-[#1E2824]">
      {/* Background Micro-Animations Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Soft Ambient Radial Beam */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FFE5C0]/30 via-[#F4C794]/15 to-transparent blur-3xl opacity-70" />
        
        {/* Drifting Butterfly Overlay */}
        <div className="absolute top-40 right-20 text-xl animate-butterfly-1 opacity-60">
          🦋
        </div>
        
        {/* Soft Cloud Drift */}
        <div className="absolute top-16 left-1/4 text-3xl animate-cloud-slow opacity-40">
          ☁️
        </div>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};
