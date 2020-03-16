import { IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  passwordRepeat: string;

  @ApiProperty()
  @IsNotEmpty()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName: string;
}
