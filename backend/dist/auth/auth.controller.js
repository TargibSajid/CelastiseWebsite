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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let AuthController = class AuthController {
    constructor(db) {
        this.db = db;
    }
    sign(user, res) {
        const token = jwt.sign({ user_id: user.user_id, email: user.email, role: user.role }, process.env.JWT_SECRET || "change_this_secret", { expiresIn: "7d" });
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
    async signup(body, res) {
        const hash = await bcrypt.hash(body.password, 10);
        const r = await this.db.execute("INSERT INTO users (name,email,password_hash,phone,address,role) VALUES (?,?,?,?,?,?)", [
            body.name,
            body.email,
            hash,
            body.phone || "",
            body.address || "",
            "customer",
        ]);
        const [user] = await this.db.query("SELECT * FROM users WHERE user_id=?", [
            r.insertId,
        ]);
        return this.sign(user, res);
    }
    async login(body, res) {
        const [user] = await this.db.query("SELECT * FROM users WHERE email=?", [
            body.email,
        ]);
        if (!user || !(await bcrypt.compare(body.password, user.password_hash)))
            throw new common_1.UnauthorizedException("Invalid login");
        return this.sign(user, res);
    }
    async me(req) {
        const token = req.cookies?.celastise_session;
        if (!token)
            throw new common_1.UnauthorizedException();
        return jwt.verify(token, process.env.JWT_SECRET || "change_this_secret");
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("signup"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)("me"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "me", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map