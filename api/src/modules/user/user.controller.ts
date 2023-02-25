import { Controller, Get, HttpCode, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ERRORS } from 'src/constants/errors';
import { User } from 'src/decorators/user';
import { JwtAuthenticationGuard } from 'src/guards';

import { UserEntity } from './entities/user.entity';

import { USER_ROUTES } from './user.constants';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(USER_ROUTES.getUserByToken)
  @ApiOperation({ summary: USER_ROUTES.getUserByToken })
  @ApiResponse({
    status: HttpStatus.OK,
    description: USER_ROUTES.getUserByToken,
    type: UserEntity,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ERRORS.userNotFound,
  })
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthenticationGuard)
  public async getUserByToken(@User('id') id: string) {
    return this.userService.getUserByColumnOrFail({ id });
  }

  @Get(`${USER_ROUTES.getUserById}:id`)
  @ApiOperation({ summary: USER_ROUTES.getUserById })
  @ApiResponse({
    status: HttpStatus.OK,
    description: USER_ROUTES.getUserById,
    type: UserEntity,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ERRORS.userNotFound,
  })
  @HttpCode(HttpStatus.OK)
  public async getUserById(@Param('id') id: string) {
    return this.userService.getUserByColumnOrFail({ id });
  }
}
