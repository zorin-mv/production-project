import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Length, Max, Min } from 'class-validator';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user-profile')
export class UserProfileEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ example: 'bd4bc467-77a5-4ea9-975b-16d1eebef55d' })
  id: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  @ApiProperty({ example: 'firstName' })
  firstName: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  @ApiProperty({ example: 'lastName' })
  lastName: string;

  @Column()
  @Max(120)
  @Min(1)
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ example: 24 })
  age: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'USD' })
  currency: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Ukraine' })
  country: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Kharkiv' })
  city: string;

  @Column()
  @ApiProperty({ example: 'png' })
  avatar: string;

  @OneToOne(() => UserEntity, (user) => user.profile, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: UserEntity;
}
