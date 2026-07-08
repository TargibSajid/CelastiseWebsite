"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.setGlobalPrefix("api");
    app.enableCors({
        origin: process.env.FRONTEND_URL || "https://celastise.com" || "https://www.celastise.com",
        credentials: true,
    });
    await app.listen(Number(process.env.PORT || 4000));
}
bootstrap();
//# sourceMappingURL=main.js.map