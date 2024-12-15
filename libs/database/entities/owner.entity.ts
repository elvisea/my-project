import { Entity, OneToOne, JoinColumn } from 'typeorm';

import { UserBase } from './user-base.entity';
import { VerifiedOwnerEmail } from './verified-owner-email.entity';

@Entity('owners')
export class Owner extends UserBase {
  @OneToOne(
    () => VerifiedOwnerEmail,
    (verifiedOwnerEmail) => verifiedOwnerEmail.owner,
    { cascade: true, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'email_verification_id' })
  verifiedOwnerEmail: VerifiedOwnerEmail;
}
