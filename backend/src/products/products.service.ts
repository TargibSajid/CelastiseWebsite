import { Injectable, NotFoundException } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";
@Injectable()
export class ProductsService {
  constructor(private db: DatabaseService) {}
  private async attachImages(products: any[]) {
    if (!products.length) return products;
    const ids = products.map((p) => p.product_id);
    const imgs = await this.db.query(
      `SELECT * FROM product_images WHERE product_id IN (${ids.map(() => "?").join(",")})`,
      ids,
    );
    return products.map((p) => ({
      ...p,
      price: Number(p.price || 0),
      images: imgs.filter((i: any) => i.product_id === p.product_id),
      image:
        imgs.find((i: any) => i.product_id === p.product_id)?.image_url || null,
    }));
  }
  async all() {
    const rows = await this.db.query(
      `SELECT p.*, b.brand_name, c.category_name FROM products p LEFT JOIN brands b ON b.brand_id=p.brand_id LEFT JOIN categories c ON c.category_id=p.category_id ORDER BY p.product_id DESC`,
    );
    return this.attachImages(rows);
  }
  async featured() {
    const rows = await this.db.query(
      `SELECT p.*, b.brand_name, c.category_name FROM products p LEFT JOIN brands b ON b.brand_id=p.brand_id LEFT JOIN categories c ON c.category_id=p.category_id ORDER BY (p.price>0) DESC, p.product_id DESC LIMIT 6`,
    );
    return this.attachImages(rows);
  }
  async one(id: number) {
    const rows = await this.db.query(
      `SELECT p.*, b.brand_name, c.category_name FROM products p LEFT JOIN brands b ON b.brand_id=p.brand_id LEFT JOIN categories c ON c.category_id=p.category_id WHERE p.product_id=?`,
      [id],
    );
    if (!rows[0]) throw new NotFoundException("Product not found");
    return (await this.attachImages(rows))[0];
  }
  async recommended(id: number) {
    const product = await this.one(id);
    const rows = await this.db.query(
      `SELECT p.*, b.brand_name, c.category_name FROM products p LEFT JOIN brands b ON b.brand_id=p.brand_id LEFT JOIN categories c ON c.category_id=p.category_id WHERE p.product_id<>? AND (p.brand_id=? OR p.category_id=?) ORDER BY p.brand_id=? DESC, p.product_id DESC LIMIT 4`,
      [id, product.brand_id, product.category_id, product.brand_id],
    );
    return this.attachImages(rows);
  }
}
