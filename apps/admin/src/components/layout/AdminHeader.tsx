'use client';

import React from 'react';
import { Bell, Search, User, ShieldCheck, Sparkles } from 'lucide-react';

export const AdminHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => {
  return (
    <header className="bg-slate-900 border-b border-slate-800 px-8 py-5 flex items-center justify-between sticky top-0 z-30">
      <div className="flex flex-col">
        <h1 className="font-bold text-xl text-white tracking-tight">{title}</h1>
        {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden sm:flex items-center">
          <Search className="w-4 h-4 text-slate-500 absolute left-3" />
          <input
            type="text"
            placeholder="Search orders, products, SKU..."
            className="bg-slate-800 border border-slate-700 text-xs text-slate-200 placeholder:text-slate-500 rounded-full pl-9 pr-4 py-2 w-64 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        {/* Live Status Badge */}
        <div className="hidden md:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Store Status: Online
        </div>

        {/* Notifications */}
        <button className="p-2.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full" />
        </button>

        {/* User Profile Pill */}
        <div className="flex items-center gap-3 pl-3 border-l border-slate-800">
          <div className="w-9 h-9 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs border border-amber-500/30">
            <User className="w-4 h-4" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs font-bold text-slate-200">Admin Manager</span>
            <span className="text-[10px] text-slate-500">Super Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
};
