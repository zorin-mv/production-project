import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class UserIdDto {
  @ApiProperty({ example: 'uuid' })
  @IsUUID()
  userId: string;
}
