import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ProductsModule } from "./products/products.module";
import { AuthModule } from "./auth/auth.module";
import { OrdersModule } from "./orders/orders.module";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProductsModule,
    AuthModule,
    OrdersModule,
  ],
  controllers: [AppController],

    providers: [AppService],})
export class AppModule {}
