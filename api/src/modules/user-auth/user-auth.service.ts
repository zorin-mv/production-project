import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { EXPIRE_JWT_TIME } from 'src/constants/etc';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';

import { UserEntity } from '../user/entities/user.entity';
import { AuthUserDto } from './dto/auth-user.dto';

import { USER_ERRORS } from '../user/user.constants';

@Injectable()
export class UserAuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private userService: UserService,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async createToken(user: UserEntity) {
    const expiresIn = EXPIRE_JWT_TIME + Date.now();
    const data = { id: user.id, expiresIn };
    const secret = await this.createSecretString(user.publicKey);

    return this.jwtService.sign(data, { secret });
  }

  private async createSecretString(personalKey: string) {
    const secret = await this.configService.get('JWT_SECRET');

    return `${secret}${personalKey}`;
  }

  async logOut(id: string) {
    const user = await this.userService.getUserByColumnOrFail({ id });

    const publicKey = await bcrypt.genSalt(6);

    await this.userRepository.update(user.id, {
      publicKey,
    });

    return {
      message: 'Success',
    };
  }

  async signIn(body: AuthUserDto) {
    const { email, password } = body;

    const user = await this.userService.getUserByColumnOrFail({ email });

    const comparedPassword = await bcrypt.compare(password, user.password);

    if (!comparedPassword) {
      throw new HttpException(USER_ERRORS.loginError, HttpStatus.CONFLICT);
    }

    const publicKey = await bcrypt.genSalt(6);

    await this.userRepository.update(user.id, {
      publicKey,
    });

    const newUser = await this.userService.getUserByColumnOrFail({ id: user.id });

    return {
      user: this.userService.userSerializer(newUser),
      token: await this.createToken(newUser),
    };
  }

  async signUp(body: AuthUserDto) {
    const { email, password } = body;

    const user = await this.userRepository.findOne({
      where: { email },
    });

    if (user) {
      throw new HttpException(USER_ERRORS.alreadyExists, HttpStatus.CONFLICT);
    }

    const publicKey = await bcrypt.genSalt(6);
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await this.userRepository.save({
      email,
      publicKey,
      password: hashedPassword,
    });

    return {
      user: this.userService.userSerializer(newUser),
      token: await this.createToken(newUser),
    };
  }
}
