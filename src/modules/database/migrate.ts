import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import { newsMock } from './mocks/newsMock';
import { News, newsModel } from './schemas/news';
import { menuModel } from './schemas/menu';
import { menuMock } from './mocks/menuMock';
import { eventModel } from './schemas/event';
import { eventsMock } from './mocks/eventsMock';
import { discountModel } from './schemas/discount';
import { salesMock } from './mocks/salesMock';

dotenv.config({path: '.env'});

mongoose.connect(`mongodb+srv://dno:${process.env.DB_PASSWORD}@dino-6io1u.mongodb.net/test?retryWrites=true&w=majority`, {
  dbName: process.env.DB_NAME
});
const db = mongoose.connection;

db.once('open', async () => {
  // await eventModel.deleteMany({});
  // const events = eventsMock.map((mock) => {
  //   return new eventModel(mock)
  // });
  // const createdEvents = await eventModel.insertMany(events);
  // console.log(createdEvents);
  // // news
  // await newsModel.deleteMany({});
  // const news = newsMock.map((mock, i) => {
  //   mock.eventId = createdEvents[i]._id;
  //   return new newsModel(mock);
  // });
  // await newsModel.insertMany(news);
  //
  // // menu
  // await menuModel.deleteMany({});
  // const menu = menuMock.map((mock) => {
  //   return new menuModel(mock)
  // });
  // await menuModel.insertMany(menu);

  //discounts
  await discountModel.deleteMany({});
  const discounts = salesMock.map((doc) => new discountModel(doc));
  await discountModel.insertMany(discounts);

  process.exit(0);
});
