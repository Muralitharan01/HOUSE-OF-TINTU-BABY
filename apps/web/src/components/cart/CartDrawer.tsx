'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Trash2, Plus, Minus, ShoppingBag, Gift, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/useAppStore';

export const CartDrawer: React.FC = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getRawSubtotal } = useCartStore();

  if (!isOpen) return null;

  const subtotal = getRawSubtotal();
  const freeShippingThreshold = 1999;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = freeShippingThreshold - subtotal;

  return (
    <div className="fixed inset-0 z-[var(--z-modal)] bg-black/50 backdrop-blur-sm flex justify-end transition-opacity">
      <div className="w-full max-w-md bg-[var(--color-bg-primary)] h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-6 border-b border-[var(--color-border)] flex items-center justify-between bg-[var(--color-surface)]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[var(--color-brand-primary)]" />
            <h3 className="font-display font-bold text-xl text-[var(--color-brand-primary)]">
              Your Shopping Basket
            </h3>
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-black/5 text-[var(--color-text-primary)]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="bg-[var(--color-bg-secondary)] p-4 border-b border-[var(--color-border)] text-xs">
          {remainingForFreeShipping > 0 ? (
            <p className="text-[var(--color-text-secondary)] font-medium mb-1.5">
              Add <span className="font-bold text-[var(--color-brand-accent)]">₹{remainingForFreeShipping}</span> more for FREE Delivery & Gift! 🎁
            </p>
          ) : (
            <p className="text-emerald-700 font-bold mb-1.5 flex items-center gap-1">
              🎉 Congratulations! You unlocked FREE Delivery & Gift Wrapping!
            </p>
          )}
          <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--color-brand-accent)] transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 text-[var(--color-text-muted)]">
              <div className="w-16 h-16 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center text-3xl">
                🧸
              </div>
              <p className="font-display text-lg text-[var(--color-text-primary)]">Your basket is feeling empty!</p>
              <p className="text-xs max-w-xs">Explore our storybook collections to discover soft organic clothes & handmade toys.</p>
              <button onClick={closeCart} className="btn-primary py-2.5 px-6 text-xs mt-2">
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-3 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between h-full">
                  <div>
                    <h4 className="font-heading text-sm text-[var(--color-text-primary)] line-clamp-1">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-[var(--color-text-muted)]">{item.product.category}</p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-sm text-[var(--color-brand-primary)]">
                      ₹{item.product.price}
                    </span>

                    <div className="flex items-center gap-2 bg-[var(--color-bg-secondary)] rounded-full px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:text-[var(--color-brand-accent)] text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:text-[var(--color-brand-accent)] text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 text-rose-400 hover:text-rose-600 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col gap-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--color-text-secondary)]">Subtotal</span>
              <span className="font-bold text-lg text-[var(--color-brand-primary)]">₹{subtotal}</span>
            </div>

            <p className="text-[11px] text-[var(--color-text-muted)]">
              Taxes & shipping calculated at checkout. Free gift wrapping available.
            </p>

            <Link
              href="/checkout"
              onClick={closeCart}
              className="btn-accent w-full py-3 text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              Proceed to Checkout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
