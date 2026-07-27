'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Layers,
  Image as ImageIcon,
  Flame,
  Settings,
  Star,
  Users,
  ExternalLink,
  Store,
} from 'lucide-react';

export const AdminSidebar: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Orders Pipeline', href: '/orders', icon: ShoppingBag, badge: '12 New' },
    { name: 'Product Catalog', href: '/products', icon: Package },
    { name: 'Categories & Ages', href: '/categories', icon: Layers },
    { name: 'Festival Banners', href: '/banners', icon: Flame, badge: 'Pongal Active' },
    { name: 'Media & Asset Library', href: '/media', icon: ImageIcon },
    { name: 'Customer Reviews', href: '/reviews', icon: Star },
    { name: 'Store Settings & SEO', href: '/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between flex-shrink-0 min-h-screen text-slate-300">
      <div>
        {/* Brand Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-400 text-slate-950 flex items-center justify-center font-bold text-xl shadow-md">
              🧸
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base text-white leading-tight">House of Tintu</span>
              <span className="text-[10px] text-amber-400 font-semibold tracking-wider uppercase">Control Panel v2.0</span>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="p-4 flex flex-col gap-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3 my-2">
            Main Management
          </span>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-slate-950 text-amber-400' : 'bg-amber-500/20 text-amber-300'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Storefront Link */}
      <div className="p-4 border-t border-slate-800 flex flex-col gap-3">
        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-xs font-bold text-slate-200 border border-slate-700 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Store className="w-4 h-4 text-emerald-400" />
            <span>View Live Store</span>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
        </a>
      </div>
    </aside>
  );
};
