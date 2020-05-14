import { Controller, Delete, Get, Param, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { UserResponse } from './dto/apiResponses';
import { UpdateDto } from './dto/update.dto';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiBearerAuth()
  @ApiOkResponse({type: UserResponse})
  @UseGuards(AuthGuard('user'))
  @Get('')
  getUser(@Request() { user }) {
    return this.usersService.findOne(user);
  }

  @Put(':id')
  @ApiOkResponse()
  updateUser(@Param() params, body: UpdateDto) {
    return this.usersService.update(params.id, body)
  }

  @ApiOkResponse()
  @Delete(':id')
  removeUser(@Param() params) {
    return this.usersService.remove(params.id);
  }
}
