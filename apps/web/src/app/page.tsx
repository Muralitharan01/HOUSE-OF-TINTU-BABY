import React from 'react';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { TrustBadges } from '@/components/home/TrustBadges';
import { ShopByAge } from '@/components/home/ShopByAge';
import { CollectionGrid } from '@/components/home/CollectionGrid';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { GiftFinderTeaser } from '@/components/home/GiftFinderTeaser';
import { MemoryBookTeaser } from '@/components/home/MemoryBookTeaser';
import { ParentingJournal } from '@/components/home/ParentingJournal';
import { InstagramFeed } from '@/components/home/InstagramFeed';
import { CustomerReviews } from '@/components/home/CustomerReviews';
import { NewsletterSection } from '@/components/home/NewsletterSection';
import { MascotWidget } from '@/components/layout/MascotWidget';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <HeroCarousel />
      <TrustBadges />
      <ShopByAge />
      <CollectionGrid />
      <FeaturedProducts />
      <GiftFinderTeaser />
      <MemoryBookTeaser />
      <ParentingJournal />
      <InstagramFeed />
      <CustomerReviews />
      <NewsletterSection />
      <MascotWidget />
    </div>
  );
}
