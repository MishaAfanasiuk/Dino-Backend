import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongodbService } from '../database/mongodb.service';

@Module({
  providers: [UsersService, MongodbService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
