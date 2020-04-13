import { News } from '../schemas/news';
import { Types} from 'mongoose';

export const newsMock = [
  {
    imageSrc: '',
    type: 'event',
    eventId: new Types.ObjectId(),
  }
];
