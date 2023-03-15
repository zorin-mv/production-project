import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.contoller';
import { DatabaseConfig } from './shared/configs/database.config';
import { HttpErrorFilter } from './shared/http-error-filter/http-error-filter';

import { UserAuthModule } from './modules/user-auth/user-auth.module';
import { UserModule } from './modules/user/user.module';
import { UserProfileModule } from './modules/user-profile/user-profile.module';

const currentEnv = process.env.NODE_ENV || 'dev';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 30,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${currentEnv}`,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    UserModule,
    UserAuthModule,
    UserProfileModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
