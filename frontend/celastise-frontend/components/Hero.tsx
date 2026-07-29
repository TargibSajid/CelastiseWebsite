'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  cta?: {
    label: string;
    href: string;
  };
}

export default function Hero({
  title = 'TIMELESS ELEGANCE REDEFINED',
  subtitle = 'Where Precision Meets Passion',
  description = 'Discover our exclusive collection of luxury watches, crafted with meticulous attention to detail and inspired by the finest traditions of Swiss watchmaking.',
  backgroundImage = '/Section1BG.webp',
  cta = { label: 'Explore Collection', href: '/collections' },
}: HeroProps) {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-rose-500/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-celastise-400/20 to-transparent rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Subtitle */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <p className="text-sm font-body font-semibold text-white uppercase tracking-widest">
                {subtitle}
              </p>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-luxury font-bold text-white leading-tight drop-shadow-2xl"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={cta.href}
                className="inline-block px-10 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg font-semibold uppercase tracking-widest shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {cta.label}
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="inline-block px-10 py-4 border-2 border-white text-white rounded-lg font-semibold uppercase tracking-widest hover:bg-white/10 transition-all duration-300">
                View Lookbook
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="pt-8"
          >
            <p className="text-white/70 text-sm mb-2">Scroll to discover</p>
            <svg
              className="w-6 h-6 mx-auto text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
