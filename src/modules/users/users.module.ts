import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongodbService } from '../database/mongodb.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchemaProvider } from '../database/schemas/user';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([userSchemaProvider]), forwardRef(() => AuthModule)],
  providers: [UsersService, MongodbService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
