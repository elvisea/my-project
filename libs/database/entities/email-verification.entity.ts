import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Owner } from './owner.entity';

@Entity('email_verifications')
export class EmailVerification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'token', length: 6, nullable: false })
  token: string;

  @OneToOne(() => Owner, (owner) => owner.emailVerification, {
    nullable: false,
  })
  @JoinColumn({ name: 'owner_id' })
  owner: Owner;

  @Column({ name: 'verified', default: false })
  verified: boolean;

  @Column({ name: 'expiration_time', type: 'timestamp', nullable: false })
  expirationTime: Date;
}
