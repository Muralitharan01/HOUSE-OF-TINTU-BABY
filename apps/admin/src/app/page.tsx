'use client';

import React from 'react';
import { AdminHeader } from '@/components/layout/AdminHeader';
import {
  TrendingUp,
  ShoppingBag,
  Package,
  Users,
  ArrowUpRight,
  Flame,
  CheckCircle,
  Eye,
  Sliders,
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const stats = [
    { title: 'Total Revenue', value: '₹4,82,900', change: '+18.4% vs last month', isUp: true, icon: TrendingUp },
    { title: 'Total Orders', value: '1,284', change: '+12.1% this week', isUp: true, icon: ShoppingBag },
    { title: 'Active Catalog', value: '148 Products', change: '5 Low Stock items', isUp: false, icon: Package },
    { title: 'Registered Parents', value: '10,420', change: '+240 new signups', isUp: true, icon: Users },
  ];

  const recentOrders = [
    { id: 'HOT-94820', customer: 'Ananya Sharma', items: 'Linen Dungaree Set (x1)', total: '₹1,398', status: 'Packed', date: '10 mins ago' },
    { id: 'HOT-94819', customer: 'Priya Mukherjee', items: 'Tintu Cuddle Bunny (x2)', total: '₹1,798', status: 'Shipped', date: '45 mins ago' },
    { id: 'HOT-94818', customer: 'Kavita Menon', items: 'Cloud Knit Blanket (x1)', total: '₹1,099', status: 'Delivered', date: '2 hours ago' },
    { id: 'HOT-94817', customer: 'Rohan Gupta', items: 'Heritage Wooden Train (x1)', total: '₹1,199', status: 'Pending', date: '3 hours ago' },
  ];

  const topProducts = [
    { name: 'Organic Linen Dungaree Set', category: 'Apparel', sales: '240 units', revenue: '₹3,35,520', rating: '4.9 ★' },
    { name: 'Artisan FSC Wooden Train Set', category: 'Wooden Toys', sales: '185 units', revenue: '₹2,21,815', rating: '5.0 ★' },
    { name: 'Cloud Knit Cellular Swaddle', category: 'Nursery', sales: '310 units', revenue: '₹3,40,690', rating: '4.8 ★' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950">
      <AdminHeader title="Executive Dashboard" subtitle="Real-time sales, order pipeline, and storefront analytics" />

      <main className="p-8 flex flex-col gap-8">
        
        {/* Top 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col gap-3 shadow-md hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{stat.title}</span>
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <span className="text-3xl font-extrabold text-white tracking-tight">{stat.value}</span>
                <div className="flex items-center gap-1 text-xs font-bold">
                  <span className={stat.isUp ? 'text-emerald-400' : 'text-rose-400'}>{stat.change}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2 Column Layout: Recent Orders & Top Selling Products */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Live Orders Pipeline */}
          <div className="lg:col-span-8 bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-white">Live Orders Pipeline</h3>
                <p className="text-xs text-slate-400">Real-time incoming customer orders requiring fulfillment</p>
              </div>
              <Link href="/orders" className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1">
                View All Orders <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="text-slate-400 border-b border-slate-800 uppercase tracking-wider text-[10px] bg-slate-950/50">
                  <tr>
                    <th className="py-3 px-4 rounded-l-xl">Order ID</th>
                    <th className="py-3 px-4">Customer</th>
                    <th className="py-3 px-4">Items</th>
                    <th className="py-3 px-4">Total</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 rounded-r-xl">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {recentOrders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-slate-850 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-amber-400">{ord.id}</td>
                      <td className="py-3.5 px-4 font-medium text-slate-200">{ord.customer}</td>
                      <td className="py-3.5 px-4 text-slate-400">{ord.items}</td>
                      <td className="py-3.5 px-4 font-bold text-white">{ord.total}</td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          ord.status === 'Delivered'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        }`}>
                          {ord.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-400">{ord.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Top Selling Leaderboard */}
          <div className="lg:col-span-4 bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-white">Top Selling Products</h3>
              <Flame className="w-4 h-4 text-amber-400" />
            </div>

            <div className="flex flex-col gap-3">
              {topProducts.map((prod, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-200 line-clamp-1">{prod.name}</span>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
                      {prod.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                    <span>{prod.category} • {prod.sales}</span>
                    <span className="font-bold text-slate-200">{prod.revenue}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/products" className="btn-pill-primary w-full py-2.5 text-center text-xs block font-bold bg-amber-500 text-slate-950 rounded-xl hover:bg-amber-400 transition-colors">
              Manage Product Catalog
            </Link>
          </div>

        </div>

      </main>
    </div>
  );
}
