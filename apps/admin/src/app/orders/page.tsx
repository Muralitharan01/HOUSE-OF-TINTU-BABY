'use client';

import React, { useState } from 'react';
import { AdminHeader } from '@/components/layout/AdminHeader';
import {
  ShoppingBag,
  Search,
  Filter,
  Download,
  Printer,
  CheckCircle2,
  Clock,
  Truck,
  XCircle,
  Eye,
} from 'lucide-react';

interface OrderItem {
  id: string;
  orderNumber: string;
  customerName: string;
  email: string;
  phone: string;
  city: string;
  items: string;
  amount: string;
  paymentMethod: 'Razorpay UPI' | 'Credit Card' | 'Cash on Delivery';
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  date: string;
  giftWrap: boolean;
}

export default function AdminOrdersPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedOrder, setSelectedOrder] = useState<OrderItem | null>(null);

  const initialOrders: OrderItem[] = [
    { id: '1', orderNumber: 'HOT-94820', customerName: 'Ananya Sharma', email: 'ananya@gmail.com', phone: '+91 98765 43210', city: 'Mumbai', items: 'Linen Dungaree Set (x1), Soft Bunny (x1)', amount: '₹2,297', paymentMethod: 'Razorpay UPI', status: 'Processing', date: '2026-07-27 10:15', giftWrap: true },
    { id: '2', orderNumber: 'HOT-94819', customerName: 'Priya Mukherjee', email: 'priya.m@gmail.com', phone: '+91 91234 56789', city: 'Kolkata', items: 'Tintu Cuddle Bunny (x2)', amount: '₹1,798', paymentMethod: 'Credit Card', status: 'Shipped', date: '2026-07-27 09:40', giftWrap: false },
    { id: '3', orderNumber: 'HOT-94818', customerName: 'Kavita Menon', email: 'kavita@yahoo.com', phone: '+91 99887 76655', city: 'Bengaluru', items: 'Cloud Knit Blanket (x1)', amount: '₹1,099', paymentMethod: 'Razorpay UPI', status: 'Delivered', date: '2026-07-26 18:20', giftWrap: true },
    { id: '4', orderNumber: 'HOT-94817', customerName: 'Rohan Gupta', email: 'rohan.g@gmail.com', phone: '+91 97654 32109', city: 'Delhi', items: 'Heritage Wooden Train Set (x1)', amount: '₹1,199', paymentMethod: 'Cash on Delivery', status: 'Pending', date: '2026-07-26 15:10', giftWrap: false },
    { id: '5', orderNumber: 'HOT-94816', customerName: 'Meera Patel', email: 'meera.patel@gmail.com', phone: '+91 98989 89898', city: 'Ahmedabad', items: 'Organic Gauze Dress (x1)', amount: '₹1,299', paymentMethod: 'Razorpay UPI', status: 'Delivered', date: '2026-07-25 14:30', giftWrap: true },
  ];

  const [orders, setOrders] = useState<OrderItem[]>(initialOrders);

  const filteredOrders = orders.filter((ord) => {
    const matchesFilter = activeFilter === 'All' || ord.status === activeFilter;
    const matchesSearch =
      ord.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ord.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ord.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const updateStatus = (id: string, newStatus: OrderItem['status']) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
    );
    if (selectedOrder && selectedOrder.id === id) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950">
      <AdminHeader title="Order Pipeline Management" subtitle="Manage incoming orders, update shipping tracking, and print invoices" />

      <main className="p-8 flex flex-col gap-6">
        
        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800">
          
          {/* Status Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            {['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map((st) => (
              <button
                key={st}
                onClick={() => setActiveFilter(st)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeFilter === st
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Actions & Search */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Filter by Order # or Customer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-xs text-slate-200 placeholder:text-slate-500 rounded-full pl-8 pr-4 py-2 outline-none focus:border-amber-500"
              />
            </div>
            <button
              onClick={() => alert('📥 Exporting Orders Report (CSV)')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-750 text-xs font-bold text-slate-200 border border-slate-700"
            >
              <Download className="w-3.5 h-3.5" /> Export CSV
            </button>
          </div>

        </div>

        {/* Orders Table */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-slate-400 border-b border-slate-800 uppercase tracking-wider text-[10px] bg-slate-950/70">
                <tr>
                  <th className="py-3.5 px-5">Order #</th>
                  <th className="py-3.5 px-5">Customer</th>
                  <th className="py-3.5 px-5">City</th>
                  <th className="py-3.5 px-5">Items Purchased</th>
                  <th className="py-3.5 px-5">Amount</th>
                  <th className="py-3.5 px-5">Payment</th>
                  <th className="py-3.5 px-5">Status</th>
                  <th className="py-3.5 px-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredOrders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-slate-850 transition-colors">
                    <td className="py-4 px-5 font-bold text-amber-400">
                      {ord.orderNumber}
                      {ord.giftWrap && <span className="block text-[9px] text-[#D97745] font-normal">🎁 Gift Wrapped</span>}
                    </td>
                    <td className="py-4 px-5">
                      <span className="font-bold text-slate-200 block">{ord.customerName}</span>
                      <span className="text-[10px] text-slate-500">{ord.email}</span>
                    </td>
                    <td className="py-4 px-5 text-slate-300">{ord.city}</td>
                    <td className="py-4 px-5 text-slate-400 max-w-xs truncate">{ord.items}</td>
                    <td className="py-4 px-5 font-extrabold text-white">{ord.amount}</td>
                    <td className="py-4 px-5 text-slate-300">{ord.paymentMethod}</td>
                    <td className="py-4 px-5">
                      <select
                        value={ord.status}
                        onChange={(e) => updateStatus(ord.id, e.target.value as any)}
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-full border outline-none bg-slate-950 ${
                          ord.status === 'Delivered'
                            ? 'text-emerald-400 border-emerald-500/40'
                            : ord.status === 'Shipped'
                            ? 'text-sky-400 border-sky-500/40'
                            : ord.status === 'Processing'
                            ? 'text-amber-400 border-amber-500/40'
                            : 'text-slate-400 border-slate-700'
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="py-4 px-5 text-right">
                      <button
                        onClick={() => setSelectedOrder(ord)}
                        className="p-2 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-300 transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* Order Details & Invoice Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 text-slate-200 flex flex-col gap-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="font-bold text-lg text-amber-400">{selectedOrder.orderNumber}</h3>
                <span className="text-xs text-slate-400">Placed on {selectedOrder.date}</span>
              </div>
              <button
                onClick={() => alert(`🖨️ Printing Tax Invoice for ${selectedOrder.orderNumber}`)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400"
              >
                <Printer className="w-3.5 h-3.5" /> Print Invoice
              </button>
            </div>

            <div className="flex flex-col gap-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Customer Name:</span>
                <span className="font-bold">{selectedOrder.customerName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Contact:</span>
                <span>{selectedOrder.phone}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Shipping Address:</span>
                <span>{selectedOrder.city}, India</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Items:</span>
                <span className="font-medium text-amber-300">{selectedOrder.items}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Signature Gift Wrap:</span>
                <span>{selectedOrder.giftWrap ? 'Yes (Personalized Card Included)' : 'No'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Payment Mode:</span>
                <span>{selectedOrder.paymentMethod}</span>
              </div>
              <div className="flex justify-between py-1 pt-2 font-bold text-sm">
                <span>Total Amount Paid:</span>
                <span className="text-amber-400 text-base">{selectedOrder.amount}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedOrder(null)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white mt-2"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
