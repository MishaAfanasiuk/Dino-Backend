import { IsNotEmpty } from 'class-validator';

export class UserJwtDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  id: string;
}
