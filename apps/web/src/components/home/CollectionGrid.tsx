'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { COLLECTIONS } from '@/data/mockData';

export const CollectionGrid: React.FC = () => {
  const collectionIcons: Record<string, string> = {
    'tintu-castle': '🏰👑',
    'fairy-garden': '🍄🌸',
    'safari-jungle': '🦒🦁',
    'space-adventure': '🚀✨',
    'ocean-world': '🐳🌊',
  };

  return (
    <section className="section-padding bg-[#F4EBE1] border-y border-[var(--color-border)]">
      <div className="container-hot">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#D97745]">
            <Sparkles className="w-4 h-4" /> Storybook Worlds
          </div>
          <h2 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl text-[#2D4A3E]">
            Shop Our Magical Collections ✧
          </h2>
          <p className="font-body text-base text-[#4A5A53] max-w-lg">
            Magical storybook realms designed for every dream and nursery theme.
          </p>
        </div>

        {/* Collections Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {COLLECTIONS.map((col) => (
            <div
              key={col.id}
              className="card-story group flex flex-col justify-between p-6 bg-white border border-[var(--color-border)] shadow-md hover:-translate-y-3 transition-all duration-300 relative overflow-hidden"
            >
              {/* Artwork Container */}
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden mb-5 bg-[#FAF6F0] flex items-center justify-center border border-[var(--color-border)]">
                <Image
                  src={col.imageUrl}
                  alt={col.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-4xl filter drop-shadow-md">
                  {collectionIcons[col.slug] || '🧸'}
                </span>
                {col.badge && (
                  <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[#2D4A3E] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    {col.badge}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div className="flex flex-col items-center text-center mb-5">
                <h3 className="font-display font-bold text-2xl text-[#2D4A3E]">
                  {col.name}
                </h3>
                <span className="text-xs font-bold text-[#D97745] mt-1">
                  {col.subtitle}
                </span>
                <p className="text-xs text-[#7E9087] mt-2 line-clamp-2 leading-relaxed">
                  {col.description}
                </p>
              </div>

              {/* Explore Button */}
              <Link
                href={`/collections/${col.slug}`}
                className="btn-pill-primary btn-sm w-full rounded-full flex items-center justify-center gap-1.5 text-xs py-3 group-hover:bg-[#D97745] transition-colors"
              >
                Explore <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
