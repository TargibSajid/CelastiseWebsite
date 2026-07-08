import { DatabaseService } from "../database/database.service";
export declare class ProductsService {
    private db;
    constructor(db: DatabaseService);
    private attachImages;
    all(): Promise<any[]>;
    featured(): Promise<any[]>;
    one(id: number): Promise<any>;
    recommended(id: number): Promise<any[]>;
}
