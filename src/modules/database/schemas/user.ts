import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: {
    type: String,
    select: false
  },
  phone: String,
  coins: {
    type: Number,
    default: 0
  }
}, {versionKey: false});

export const userSchemaProvider = {name: 'User', schema: UserSchema};

export const userModel = mongoose.model('User', UserSchema);

export interface User extends Document {
  firstName: string,
  lastName: string,
  email: string,
  password?: string,
  phone: string,
  coins: number
}
