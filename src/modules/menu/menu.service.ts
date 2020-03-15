import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Menu } from '../database/schemas/menu';

@Injectable()
export class MenuService {
  constructor(
    @InjectModel('Menu') private menuModel: Model<Menu>
  ) {}

  getMenu = async () => {
    const menu = await this.menuModel.find().exec();
    return menu.reduce((acc, menuItem) => {
      if (!acc[menuItem.type]) {
        acc[menuItem.type] = []
      }

      acc[menuItem.type].push(menuItem);
      return acc
    }, {});
  };
}
