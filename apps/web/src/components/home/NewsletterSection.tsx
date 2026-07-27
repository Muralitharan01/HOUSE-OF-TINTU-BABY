'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#F4EBE1] to-[#FAF6F0]">
      <div className="container-hot">
        <div className="bg-[#2D4A3E] text-[#FAF6F0] p-8 sm:p-14 lg:p-18 rounded-[40px] relative overflow-hidden shadow-2xl flex flex-col items-center text-center">
          
          {/* Cloud & Atmosphere Background */}
          <div className="absolute -top-10 -left-10 text-6xl opacity-20 select-none animate-cloud-slow">
            ☁️
          </div>
          <div className="absolute -bottom-10 -right-10 text-6xl opacity-20 select-none animate-cloud-slow">
            ☁️
          </div>

          {/* Cute Teddy Bear Mascot Box */}
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-4xl mb-6 border border-white/20 shadow-inner animate-balloon">
            🧸
          </div>

          <h2 className="font-display font-medium text-3xl sm:text-5xl text-white mb-3">
            Join the Tintu Family ♡
          </h2>
          <p className="font-body text-sm sm:text-base text-emerald-100/90 max-w-lg mb-8 leading-relaxed">
            Be the first to know about secret storybook collection drops, heirloom gift guides, and exclusive member discount drops.
          </p>

          {subscribed ? (
            <div className="bg-emerald-500/20 border border-emerald-400/40 p-4 rounded-2xl text-emerald-200 text-sm font-semibold animate-in zoom-in-95">
              🎉 Thank you for joining! We&apos;ve sent a welcome surprise to your inbox.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-white/15 border border-white/25 text-white placeholder:text-white/60 focus:border-[#D97745] focus:bg-white/20 outline-none rounded-full px-6 py-4 text-sm flex-1 transition-all"
                required
              />
              <button
                type="submit"
                className="btn-pill-accent py-4 px-8 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                SUBSCRIBE <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="text-[11px] text-white/50 mt-4 font-ui">
            We respect your privacy. Unsubscribe anytime with 1 click.
          </p>

        </div>
      </div>
    </section>
  );
};
