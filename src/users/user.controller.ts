import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDTO } from './dto/register-user.dto';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UserController {
  constructor(private UserService: UserService) {}

  @Get()
  findAll() {
    return this.UserService.findAll();
  }

  @Post('/register')
  async create(@Body() RegisterUserDTO: RegisterUserDTO) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(RegisterUserDTO.password, salt);
    console.log(hash);

    const newRegisterUserDTO = {
      ...RegisterUserDTO,
      password: hash,
    };
    return this.UserService.create(newRegisterUserDTO);
  }
}
