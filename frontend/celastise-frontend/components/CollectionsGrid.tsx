'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { api } from '@/lib/api';
import { Product } from '@/lib/types';
import ProductCard from '@/components/ProductCard';
type SortOption = 'newest' | 'price-low' | 'price-high' | 'name';
export default function CollectionsGrid() {
  const [watches, setWatches] = useState<Product[]>([]);
  const [brand, setBrand] = useState('All');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [error, setError] = useState('');
  useEffect(() => { api.products().then(setWatches).catch(() => setError('Could not load products. Run backend on port 4000.')); }, []);
  const brands = useMemo(() => ['All', ...Array.from(new Set(watches.map(w => w.brand_name).filter(Boolean))) as string[]], [watches]);
  const filteredWatches = useMemo(() => {
    const result = watches.filter(w => brand === 'All' || w.brand_name === brand);
    switch (sortBy) { case 'price-low': return result.sort((a,b)=>Number(a.price)-Number(b.price)); case 'price-high': return result.sort((a,b)=>Number(b.price)-Number(a.price)); case 'name': return result.sort((a,b)=>a.name.localeCompare(b.name)); default: return result.sort((a,b)=>Number(b.product_id)-Number(a.product_id)); }
  }, [watches, brand, sortBy]);
  return <section className="py-24 bg-celastise-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div><h3 className="text-sm font-semibold text-celastise-900 mb-4 uppercase tracking-wider">Brand</h3><select value={brand} onChange={e=>setBrand(e.target.value)} className="w-full px-4 py-3 border rounded-lg bg-white">{brands.map(b=><option key={b}>{b}</option>)}</select></div>
      <div><h3 className="text-sm font-semibold text-celastise-900 mb-4 uppercase tracking-wider">Sort By</h3><select value={sortBy} onChange={e=>setSortBy(e.target.value as SortOption)} className="w-full px-4 py-3 border rounded-lg bg-white"><option value="newest">Newest</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option><option value="name">Name: A to Z</option></select></div>
      <div className="flex items-end"><p className="text-celastise-600">Showing {filteredWatches.length} of {watches.length} watches</p></div>
    </div>
    {error && <p className="mb-8 text-rose-600">{error}</p>}
    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{filteredWatches.map(w => <ProductCard key={w.product_id} product={w} />)}</motion.div>
  </div></section>;
}
