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
  }

  getUserAchievements = async ({ username }: UserDto) => {
    const db = await this.mongodbService.getDB();
    try {
      const r = await db.collection(USERS).aggregate([
        {
          $match: { username },
        },
        // {
        //   $project: {
        //     username: 1,
        //   }
        // },
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
          $group: {
            "_id": "$_id",
            "achievements": {
              "$push": "$achievements"
            },
          }
        }
      ]).toArray();
      return r;
    } catch (e) {
      console.log(e)
    }
  }
}
