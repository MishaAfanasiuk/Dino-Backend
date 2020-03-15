import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongodbService } from '../database/mongodb.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchemaProvider } from '../database/schemas/user';

@Module({
  imports: [MongooseModule.forFeature([userSchemaProvider])],
  providers: [UsersService, MongodbService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
