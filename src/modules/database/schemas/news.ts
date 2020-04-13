import * as mongoose from 'mongoose';
import { ObjectId } from 'bson';
import { Document } from 'mongoose';

export const NewsSchema = new mongoose.Schema({
  imageSrc: {
    type: String,
    default: ''
  },
  type: String,
  eventId: ObjectId,
});

export const newsSchemaProvider = {name: 'News', schema: NewsSchema};

export const newsModel = mongoose.model('News', NewsSchema);

export interface News extends Document {
  imageSrc: String
  type: 'event' | 'menu',
  eventId: String,
}
