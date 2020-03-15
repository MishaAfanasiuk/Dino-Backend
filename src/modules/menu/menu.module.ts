import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { MongodbService } from '../database/mongodb.service';
import { MongooseModule } from '@nestjs/mongoose';
import { menuSchemaProvider } from '../database/schemas/menu';

@Module({
  imports: [MongooseModule.forFeature([menuSchemaProvider])],
  controllers: [MenuController],
  providers: [MenuService, MongodbService]
})
export class MenuModule {}
