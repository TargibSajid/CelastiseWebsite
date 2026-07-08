import { OnModuleDestroy } from "@nestjs/common";
import { Pool } from "mysql2/promise";
export declare class DatabaseService implements OnModuleDestroy {
    pool: Pool;
    constructor();
    query<T = any>(sql: string, params?: any[]): Promise<T[]>;
    execute(sql: string, params?: any[]): Promise<any>;
    onModuleDestroy(): Promise<void>;
}
