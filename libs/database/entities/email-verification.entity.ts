import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { User } from './user.entity';

@Entity('email_verifications')
export class EmailVerification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'token', length: 6, nullable: false })
  token: string;

  @OneToOne(() => User, (user) => user.emailVerification, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'verified', default: false })
  verified: boolean;

  @Column({ name: 'expiration_time', type: 'timestamp', nullable: false })
  expirationTime: Date;
}
