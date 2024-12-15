import { Owner } from '@lib/database/entities/owner.entity';

export interface IOwnerRepository {
  create(owner: Owner): Promise<Owner>;
  findByEmail(email: string): Promise<Owner | undefined>;
}
