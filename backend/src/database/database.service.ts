import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { createPool, Pool } from "mysql2/promise";
@Injectable()
export class DatabaseService implements OnModuleDestroy {
  pool: Pool;
  constructor() {
    this.pool = createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
    });
  }
  async query<T = any>(sql: string, params: any[] = []): Promise<T[]> {
    const [rows] = await this.pool.query(sql, params);
    return rows as T[]; 
  }
  async execute(sql: string, params: any[] = []): Promise<any> {
    const [res] = await this.pool.execute(sql, params);
    return res;
  }
  async onModuleDestroy() {
    await this.pool.end();
  }
}
