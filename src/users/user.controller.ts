import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(private UserService: UserService) {
  }
  @Get()
  findAll() {
    return this.UserService.findAll();
  }

  // @Post("/register")
  // create(@Body() ) {
  //   return this.UserService.create();
  // }
}