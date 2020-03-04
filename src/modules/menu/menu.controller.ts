import { Controller, Get } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor (private menuService: MenuService){}

  @Get('/')
  getMenu(): Promise<any> {
    return this.menuService.getMenu();
  }
}
