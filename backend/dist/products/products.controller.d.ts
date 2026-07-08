import { ProductsService } from "./products.service";
export declare class ProductsController {
    private service;
    constructor(service: ProductsService);
    all(): Promise<any[]>;
    featured(): Promise<any[]>;
    one(id: string): Promise<any>;
    rec(id: string): Promise<any[]>;
}
