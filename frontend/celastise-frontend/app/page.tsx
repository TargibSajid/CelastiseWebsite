import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import FeaturedCollection from '@/components/FeaturedCollection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'CELASTISE - Premium Luxury Watches | Authentic Timepieces',
  description:
    'Discover exquisite luxury watches from top brands. CELASTISE offers authenticated premium timepieces with white-glove service and lifetime support.',
  keywords: [
    'luxury watches',
    'rolex',
    'patek philippe',
    'omega',
    'vintage watches',
    'authenticated watches',
    'premium timepieces',
  ],
  alternates: {
    canonical: 'https://celastise.com',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="TIMELESS ELEGANCE REDEFINED"
        subtitle="Where Precision Meets Passion"
        backgroundImage="/Section1BG.webp"
      />

      {/* Featured Collection */}
      <FeaturedCollection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
