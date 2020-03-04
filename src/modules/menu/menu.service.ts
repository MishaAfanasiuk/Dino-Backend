import { Injectable } from '@nestjs/common';
import { MENU } from '../database/collections';
import { MongodbService } from '../database/mongodb.service';

@Injectable()
export class MenuService {
  constructor(private mongodb: MongodbService) {}

  getMenu = async () => {
    const db = await this.mongodb.getDB();
    const c = await db.collection(MENU).find().toArray();
    console.log(c);
    return c
  }
}
