import { Module } from '@nestjs/common';
import { DiscountsService } from './discounts.service';
import { DiscountsController } from './discounts.controller';
import { MongodbService } from '../database/mongodb.service';

@Module({
  providers: [DiscountsService, MongodbService],
  controllers: [DiscountsController]
})
export class DiscountsModule {}
