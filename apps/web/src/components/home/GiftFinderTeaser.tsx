'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Gift, ArrowRight } from 'lucide-react';

export const GiftFinderTeaser: React.FC = () => {
  const [recipient, setRecipient] = useState<'boy' | 'girl' | 'neutral'>('neutral');
  const [ageGroup, setAgeGroup] = useState<string>('0-1');
  const [budget, setBudget] = useState<string>('500-1500');

  return (
    <section className="section-padding bg-[#FAF6F0] border-y border-[var(--color-border)] relative overflow-hidden">
      <div className="container-hot">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white p-8 sm:p-12 rounded-[36px] border border-[var(--color-border)] shadow-xl relative">
          
          {/* Left Column Intro */}
          <div className="lg:col-span-4 flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EBE1] text-[#D97745] text-xs font-bold uppercase tracking-wider">
              <Gift className="w-4 h-4" /> CAN&apos;T DECIDE? ~~~
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#2D4A3E] leading-tight">
              Let Tintu Help You Find The Perfect Gift!
            </h2>
            <p className="font-body text-sm text-[#4A5A53] leading-relaxed">
              Answer 3 simple questions and our boutique gift finder will recommend something they will adore.
            </p>
            <Link
              href={`/gift-finder?gender=${recipient}&age=${ageGroup}&budget=${budget}`}
              className="btn-pill-accent py-4 px-8 text-sm shadow-md flex items-center gap-2 mt-2"
            >
              FIND THE PERFECT GIFT <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column 3 Question Widget */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 bg-[#FAF6F0] p-8 rounded-3xl border border-[var(--color-border)]">
            
            {/* Q1: Who is it for? */}
            <div className="flex flex-col gap-4">
              <span className="font-heading font-bold text-xs text-[#2D4A3E] uppercase tracking-wider">
                1. Who is it for?
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'boy', label: 'Boy', icon: '👦' },
                  { id: 'girl', label: 'Girl', icon: '👧' },
                  { id: 'neutral', label: 'Neutral', icon: '🧸' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRecipient(item.id as 'boy' | 'girl' | 'neutral')}
                    className={`flex flex-col items-center p-3.5 rounded-2xl border text-xs font-bold transition-all ${
                      recipient === item.id
                        ? 'bg-[#2D4A3E] text-white border-[#2D4A3E] shadow-md scale-105'
                        : 'bg-white text-[#1E2824] border-[var(--color-border)] hover:border-[#D97745]'
                    }`}
                  >
                    <span className="text-2xl mb-1">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q2: What's their age? */}
            <div className="flex flex-col gap-4">
              <span className="font-heading font-bold text-xs text-[#2D4A3E] uppercase tracking-wider">
                2. What&apos;s their age?
              </span>
              <div className="grid grid-cols-2 gap-2.5 text-xs font-semibold">
                {[
                  { id: '0-1', label: '0-1 Yrs' },
                  { id: '1-3', label: '1-3 Yrs' },
                  { id: '3-6', label: '3-6 Yrs' },
                  { id: '6+', label: '6+ Yrs' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setAgeGroup(item.id)}
                    className={`py-3 px-3 rounded-2xl border text-center transition-all ${
                      ageGroup === item.id
                        ? 'bg-[#2D4A3E] text-white border-[#2D4A3E] font-bold scale-105 shadow-md'
                        : 'bg-white text-[#1E2824] border-[var(--color-border)]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q3: Budget */}
            <div className="flex flex-col gap-4">
              <span className="font-heading font-bold text-xs text-[#2D4A3E] uppercase tracking-wider">
                3. What&apos;s your budget?
              </span>
              <div className="grid grid-cols-2 gap-2.5 text-xs font-semibold">
                {[
                  { id: 'under-500', label: 'Under ₹500' },
                  { id: '500-1500', label: '₹500-₹1500' },
                  { id: '1500-3000', label: '₹1500-₹3000' },
                  { id: '3000+', label: '₹3000+' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setBudget(item.id)}
                    className={`py-3 px-3 rounded-2xl border text-center transition-all ${
                      budget === item.id
                        ? 'bg-[#2D4A3E] text-white border-[#2D4A3E] font-bold scale-105 shadow-md'
                        : 'bg-white text-[#1E2824] border-[var(--color-border)]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
