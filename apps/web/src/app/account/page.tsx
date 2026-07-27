'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Package, MapPin, Wallet, Heart } from 'lucide-react';
import { useWishlistStore } from '@/store/useAppStore';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<'orders' | 'addresses' | 'wallet' | 'rewards'>('orders');
  useWishlistStore((state) => state.wishlistIds.length);

  const pastOrders = [
    { id: 'HOT-94820', date: 'July 24, 2026', items: 'Linen Dungaree Set', total: '₹1,398', status: 'In Transit', tracking: 'DTDC-884210' },
    { id: 'HOT-91204', date: 'June 10, 2026', items: 'Tintu Cuddle Bunny Plush', total: '₹899', status: 'Delivered', tracking: 'DEL-994120' },
  ];

  return (
    <div className="section-padding bg-[var(--color-bg-primary)]">
      <div className="container-hot max-w-5xl">
        {/* Account Header */}
        <div className="bg-[var(--color-surface-raised)] border border-[var(--color-border)] p-8 rounded-3xl shadow-md mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[var(--color-brand-primary)] text-white flex items-center justify-center font-display font-bold text-2xl shadow-md">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl text-[var(--color-brand-primary)]">
                Ananya Sharma
              </span>
              <span className="text-xs text-[var(--color-text-muted)]">
                ananya.sharma@example.com • Premium Club Parent
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[var(--color-bg-secondary)] px-5 py-3 rounded-2xl border border-[var(--color-border)]">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-brand-accent)]">Wallet Balance</span>
              <span className="font-extrabold text-base text-[var(--color-brand-primary)]">₹1,250</span>
            </div>
            <div className="h-8 w-px bg-[var(--color-border)]" />
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-brand-accent)]">Tintu Points</span>
              <span className="font-extrabold text-base text-[var(--color-brand-primary)]">420 pts</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-3 flex flex-col gap-2 bg-[var(--color-surface-raised)] p-3 rounded-2xl border border-[var(--color-border)] shadow-xs">
            {[
              { id: 'orders', label: 'Order History', icon: Package },
              { id: 'addresses', label: 'Saved Addresses', icon: MapPin },
              { id: 'wallet', label: 'Wallet & Rewards', icon: Wallet },
              { id: 'rewards', label: 'Memory Box', icon: Heart },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'orders' | 'addresses' | 'wallet' | 'rewards')}
                  className={`flex items-center gap-3 p-3 rounded-xl text-xs font-bold transition-all text-left ${
                    activeTab === tab.id
                      ? 'bg-[var(--color-brand-primary)] text-white shadow-sm'
                      : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]'
                  }`}
                >
                  <Icon className="w-4 h-4" /> {tab.label}
                </button>
              );
            })}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9 bg-[var(--color-surface-raised)] p-8 rounded-3xl border border-[var(--color-border)] shadow-md">
            {activeTab === 'orders' && (
              <div className="flex flex-col gap-6">
                <h3 className="font-display font-bold text-xl text-[var(--color-brand-primary)]">
                  Your Orders
                </h3>
                <div className="flex flex-col gap-4">
                  {pastOrders.map((ord) => (
                    <div
                      key={ord.id}
                      className="p-5 rounded-2xl border border-[var(--color-border)] bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-[var(--color-brand-primary)]">{ord.id}</span>
                          <span className="text-xs text-[var(--color-text-muted)]">• {ord.date}</span>
                        </div>
                        <span className="text-xs font-medium text-[var(--color-text-secondary)] mt-1">{ord.items}</span>
                        <span className="text-[11px] text-[var(--color-text-muted)] mt-0.5">Tracking ID: {ord.tracking}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-base text-[var(--color-brand-primary)]">{ord.total}</span>
                        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                          {ord.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="flex flex-col gap-4">
                <h3 className="font-display font-bold text-xl text-[var(--color-brand-primary)]">
                  Default Delivery Address
                </h3>
                <div className="p-5 rounded-2xl border border-[var(--color-border)] bg-white flex flex-col gap-2 text-xs">
                  <span className="font-bold text-sm text-[var(--color-brand-primary)]">Ananya Sharma (Home)</span>
                  <p className="text-[var(--color-text-secondary)]">Flat 4B, Lotus Apartments, Boat Club Road</p>
                  <p className="text-[var(--color-text-secondary)]">Chennai, Tamil Nadu - 600028</p>
                  <p className="text-[var(--color-text-muted)]">Mobile: +91 98765 43210</p>
                </div>
              </div>
            )}

            {activeTab === 'wallet' && (
              <div className="flex flex-col gap-4">
                <h3 className="font-display font-bold text-xl text-[var(--color-brand-primary)]">
                  Tintu Wallet & Reward Points
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Earn 5 Tintu reward points for every ₹100 spent. Redeem points for exclusive heirloom gifts.
                </p>
              </div>
            )}

            {activeTab === 'rewards' && (
              <div className="flex flex-col gap-4">
                <h3 className="font-display font-bold text-xl text-[var(--color-brand-primary)]">
                  Memory Box Quick Access
                </h3>
                <Link href="/memory-book" className="btn-accent btn-sm w-fit">
                  View Full Memory Timeline
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
