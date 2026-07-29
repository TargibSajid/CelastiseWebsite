import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
  title: 'About CELASTISE | Our Story of Luxury Timepieces',
  description:
    'Discover CELASTISE story. Learn about our commitment to authentication, craftsmanship, and delivering value beyond expectations to watch collectors worldwide.',
  keywords: ['about celastise', 'luxury watch expertise', 'authenticated watches'],
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Our Story"
        subtitle="Passion for Precision"
        description="CELASTISE was founded on a simple principle: deliver authentic luxury timepieces with uncompromising standards"
        backgroundImage="linear-gradient(135deg, #f43f5e 0%, #1a1a1a 100%)"
      />
      <AboutContent />
    </>
  );
}
