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
});

export const newsSchemaProvider = {name: 'News', schema: NewsSchema};

export const newsModel = mongoose.model('News', NewsSchema);

export interface News extends Document {
  name: String,
  description: String | null,
  extraDescription: String | null,
  imageSrc: String,
  date: Date,
  type: String,
  eventId: ObjectId,
  createdAt: Date
}
