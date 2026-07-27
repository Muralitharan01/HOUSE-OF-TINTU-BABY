'use client';

import React, { useState } from 'react';
import { AdminHeader } from '@/components/layout/AdminHeader';
import { Flame, Plus, CheckCircle2, Edit, Trash2, Calendar, Sparkles, Eye } from 'lucide-react';

interface BannerOption {
  id: string;
  name: string;
  season: 'Pongal' | 'Diwali' | 'Christmas' | 'Summer' | 'Standard';
  headline: string;
  scriptTitle: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  active: boolean;
}

export default function AdminBannersPage() {
  const initialBanners: BannerOption[] = [
    {
      id: '1',
      name: 'Pongal Harvest Collection 🌾',
      season: 'Pongal',
      headline: 'Traditional Organic Wear &',
      scriptTitle: 'Festive Joy 🌾',
      subtext: 'Celebrate Pongal in GOTS certified organic traditional dresses and wooden keepsake toys.',
      ctaText: 'SHOP PONGAL EDITIONS',
      ctaLink: '/shop?cat=clothing',
      imageUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=600&auto=format&fit=crop',
      active: true,
    },
    {
      id: '2',
      name: 'Diwali Lights & Heirloom Gifts 🪔',
      season: 'Diwali',
      headline: 'Illuminate Little Moments',
      scriptTitle: 'Beautifully 🪔',
      subtext: 'Handcrafted wooden gift trunks packed with organic cotton apparel and heirloom wooden toys.',
      ctaText: 'EXPLORE DIWALI GIFTS',
      ctaLink: '/gift-finder',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop',
      active: false,
    },
    {
      id: '3',
      name: 'Christmas Storybook Magic 🎄',
      season: 'Christmas',
      headline: 'Cozy Cloud Knit Blanket &',
      scriptTitle: 'Winter Magic 🎄',
      subtext: 'Cellular knitted organic swaddles and cozy winter wear for baby warmth.',
      ctaText: 'SHOP WINTER COZY',
      ctaLink: '/shop?cat=nursery',
      imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=600&auto=format&fit=crop',
      active: false,
    },
  ];

  const [banners, setBanners] = useState<BannerOption[]>(initialBanners);

  const toggleBanner = (id: string) => {
    setBanners((prev) =>
      prev.map((b) => (b.id === id ? { ...b, active: !b.active } : b))
    );
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950">
      <AdminHeader title="Festival Banners & Hero Manager" subtitle="Manage seasonal promotions, Pongal/Diwali banners, and hero text" />

      <main className="p-8 flex flex-col gap-6">
        
        {/* Top Action */}
        <div className="flex items-center justify-between bg-slate-900 p-4 rounded-2xl border border-slate-800">
          <div>
            <h3 className="font-bold text-sm text-white">Active Festival Banners</h3>
            <p className="text-xs text-slate-400">Toggle seasonal presets to instantly update storefront hero sections</p>
          </div>
          <button
            onClick={() => alert('Create New Festival Banner Preset')}
            className="btn-pill-primary px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-full flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add Festival Banner
          </button>
        </div>

        {/* Banner List */}
        <div className="flex flex-col gap-5">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`p-6 rounded-2xl border transition-all ${
                banner.active
                  ? 'bg-slate-900 border-amber-500/50 shadow-lg'
                  : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                
                {/* Banner Thumbnail & Info */}
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-24 h-24 rounded-xl bg-slate-800 overflow-hidden relative border border-slate-700 flex-shrink-0">
                    <img src={banner.imageUrl} alt={banner.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
                        {banner.season}
                      </span>
                      {banner.active && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Live on Storefront
                        </span>
                      )}
                    </div>
                    <h4 className="font-bold text-base text-white mt-0.5">{banner.name}</h4>
                    <p className="text-xs text-slate-400 max-w-lg leading-relaxed">
                      &ldquo;{banner.headline} {banner.scriptTitle}&rdquo; — {banner.subtext}
                    </p>
                    <span className="text-[11px] text-amber-300 font-semibold mt-1">
                      CTA Button: {banner.ctaText} → {banner.ctaLink}
                    </span>
                  </div>
                </div>

                {/* Right Action Switch */}
                <div className="flex items-center gap-4 border-t lg:border-t-0 border-slate-800 pt-4 lg:pt-0 w-full lg:w-auto justify-between lg:justify-end">
                  <button
                    onClick={() => toggleBanner(banner.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      banner.active
                        ? 'bg-amber-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {banner.active ? 'ACTIVE' : 'ACTIVATE BANNER'}
                  </button>

                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-750">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
