import { forwardRef, HttpException, HttpStatus, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { BcryptService } from '../../base/bcrypt.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { User } from '../database/schemas/user';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly bcryptService: BcryptService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser({ email, password }: LoginDto): Promise<User> {
    const user = await this.usersService.getUserWithLoginCredits(email);

    if (!user) {
      throw new UnauthorizedException()
    }

    const { password: userPassword, ...clearUser} = user;
    const isPassCorrect = (
      await this.bcryptService.compare(password, userPassword)
    );

    if (!isPassCorrect) {
      throw new UnauthorizedException()
    }

    return clearUser;
  }

  async login(loginPayload: LoginDto) {
    const user = await this.validateUser(loginPayload);
    const payload = {
      email: user.email,
      _id: user.id,
    };

    return {
      ...user,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: RegisterDto) {
    const { email, password, passwordRepeat, phone, firstName, lastName } = user;
    const usersService = this.usersService;

    if (await usersService.findOne({email})) {
      throw new HttpException('User name is already taken', HttpStatus.BAD_REQUEST)
    }

    if (password !== passwordRepeat) {
      throw new HttpException('Password and password confirm are not the same', HttpStatus.BAD_REQUEST)
    }

    const createdUser = await usersService.insert({
      email,
      firstName,
      lastName,
      phone,
      password: await this.bcryptService.hashPassword(password)
    });

    const payload = {
      email,
      _id: createdUser._id
    };

    return {
      ...createdUser,
      access_token: this.jwtService.sign(payload),
    };
  }

  sign = (payload) => {
    return this.jwtService.sign(payload);
  }
}
