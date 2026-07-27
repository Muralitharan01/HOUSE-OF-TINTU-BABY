'use client';

import React, { useState } from 'react';
import { AdminHeader } from '@/components/layout/AdminHeader';
import {
  Package,
  Plus,
  Search,
  Edit,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  Star,
  Eye,
  X,
} from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  stock: number;
  rating: number;
  badge: string;
  image: string;
  organic: boolean;
}

export default function AdminProductsPage() {
  const initialProducts: ProductItem[] = [
    { id: '1', name: 'Organic Linen Dungaree Set', category: 'Apparel', price: 1398, originalPrice: 1699, stock: 18, rating: 4.9, badge: 'BESTSELLER', image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=300&auto=format&fit=crop', organic: true },
    { id: '2', name: 'Artisan FSC Beechwood Train', category: 'Wooden Toys', price: 1199, originalPrice: 1499, stock: 3, rating: 5.0, badge: 'HEIRLOOM', image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=300&auto=format&fit=crop', organic: true },
    { id: '3', name: 'Cloud Knit Cellular Blanket', category: 'Nursery', price: 1099, originalPrice: 1299, stock: 25, rating: 4.8, badge: 'GOTS ORGANIC', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=300&auto=format&fit=crop', organic: true },
    { id: '4', name: 'Handcrafted Wooden Bunny Teether', category: 'Wooden Toys', price: 899, originalPrice: 999, stock: 12, rating: 4.9, badge: 'NON-TOXIC', image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=300&auto=format&fit=crop', organic: true },
    { id: '5', name: 'Double Gauze Cotton Dress', category: 'Apparel', price: 1499, originalPrice: 1799, stock: 2, rating: 5.0, badge: 'NEW', image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=300&auto=format&fit=crop', organic: true },
  ];

  const [products, setProducts] = useState<ProductItem[]>(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProdName, setNewProdName] = useState('');
  const [newProdCat, setNewProdCat] = useState('Apparel');
  const [newProdPrice, setNewProdPrice] = useState('1299');
  const [newProdStock, setNewProdStock] = useState('15');

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const newP: ProductItem = {
      id: Date.now().toString(),
      name: newProdName || 'New Organic Product',
      category: newProdCat,
      price: Number(newProdPrice),
      stock: Number(newProdStock),
      rating: 5.0,
      badge: 'NEW',
      image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=300&auto=format&fit=crop',
      organic: true,
    };
    setProducts([newP, ...products]);
    setShowAddModal(false);
    setNewProdName('');
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950">
      <AdminHeader title="Product Catalog Management" subtitle="Manage organic clothes, wooden toys, prices, stock levels, and badges" />

      <main className="p-8 flex flex-col gap-6">
        
        {/* Top Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search product name or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-xs text-slate-200 placeholder:text-slate-500 rounded-full pl-9 pr-4 py-2.5 outline-none focus:border-amber-500"
            />
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="w-full sm:w-auto btn-pill-primary px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-full flex items-center justify-center gap-2 shadow-md transition-colors"
          >
            <Plus className="w-4 h-4" /> Add New Product
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between gap-4 shadow-md hover:border-slate-700 transition-colors">
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-xl bg-slate-800 overflow-hidden relative flex-shrink-0 border border-slate-700">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
                      {prod.badge}
                    </span>
                    <h3 className="font-bold text-sm text-white line-clamp-1 mt-1">{prod.name}</h3>
                    <span className="text-xs text-slate-400">{prod.category}</span>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <span className="font-extrabold text-base text-amber-400">₹{prod.price}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      prod.stock <= 5 ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-emerald-500/20 text-emerald-300'
                    }`}>
                      {prod.stock <= 5 ? `Low Stock (${prod.stock})` : `${prod.stock} In Stock`}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-current" /> {prod.rating}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => alert(`Editing product: ${prod.name}`)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300"
                    title="Edit Product"
                  >
                    <Edit className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(prod.id)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 hover:text-rose-400 text-slate-400 transition-colors"
                    title="Delete Product"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <form onSubmit={handleAddProduct} className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 text-slate-200 flex flex-col gap-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-base text-amber-400">Add New Product</h3>
              <button type="button" onClick={() => setShowAddModal(false)} className="p-1 rounded-full text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-300">Product Name</label>
              <input
                type="text"
                required
                value={newProdName}
                onChange={(e) => setNewProdName(e.target.value)}
                placeholder="e.g. Organic Cotton Romper Set"
                className="bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white outline-none focus:border-amber-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-slate-300">Category</label>
                <select
                  value={newProdCat}
                  onChange={(e) => setNewProdCat(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white outline-none"
                >
                  <option value="Apparel">Apparel</option>
                  <option value="Wooden Toys">Wooden Toys</option>
                  <option value="Nursery">Nursery</option>
                  <option value="Gifts">Gift Hampers</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-slate-300">Price (₹)</label>
                <input
                  type="number"
                  required
                  value={newProdPrice}
                  onChange={(e) => setNewProdPrice(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-300">Initial Stock Quantity</label>
              <input
                type="number"
                required
                value={newProdStock}
                onChange={(e) => setNewProdStock(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold mt-2"
            >
              Save Product to Catalog
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
