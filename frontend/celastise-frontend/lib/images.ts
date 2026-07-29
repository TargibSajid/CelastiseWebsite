import manifest from '@/lib/collection-manifest.json';
const map = manifest as Record<string, string[]>;
export function resolveImages(folder?: string, fallback = '/Section1BG.webp'): string[] {
  if (!folder) return [fallback];
  const exact = map[folder];
  if (exact?.length) return exact;
  const normalized = folder.replace('/watches/', '/Collection/').replace(/^\/Collection\/watches\//, '/Collection/');
  if (map[normalized]?.length) return map[normalized];
  const key = Object.keys(map).find(k => k.toLowerCase() === normalized.toLowerCase()) || Object.keys(map).find(k => normalized.toLowerCase().startsWith(k.toLowerCase()) || k.toLowerCase().startsWith(normalized.toLowerCase()));
  return key ? map[key] : [fallback];
}
export function productMainImage(product: any): string {
  const img = product?.images?.[0]?.image_url || product?.image;
  return resolveImages(img)[0];
}
export function productGallery(product: any): string[] {
  const paths = product?.images?.flatMap((i: any) => resolveImages(i.image_url)) || [];
  return paths.length ? Array.from(new Set(paths)) : [productMainImage(product)];
}
