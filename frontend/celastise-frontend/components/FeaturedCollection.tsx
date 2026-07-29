'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { api } from '@/lib/api';
import { Product } from '@/lib/types';
import ProductCard from '@/components/ProductCard';
export default function FeaturedCollection() {
  const [watches, setWatches] = useState<Product[]>([]);
  const [error, setError] = useState('');
  useEffect(() => { api.featured().then(setWatches).catch(() => setError('Start the NestJS backend to load products from MySQL.')); }, []);
  return <section className="relative py-24 bg-celastise-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-20">
      <p className="text-sm font-body font-semibold text-rose-500 uppercase tracking-widest mb-4">Our Collection</p>
      <h2 className="text-5xl lg:text-6xl font-luxury font-bold text-celastise-900 mb-6">Curated Timepieces</h2>
      <p className="text-lg text-celastise-600 max-w-2xl mx-auto">Live products, details and photos are loaded from your MySQL database and public watch collection.</p>
      {error && <p className="mt-4 text-sm text-rose-600">{error}</p>}
    </motion.div>
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {watches.map((watch, i) => <ProductCard key={watch.product_id} product={watch} featured={i === 0 || i === 2} />)}
    </motion.div>
    <div className="text-center"><Link href="/collections" className="inline-block px-12 py-4 bg-gradient-to-r from-celastise-600 to-rose-500 text-white rounded-lg font-semibold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all">View All Collections</Link></div>
  </div></section>;
}
