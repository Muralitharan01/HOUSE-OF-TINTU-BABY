'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Gift, ShoppingBag, Heart, Sparkles } from 'lucide-react';
import { useCartStore } from '@/store/useAppStore';

export const MascotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = useCartStore((state) => state.toggleCart);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="w-72 sm:w-80 bg-white border border-[var(--color-border)] rounded-3xl p-4 sm:p-5 shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#2D4A3E] text-[#F4C794] flex items-center justify-center font-bold text-base shadow-sm">
                🧸
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xs sm:text-sm text-[#2D4A3E]">Tintu Guide</span>
                <span className="text-[9px] text-emerald-700 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Online to assist
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-black/5 text-[#4A5A53]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] sm:text-xs text-[#4A5A53] leading-relaxed bg-[#FAF6F0] p-2.5 rounded-xl border border-[var(--color-border)]">
            &ldquo;Hello dear parent! ♡ How can I help you find organic clothes, wooden toys, or gifts today?&rdquo;
          </p>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <Link
              href="/gift-finder"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1.5 p-2 rounded-xl bg-[#F4EBE1] text-[#2D4A3E] hover:bg-[#D97745] hover:text-white transition-colors"
            >
              <Gift className="w-3.5 h-3.5 text-[#D97745]" /> Gift Finder
            </Link>

            <button
              onClick={() => {
                setIsOpen(false);
                toggleCart();
              }}
              className="flex items-center gap-1.5 p-2 rounded-xl bg-[#F4EBE1] text-[#2D4A3E] hover:bg-[#2D4A3E] hover:text-white transition-colors text-left"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#2D4A3E]" /> View Cart
            </button>

            <Link
              href="/memory-book"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1.5 p-2 rounded-xl bg-[#F4EBE1] text-[#2D4A3E] hover:bg-[#2D4A3E] hover:text-white transition-colors"
            >
              <Heart className="w-3.5 h-3.5 text-rose-500" /> Memory Box
            </Link>

            <Link
              href="/shop"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1.5 p-2 rounded-xl bg-[#F4EBE1] text-[#2D4A3E] hover:bg-[#2D4A3E] hover:text-white transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> All Products
            </Link>
          </div>
        </div>
      )}

      {/* Floating Bear Trigger Badge */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2D4A3E] text-white shadow-xl flex items-center justify-center border-2 sm:border-4 border-white hover:scale-105 active:scale-95 transition-transform relative group"
        aria-label="Open Tintu Mascot Guide"
      >
        <span className="text-xl sm:text-2xl select-none">🧸</span>
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#D97745] rounded-full border-2 border-white animate-pulse" />
      </button>
    </div>
  );
};
