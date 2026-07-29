import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import CollectionsGrid from '@/components/CollectionsGrid';

export const metadata: Metadata = {
  title: 'Watch Collections | CELASTISE Luxury Timepieces',
  description:
    'Browse our complete collection of authenticated luxury watches. Filter by brand, category, price range, and more. Find your perfect timepiece today.',
  keywords: [
    'watch collections',
    'luxury watches for sale',
    'authenticated timepieces',
    'rolex collection',
    'patek philippe watches',
  ],
};

export default function CollectionsPage() {
  return (
    <>
      <Hero
        title="Our Complete Collection"
        subtitle="Curated Excellence"
        description="Explore our carefully selected collection of luxury timepieces from the world's finest watchmakers"
        backgroundImage="linear-gradient(135deg, #cdb8a0 0%, #7d6d55 100%)"
      />
      <CollectionsGrid />
    </>
  );
}
