'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Check } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore, useWishlistStore } from '@/store/useAppStore';

interface ModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductQuickViewModal: React.FC<ModalProps> = ({ product, onClose }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  const addItem = useCartStore((state) => state.addItem);
  const { toggleWishlist, isInWishlist } = useWishlistStore();

  if (!product) return null;
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="fixed inset-0 z-[var(--z-modal)] bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border)] rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 text-[var(--color-text-primary)] z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
          {/* Left Gallery */}
          <div className="flex flex-col gap-3">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-[var(--color-border)]">
              <Image
                src={product.images[selectedImg] || product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImg(i)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 ${selectedImg === i ? 'border-[var(--color-brand-primary)]' : 'border-transparent'}`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Product Summary */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-accent)]">
                {product.category} • {product.material}
              </span>
              <h3 className="font-display font-bold text-2xl text-[var(--color-brand-primary)] mt-1">
                {product.name}
              </h3>
              <div className="flex items-center gap-1.5 mt-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="text-xs font-bold text-[var(--color-text-primary)] ml-1">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <div className="flex items-baseline gap-2 border-y border-[var(--color-border)] py-3">
              <span className="font-extrabold text-2xl text-[var(--color-brand-primary)]">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[var(--color-text-muted)] line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              {product.description}
            </p>

            <div className="flex flex-col gap-1 text-xs text-[var(--color-text-secondary)]">
              {product.features.slice(0, 3).map((f, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> {f}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-3">
              <button
                onClick={() => {
                  addItem(product);
                  onClose();
                }}
                className="btn-pill-primary py-3 px-6 text-xs flex-1 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" /> Add to Basket
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-3 rounded-full border ${inWishlist ? 'bg-rose-500 text-white border-rose-500' : 'bg-white border-[var(--color-border)]'}`}
              >
                <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
