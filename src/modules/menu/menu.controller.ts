import { Controller, Get } from '@nestjs/common';
import { MenuService } from './menu.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { MenuResponse } from './apiResponses';

@Controller('menu')
export class MenuController {
  constructor (private menuService: MenuService){}

  @Get('/')
  @ApiOkResponse({type: MenuResponse})
  getMenu(): Promise<any> {
    return this.menuService.getMenu();
  }
}
