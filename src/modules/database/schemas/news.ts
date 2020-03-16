import * as mongoose from 'mongoose';
import { ObjectId } from 'bson';
import { Document } from 'mongoose';

export const NewsSchema = new mongoose.Schema({
  name: String,
  description: {
    type: String,
    default: null
  },
  extraDescription: {
    type: String,
    default: null
  },
  imageSrc: String,
  date: Date,
  type: String,
  eventId: ObjectId,
  createdAt: Date
}, {versionKey: false});

export const newsSchemaProvider = {name: 'News', schema: NewsSchema};

export const newsModel = mongoose.model('News', NewsSchema);

export interface News extends Document {
  name: string,
  description: string | null,
  extraDescription: string | null,
  imageSrc: string,
  date: Date,
  type: string,
  eventId: ObjectId,
  createdAt: Date
}
