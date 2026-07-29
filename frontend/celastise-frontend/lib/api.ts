import { Product } from './types';
const API_BASE = 'https://www.celastise.com/api';

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, { ...options, credentials: 'include', cache: 'no-store', headers: { 'Content-Type': 'application/json', ...(options.headers || {}) } });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
export const api = {
  products: () => request<Product[]>('/product'),
  featured: () => request<Product[]>('/product/featured'),
  product: (id: string | number) => request<Product>(`/product/${id}`),
  recommended: (id: string | number) => request<Product[]>(`/product/${id}/recommended`),
  login: (email: string, password: string) => request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),
  signup: (name: string, email: string, password: string, phone?: string, address?: string) => request('/auth/signup', { method: 'POST', body: JSON.stringify({ name, email, password, phone, address }) }),
  me: () => request('/auth/me'),
  createOrder: (payload: any) => request('/orders', { method: 'POST', body: JSON.stringify(payload) }),
};
