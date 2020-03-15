import { News } from '../schemas/news';
import { Types} from 'mongoose';

export const newsMock = [
  {
    name: 'Jazz Band',
    description: 'in our restaurant',
    extraDescription: 'String',
    imageSrc: '',
    date: new Date(),
    type: 'event',
    eventId: new Types.ObjectId(),
    createdAt: new Date()
  }
];
