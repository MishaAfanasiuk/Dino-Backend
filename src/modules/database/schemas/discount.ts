import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const DiscountSchema = new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  title: String,
  description: String,
  imageSrc: String,
  posterImageSrc: String,
}, {versionKey: false});

export const discountSchemaProvider = {name: 'Discount', schema: DiscountSchema};

export const discountModel = mongoose.model('Discount', DiscountSchema);

export interface Discount extends Document {
  startDate: Date,
  endDate: Date,
  title: string,
  description: string,
  imageSrc: string,
  posterImageSrc: string,
}
