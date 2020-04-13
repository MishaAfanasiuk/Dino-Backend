import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Discount } from '../database/schemas/discount';

@Injectable()
export class DiscountsService {
  constructor(
    @InjectModel('Discount') private readonly discountModel: Model<Discount>
  ) {}

  getDiscounts (): Promise<Array<Discount>> {
    return this.discountModel.find().exec();
  }

  getDiscountById (id: string): Promise<Discount> {
    return this.discountModel.findById(id).exec();
  }
}
