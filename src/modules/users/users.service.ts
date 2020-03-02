import { Injectable } from '@nestjs/common';
import { MongodbService } from '../database/mongodb.service';
import { USERS } from '../database/collections';

@Injectable()
export class UsersService {
  constructor(private mongodbService: MongodbService) {}

  findOne = async (findOptions) => {
    const db = await this.mongodbService.getDB();
    return  db.collection(USERS).findOne(findOptions, {
      projection: {password: 0}
    })
  };

  getUserWithLoginCredits = async (username: string) => {
    const db = await this.mongodbService.getDB();
    return  db.collection(USERS).findOne({username})
  }
}
