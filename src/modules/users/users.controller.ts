import { Body, Controller, Delete, Get, Param, Put, Render, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { UserResponse } from './dto/apiResponses';
import { UpdateDto } from './dto/update.dto';
import { CoinsUpdateDto } from './dto/coinsUpdate.dto';

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
  updateUser(@Param() params, @Body() body: UpdateDto) {
    return this.usersService.update(params.id, body)
  }

  @ApiOkResponse()
  @Delete(':id')
  removeUser(@Param() params) {
    return this.usersService.remove(params.id);
  }

  @Render('coinsPage')
  @ApiOkResponse({type: 'number'})
  @Get(':id/coins/')
  getCoins(@Param() params){
    return this.usersService.getUserCoins(params.id)
  }


  @ApiOkResponse()
  @Put(':id/coins/')
  changeCoins(@Param() params, @Body() body: CoinsUpdateDto) {
   return this.usersService.changeCoins(params.id, body.coins)
  }
}
