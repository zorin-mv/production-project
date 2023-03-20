import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ERRORS } from 'src/constants/errors';
import { User } from 'src/decorators/user';

import { JwtAuthenticationGuard } from '../../guards/auth.guard';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';

import { USER_PROFILE_ERRORS, USER_PROFILE_ROUTES } from './user-profile.constants';

import { UserProfileService } from './user-profile.service';

@ApiTags(USER_PROFILE_ROUTES.main)
@Controller(USER_PROFILE_ROUTES.main)
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Post(USER_PROFILE_ROUTES.create)
  @ApiOperation({ summary: USER_PROFILE_ROUTES.create })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ERRORS.userNotFound,
  })
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(JwtAuthenticationGuard)
  public async createProfile(@Body() body: CreateUserProfileDto, @User('id') id: string) {
    return this.userProfileService.createProfile(body, id);
  }

  @Get(USER_PROFILE_ROUTES.getUserProfileByToken)
  @ApiOperation({ summary: USER_PROFILE_ROUTES.getUserProfileByToken })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ERRORS.userNotFound,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: USER_PROFILE_ERRORS.profileNotExist,
  })
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthenticationGuard)
  public async getProfileByToken(@User('id') id: string) {
    return this.userProfileService.getUserProfileByToken(id);
  }
}
