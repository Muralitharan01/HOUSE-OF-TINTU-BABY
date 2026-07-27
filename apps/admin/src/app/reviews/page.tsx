'use client';

import React, { useState } from 'react';
import { AdminHeader } from '@/components/layout/AdminHeader';
import { Star, CheckCircle2, XCircle, Trash2 } from 'lucide-react';

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState([
    { id: '1', author: 'Ananya Sharma', rating: 5, comment: 'The organic linen dungaree set is unbelievable! Softest cotton I have ever touched.', date: '2 days ago', status: 'Approved', verified: true },
    { id: '2', author: 'Priya Mukherjee', rating: 5, comment: 'Wooden train quality is top notch. FSC beechwood with zero chemical smell.', date: '3 days ago', status: 'Approved', verified: true },
    { id: '3', author: 'Kavita Menon', rating: 4, comment: 'Cellular knit blanket is cozy and breathable. Delivered fast to Bengaluru.', date: '5 days ago', status: 'Approved', verified: true },
  ]);

  const toggleStatus = (id: string) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: r.status === 'Approved' ? 'Pending' : 'Approved' } : r))
    );
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950">
      <AdminHeader title="Customer Reviews Manager" subtitle="Approve, reject, and verify parent feedback on products" />

      <main className="p-8 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          {reviews.map((rev) => (
            <div key={rev.id} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-white">{rev.author}</span>
                  {rev.verified && (
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Verified Buyer
                    </span>
                  )}
                  <span className="text-xs text-slate-500">• {rev.date}</span>
                </div>

                <div className="flex text-amber-400 gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-xs text-slate-300 italic max-w-xl leading-relaxed">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 border-t sm:border-t-0 border-slate-800 pt-3 sm:pt-0 w-full sm:w-auto justify-between sm:justify-end">
                <button
                  onClick={() => toggleStatus(rev.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    rev.status === 'Approved'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  }`}
                >
                  {rev.status}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
