'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Volume2, ShieldCheck } from 'lucide-react';

export const HeroCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      tag: 'Storybook Collection 2026',
      title: 'Where Little Dreams Begin',
      scriptTitle: 'Beautifully ♡',
      description: 'Thoughtfully curated organic apparel & heirloom toys for little ones and the precious moments that last forever.',
      ctaText: 'EXPLORE TINTU WORLD',
      ctaHref: '/shop',
      emoji: '🧸',
      badge: 'GOTS Organic Certified',
    },
    {
      tag: 'Handcrafted Heritage',
      title: 'Heirloom Wooden Toys &',
      scriptTitle: 'Teethers 🚂',
      description: 'Non-toxic FSC beechwood carved by master artisans. Finished with child-safe natural beeswax polish for pure discovery.',
      ctaText: 'SHOP WOODEN TOYS',
      ctaHref: '/shop?cat=toys',
      emoji: '🚂',
      badge: '100% Non-Toxic & Safe',
    },
    {
      tag: 'Cozy Sanctuary',
      title: 'Cloud Knit Nursery Weaves &',
      scriptTitle: 'Swaddles ☁️',
      description: 'Ultra-breathable cellular knitted blankets that regulate baby temperature naturally across all seasons.',
      ctaText: 'EXPLORE NURSERY',
      ctaHref: '/shop?cat=nursery',
      emoji: '☁️',
      badge: 'Hypoallergenic Weaves',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[activeSlide];

  return (
    <section className="relative pt-6 pb-12 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#F4EBE1] to-[#FAF6F0]">
      
      {/* ─────────────────────────────────────────────────────────────
         Fluttering Butterflies (Active & Flying on Mobile & Desktop)
         ───────────────────────────────────────────────────────────── */}
      
      {/* Butterfly 1: Top Right Flutter */}
      <div className="absolute top-4 right-4 sm:top-10 sm:right-16 text-2xl sm:text-4xl animate-butterfly-1 opacity-90 select-none z-0 pointer-events-none" title="Fluttering Butterfly">
        🦋
      </div>

      {/* Butterfly 2: Top Left Flutter */}
      <div className="absolute top-12 left-3 sm:top-24 sm:left-12 text-xl sm:text-3xl animate-butterfly-2 opacity-85 select-none z-0 pointer-events-none">
        🦋
      </div>

      {/* Butterfly 3: Bottom Left Flutter */}
      <div className="absolute bottom-16 left-6 text-lg sm:text-2xl animate-butterfly-1 opacity-80 select-none z-0 pointer-events-none" style={{ animationDelay: '3s' }}>
        🦋
      </div>

      {/* Floating Clouds & Balloons */}
      <div className="absolute top-3 left-1/3 text-2xl sm:text-3xl animate-cloud-slow opacity-40 select-none pointer-events-none">
        ☁️
      </div>
      <div className="absolute top-16 right-2 text-2xl sm:text-3xl animate-balloon opacity-60 select-none pointer-events-none">
        🎈
      </div>

      <div className="container-hot relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          {/* Left Text & Actions Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-3 sm:gap-5">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[var(--color-border)] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D97745]" />
                <span className="font-ui text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#2D4A3E]">
                  {slide.tag}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-emerald-800 bg-emerald-100/90 px-2.5 py-1 rounded-full border border-emerald-200">
                <ShieldCheck className="w-3 h-3 text-emerald-600" /> {slide.badge}
              </span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-1 my-1">
              <h1 className="font-display font-medium text-3xl sm:text-5xl lg:text-7xl text-[#2D4A3E] leading-snug tracking-tight">
                {slide.title}{' '}
                <span className="font-script text-4xl sm:text-7xl lg:text-8xl text-[#D97745] block sm:inline font-normal">
                  {slide.scriptTitle}
                </span>
              </h1>
            </div>

            {/* Subtext Description */}
            <p className="font-body text-xs sm:text-base text-[#4A5A53] max-w-lg leading-relaxed px-1 sm:px-0">
              {slide.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto">
              
              <Link
                href={slide.ctaHref}
                className="btn-pill-primary text-xs sm:text-sm py-3.5 px-7 shadow-md w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <button
                onClick={() => alert('🎵 Playing Tintu’s Lullaby & Storybook Audio')}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#2D4A3E] font-ui font-bold text-xs border border-[var(--color-border)] shadow-xs transition-all w-full sm:w-auto"
              >
                <div className="w-6 h-6 rounded-full bg-[#D97745] text-white flex items-center justify-center shadow-xs flex-shrink-0">
                  <Volume2 className="w-3 h-3" />
                </div>
                <span>Listen to Tintu Story</span>
              </button>

            </div>

            {/* Slide Navigation Dots */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === idx ? 'w-7 bg-[#2D4A3E]' : 'w-2 bg-black/20 hover:bg-black/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Right Visual Box Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-4 lg:mt-0">
            
            <div className="relative w-full max-w-[280px] sm:max-w-[380px] aspect-square flex items-center justify-center">
              
              {/* Mascot Card Box */}
              <div className="w-56 sm:w-[340px] h-56 sm:h-[340px] rounded-[36px] sm:rounded-[50px] bg-gradient-to-br from-white via-[#FFF9F2] to-[#FDF1E2] p-5 border-4 sm:border-8 border-white shadow-xl flex items-center justify-center relative overflow-hidden animate-balloon">
                <span className="text-[90px] sm:text-[150px] select-none filter drop-shadow-xl hover:scale-105 transition-transform">
                  {slide.emoji}
                </span>
                
                {/* Floating Butterfly Inside Mascot Frame */}
                <div className="absolute top-2 right-3 text-xl animate-butterfly-1 opacity-80">🦋</div>
              </div>

              {/* Tintu Mascot Callout Bubble */}
              <div className="absolute -bottom-3 right-0 sm:-right-2 bg-white/95 backdrop-blur-md border border-[var(--color-border)] p-3 rounded-2xl shadow-lg max-w-[190px] sm:max-w-[220px] flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#2D4A3E] text-white flex items-center justify-center text-lg font-bold flex-shrink-0 shadow-xs">
                  🧸
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-heading font-bold text-xs text-[#2D4A3E]">
                    Hi! I&apos;m Tintu 🦋
                  </span>
                  <span className="font-body text-[10px] text-[#4A5A53] leading-snug">
                    Organic apparel & heirloom toys ♡
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
