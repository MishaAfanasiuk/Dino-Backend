import { Controller, Get, Param } from '@nestjs/common';
import { EventsService } from './events.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { EventResponse } from './apiResponses';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get('')
  @ApiOkResponse({type: [EventResponse]})
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: EventResponse})
  findOne(@Param() params) {
    return this.eventsService.findOne(params.id)
  }
}
