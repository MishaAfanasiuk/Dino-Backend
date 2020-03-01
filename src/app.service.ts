import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { MongodbService } from './modules/database/mongodb.service';
dotenv.config({path: '.env'});

@Injectable()
export class AppService {
  constructor(private mongodb: MongodbService) {
    mongodb.initDb();
  };
}
