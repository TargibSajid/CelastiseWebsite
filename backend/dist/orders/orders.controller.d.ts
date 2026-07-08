import { DatabaseService } from '../database/database.service';
export declare class OrdersController {
    private db;
    constructor(db: DatabaseService);
    create(body: any): Promise<{
        order_id: any;
        status: string;
    }>;
}
