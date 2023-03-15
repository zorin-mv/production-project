import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ERRORS } from 'src/constants/errors';
import { User } from 'src/decorators/user';
import { ResponseMessageDto } from 'src/dto/response-message.dto';
import { UserWithTokenResponseDto } from 'src/dto/user-with-token-response.dto';
import { JwtAuthenticationGuard } from 'src/guards';

import { AuthUserDto } from './dto/auth-user.dto';

import { USER_ERRORS } from '../user/user.constants';
import { USER_AUTH_ROUTES } from './user-auth.constants';

import { UserAuthService } from './user-auth.service';

@ApiTags(USER_AUTH_ROUTES.main)
@Controller(USER_AUTH_ROUTES.main)
export class UserAuthController {
  constructor(private readonly userAuthService: UserAuthService) {}

  @Post(USER_AUTH_ROUTES.logOut)
  @ApiOperation({ summary: USER_AUTH_ROUTES.logOut })
  @ApiResponse({
    status: HttpStatus.OK,
    description: USER_AUTH_ROUTES.logOut,
    type: ResponseMessageDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ERRORS.userNotFound,
  })
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthenticationGuard)
  public async logOut(@User('id') id: string) {
    return this.userAuthService.logOut(id);
  }

  @Post(USER_AUTH_ROUTES.signIn)
  @ApiOperation({ summary: USER_AUTH_ROUTES.signIn })
  @ApiResponse({
    status: HttpStatus.OK,
    description: USER_AUTH_ROUTES.signIn,
    type: UserWithTokenResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ERRORS.userNotFound,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: USER_ERRORS.loginError,
  })
  @HttpCode(HttpStatus.OK)
  public async signIn(@Body() body: AuthUserDto) {
    return this.userAuthService.signIn(body);
  }

  @Post(USER_AUTH_ROUTES.signUp)
  @ApiOperation({ summary: USER_AUTH_ROUTES.signUp })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: USER_AUTH_ROUTES.signUp,
    type: UserWithTokenResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: USER_ERRORS.alreadyExists,
  })
  @HttpCode(HttpStatus.CREATED)
  public async signUp(@Body() body: AuthUserDto) {
    return this.userAuthService.signUp(body);
  }
}
