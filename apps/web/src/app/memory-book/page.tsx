'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, Camera, Plus, Share2, Sparkles, Calendar } from 'lucide-react';
import { MEMORY_ITEMS } from '@/data/mockData';

export default function MemoryBookPage() {
  const [memories, setMemories] = useState(MEMORY_ITEMS);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddMemory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;
    const item = {
      id: `mem-${Date.now()}`,
      title: newTitle,
      date: newDate || 'Today',
      category: 'Special Milestone',
      imageUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=600&auto=format&fit=crop',
      description: newDesc || 'A cherished family memory saved in House of Tintu.',
    };
    setMemories([item, ...memories]);
    setNewTitle('');
    setNewDate('');
    setNewDesc('');
    setShowAddForm(false);
  };

  return (
    <div className="section-padding bg-[var(--color-bg-primary)]">
      <div className="container-hot">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <span className="font-ui text-xs font-bold uppercase tracking-widest text-[var(--color-brand-accent)] flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-rose-500 fill-current" /> DIGITAL KEEPSAKE
          </span>
          <h1 className="text-display-xl text-[var(--color-brand-primary)]">
            Our Little Moments Book
          </h1>
          <p className="text-body-sm text-[var(--color-text-secondary)] max-w-md">
            Save milestones from first smiles to first steps in a shareable digital storybook box.
          </p>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn-accent btn-sm mt-4 flex items-center gap-2 shadow-md"
          >
            <Plus className="w-4 h-4" /> Add New Memory
          </button>
        </div>

        {/* Add Memory Modal/Form */}
        {showAddForm && (
          <form
            onSubmit={handleAddMemory}
            className="max-w-md mx-auto bg-[var(--color-surface-raised)] border border-[var(--color-border)] p-6 rounded-3xl shadow-xl mb-12 flex flex-col gap-4 animate-in fade-in zoom-in-95"
          >
            <h3 className="font-heading font-bold text-lg text-[var(--color-brand-primary)]">
              Capture a Precious Moment 📸
            </h3>
            <input
              type="text"
              placeholder="Milestone Title (e.g. First Teddy Bear)"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="input-base text-sm"
              required
            />
            <input
              type="text"
              placeholder="Date or Month (e.g. July 2026)"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="input-base text-sm"
            />
            <textarea
              placeholder="Tell the little story behind this picture..."
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              className="input-base text-sm h-24 resize-none"
            />
            <div className="flex items-center gap-3">
              <button type="submit" className="btn-primary btn-sm flex-1">
                Save Memory
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="btn-ghost btn-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memories.map((mem) => (
            <div
              key={mem.id}
              className="card-base p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border)] shadow-md flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden mb-4 bg-amber-50">
                <Image src={mem.imageUrl} alt={mem.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[var(--color-brand-primary)] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[var(--color-brand-accent)]" /> {mem.date}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-[var(--color-brand-primary)]">
                  {mem.title}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                  {mem.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-[var(--color-brand-accent)] tracking-wider">
                  {mem.category}
                </span>
                <button
                  onClick={() => alert('Shareable memory card generated!')}
                  className="p-2 rounded-full hover:bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] transition-colors"
                  title="Share Memory Card"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
