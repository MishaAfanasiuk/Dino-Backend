import { Controller, Post,  Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { UserResponse } from '../users/dto/apiResponses';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOkResponse({type: UserResponse})
  @Post('/login')
  async login(@Body() user: LoginDto) {
    return this.authService.login(user);
  }

  @ApiOkResponse({type: UserResponse})
  @Post('/register')
  async register(@Body() user: RegisterDto) {
    return this.authService.register(user);
  }
}
