import { ApiProperty } from '@nestjs/swagger';

export class NewsResponse {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  imageSrc: string;

  @ApiProperty()
  type: 'event' | 'menu';

  @ApiProperty()
  eventId: string;
}
