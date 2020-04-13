import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import { newsMock } from './mocks/newsMock';
import { News, newsModel } from './schemas/news';
import { menuModel } from './schemas/menu';
import { menuMock } from './mocks/menuMock';

dotenv.config({path: '.env'});

mongoose.connect(`mongodb+srv://dno:${process.env.DB_PASSWORD}@dino-6io1u.mongodb.net/test?retryWrites=true&w=majority`, {
  dbName: process.env.DB_NAME
});
const db = mongoose.connection;

db.once('open', async () => {

  // news
  await newsModel.deleteMany({});
  const news = newsMock.map((mock) => {
    return new newsModel(mock);
  });
  await newsModel.insertMany(news);

  // menu
  await menuModel.deleteMany({});
  const menu = menuMock.map((mock) => {
    return new menuModel(mock)
  });
  await menuModel.insertMany(menu);

  process.exit(0);
});
