import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { newsSchemaProvider } from '../database/schemas/news';

@Module({
  imports: [MongooseModule.forFeature([newsSchemaProvider])],
  providers: [NewsService],
  controllers: [NewsController]
})
export class NewsModule {}
