'use client';

import React, { useState } from 'react';
import { AdminHeader } from '@/components/layout/AdminHeader';
import { Image as ImageIcon, Upload, Copy, Check, ExternalLink, Plus } from 'lucide-react';

export default function AdminMediaPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const images = [
    { id: '1', title: 'Hero Carousel Newborn', category: 'Hero Banners', url: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop' },
    { id: '2', title: 'Wooden Train Toy', category: 'Product Gallery', url: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop' },
    { id: '3', title: 'Cloud Knit Swaddle Blanket', category: 'Nursery', url: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=800&auto=format&fit=crop' },
    { id: '4', title: 'Linen Dungaree Set', category: 'Apparel', url: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800&auto=format&fit=crop' },
    { id: '5', title: 'Gift Hamper Box', category: 'Hampers', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop' },
    { id: '6', title: 'Cuddle Bunny Toy', category: 'Toys', url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop' },
  ];

  const handleCopy = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950">
      <AdminHeader title="Media & Image Asset Manager" subtitle="Upload and manage storefront hero banners, product photography, and logos" />

      <main className="p-8 flex flex-col gap-6">
        
        {/* Header Action */}
        <div className="flex items-center justify-between bg-slate-900 p-4 rounded-2xl border border-slate-800">
          <div>
            <h3 className="font-bold text-sm text-white">Storefront Image Assets</h3>
            <p className="text-xs text-slate-400">Copy high-resolution image URLs to use in banners or product listings</p>
          </div>
          <button
            onClick={() => alert('Upload Image File Modal')}
            className="btn-pill-primary px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-full flex items-center gap-2"
          >
            <Upload className="w-4 h-4" /> Upload New Asset
          </button>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img.id} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex flex-col justify-between gap-3 shadow-md">
              <div className="relative w-full aspect-video rounded-xl bg-slate-800 overflow-hidden border border-slate-700">
                <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 text-[9px] font-bold uppercase tracking-wider text-white bg-slate-950/80 backdrop-blur-xs px-2 py-0.5 rounded-md">
                  {img.category}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-200 line-clamp-1">{img.title}</span>
                <button
                  onClick={() => handleCopy(img.id, img.url)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-amber-400 flex items-center gap-1 text-[11px] font-bold"
                  title="Copy URL"
                >
                  {copiedId === img.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === img.id ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
