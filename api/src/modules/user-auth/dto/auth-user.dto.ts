import { IntersectionType } from '@nestjs/swagger';
import { EmailDto } from 'src/dto/email.dto';
import { PasswordDto } from 'src/dto/password.dto';

export class AuthUserDto extends IntersectionType(PasswordDto, EmailDto) {}
