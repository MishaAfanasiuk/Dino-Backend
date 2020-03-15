import { Controller, Get } from '@nestjs/common';
import { NewsService } from './news.service';
import {  ApiOkResponse } from '@nestjs/swagger';
import { NewsResponse } from './apiResponses';

@Controller('news')
export class NewsController {
  constructor(
    private newService: NewsService
  ){}

  @Get('')
  @ApiOkResponse({
    description: 'All news',
    type: [NewsResponse],
  })
  getNews(){
    return this.newService.findAll();
  }
}
