import { Controller, Get, Param } from "@nestjs/common";
import { AppService } from "./app.service";
@Controller("api")
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get('sajid')
    getSajid() {  return "Sajid is the best";  }

}