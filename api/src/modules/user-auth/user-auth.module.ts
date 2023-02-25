import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';

import { UserEntity } from '../user/entities/user.entity';
import { UserJwtStrategy } from './user-mobile-jwt.strategy';

import { UserAuthController } from './user-auth.controller';
import { UserAuthService } from './user-auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({}),
    PassportModule.register({}),
    ConfigModule,
    UserModule,
  ],
  controllers: [UserAuthController],
  providers: [UserAuthService, UserJwtStrategy],
})
export class UserAuthModule {}
