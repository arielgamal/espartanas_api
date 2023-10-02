import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { RegisterUserDTO } from "./dto/register-user.dto";

@Controller('users')
export class UserController {
  constructor(private UserService: UserService) {
  }
  @Get()
  findAll() {
    return this.UserService.findAll();
  }

  @Post("/register")
  create(@Body() RegisterUserDTO: RegisterUserDTO) {
    return this.UserService.create(RegisterUserDTO)
  }
}