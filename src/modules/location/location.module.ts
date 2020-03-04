import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { MongodbService } from '../database/mongodb.service';

@Module({
  providers: [LocationService, MongodbService],
  controllers: [LocationController]
})
export class LocationModule {}
