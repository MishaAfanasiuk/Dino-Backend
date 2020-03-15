import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Event } from '../database/schemas/event';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel('Event') private eventModel: Model<Event>
  ){}

  findOne(id: string): Promise<Event> {
    return this.eventModel.findById(id).exec();
  }

  findAll(): Promise<Array<Event>> {
    return this.eventModel.find().exec();
  }
}
