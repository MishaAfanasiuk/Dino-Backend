import { Injectable } from '@nestjs/common';
import { MongodbService } from '../database/mongodb.service';
import { LOCATIONS } from '../database/collections';

@Injectable()
export class LocationService {
  constructor(private mongodbService: MongodbService) {}

  async getPlaces() {
    const db = await this.mongodbService.getDB();
    return db.collection(LOCATIONS).find().toArray();
  }
}
