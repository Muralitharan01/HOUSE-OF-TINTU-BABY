'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, Heart } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  const posts = [
    {
      id: 'ig-1',
      imageUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=600&auto=format&fit=crop',
      likes: '1.2k',
      caption: 'Little Kabir in his organic linen dungarees! 🌿 #HouseOfTintu',
    },
    {
      id: 'ig-2',
      imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=600&auto=format&fit=crop',
      likes: '894',
      caption: 'Morning giggles with the Tintu Soft Bunny. 🐰 #HouseOfTintu',
    },
    {
      id: 'ig-3',
      imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=600&auto=format&fit=crop',
      likes: '2.1k',
      caption: 'First wooden train ride around the nursery! 🚂 #HouseOfTintu',
    },
    {
      id: 'ig-4',
      imageUrl: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=600&auto=format&fit=crop',
      likes: '1.5k',
      caption: 'Twirling into birthday celebrations in double gauze cotton. 🌸 #HouseOfTintu',
    },
    {
      id: 'ig-5',
      imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=600&auto=format&fit=crop',
      likes: '1.8k',
      caption: 'Cozy cloud knit blanket naps. ☁️ #HouseOfTintu',
    },
    {
      id: 'ig-6',
      imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop',
      likes: '942',
      caption: 'Heirloom gift hampers packed with love. 🎁 #HouseOfTintu',
    },
  ];

  return (
    <section className="section-padding bg-[#FAF6F0] border-t border-[var(--color-border)]">
      <div className="container-hot">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[var(--color-border)] text-xs font-bold text-[#D97745] shadow-xs">
            <Instagram className="w-4 h-4" /> @HouseOfTintu
          </div>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-[#2D4A3E]">
            Follow Our Family Journeys ♡
          </h2>
          <p className="font-body text-sm text-[#4A5A53] max-w-md">
            Tag <span className="font-bold text-[#2D4A3E]">#HouseOfTintu</span> on Instagram to get featured in our storybook gallery.
          </p>
        </div>

        {/* 6 Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-3xl overflow-hidden bg-white border border-[var(--color-border)] shadow-md hover:-translate-y-2 transition-all duration-300"
            >
              <Image
                src={post.imageUrl}
                alt={post.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <Instagram className="w-5 h-5 ml-auto" />
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-1 text-xs font-bold">
                    <Heart className="w-3.5 h-3.5 fill-current text-rose-400" /> {post.likes}
                  </span>
                  <p className="text-[10px] line-clamp-2 opacity-90 leading-tight">
                    {post.caption}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
