import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/modules/user/entities/user.entity';

export class UserWithTokenResponseDto {
  @ApiProperty({ example: 'jwt-token' })
  token: string;

  @ApiProperty({ example: UserEntity })
  user: UserEntity;
}
