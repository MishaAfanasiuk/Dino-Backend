import { forwardRef, HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { User } from '../database/schemas/user';
import { InsertDto } from './dto/users.db.dto';
import { UpdateDto } from './dto/update.dto';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService
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
    const user = await this.userModel.findById(id).exec();
    const access_token = this.authService.sign({_id: id, email: user.email });
    return {access_token, ...user}
  };

  remove = async (_id: string) => {
    await this.userModel.deleteOne({_id});
    return
  };

  findById = (id: string) => {
    return this.userModel.findById(id).exec();
  };

  getUserCoins = async (id: string) => {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new HttpException('User not found', 404)
    }
    return { coins: user.coins, userId: id};
  };

  changeCoins = async (id: string, coinsToChange: number) => {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new HttpException('User not found', 404)
    }

    const coins = user.coins;

    if (coinsToChange < 0 && (coinsToChange + coins) < 0) {
      throw new HttpException('Wrong coins amount', 422)
    }

    return this.userModel.updateOne({_id: id}, {
      $inc: {coins: coinsToChange}
    })
  };
}
