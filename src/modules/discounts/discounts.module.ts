import { Module } from '@nestjs/common';
import { DiscountsService } from './discounts.service';
import { DiscountsController } from './discounts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { discountSchemaProvider } from '../database/schemas/discount';

@Module({
  imports: [MongooseModule.forFeature([discountSchemaProvider])],
  providers: [DiscountsService],
  controllers: [DiscountsController]
})
export class DiscountsModule {}
