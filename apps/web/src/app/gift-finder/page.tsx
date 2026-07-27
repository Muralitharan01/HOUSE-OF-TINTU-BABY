'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Gift, Sparkles, Check, ArrowRight, RotateCcw, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '@/data/mockData';
import { useCartStore } from '@/store/useAppStore';

export default function GiftFinderPage() {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState<'boy' | 'girl' | 'neutral'>('neutral');
  const [ageGroup, setAgeGroup] = useState<string>('0-6m');
  const [budget, setBudget] = useState<number>(2000);
  const [showResults, setShowResults] = useState(false);

  const addItem = useCartStore((state) => state.addItem);

  const handleFinish = () => {
    setShowResults(true);
  };

  return (
    <div className="section-padding bg-[var(--color-bg-primary)] min-h-[80vh] flex flex-col justify-center">
      <div className="container-hot max-w-4xl">
        <div className="flex flex-col items-center text-center gap-2 mb-8">
          <span className="font-ui text-xs font-bold uppercase tracking-widest text-[var(--color-brand-accent)] flex items-center gap-1.5">
            <Gift className="w-4 h-4" /> Personal Gift Wizard
          </span>
          <h1 className="text-display-xl text-[var(--color-brand-primary)]">
            Find the Perfect Gift 🎁
          </h1>
          <p className="text-body-sm text-[var(--color-text-secondary)] max-w-md">
            Our luxury recommendation wizard pairs your budget & age group with heirloom keepsakes.
          </p>
        </div>

        {!showResults ? (
          <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border)] p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col gap-8">
            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-6">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                      step === s
                        ? 'bg-[var(--color-brand-primary)] text-white shadow-md'
                        : step > s
                        ? 'bg-emerald-500 text-white'
                        : 'bg-black/5 text-[var(--color-text-muted)]'
                    }`}
                  >
                    {step > s ? <Check className="w-4 h-4" /> : s}
                  </div>
                  <span className="text-xs font-semibold text-[var(--color-text-primary)] hidden sm:inline">
                    {s === 1 ? 'Gender & Style' : s === 2 ? 'Age Group' : 'Budget'}
                  </span>
                </div>
              ))}
            </div>

            {/* Step 1 Content */}
            {step === 1 && (
              <div className="flex flex-col gap-6">
                <h3 className="font-display font-bold text-2xl text-[var(--color-brand-primary)] text-center">
                  Who are you shopping for?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'boy', title: 'Baby Boy', icon: '👦', desc: 'Blues, earthy tones & playful prints' },
                    { id: 'girl', title: 'Baby Girl', icon: '👧', desc: 'Soft pinks, florals & delicate lace' },
                    { id: 'neutral', title: 'Gender Neutral', icon: '🧸', desc: 'Creams, sage greens & timeless weaves' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setGender(item.id as 'boy' | 'girl' | 'neutral')}
                      className={`p-6 rounded-2xl border flex flex-col items-center text-center gap-3 transition-all ${
                        gender === item.id
                          ? 'border-[var(--color-brand-primary)] bg-[var(--color-bg-secondary)] shadow-md'
                          : 'border-[var(--color-border)] bg-white hover:border-[var(--color-brand-accent)]'
                      }`}
                    >
                      <span className="text-4xl">{item.icon}</span>
                      <span className="font-heading font-bold text-base text-[var(--color-brand-primary)]">{item.title}</span>
                      <span className="text-xs text-[var(--color-text-muted)]">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2 Content */}
            {step === 2 && (
              <div className="flex flex-col gap-6">
                <h3 className="font-display font-bold text-2xl text-[var(--color-brand-primary)] text-center">
                  What is their age phase?
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { id: '0-6m', label: '0 - 6 Months', desc: 'Newborn essentials' },
                    { id: '6-12m', label: '6 - 12 Months', desc: 'Crawling & toys' },
                    { id: '1-3y', label: '1 - 3 Years', desc: 'Toddler exploration' },
                    { id: '4-7y', label: '4 - 7 Years', desc: 'Party dresses & sets' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setAgeGroup(item.id)}
                      className={`p-5 rounded-2xl border flex flex-col items-center text-center gap-2 transition-all ${
                        ageGroup === item.id
                          ? 'border-[var(--color-brand-primary)] bg-[var(--color-bg-secondary)] shadow-md'
                          : 'border-[var(--color-border)] bg-white hover:border-[var(--color-brand-accent)]'
                      }`}
                    >
                      <span className="font-heading font-bold text-base text-[var(--color-brand-primary)]">{item.label}</span>
                      <span className="text-xs text-[var(--color-text-muted)]">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3 Content */}
            {step === 3 && (
              <div className="flex flex-col gap-6">
                <h3 className="font-display font-bold text-2xl text-[var(--color-brand-primary)] text-center">
                  Select your maximum budget: ₹{budget}
                </h3>
                <div className="px-6 py-4 bg-[var(--color-bg-secondary)] rounded-2xl border border-[var(--color-border)] flex flex-col gap-4">
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="250"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full accent-[var(--color-brand-primary)]"
                  />
                  <div className="flex justify-between text-xs font-bold text-[var(--color-text-secondary)]">
                    <span>₹500</span>
                    <span>₹2,500</span>
                    <span>₹5,000+</span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-[var(--color-border)]">
              {step > 1 ? (
                <button onClick={() => setStep(step - 1)} className="btn-ghost btn-sm">
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button onClick={() => setStep(step + 1)} className="btn-primary btn-sm flex items-center gap-2">
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={handleFinish} className="btn-accent btn-sm flex items-center gap-2">
                  Reveal Handpicked Gifts <Sparkles className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Results View */
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20 text-emerald-800 text-sm">
              <span>Found 3 curated luxury gift matches for your selection!</span>
              <button
                onClick={() => {
                  setShowResults(false);
                  setStep(1);
                }}
                className="btn-ghost btn-sm py-1 px-3 text-xs flex items-center gap-1 bg-white"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Start Over
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {PRODUCTS.slice(0, 3).map((product) => (
                <div
                  key={product.id}
                  className="card-base p-5 flex flex-col justify-between bg-white border border-[var(--color-border)] shadow-md"
                >
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-50">
                    <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-[var(--color-brand-primary)]">{product.name}</h4>
                  <p className="text-xs text-[var(--color-text-muted)] line-clamp-2 my-2">{product.subtitle}</p>
                  <span className="font-bold text-lg text-[var(--color-brand-primary)] mb-4">₹{product.price}</span>
                  <button
                    onClick={() => addItem(product)}
                    className="btn-primary btn-sm w-full py-2.5 text-xs flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add to Gift Box
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
