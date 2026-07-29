import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from "@nestjs/common";
import { Request, Response } from "express";
import { DatabaseService } from "../database/database.service";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
@Controller("auth")
export class AuthController {
  constructor(private db: DatabaseService) {}
  private sign(user: any, res: Response) {
    const token = jwt.sign(
      { user_id: user.user_id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "change_this_secret",
      { expiresIn: "7d" },
    );
    res.cookie("celastise_session", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return {
      user: {
        user_id: user.user_id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
    };
  }
  @Post("signup") async signup(
    @Body() body: any,
    @Res({ passthrough: true }) res: Response,
  ) {
    const hash = await bcrypt.hash(body.password, 10);
    const r = await this.db.execute(
      "INSERT INTO users (name,email,password_hash,phone,address,role) VALUES (?,?,?,?,?,?)",
      [
        body.name,
        body.email,
        hash,
        body.phone || "",
        body.address || "",
        "customer",
      ],
    );
    const [user] = await this.db.query("SELECT * FROM users WHERE user_id=?", [
      r.insertId,
    ]);
    return this.sign(user, res);
  }
  @Post("login") async login(
    @Body() body: any,
    @Res({ passthrough: true }) res: Response,
  ) {
    const [user] = await this.db.query("SELECT * FROM users WHERE email=?", [
      body.email,
    ]);
    if (!user || !(await bcrypt.compare(body.password, user.password_hash)))
      throw new UnauthorizedException("Invalid login");
    return this.sign(user, res);
  }
  @Get("me") async me(@Req() req: Request) {
    const token = (req as any).cookies?.celastise_session;
    if (!token) throw new UnauthorizedException();
    return jwt.verify(token, process.env.JWT_SECRET || "change_this_secret");
  }
}
