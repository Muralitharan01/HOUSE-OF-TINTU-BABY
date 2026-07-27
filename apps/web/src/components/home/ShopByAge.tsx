'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles } from 'lucide-react';

export const ShopByAge: React.FC = () => {
  const ageCards = [
    {
      id: '0-6m',
      title: '0 - 6 Months',
      icon: '👶🌙',
      description: 'Newborn organic swaddles',
      slug: '0-6-months',
    },
    {
      id: '6-12m',
      title: '6 - 12 Months',
      icon: '🐰🎈',
      description: 'Crawling rompers & teethers',
      slug: '6-12-months',
    },
    {
      id: '1-3y',
      title: '1 - 3 Years',
      icon: '🐘🛴',
      description: 'Handmade wooden play sets',
      slug: '1-3-years',
    },
    {
      id: '4-7y',
      title: '4 - 7 Years',
      icon: '🦊🛵',
      description: 'Party dresses & dungarees',
      slug: '4-7-years',
    },
    {
      id: '8y+',
      title: '8+ Years',
      icon: '🧸🧺',
      description: 'Outerwear & nursery styling',
      slug: '8-plus-years',
    },
  ];

  return (
    <section className="section-padding bg-[#FAF6F0]">
      <div className="container-hot">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-14">
          <span className="font-ui text-xs font-extrabold uppercase tracking-widest text-[#D97745] flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Growth Milestones
          </span>
          <h2 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl text-[#2D4A3E]">
            Discover by Age ✧
          </h2>
          <p className="font-body text-base text-[#4A5A53] max-w-lg">
            Sized perfectly for every milestone from newborn nestling to independent adventurer.
          </p>
        </div>

        {/* Mobile Touch Carousel & Desktop Grid */}
        <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 px-2">
          {ageCards.map((card) => (
            <Link
              key={card.id}
              href={`/shop?age=${card.slug}`}
              className="card-story flex-shrink-0 w-[250px] sm:w-auto snap-center group p-8 flex flex-col items-center text-center gap-5 relative overflow-hidden bg-white border border-[var(--color-border)] shadow-md hover:-translate-y-3 transition-all duration-300"
            >
              {/* Illustrated Nest */}
              <div className="w-32 h-32 rounded-3xl bg-[#F4EBE1] border-4 border-white shadow-inner flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                {card.icon}
              </div>

              {/* Title & Detail */}
              <div className="flex flex-col items-center">
                <h3 className="font-heading font-bold text-xl text-[#2D4A3E]">
                  {card.title}
                </h3>
                <p className="text-xs text-[#7E9087] mt-1.5 line-clamp-2">
                  {card.description}
                </p>
              </div>

              <div className="w-9 h-9 rounded-full bg-[#2D4A3E] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
