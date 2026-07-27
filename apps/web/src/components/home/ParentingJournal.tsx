'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { JOURNAL_ARTICLES } from '@/data/mockData';

export const ParentingJournal: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-hot">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="flex flex-col gap-2">
            <span className="font-ui text-xs font-bold uppercase tracking-widest text-[var(--color-brand-accent)] flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Editorial & Stories
            </span>
            <h2 className="text-display-lg text-[var(--color-brand-primary)]">
              Parenting Journal 📖
            </h2>
          </div>
          <Link href="/journal" className="btn-ghost btn-sm flex items-center gap-1">
            EXPLORE ALL ARTICLES <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="card-base group flex flex-col sm:flex-row gap-6 p-5 hover:-translate-y-1 transition-all duration-300 bg-[var(--color-surface-raised)] border border-[var(--color-border)]"
            >
              <div className="relative w-full sm:w-48 aspect-video sm:aspect-square rounded-2xl overflow-hidden flex-shrink-0 bg-slate-100">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)] mb-2">
                    <span className="font-bold text-[var(--color-brand-accent)] uppercase text-[10px] tracking-wider">
                      {article.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {article.readTimeMinutes} min read
                    </span>
                  </div>
                  <Link href={`/journal/${article.slug}`}>
                    <h3 className="font-display font-bold text-xl text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-accent)] transition-colors leading-snug">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-[var(--color-text-secondary)] line-clamp-2 mt-2">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)] mt-4">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image src={article.author.avatarUrl} alt={article.author.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col text-xs">
                    <span className="font-bold text-[var(--color-text-primary)]">{article.author.name}</span>
                    <span className="text-[10px] text-[var(--color-text-muted)]">{article.author.role}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
