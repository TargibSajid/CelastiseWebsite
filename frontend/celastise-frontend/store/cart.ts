'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/lib/types';
import { productMainImage } from '@/lib/images';
export interface CartItem { product_id: number; name: string; brand_name?: string; price: number; image: string; quantity: number }
interface CartState { items: CartItem[]; add: (product: Product, qty?: number) => void; inc: (id: number) => void; dec: (id: number) => void; remove: (id: number) => void; clear: () => void; total: () => number; count: () => number }
export const useCart = create<CartState>()(persist((set, get) => ({
  items: [],
  add: (product, qty = 1) => set(state => {
    const found = state.items.find(i => i.product_id === product.product_id);
    if (found) return { items: state.items.map(i => i.product_id === product.product_id ? { ...i, quantity: i.quantity + qty } : i) };
    return { items: [...state.items, { product_id: product.product_id, name: product.name, brand_name: product.brand_name, price: Number(product.price || 0), image: productMainImage(product), quantity: qty }] };
  }),
  inc: id => set(s => ({ items: s.items.map(i => i.product_id === id ? { ...i, quantity: i.quantity + 1 } : i) })),
  dec: id => set(s => ({ items: s.items.map(i => i.product_id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i) })),
  remove: id => set(s => ({ items: s.items.filter(i => i.product_id !== id) })),
  clear: () => set({ items: [] }),
  total: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
  count: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
}), { name: 'celastise-cart' }));
