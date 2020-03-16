import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserStrategy } from './strategies/user.strategy';
import { AuthController } from './auth.controller';
import { BcryptService } from '../../base/bcrypt.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchemaProvider } from '../database/schemas/user';

@Module({
  controllers: [AuthController],
  imports: [
    MongooseModule.forFeature([userSchemaProvider]),
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [
    AuthService,
    UserStrategy,
    BcryptService,
  ],
})
export class AuthModule {}
