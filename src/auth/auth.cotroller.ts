import { Body, Controller, Post } from '@nestjs/common';
import { AuthUserDTO } from './dto/auth-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('login')
  login(@Body() { email, password }: AuthUserDTO) {
    return this.AuthService.login(email, password);
  }
}
