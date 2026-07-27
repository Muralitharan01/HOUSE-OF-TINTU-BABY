'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Heart, ShoppingBag, Menu, X, Sparkles } from 'lucide-react';
import { useCartStore, useWishlistStore } from '@/store/useAppStore';

export const FloatingNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const cartCount = useCartStore((state) => state.getTotalCount());
  const toggleCart = useCartStore((state) => state.toggleCart);
  const wishlistCount = useWishlistStore((state) => state.wishlistIds.length);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/collections' },
    { name: 'Gift Finder', href: '/gift-finder', highlight: true },
    { name: 'Memory Book', href: '/memory-book' },
    { name: 'Journal', href: '/journal' },
  ];

  return (
    <>
      {/* Sticky Header Bar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-white/95 backdrop-blur-md shadow-xs border-b border-[var(--color-border)]'
            : 'py-3.5 bg-[#FAF6F0]'
        }`}
      >
        <div className="container-hot flex items-center justify-between gap-2">
          
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-full hover:bg-black/5 text-[#2D4A3E] flex-shrink-0"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Brand Logo & Mascot */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2D4A3E] text-white flex items-center justify-center font-bold text-base sm:text-xl shadow-xs group-hover:scale-105 transition-transform">
              🧸
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-2xl leading-none text-[#2D4A3E]">
                House of Tintu
              </span>
              <span className="font-ui text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[#8A9A92] font-bold mt-0.5 hidden xs:block">
                Luxury Baby & Kids
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-body text-xs sm:text-sm font-semibold transition-colors nav-link-effect py-1 ${
                  link.highlight
                    ? 'text-[#D97745] flex items-center gap-1.5 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20'
                    : 'text-[#1E2824] hover:text-[#D97745]'
                }`}
              >
                {link.highlight && <Sparkles className="w-3.5 h-3.5 text-amber-500" />}
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Header Right Quick Actions */}
          <div className="flex items-center gap-1 sm:gap-2.5 flex-shrink-0">
            
            {/* Search Action */}
            <div className="relative flex items-center">
              {searchOpen ? (
                <div className="flex items-center gap-1.5 bg-white border border-[var(--color-border)] rounded-full px-2.5 py-1 shadow-sm animate-in slide-in-from-right duration-200">
                  <Search className="w-3.5 h-3.5 text-[#8A9A92]" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-24 sm:w-40 text-xs bg-transparent border-none outline-none"
                    autoFocus
                  />
                  <button onClick={() => setSearchOpen(false)} className="p-0.5 text-[#8A9A92]">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 rounded-full hover:bg-black/5 text-[#2D4A3E]"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
            </div>

            {/* Wishlist Action */}
            <Link
              href="/wishlist"
              className="p-2 rounded-full hover:bg-black/5 text-[#2D4A3E] relative"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-rose-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => toggleCart()}
              className="btn-pill-primary py-2 px-3 sm:px-4 text-xs flex items-center gap-1.5 shadow-sm"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline font-bold">Cart</span>
              {cartCount > 0 && (
                <span className="bg-[#D97745] text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

          </div>
        </div>
      </header>

      {/* Top-Level Full-Screen Mobile Drawer Modal (z-[99999] so nothing on page can overlap it) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[99999] bg-[#FAF6F0] flex flex-col p-6 overflow-y-auto animate-in fade-in duration-200 lg:hidden min-h-screen w-screen">
          {/* Drawer Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#2D4A3E] text-white flex items-center justify-center text-xl font-bold shadow-sm">
                🧸
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-[#2D4A3E]">
                  House of Tintu
                </span>
                <span className="font-ui text-[9px] uppercase tracking-wider text-[#8A9A92] font-bold">
                  Luxury Baby & Kids
                </span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-full bg-black/5 text-[#2D4A3E] hover:bg-black/10 active:scale-95 transition-transform"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <div className="flex flex-col gap-2 mt-6 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-2xl font-medium text-[#1E2824] hover:text-[#D97745] py-3 border-b border-[var(--color-border)]/40 flex items-center justify-between transition-colors"
              >
                <span>{link.name}</span>
                {link.highlight && <Sparkles className="w-5 h-5 text-amber-500" />}
              </Link>
            ))}
          </div>

          {/* Drawer Footer Action */}
          <div className="pt-6 border-t border-[var(--color-border)] mt-auto flex flex-col gap-3">
            <Link
              href="/account"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-pill-primary w-full py-4 text-sm font-bold text-center block shadow-md"
            >
              My Account / Orders
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
