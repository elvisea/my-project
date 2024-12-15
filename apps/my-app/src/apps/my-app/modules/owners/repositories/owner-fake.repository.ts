import { Owner } from '@lib/database/entities/owner.entity';

import { IOwnerRepository } from './owner-repository.interface';

export class FakeOwnersRepository implements IOwnerRepository {
  private owners: Owner[] = [];

  async findByEmail(email: string): Promise<Owner | undefined> {
    return this.owners.find((owner) => owner.email === email);
  }

  async create(owner: Owner): Promise<Owner> {
    this.owners.push(owner);
    return owner;
  }
}
