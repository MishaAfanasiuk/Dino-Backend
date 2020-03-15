import { ApiProperty } from '@nestjs/swagger';

class MenuItem  {
  @ApiProperty()
  name: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  imageSrc: string;

  @ApiProperty()
  weight: number;

  @ApiProperty()
  ingredients: Array<string>
}

const menuItem = new MenuItem();

export class MenuResponse {
  @ApiProperty()
  salads: MenuItem;

  @ApiProperty()
  soups: MenuItem;


  @ApiProperty()
  meat: MenuItem;


  @ApiProperty()
  fish: MenuItem;


  @ApiProperty()
  deserts: MenuItem;

  @ApiProperty()
  drinks: MenuItem;
}
