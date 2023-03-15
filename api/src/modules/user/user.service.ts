import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { ERRORS } from 'src/constants/errors';
import { Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async getUserByColumnOrFail(body: Partial<UserEntity>, relations?: string[], withoutError?: boolean) {
    const user = await this.userRepository.findOne({
      where: body,
      relations,
    });

    if (!user && !withoutError) {
      throw new HttpException(ERRORS.userNotFound, HttpStatus.NOT_FOUND);
    }

    return user;
  }

  userSerializer(user: UserEntity) {
    const serializedUser = JSON.stringify(instanceToPlain(user));
    return plainToInstance(UserEntity, JSON.parse(serializedUser));
  }
}
