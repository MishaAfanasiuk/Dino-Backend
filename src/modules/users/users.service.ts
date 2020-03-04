import { Injectable } from '@nestjs/common';
import { MongodbService } from '../database/mongodb.service';
import { ACHIEVEMENTS, USERS } from '../database/collections';
import { UserDto } from '../../dto/user.dto';

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
  };

  getUserAchievements = async ({ username }: UserDto) => {
    const db = await this.mongodbService.getDB();
    return db.collection(USERS).aggregate([
        {
          $match: { username },
        },
        {
          $unwind: '$achievements'
        },
        {
          $lookup: {
            from: ACHIEVEMENTS,
            localField: 'achievements._id',
            foreignField: '_id',
            as: 'achievements.info',
          }
        },
        {
          $unwind: '$achievements.info'
        },
        {
          $set: {
            'achievements.info.progress': '$achievements.progress'
          }
        },
        {
          $set: {
            'achievements': '$achievements.info'
          }
        },
        {
          $group: {
            "_id": "$_id",
            username: {'$first': '$username'},
            achievements: {
              "$push": "$achievements"
            },
          }
        }
      ]).toArray();
  }
}
