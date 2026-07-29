'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-celastise-900 via-rose-900 to-celastise-900 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-rose-400/20 to-transparent rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Heading */}
          <h2 className="text-5xl lg:text-6xl font-luxury font-bold text-white leading-tight">
            Ready to Own Your Perfect Timepiece?
          </h2>

          {/* Description */}
          <p className="text-xl text-rose-100 max-w-2xl mx-auto leading-relaxed">
            Join our exclusive community of collectors and enthusiasts. Get expert guidance, authentication, and lifetime support for your most treasured possession.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/collections"
                className="inline-block px-12 py-4 bg-white text-celastise-900 rounded-lg font-semibold uppercase tracking-widest shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Start Exploring
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="inline-block px-12 py-4 border-2 border-white text-white rounded-lg font-semibold uppercase tracking-widest hover:bg-white/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </motion.div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-8 justify-center pt-8 border-t border-white/20 mt-8"
          >
            <div className="text-center">
              <p className="text-sm text-rose-200 font-semibold">✓ Authenticity Guaranteed</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-rose-200 font-semibold">✓ Free Shipping Worldwide</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-rose-200 font-semibold">✓ 30-Day Money Back</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
