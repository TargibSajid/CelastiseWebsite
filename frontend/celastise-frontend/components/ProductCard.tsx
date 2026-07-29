'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Product } from '@/lib/types';
import { productMainImage } from '@/lib/images';
import { useCart } from '@/store/cart';

export default function ProductCard({
  product,
  featured = false,
}: {
  product: Product;
  featured ?: boolean;
}) {
  const add = useCart((s) => s.add);
  const price = Number(product.price || 0);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all"
    >
      <Link
        href={`/products/${product.product_id}`}
        className="relative block aspect-[4/3] overflow-hidden bg-gray-100"
      >
        <img
          src={productMainImage(product)}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-rose-500">
          {product.brand_name || 'CELASTISE'} •{' '}
          {product.category_name || 'Luxury'}
        </p>

        <Link href={`/products/${product.product_id}`}>
          <h3 className="mb-2 min-h-[56px] line-clamp-2 text-lg font-bold text-gray-900 hover:text-rose-500 transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="mb-4 min-h-[60px] line-clamp-3 text-sm text-gray-600">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t pt-4">
          <span className="text-xl font-bold text-gray-900">
            {price
              ? new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'BDT',
                }).format(price)
              : 'Contact'}
          </span>

          <button
            onClick={() => add(product)}
            className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}