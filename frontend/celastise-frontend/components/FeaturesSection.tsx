'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: '🔐',
    title: 'Certified Authentic',
    description: 'Every timepiece is verified by expert authenticators and comes with a certificate of authenticity.',
  },
  {
    icon: '⚙️',
    title: 'Expert Craftsmanship',
    description: 'Meticulously restored and maintained by skilled horologists with decades of experience.',
  },
  {
    icon: '🌍',
    title: 'Worldwide Shipping',
    description: 'Fast and secure delivery to over 150 countries with full insurance coverage.',
  },
  {
    icon: '♻️',
    title: 'Premium Quality',
    description: 'Sourced from renowned Swiss and Japanese manufacturers with uncompromising standards.',
  },
  {
    icon: '💎',
    title: 'Luxury Experience',
    description: 'White-glove service and personalized consultation for the discerning collector.',
  },
  {
    icon: '✨',
    title: 'Lifetime Support',
    description: 'Lifetime warranty and access to our premium restoration and servicing services.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function FeaturesSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-celastise-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-luxury font-bold text-celastise-900 mb-6">
            Why Choose CELASTISE
          </h2>
          <p className="text-lg text-celastise-600 max-w-2xl mx-auto">
            We are committed to delivering an exceptional experience from discovery to ownership
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group relative p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-celastise-100 hover:border-rose-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-luxury font-bold text-celastise-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-celastise-600 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-1 h-12 bg-gradient-to-b from-rose-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 pt-20 border-t border-celastise-200"
        >
          <div className="text-center mb-12">
            <p className="text-sm font-body font-semibold text-rose-500 uppercase tracking-widest mb-4">
              Trusted By Collectors Worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <p className="text-4xl font-luxury font-bold text-celastise-900">10K+</p>
              <p className="text-celastise-600 text-sm mt-2">Happy Customers</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <p className="text-4xl font-luxury font-bold text-celastise-900">5K+</p>
              <p className="text-celastise-600 text-sm mt-2">Timepieces Sold</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <p className="text-4xl font-luxury font-bold text-celastise-900">20+</p>
              <p className="text-celastise-600 text-sm mt-2">Years of Excellence</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <p className="text-4xl font-luxury font-bold text-celastise-900">98%</p>
              <p className="text-celastise-600 text-sm mt-2">Satisfaction Rate</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
