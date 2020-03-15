import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { MongooseModule } from '@nestjs/mongoose';
import { eventSchemaProvider } from '../database/schemas/event';

@Module({
  imports: [MongooseModule.forFeature([eventSchemaProvider])],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}
