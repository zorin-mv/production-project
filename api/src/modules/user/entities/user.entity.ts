import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { TRoles, USER_ROLES } from 'src/constants/user-roles';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ example: 'bd4bc467-77a5-4ea9-975b-16d1eebef55d' })
  id: string;

  @CreateDateColumn()
  @ApiProperty({ example: new Date().toISOString() })
  created: Date;

  @Column({ unique: true })
  @ApiProperty({ example: 'user@gmail.com' })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ enum: USER_ROLES, default: USER_ROLES.USER })
  @ApiProperty({ example: USER_ROLES.USER })
  role: TRoles;

  @Column({
    type: 'varchar',
  })
  @Exclude()
  publicKey: string;
}
