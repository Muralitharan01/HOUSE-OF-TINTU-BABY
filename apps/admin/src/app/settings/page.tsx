'use client';

import React, { useState } from 'react';
import { AdminHeader } from '@/components/layout/AdminHeader';
import { Settings, Save, CheckCircle2, MapPin, Globe, CreditCard, ShieldCheck } from 'lucide-react';

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);

  const [storeName, setStoreName] = useState('House of Tintu');
  const [storeTagline, setStoreTagline] = useState('Luxury Baby & Kids Boutique');
  const [address, setAddress] = useState('Suite 402, Heritage Luxury Tower, Jubilee Hills, Hyderabad 500033, Telangana');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [email, setEmail] = useState('care@houseoftintu.com');
  const [currency, setCurrency] = useState('₹ (INR)');
  const [gstRate, setGstRate] = useState('18% GST Included');

  // SEO & Meta Tags
  const [metaTitle, setMetaTitle] = useState('House of Tintu — Luxury Organic Baby & Kids Boutique');
  const [metaDescription, setMetaDescription] = useState('Thoughtfully curated organic baby apparel, FSC beechwood heirloom toys, and nursery sanctuary weaves for your little ones.');
  const [metaKeywords, setMetaKeywords] = useState('organic baby clothes, wooden toys, baby gift hamper, newborn wear, house of tintu');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950">
      <AdminHeader title="Storefront Settings & SEO" subtitle="Manage store location address, contact info, payment credentials, and SEO meta tags" />

      <main className="p-8 flex flex-col gap-8 max-w-4xl">
        
        {saved && (
          <div className="bg-emerald-500/20 border border-emerald-500/40 p-4 rounded-2xl text-emerald-300 text-xs font-bold flex items-center gap-2 animate-in zoom-in-95">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Store Settings & SEO Meta Tags Saved Successfully!
          </div>
        )}

        <form onSubmit={handleSave} className="flex flex-col gap-8">
          
          {/* Section 1: Store Identity & Contact Details */}
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col gap-5">
            <h3 className="font-bold text-base text-amber-400 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Store Location & Contact Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-slate-300">Store Name</label>
                <input
                  type="text"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-slate-300">Store Tagline</label>
                <input
                  type="text"
                  value={storeTagline}
                  onChange={(e) => setStoreTagline(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white outline-none focus:border-amber-500"
                />
              </div>

              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="font-bold text-slate-300">Physical Store / Registered Office Address</label>
                <textarea
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-slate-300">Support Phone / WhatsApp</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-slate-300">Support Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white outline-none focus:border-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Section 2: SEO & Meta Tags Engine */}
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col gap-5">
            <h3 className="font-bold text-base text-amber-400 flex items-center gap-2">
              <Globe className="w-4 h-4" /> Search Engine Optimization (SEO) & Meta Tags
            </h3>

            <div className="flex flex-col gap-4 text-xs">
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-slate-300">Meta Title Tag</label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-slate-300">Meta Description</label>
                <textarea
                  rows={3}
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-slate-300">Meta Keywords (Comma Separated)</label>
                <input
                  type="text"
                  value={metaKeywords}
                  onChange={(e) => setMetaKeywords(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white outline-none focus:border-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="btn-pill-primary py-3.5 px-8 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-full flex items-center justify-center gap-2 shadow-lg w-full sm:w-fit"
          >
            <Save className="w-4 h-4" /> Save Storefront Configuration
          </button>

        </form>

      </main>
    </div>
  );
}
