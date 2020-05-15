import { Injectable } from '@nestjs/common';
import { MongodbService } from '../database/mongodb.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { User } from '../database/schemas/user';
import { InsertDto } from './dto/users.db.dto';
import { UpdateDto } from './dto/update.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private userModel: Model<User>
  ) {}

  findOne = async (findOptions) => {
    return this.userModel.findOne(findOptions).exec();
  };

  getUserWithLoginCredits = async (email: string) => {
    const user = await this.userModel.findOne({email})
      .select('+password')
      .exec();
    return user?.toObject()
  };

  insert = async (user: InsertDto) => {
    const createdUser = (await this.userModel.create(user))?.toObject();
    delete createdUser.password;
    return createdUser
  };

  update = async (id, userDate: UpdateDto) => {
    await this.userModel.updateOne({_id: id}, userDate);
    return
  };

  remove = async (_id: string) => {
    await this.userModel.deleteOne({_id});
    return
  };

  findById = (id: string) => {
    return this.userModel.findById(id).exec();
  };
}
