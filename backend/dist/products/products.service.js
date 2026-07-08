"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let ProductsService = class ProductsService {
    constructor(db) {
        this.db = db;
    }
    async attachImages(products) {
        if (!products.length)
            return products;
        const ids = products.map((p) => p.product_id);
        const imgs = await this.db.query(`SELECT * FROM product_images WHERE product_id IN (${ids.map(() => "?").join(",")})`, ids);
        return products.map((p) => ({
            ...p,
            price: Number(p.price || 0),
            images: imgs.filter((i) => i.product_id === p.product_id),
            image: imgs.find((i) => i.product_id === p.product_id)?.image_url || null,
        }));
    }
    async all() {
        const rows = await this.db.query(`SELECT p.*, b.brand_name, c.category_name FROM products p LEFT JOIN brands b ON b.brand_id=p.brand_id LEFT JOIN categories c ON c.category_id=p.category_id ORDER BY p.product_id DESC`);
        return this.attachImages(rows);
    }
    async featured() {
        const rows = await this.db.query(`SELECT p.*, b.brand_name, c.category_name FROM products p LEFT JOIN brands b ON b.brand_id=p.brand_id LEFT JOIN categories c ON c.category_id=p.category_id ORDER BY (p.price>0) DESC, p.product_id DESC LIMIT 6`);
        return this.attachImages(rows);
    }
    async one(id) {
        const rows = await this.db.query(`SELECT p.*, b.brand_name, c.category_name FROM products p LEFT JOIN brands b ON b.brand_id=p.brand_id LEFT JOIN categories c ON c.category_id=p.category_id WHERE p.product_id=?`, [id]);
        if (!rows[0])
            throw new common_1.NotFoundException("Product not found");
        return (await this.attachImages(rows))[0];
    }
    async recommended(id) {
        const product = await this.one(id);
        const rows = await this.db.query(`SELECT p.*, b.brand_name, c.category_name FROM products p LEFT JOIN brands b ON b.brand_id=p.brand_id LEFT JOIN categories c ON c.category_id=p.category_id WHERE p.product_id<>? AND (p.brand_id=? OR p.category_id=?) ORDER BY p.brand_id=? DESC, p.product_id DESC LIMIT 4`, [id, product.brand_id, product.category_id, product.brand_id]);
        return this.attachImages(rows);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ProductsService);
//# sourceMappingURL=products.service.js.map