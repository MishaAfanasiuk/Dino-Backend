import { ApiProperty } from '@nestjs/swagger';

export class EventResponse {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string | null;

  @ApiProperty()
  imageSrc: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  createdAt: Date
}
