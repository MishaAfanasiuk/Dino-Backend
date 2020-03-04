import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {

  }
  @UseGuards(AuthGuard('user'))
  @Get('')
  getUserAchievements(@Request() { user }) {
    return this.usersService.getUserAchievements(user);
  }
}
