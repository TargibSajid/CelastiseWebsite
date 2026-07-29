export interface ProductImage { id?: number; image_url: string; color?: string; resolved?: string; images?: string[] }
export interface Brand { brand_id: number; brand_name: string; country?: string }
export interface Category { category_id: number; category_name: string }
export interface Product {
  product_id: number; name: string; buying_price?: number; price: number; discount?: number; stock?: number;
  category_id?: number; brand_id?: number; gender?: string; movement?: string; strap_type?: string;
  available_color?: string; dial?: string; watch_case?: string; glass?: string; include?: string;
  water_resistant?: string; description?: string; brand_name?: string; category_name?: string;
  images?: ProductImage[]; image?: string;
}
