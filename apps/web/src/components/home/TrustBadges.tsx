'use client';

import React from 'react';
import { ShieldCheck, Award, Heart, RefreshCw, Lock, Gift } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'Safe for Babies',
      subtitle: '100% Non-Toxic',
      iconColor: 'text-emerald-600',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      subtitle: 'Handpicked Fabrics',
      iconColor: 'text-amber-600',
    },
    {
      icon: Heart,
      title: 'Loved by Parents',
      subtitle: 'Trusted by 10K+',
      iconColor: 'text-rose-500',
    },
    {
      icon: RefreshCw,
      title: 'Easy Returns',
      subtitle: 'No Questions Asked',
      iconColor: 'text-sky-600',
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      subtitle: '100% Protected',
      iconColor: 'text-indigo-600',
    },
    {
      icon: Gift,
      title: 'Gift Wrapping',
      subtitle: 'Make It Special',
      iconColor: 'text-purple-600',
    },
  ];

  return (
    <section className="py-6 border-y border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
      <div className="container-hot">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-2xl hover:bg-[var(--color-bg-secondary)] transition-colors"
              >
                <div className={`p-2.5 rounded-full bg-white shadow-xs border border-[var(--color-border)] ${badge.iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-xs font-bold text-[var(--color-brand-primary)]">
                    {badge.title}
                  </span>
                  <span className="text-[11px] text-[var(--color-text-muted)] font-medium">
                    {badge.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
