import { ApiProperty } from '@nestjs/swagger';

export class Discount {
  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiProperty()
  title: string;

  @ApiProperty()
  descriptions: string;

  @ApiProperty()
  imageSrc: string;

  @ApiProperty()
  posterImageSrc: string;
}
