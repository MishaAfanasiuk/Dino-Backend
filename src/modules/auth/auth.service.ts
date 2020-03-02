import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { BcryptService } from '../../base/bcrypt.service';
import { RegisterDto } from './dto/register.dto';
import { MongodbService } from '../database/mongodb.service';
import { USERS } from '../database/collections';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly bcryptService: BcryptService,
    private readonly jwtService: JwtService,
    private readonly mongodbService: MongodbService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any | null> {
    const user = await this.usersService.getUserWithLoginCredits(username);
    const isPassCorrect = (
      user && await this.bcryptService.compare(pass, user.password)
    );

    return isPassCorrect ? user : null;
  }

  async login({ password, ...user }: any) {
    const payload = {
      username: user.username,
      id: user.id,
    };
    return {
      ...user,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register({ username, password, password_repeat }: RegisterDto) {
    const db = await this.mongodbService.getDB();
    const collection = db.collection(USERS);
    if (await collection.findOne({username})) {
      throw new HttpException('User name is already taken', HttpStatus.BAD_REQUEST)
    }

    if (password !== password_repeat) {
      throw new HttpException('Password and password confirm are not the same', HttpStatus.BAD_REQUEST)
    }

    const { insertedId } = await collection.insertOne({
      username, password: await this.bcryptService.hashPassword(password)
    });

    const user = await collection.findOne({_id: insertedId});

    return {
      username: user.username,
      access_token: this.jwtService.sign(payload),
    };
  }
}
