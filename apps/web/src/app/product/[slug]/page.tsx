'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  Star,
  Heart,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RefreshCw,
  Gift,
  Check,
  Rotate3d,
  ChevronRight,
  Share2,
} from 'lucide-react';
import { PRODUCTS } from '@/data/mockData';
import { useCartStore, useWishlistStore } from '@/store/useAppStore';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('1-2 Yrs');
  const [selectedColor, setSelectedColor] = useState('Organic Cream');
  const [quantity, setQuantity] = useState(1);
  const [is360Mode, setIs360Mode] = useState(false);

  const addItem = useCartStore((state) => state.addItem);
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="section-padding bg-[var(--color-bg-primary)]">
      <div className="container-hot">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-xs text-[var(--color-text-muted)]">
          <Link href="/" className="hover:text-[var(--color-brand-primary)]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/shop" className="hover:text-[var(--color-brand-primary)]">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="font-bold text-[var(--color-brand-primary)]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Product Gallery & 360 View */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-[var(--color-surface-raised)] border border-[var(--color-border)] shadow-md">
              <Image
                src={product.images[selectedImage] || product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                {product.badges.map((badge) => (
                  <span key={badge} className={`badge badge-${badge} uppercase text-[10px] px-3 py-1 shadow-sm`}>
                    {badge}
                  </span>
                ))}
              </div>

              {/* 360 View Toggle Button */}
              <button
                onClick={() => setIs360Mode(!is360Mode)}
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-full text-xs font-bold text-[var(--color-brand-primary)] shadow-md flex items-center gap-1.5 hover:bg-white transition-all"
              >
                <Rotate3d className="w-4 h-4 text-[var(--color-brand-accent)]" /> 360° Interactive View
              </button>
            </div>

            {/* Gallery Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-[var(--color-brand-primary)] scale-105 shadow-sm' : 'border-[var(--color-border)] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Specs & Add To Cart */}
          <div className="lg:col-span-5 flex flex-col gap-6 bg-[var(--color-surface-raised)] p-8 rounded-3xl border border-[var(--color-border)] shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-accent)]">
                  {product.category} • {product.material}
                </span>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-2.5 rounded-full border transition-all ${
                    inWishlist ? 'bg-rose-500 text-white border-rose-500' : 'bg-white border-[var(--color-border)] text-[var(--color-text-primary)]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
                </button>
              </div>

              <h1 className="text-display-lg text-[var(--color-brand-primary)] mt-1">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[var(--color-text-primary)]">{product.rating}</span>
                <span className="text-xs text-[var(--color-text-muted)]">({product.reviewCount} parent reviews)</span>
              </div>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-3 border-y border-[var(--color-border)] py-4">
              <span className="font-extrabold text-3xl text-[var(--color-brand-primary)]">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-base text-[var(--color-text-muted)] line-through">
                  ₹{product.originalPrice}
                </span>
              )}
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full ml-auto">
                Save ₹{(product.originalPrice || 0) - product.price}
              </span>
            </div>

            <p className="text-body-sm text-[var(--color-text-secondary)] leading-relaxed">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[var(--color-text-primary)]">Select Age Size:</span>
              <div className="flex flex-wrap gap-2">
                {['0-6m', '6-12m', '1-2 Yrs', '2-3 Yrs'].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                      selectedSize === sz
                        ? 'bg-[var(--color-brand-primary)] text-white border-[var(--color-brand-primary)] shadow-sm'
                        : 'bg-white text-[var(--color-text-primary)] border-[var(--color-border)]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Swatches */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[var(--color-text-primary)]">Select Color:</span>
              <div className="flex gap-3">
                {[
                  { name: 'Organic Cream', hex: '#FDF0E0' },
                  { name: 'Sage Green', hex: '#D8E2DC' },
                  { name: 'Dusty Rose', hex: '#ECE4DB' },
                ].map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedColor === c.name ? 'border-[var(--color-brand-primary)] scale-110' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  >
                    {selectedColor === c.name && <Check className="w-3.5 h-3.5 text-slate-800" />}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => addItem(product, quantity)}
                className="btn-primary btn-lg flex-1 flex items-center justify-center gap-2 shadow-lg"
              >
                <ShoppingBag className="w-5 h-5" /> Add to Shopping Basket
              </button>
            </div>

            {/* Trust Features */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[var(--color-border)] text-xs text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> GOTS Certified Organic
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-600" /> Free Shipping above ₹1999
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-sky-600" /> 14-Day Easy Returns
              </div>
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-purple-600" /> Luxury Gift Box Included
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
