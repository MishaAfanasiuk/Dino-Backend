import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Db, MongoClient} from 'mongodb';
import * as collections from './collections'
@Injectable()
export class MongodbService {
  private db: Db;
  private readonly mongoClientPromise: Promise<Db>;

  constructor() {
    this.mongoClientPromise = this.connectToDb();
  }

  connectToDb = async () => {
    const uri = `mongodb+srv://dno:${process.env.DB_PASSWORD}@dino-6io1u.mongodb.net/test?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true });

    try {
      this.db = (await client.connect()).db(process.env.DB_NAME);
      return this.db;
    } catch (e) {
      throw new HttpException('Could not connect to Database', HttpStatus.SERVICE_UNAVAILABLE)
    }
  };

  public initDb = () => {
    Object.values(collections).forEach(async (collelction) => {
      (await this.getDB()).createCollection(collelction);
    })
  };

  public getDB = async (): Promise<Db> => {
    if (this.db) {
      return this.db
    }

    return this.mongoClientPromise;
  }
}
