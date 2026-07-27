'use client';

import React from 'react';
import { Gift, Truck, Heart } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="w-full bg-[#2D4A3E] text-[#FAF6F0] py-2.5 px-4 text-xs font-medium border-b border-white/10">
      <div className="container-hot flex items-center justify-between">
        <div className="hidden md:flex items-center gap-8 text-opacity-95 text-xs">
          <span className="inline-flex items-center gap-2">
            <Gift className="w-4 h-4 text-[#F4C794]" />
            Free Surprise Heirloom Gift on orders above ₹1999
          </span>
          <span className="inline-flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#F4C794]" />
            Express COD Available Across India
          </span>
          <span className="inline-flex items-center gap-2">
            <Heart className="w-4 h-4 text-rose-300 fill-current" />
            Loved by 10,000+ Happy Parents
          </span>
        </div>

        <div className="flex md:hidden items-center justify-center w-full text-center">
          <span className="inline-flex items-center gap-2">
            <Gift className="w-3.5 h-3.5 text-[#F4C794]" />
            Free Surprise Gift above ₹1999 • COD Available
          </span>
        </div>
      </div>
    </div>
  );
};
