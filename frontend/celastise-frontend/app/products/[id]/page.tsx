'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { api } from '@/lib/api';
import { Product } from '@/lib/types';
import { productGallery } from '@/lib/images';
import { useCart } from '@/store/cart';
import ProductCard from '@/components/ProductCard';
export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null); const [recommended, setRecommended] = useState<Product[]>([]); const [active, setActive] = useState(''); const add = useCart(s => s.add);
  useEffect(() => { api.product(params.id).then(p => { setProduct(p); setActive(productGallery(p)[0]); }); api.recommended(params.id).then(setRecommended).catch(()=>{}); }, [params.id]);
  if (!product) return <main className="min-h-screen p-10 text-center">Loading product details from database...</main>;
  const gallery = productGallery(product); const specs = [['Brand', product.brand_name], ['Category', product.category_name], ['Gender', product.gender], ['Movement', product.movement], ['Strap', product.strap_type], ['Color', product.available_color], ['Dial', product.dial], ['Case', product.watch_case], ['Glass', product.glass], ['Includes', product.include], ['Water Resistant', product.water_resistant], ['Stock', product.stock?.toString()]];
  return <main className="bg-celastise-50 min-h-screen py-12"><div className="max-w-7xl mx-auto px-4"><Link href="/collections" className="text-rose-500 font-semibold">← Back to collection</Link><div className="grid lg:grid-cols-2 gap-12 mt-8">
    <div><div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[520px]"><img src={active || gallery[0]} alt={product.name} className="w-full h-full object-cover" /></div><div className="grid grid-cols-5 gap-3 mt-4">{gallery.map(img => <button key={img} onClick={()=>setActive(img)} className="h-24 rounded-lg overflow-hidden border bg-white"><img src={img} className="w-full h-full object-cover" /></button>)}</div></div>
    <div className="bg-white rounded-2xl shadow-lg p-8"><p className="text-sm text-rose-500 uppercase tracking-widest font-semibold">{product.brand_name}</p><h1 className="text-4xl font-luxury font-bold text-celastise-900 mt-2">{product.name}</h1><p className="text-3xl font-bold mt-6">{Number(product.price) ? `$${Number(product.price).toLocaleString()}` : 'Contact for price'}</p><p className="text-celastise-700 mt-6 leading-7">{product.description}</p><button onClick={()=>add(product)} className="mt-8 w-full py-4 bg-rose-500 text-white rounded-lg font-bold hover:bg-rose-600">Add to Cart</button><Link href="/checkout" className="mt-3 block text-center w-full py-4 bg-celastise-900 text-white rounded-lg font-bold">Proceed to Checkout</Link><div className="grid sm:grid-cols-2 gap-4 mt-8">{specs.filter(([,v])=>v).map(([k,v])=><div key={k} className="border rounded-lg p-3"><p className="text-xs uppercase text-celastise-500">{k}</p><p className="text-sm font-semibold text-celastise-900">{v}</p></div>)}</div></div>
  </div><section className="mt-20"><h2 className="text-3xl font-luxury font-bold mb-8">Similar Recommended Watches</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{recommended.map(p => <ProductCard key={p.product_id} product={p} />)}</div></section></div></main>;
}
