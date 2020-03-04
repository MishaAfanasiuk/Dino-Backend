import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { MongodbService } from '../database/mongodb.service';

@Module({
  controllers: [MenuController],
  providers: [MenuService, MongodbService]
})
export class MenuModule {}
