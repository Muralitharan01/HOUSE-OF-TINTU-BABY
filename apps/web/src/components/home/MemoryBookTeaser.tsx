'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

export const MemoryBookTeaser: React.FC = () => {
  const timelineMilestones = [
    { title: 'First Smile', date: 'Jan 2026', icon: '❤️' },
    { title: 'First Step', date: 'Mar 2026', icon: '👣' },
    { title: 'First Birthday', date: 'Jul 2026', icon: '🎂' },
    { title: 'Christmas Gift', date: 'Dec 2026', icon: '🎁' },
    { title: 'New Adventure', date: 'Apr 2027', icon: '🚀' },
  ];

  return (
    <section className="section-padding bg-[#2D4A3E] text-white relative overflow-hidden">
      <div className="container-hot relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Intro */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">
            <span className="font-ui text-xs font-extrabold uppercase tracking-widest text-[#F4C794] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Digital Memory Box
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-white leading-tight">
              Every Moment Saved Beautifully ♡
            </h2>
            <p className="font-body text-xs sm:text-sm text-emerald-100/80 max-w-sm">
              Your little one&apos;s memories, curated in a digital storybook timeline. Share milestones with family across the world.
            </p>
            <Link href="/memory-book" className="btn-pill-accent text-sm py-3 px-6 shadow-xl flex items-center gap-2 mt-2">
              CREATE MEMORY BOX <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column Milestone Circles & Photo Frames */}
          <div className="lg:col-span-8 flex flex-col gap-8 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {timelineMilestones.map((m, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-2 group">
                  <div className="w-16 h-16 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-[#F4C794] group-hover:text-slate-900 transition-all duration-300 shadow-md">
                    {m.icon}
                  </div>
                  <span className="font-heading text-xs font-bold text-white leading-tight">{m.title}</span>
                  <span className="text-[10px] text-emerald-200 font-semibold">{m.date}</span>
                </div>
              ))}
            </div>

            {/* Photo Cards Frame Simulation */}
            <div className="flex items-center justify-between bg-white/15 p-4 rounded-2xl border border-white/20 text-xs text-emerald-100">
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-300 fill-current" /> Save 100+ baby photos & keepsake memory cards
              </span>
              <span className="font-bold text-[#F4C794] uppercase tracking-wider hidden sm:inline">
                Instant Shareable Cards 📸
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
