import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Role } from '../enums/role.enum';

import { EmailVerification } from './email-verification.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', length: 100 })
  name: string;

  @Column({ name: 'email', unique: true, length: 100 })
  email: string;

  @Column({ name: 'password', length: 255 })
  password: string;

  @Column({ name: 'role', type: 'enum', enum: Role })
  role: Role;

  @OneToOne(
    () => EmailVerification,
    (emailVerification) => emailVerification.user,
    { cascade: true, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'email_verification_id' })
  emailVerification: EmailVerification;
}
