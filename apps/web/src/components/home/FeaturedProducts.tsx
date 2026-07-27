'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag, Star, Eye, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/data/mockData';
import { Product } from '@/types';
import { useCartStore, useWishlistStore } from '@/store/useAppStore';
import { ProductQuickViewModal } from '@/components/product/ProductQuickViewModal';

export const FeaturedProducts: React.FC = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const addItem = useCartStore((state) => state.addItem);
  const { toggleWishlist, isInWishlist } = useWishlistStore();

  return (
    <section className="section-padding bg-[var(--color-bg-primary)]">
      <div className="container-hot">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div className="flex flex-col gap-2">
            <span className="font-ui text-xs font-bold uppercase tracking-widest text-[var(--color-brand-accent)]">
              Fresh Picks For Little Ones
            </span>
            <h2 className="font-display font-medium text-4xl sm:text-5xl text-[var(--color-brand-primary)]">
              New Arrivals ♡
            </h2>
          </div>
          <Link href="/shop" className="btn-pill-primary py-2.5 px-6 text-xs flex items-center gap-1.5 w-fit">
            VIEW ALL <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PRODUCTS.map((product) => {
            const inWishlist = isInWishlist(product.id);
            return (
              <div
                key={product.id}
                className="card-story group flex flex-col justify-between p-4 bg-white border border-[var(--color-border)] shadow-sm relative overflow-hidden"
              >
                {/* Image & Quick Actions */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-3 bg-slate-50">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
                    {product.badges.map((badge) => (
                      <span key={badge} className={`badge-pill badge-${badge} shadow-xs`}>
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Floating Action Buttons */}
                  <div className="absolute top-2.5 right-2.5 flex flex-col gap-2 z-10">
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-2 rounded-full backdrop-blur-md transition-all active:scale-90 shadow-sm ${
                        inWishlist
                          ? 'bg-rose-500 text-white scale-110'
                          : 'bg-white/90 text-[var(--color-text-primary)] hover:bg-white'
                      }`}
                      aria-label="Toggle Wishlist"
                    >
                      <Heart className={`w-3.5 h-3.5 ${inWishlist ? 'fill-current' : ''}`} />
                    </button>

                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="p-2 rounded-full bg-white/90 text-[var(--color-text-primary)] hover:bg-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
                      title="Quick View"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Product Meta */}
                <div className="flex flex-col gap-1 mb-3">
                  <Link href={`/product/${product.slug}`} className="hover:text-[var(--color-brand-accent)] transition-colors">
                    <h3 className="font-heading text-sm font-bold text-[var(--color-brand-primary)] line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-[11px] text-[var(--color-text-muted)] line-clamp-1">
                    {product.subtitle}
                  </p>

                  <div className="flex items-center gap-1 mt-1">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] text-[var(--color-text-muted)] font-bold">
                      ({product.reviewCount})
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-extrabold text-base text-[var(--color-brand-primary)]">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-[var(--color-text-muted)] line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add To Cart */}
                <button
                  onClick={() => addItem(product)}
                  className="btn-pill-primary w-full rounded-full flex items-center justify-center gap-1.5 text-xs py-2.5 group-hover:bg-[var(--color-brand-accent)] transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Quick Add
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
};
