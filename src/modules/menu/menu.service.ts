import { Injectable } from '@nestjs/common';
import { MENU } from '../database/collections';
import { MongodbService } from '../database/mongodb.service';

@Injectable()
export class MenuService {
  constructor(private mongodb: MongodbService) {}

  getMenu = async () => {
    const db = await this.mongodb.getDB();
    return db.collection(MENU).find().toArray();
  };

  getMenuDiscounts = async () => {
    const db = await this.mongodb.getDB();
    const r = await db.collection(MENU).find({ hasDiscount: true }).toArray();
    console.log(r);
    return r;
  }
}
