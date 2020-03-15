import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const MenuSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  imageSrc: String,
  weight: Number,
  ingredients: [String]
});

export const menuSchemaProvider = {name: 'Menu', schema: MenuSchema};

export const menuModel = mongoose.model('Menu', MenuSchema);

export interface Menu extends Document {
  name: string,
  type: string,
  price: number,
  imageSrc: string,
  weight: number,
  ingredients: Array<string>
}
