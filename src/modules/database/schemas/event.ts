import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const EventSchema = new mongoose.Schema({
  name: String,
  description: {
    type: String,
    default: null
  },
  imageSrc: String,
  date: Date,
  createdAt: Date
}, {versionKey: false});

export const eventSchemaProvider = {name: 'Event', schema: EventSchema};

export const eventModel = mongoose.model('Event', EventSchema);

export interface Event extends Document {
  name: string,
  description: string | null,
  imageSrc: string,
  date: Date,
  createdAt: Date
}
