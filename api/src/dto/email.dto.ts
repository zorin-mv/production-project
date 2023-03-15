import { Transform } from 'class-transformer';
import { IsEmail } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class EmailDto {
  @ApiProperty({ example: 'user@gmail.com' })
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  email: string;
}
