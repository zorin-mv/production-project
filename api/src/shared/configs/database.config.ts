import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { UserEntity } from 'src/modules/user/entities/user.entity';

import { UserProfileEntity } from '../../modules/user-profile/entities/user-profile.entity';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions() {
    return {
      type: 'postgres' as const,
      host: this.configService.get('DB_HOST'),
      port: 5432,
      username: this.configService.get('DB_USERNAME'),
      password: this.configService.get('DB_PASSWORD'),
      database: this.configService.get('DB_NAME'),
      synchronize: true,
      // dropSchema: true,
      logging: false,
      migrationsTableName: 'migration',
      migrations: ['src/migration/*.ts'],
      cli: {
        migrationsDir: 'src/migration',
      },
      entities: [UserEntity, UserProfileEntity],
      // entities: ['dist/**/*.entity.js'],
    };
  }
}
