'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'James Mitchell',
    role: 'Watch Collector',
    image: '👨‍💼',
    rating: 5,
    text: 'CELASTISE transformed my understanding of luxury timepieces. The authentication process was thorough and the service exceptional. Highly recommended!',
  },
  {
    name: 'Sarah Anderson',
    role: 'Jewelry Enthusiast',
    image: '👩‍💼',
    rating: 5,
    text: 'Every detail matters, and CELASTISE proves it. From packaging to the watch itself, everything speaks to their commitment to excellence.',
  },
  {
    name: 'David Chen',
    role: 'CEO, Tech Startup',
    image: '👨‍💻',
    rating: 5,
    text: 'As someone who appreciates precision, CELASTISE impressed me. The vintage Rolex I purchased is in pristine condition. Outstanding!',
  },
  {
    name: 'Emma Laurent',
    role: 'Fashion Blogger',
    image: '👩‍🎨',
    rating: 5,
    text: 'CELASTISE isn\'t just selling watches; they\'re curating stories. The personal consultation helped me find my perfect timepiece.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-celastise-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-body font-semibold text-rose-400 uppercase tracking-widest mb-4">
            Voices of Excellence
          </p>
          <h2 className="text-5xl lg:text-6xl font-luxury font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-celastise-300 max-w-2xl mx-auto">
            Join thousands of satisfied collectors who have found their perfect timepiece
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 bg-gradient-to-br from-celastise-800 to-celastise-900 rounded-xl border border-celastise-700 hover:border-rose-500 transition-all duration-300"
            >
              {/* Quote Mark */}
              <div className="absolute top-4 left-4 text-4xl text-rose-500 opacity-30">
                "
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-xl">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Text */}
              <p className="text-celastise-100 text-base leading-relaxed mb-6 italic">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-celastise-700">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-celastise-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-l-40 border-t-40 border-l-transparent border-t-transparent group-hover:border-t-rose-500 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white"
        >
          <div className="p-6">
            <p className="text-4xl font-luxury font-bold text-rose-400 mb-2">4.9/5</p>
            <p className="text-celastise-300">Average Rating</p>
          </div>
          <div className="p-6 border-l border-r border-celastise-700">
            <p className="text-4xl font-luxury font-bold text-rose-400 mb-2">2,847</p>
            <p className="text-celastise-300">5-Star Reviews</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-luxury font-bold text-rose-400 mb-2">99%</p>
            <p className="text-celastise-300">Customer Retention</p>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-rose-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
}
