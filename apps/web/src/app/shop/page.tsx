'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Filter, SlidersHorizontal, Heart, ShoppingBag, Star, ChevronDown } from 'lucide-react';
import { PRODUCTS, AGE_GROUPS, COLLECTIONS } from '@/data/mockData';
import { useCartStore, useWishlistStore } from '@/store/useAppStore';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAge, setSelectedAge] = useState<string>('all');
  const [selectedCollection, setSelectedCollection] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const addItem = useCartStore((state) => state.addItem);
  const { toggleWishlist, isInWishlist } = useWishlistStore();

  const filteredProducts = PRODUCTS.filter((prod) => {
    if (selectedCategory !== 'all' && prod.category.toLowerCase() !== selectedCategory.toLowerCase()) return false;
    if (selectedAge !== 'all' && prod.ageGroup !== selectedAge) return false;
    if (selectedCollection !== 'all' && prod.collection !== selectedCollection) return false;
    return true;
  });

  return (
    <div className="section-padding bg-[var(--color-bg-primary)]">
      <div className="container-hot">
        {/* Page Banner */}
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <span className="font-ui text-xs font-bold uppercase tracking-widest text-[var(--color-brand-accent)]">
            Handcrafted Luxury
          </span>
          <h1 className="text-display-xl text-[var(--color-brand-primary)]">
            Our Storybook Shop
          </h1>
          <p className="text-body-sm text-[var(--color-text-secondary)] max-w-md">
            Explore organic clothing, heirloom wooden toys, and cozy nursery essentials.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="font-bold flex items-center gap-1 text-[var(--color-brand-primary)]">
              <Filter className="w-4 h-4" /> Filter By:
            </span>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-base text-xs py-1.5 px-3 rounded-full border border-[var(--color-border)] bg-white w-auto"
            >
              <option value="all">All Categories</option>
              <option value="clothing">Clothing</option>
              <option value="toys">Toys</option>
              <option value="nursery">Nursery</option>
            </select>

            {/* Age Filter */}
            <select
              value={selectedAge}
              onChange={(e) => setSelectedAge(e.target.value)}
              className="input-base text-xs py-1.5 px-3 rounded-full border border-[var(--color-border)] bg-white w-auto"
            >
              <option value="all">All Ages</option>
              {AGE_GROUPS.map((a) => (
                <option key={a.id} value={a.ageRange}>{a.name}</option>
              ))}
            </select>

            {/* Collection Filter */}
            <select
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
              className="input-base text-xs py-1.5 px-3 rounded-full border border-[var(--color-border)] bg-white w-auto"
            >
              <option value="all">All Collections</option>
              {COLLECTIONS.map((c) => (
                <option key={c.id} value={c.slug}>{c.name}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-[var(--color-text-muted)] font-medium">
              Showing {filteredProducts.length} items
            </span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const inWishlist = isInWishlist(product.id);
            return (
              <div
                key={product.id}
                className="card-base group flex flex-col justify-between p-4 hover:-translate-y-1.5 transition-all duration-300 relative bg-[var(--color-surface-raised)] border border-[var(--color-border)] shadow-sm"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-3 bg-slate-50">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.badges.map((badge) => (
                      <span key={badge} className={`badge badge-${badge} uppercase text-[9px] px-2 py-0.5 shadow-xs`}>
                        {badge}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`absolute top-2 right-2 p-2 rounded-full backdrop-blur-md transition-transform active:scale-90 shadow-sm ${
                      inWishlist ? 'bg-rose-500 text-white' : 'bg-white/80 text-[var(--color-text-primary)] hover:bg-white'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${inWishlist ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <div className="flex flex-col gap-1 mb-3">
                  <Link href={`/product/${product.slug}`} className="hover:text-[var(--color-brand-accent)] transition-colors">
                    <h3 className="font-heading text-sm font-bold text-[var(--color-brand-primary)] line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-[11px] text-[var(--color-text-muted)] line-clamp-1">{product.subtitle}</p>

                  <div className="flex items-center gap-1 mt-1">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] text-[var(--color-text-muted)] font-semibold">({product.reviewCount})</span>
                  </div>

                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-bold text-base text-[var(--color-brand-primary)]">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-[var(--color-text-muted)] line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => addItem(product)}
                  className="btn-ghost btn-sm w-full rounded-full flex items-center justify-center gap-1.5 text-xs py-2 group-hover:bg-[var(--color-brand-primary)] group-hover:text-white transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Quick Add
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
