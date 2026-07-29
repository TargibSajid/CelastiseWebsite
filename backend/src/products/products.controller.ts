import { Controller, Get, Param } from "@nestjs/common";
import { ProductsService } from "./products.service";
@Controller("product")
export class ProductsController {
  constructor(private service: ProductsService) {}
  @Get() all() {
    return this.service.all();
  }
  @Get("featured") featured() {
    return this.service.featured();
  }
  @Get(":id") one(@Param("id") id: string) {
    return this.service.one(Number(id));
  }
  @Get(":id/recommended") rec(@Param("id") id: string) {
    return this.service.recommended(Number(id));
  }
}
