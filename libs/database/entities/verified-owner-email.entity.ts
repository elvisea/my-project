import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Owner } from './owner.entity';

@Entity('verified_owner_emails')
export class VerifiedOwnerEmail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'token', length: 6, nullable: false })
  token: string;

  @OneToOne(() => Owner, (owner) => owner.verifiedOwnerEmail, {
    nullable: false,
  })
  @JoinColumn({ name: 'owner_id' })
  owner: Owner;

  @Column({ name: 'verified', default: false })
  verified: boolean;

  @Column({ name: 'expiration_time', type: 'timestamp', nullable: false })
  expirationTime: Date;
}
