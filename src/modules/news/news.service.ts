import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { News } from '../database/schemas/news';
import { Model } from 'mongoose';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel('News') private newsModel: Model<News>
  ){}

  findAll(): Promise<Array<News>>{
    return this.newsModel.find().exec()
  }
}
