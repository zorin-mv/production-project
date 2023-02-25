import { ApiProperty } from '@nestjs/swagger';

export class ResponseMessageDto {
  @ApiProperty({ example: 'Success' })
  message: string;
}
