import { Injectable } from '@nestjs/common';
import { MongodbService } from '../database/mongodb.service';
import { ACHIEVEMENTS, USERS } from '../database/collections';
import { UserDto } from '../../dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { User } from '../database/schemas/user';

@Injectable()
export class UsersService {
  constructor(
    private mongodbService: MongodbService,
    @InjectModel('User') private userModel: Model<User>
  ) {}

  findOne = async (findOptions) => {
    return this.userModel.findOne(findOptions).exec();
  };

  getUserWithLoginCredits = async (username: string) => {
    return this.userModel.findOne({username}, {password: 1}).exec()
  };
}
