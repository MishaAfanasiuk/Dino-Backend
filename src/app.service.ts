import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config({path: '.env'});
console.log(process.env.DB_PASSWORD, 'password')

const uri = `mongodb+srv://dno:${process.env.DB_PASSWORD}@dino-6io1u.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    try {
      await client.connect();
      return 'Connection to db established'
    } catch (e) {
      return 'Cannot connect to db\n' + e.toString();
    }
  }
}
