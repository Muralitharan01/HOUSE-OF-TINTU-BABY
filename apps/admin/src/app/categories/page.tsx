'use client';

import React, { useState } from 'react';
import { AdminHeader } from '@/components/layout/AdminHeader';
import { Layers, Plus, Edit, Trash2, Tag, CheckCircle2 } from 'lucide-react';

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState([
    { id: '1', name: 'Organic Apparel', slug: 'clothing', itemsCount: 42, icon: '🌿', status: 'Active' },
    { id: '2', name: 'Heirloom Wooden Toys', slug: 'toys', itemsCount: 28, icon: '🚂', status: 'Active' },
    { id: '3', name: 'Nursery Sanctuary & Weaves', slug: 'nursery', itemsCount: 35, icon: '☁️', status: 'Active' },
    { id: '4', name: 'Signature Gift Hampers', slug: 'gifts', itemsCount: 19, icon: '🎁', status: 'Active' },
  ]);

  const [ageGroups, setAgeGroups] = useState([
    { id: '1', title: 'Newborns (0 - 3 Months)', icon: '👶🌙', count: '14 Items', status: 'Active' },
    { id: '2', title: 'Infants (3 - 12 Months)', icon: '🐰🎈', count: '32 Items', status: 'Active' },
    { id: '3', title: 'Toddlers (1 - 3 Years)', icon: '🐘🛴', count: '48 Items', status: 'Active' },
    { id: '4', title: 'Little Explorers (3 - 6 Years)', icon: '🦊🛵', count: '38 Items', status: 'Active' },
  ]);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950">
      <AdminHeader title="Categories & Age Groups" subtitle="Organize product navigation taxonomy, icons, and age nests" />

      <main className="p-8 flex flex-col gap-10">
        
        {/* Section 1: Categories Manager */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg text-white">Storefront Categories</h3>
              <p className="text-xs text-slate-400">Primary product navigation categories on storefront</p>
            </div>
            <button
              onClick={() => alert('Add New Category Modal')}
              className="btn-pill-primary px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-full flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Category
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between gap-4 shadow-md">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-2xl border border-slate-700">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                    {cat.status}
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-sm text-white">{cat.name}</h4>
                  <span className="text-xs text-slate-400">slug: /{cat.slug} • {cat.itemsCount} Products</span>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-2 text-xs">
                  <button className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300">
                    <Edit className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Age Group Nests Manager */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg text-white">Age Group Growth Phases</h3>
              <p className="text-xs text-slate-400">Shop by age filter cards on homepage</p>
            </div>
            <button
              onClick={() => alert('Add New Age Group Modal')}
              className="btn-pill-primary px-4 py-2 bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-xs font-bold rounded-full flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Age Group
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroups.map((age) => (
              <div key={age.id} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between gap-4 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{age.icon}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
                    {age.count}
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-sm text-white">{age.title}</h4>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-2 text-xs">
                  <button className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300">
                    <Edit className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
