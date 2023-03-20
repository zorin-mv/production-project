import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';

import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UserProfileEntity } from './entities/user-profile.entity';

import { USER_PROFILE_ERRORS } from './user-profile.constants';

@Injectable()
export class UserProfileService {
  constructor(
    private userService: UserService,
    @InjectRepository(UserProfileEntity)
    private readonly userProfileRepository: Repository<UserProfileEntity>
  ) {}

  async createProfile(body: CreateUserProfileDto, userId: string) {
    const user = await this.userService.getUserByColumnOrFail({ id: userId });

    const { user: _, ...profile } = await this.userProfileRepository.save({ ...body, user });

    return profile;
  }

  async getUserProfileByToken(userId: string) {
    await this.userService.getUserByColumnOrFail({ id: userId });
    const profile = await this.userProfileRepository.findOne({
      where: {
        user: {
          id: userId,
        },
      },
    });

    if (!profile) {
      throw new HttpException(USER_PROFILE_ERRORS.profileNotExist, HttpStatus.CONFLICT);
    }

    return profile;
  }
}
