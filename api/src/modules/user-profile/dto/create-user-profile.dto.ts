import { OmitType } from '@nestjs/swagger';

import { UserProfileEntity } from '../entities/user-profile.entity';

export class CreateUserProfileDto extends OmitType(UserProfileEntity, [
  'id' as const,
  'user' as const,
]) {}
