'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '@/data/mockData';

export const CustomerReviews: React.FC = () => {
  const reviewsWithPhotos = [
    {
      ...REVIEWS[0],
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      role: 'Mother of 2-year-old Kabir',
    },
    {
      ...REVIEWS[1],
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      role: 'Mother of 8-month-old Mira',
    },
    {
      ...REVIEWS[2],
      avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
      role: 'Gift Buyer & Aunt',
    },
  ];

  return (
    <section className="section-padding bg-[#F4EBE1] border-y border-[var(--color-border)]">
      <div className="container-hot">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-14">
          <span className="font-ui text-xs font-bold uppercase tracking-widest text-[#D97745]">
            Trusted By 10,000+ Happy Families
          </span>
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-[#2D4A3E]">
            Loved By Parents 💖
          </h2>
          <p className="font-body text-sm text-[#4A5A53] max-w-md">
            Real stories from parents who love our heirloom organic clothes & wooden toys.
          </p>
        </div>

        {/* Premium Horizontal Slider */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 px-2">
          {reviewsWithPhotos.map((rev) => (
            <div
              key={rev.id}
              className="card-story snap-center flex-shrink-0 w-[300px] sm:w-[380px] p-8 flex flex-col justify-between bg-white border border-[var(--color-border)] shadow-md relative"
            >
              <Quote className="w-10 h-10 text-[#D97745] opacity-25 absolute top-6 right-6" />

              <div>
                <div className="flex text-amber-400 gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-body text-sm text-[#4A5A53] italic leading-relaxed mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-[var(--color-border)] text-xs">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-xs">
                  <Image src={rev.avatarUrl} alt={rev.authorName} fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-[#2D4A3E] flex items-center gap-1.5">
                    {rev.authorName} <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                  </span>
                  <span className="text-[10px] text-[#8A9A92]">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
