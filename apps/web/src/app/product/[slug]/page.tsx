import React from 'react';
import { PRODUCTS } from '@/data/mockData';
import { ProductDetailClient } from '@/components/product/ProductDetailClient';

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  return <ProductDetailClient initialProduct={product} />;
}
