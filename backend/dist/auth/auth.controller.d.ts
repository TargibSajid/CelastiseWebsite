import { Request, Response } from "express";
import { DatabaseService } from "../database/database.service";
import * as jwt from "jsonwebtoken";
export declare class AuthController {
    private db;
    constructor(db: DatabaseService);
    private sign;
    signup(body: any, res: Response): Promise<{
        user: {
            user_id: any;
            name: any;
            email: any;
            phone: any;
            address: any;
            role: any;
        };
    }>;
    login(body: any, res: Response): Promise<{
        user: {
            user_id: any;
            name: any;
            email: any;
            phone: any;
            address: any;
            role: any;
        };
    }>;
    me(req: Request): Promise<string | jwt.JwtPayload>;
}
