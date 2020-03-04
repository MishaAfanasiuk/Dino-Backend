import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {

  @Get('')
  root(){
    return 'This is dino application backend server'
  }
}
