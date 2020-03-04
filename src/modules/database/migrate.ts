import { MongoClient} from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config({path: '.env'});
import { menuMock } from './mocks/menuMock';
import { locationsMock } from './mocks/locationsMock';
import { LOCATIONS, MENU } from './collections';

const uri = `mongodb+srv://dno:${process.env.DB_PASSWORD}@dino-6io1u.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });

const migrate = async () => {
  const db = (await client.connect()).db(process.env.DB_NAME);
  await db.collection(MENU).insertMany(menuMock);
  await db.collection(LOCATIONS).insertMany(locationsMock);
  process.exit(0);
};

migrate();
