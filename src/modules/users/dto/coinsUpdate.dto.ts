import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CoinsUpdateDto {
  @ApiProperty()
  @IsNumber()
  coins: number;
}
