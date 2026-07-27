'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Instagram, Facebook, Twitter, Youtube, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171736] text-[#F5F3FF] border-t border-purple-900/40 pt-20 pb-10 relative overflow-hidden">
      
      {/* Night Sky Illustration Atmosphere (Stars, Moon, Sleeping Teddy) */}
      <div className="absolute top-8 left-10 text-xl opacity-60 animate-twinkle select-none">⭐</div>
      <div className="absolute top-16 right-24 text-2xl opacity-70 animate-twinkle select-none" style={{ animationDelay: '1.5s' }}>✨</div>
      <div className="absolute top-6 right-10 text-3xl opacity-80 select-none">🌙</div>
      <div className="absolute bottom-10 right-12 text-4xl opacity-30 select-none">🧸💤</div>

      <div className="container-hot relative z-10">
        
        {/* Main 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-purple-900/40">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#D8B4FE] text-slate-950 flex items-center justify-center font-bold text-xl shadow-md">
                🧸
              </div>
              <span className="font-display font-bold text-2xl text-white">
                House of Tintu
              </span>
            </div>
            <p className="font-body text-xs text-purple-200/80 max-w-md leading-relaxed">
              Thoughtfully curated luxury baby & kids boutique. Creating an emotional shopping experience with GOTS organic fabrics, non-toxic heirloom toys, and timeless designs for your little ones.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-purple-200 hover:bg-[#D8B4FE] hover:text-slate-900 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-purple-200 hover:bg-[#D8B4FE] hover:text-slate-900 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-purple-200 hover:bg-[#D8B4FE] hover:text-slate-900 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-purple-200 hover:bg-[#D8B4FE] hover:text-slate-900 transition-colors" aria-label="Youtube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop Categories */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-ui text-xs font-bold uppercase tracking-widest text-[#D8B4FE]">
              Shop Categories
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-purple-200/70 font-semibold">
              <li><Link href="/shop?cat=clothing" className="hover:text-white transition-colors">Baby Apparel</Link></li>
              <li><Link href="/shop?cat=toys" className="hover:text-white transition-colors">Wooden Toys</Link></li>
              <li><Link href="/shop?cat=nursery" className="hover:text-white transition-colors">Nursery Decor</Link></li>
              <li><Link href="/shop?badge=new" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link href="/collections" className="hover:text-white transition-colors">Magical Worlds</Link></li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-ui text-xs font-bold uppercase tracking-widest text-[#D8B4FE]">
              Customer Care
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-purple-200/70 font-semibold">
              <li><Link href="/account" className="hover:text-white transition-colors">Track Order</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping & Delivery</Link></li>
              <li><Link href="/returns" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/size-guide" className="hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4: Promises */}
          <div className="lg:col-span-3 flex flex-col gap-3 bg-white/5 p-5 rounded-2xl border border-white/10">
            <h4 className="font-heading text-sm text-white">
              The Tintu Promise
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-purple-200/80 mt-1">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Safe & Non-Toxic</span>
              <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-amber-400" /> Pan-India Express Delivery</span>
              <span className="flex items-center gap-2"><RefreshCw className="w-4 h-4 text-sky-400" /> 14-Day Easy Returns</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Security Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300/60 font-ui">
          <p>© {new Date().getFullYear()} House of Tintu. All Rights Reserved. Crafted with love for little ones.</p>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Visa</span> • <span>Mastercard</span> • <span>UPI</span> • <span>GPay</span> • <span>Paytm</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
