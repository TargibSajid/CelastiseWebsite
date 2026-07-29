import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.setGlobalPrefix("api");
  app.enableCors({
    origin: process.env.FRONTEND_URL || "https://celastise.com" || "https://www.celastise.com",
    credentials: true,
  });
  await app.listen(Number(process.env.PORT || 4000));
}
bootstrap();
