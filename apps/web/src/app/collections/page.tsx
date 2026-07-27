import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Magical World Collections | House of Tintu',
  description: 'Explore curated storybook collections of organic baby clothes, heirloom wooden toys, and nursery sanctuary weaves.',
};

export default function CollectionsPage() {
  const collections = [
    {
      id: 'organic-newborn',
      title: 'Organic Newborn Essentials',
      subtitle: 'GOTS Certified Organic Cotton & Pure Touches',
      description: 'Ultra-soft bodysuits, cellular knit swaddles, and hypoallergenic sleepsuits designed for sensitive newborn skin.',
      image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop',
      itemCount: 42,
      categoryFilter: 'clothing',
      badge: 'GOTS Organic',
    },
    {
      id: 'artisan-toys',
      title: 'Heirloom Wooden Toys',
      subtitle: 'FSC Beechwood & Non-Toxic Beeswax Polish',
      description: 'Hand-carved wooden trains, activity stackers, and sensory teethers that inspire imaginative play.',
      image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop',
      itemCount: 28,
      categoryFilter: 'toys',
      badge: '100% Non-Toxic',
    },
    {
      id: 'nursery-sanctuary',
      title: 'Nursery Sanctuary & Weaves',
      subtitle: 'Cloud Knit Cellular Blankets & Crib Decor',
      description: 'Temperature-regulating cellular knitted blankets and organic double-gauze crib bedding for restful sleep.',
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=800&auto=format&fit=crop',
      itemCount: 35,
      categoryFilter: 'nursery',
      badge: 'Hypoallergenic',
    },
    {
      id: 'little-explorers',
      title: 'Little Explorers Apparel',
      subtitle: 'Linen Dungarees & Breathable Playwear',
      description: 'Durable, stylish, and comfortable linen dungarees, dresses, and knitwear for toddlers on the move.',
      image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800&auto=format&fit=crop',
      itemCount: 54,
      categoryFilter: 'clothing',
      badge: 'Play Proof',
    },
    {
      id: 'gift-hampers',
      title: 'Heirloom Signature Hampers',
      subtitle: 'Personalized Gift Sets & Milestone Keepsakes',
      description: 'Beautifully packaged wooden trunk hampers with personalized memory cards and organic newborn sets.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
      itemCount: 19,
      categoryFilter: 'gifts',
      badge: 'Signature Wrapping',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0] py-10 sm:py-16">
      <div className="container-hot">
        
        {/* Page Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[var(--color-border)] text-xs font-bold text-[#D97745] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" /> Storybook World Collections
          </div>
          <h1 className="font-display font-medium text-4xl sm:text-6xl text-[#2D4A3E]">
            Magical Worlds for Little Ones ♡
          </h1>
          <p className="font-body text-sm sm:text-base text-[#4A5A53] max-w-xl leading-relaxed">
            Curated with love, sustainability, and heirloom quality to accompany every precious childhood milestone.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((col) => (
            <Link
              key={col.id}
              href={`/shop?cat=${col.categoryFilter}`}
              className="card-story group flex flex-col overflow-hidden bg-white border border-[var(--color-border)] shadow-md hover:-translate-y-2 transition-all duration-300"
            >
              {/* Collection Banner Image */}
              <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#2D4A3E] border border-[var(--color-border)] shadow-xs flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" /> {col.badge}
                </div>
                <div className="absolute bottom-3 right-3 bg-[#2D4A3E] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                  {col.itemCount} Items
                </div>
              </div>

              {/* Collection Content */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div className="flex flex-col gap-1.5">
                  <h2 className="font-heading text-xl font-bold text-[#2D4A3E] group-hover:text-[#D97745] transition-colors">
                    {col.title}
                  </h2>
                  <span className="font-ui text-xs font-bold text-[#D97745]">
                    {col.subtitle}
                  </span>
                  <p className="font-body text-xs text-[#4A5A53] leading-relaxed mt-1">
                    {col.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-bold text-[#2D4A3E]">
                  <span>Explore World</span>
                  <ArrowRight className="w-4 h-4 text-[#D97745] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
