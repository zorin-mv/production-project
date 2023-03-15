import { IsNotEmpty, IsString, Length } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class PasswordDto {
  @ApiProperty({ example: 'User1234!!' })
  @IsNotEmpty()
  @IsString()
  @Length(8, 30)
  password: string;
}
