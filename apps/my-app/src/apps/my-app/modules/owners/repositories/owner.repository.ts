import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Owner } from '@lib/database/entities/owner.entity';
import { IOwnerRepository } from './owner-repository.interface';

@Injectable()
export class OwnerRepository implements IOwnerRepository {
  constructor(
    @InjectRepository(Owner)
    private readonly repository: Repository<Owner>,
  ) {}

  async findByEmail(email: string): Promise<Owner | null> {
    return this.repository.findOne({ where: { email } });
  }

  async create(owner: Owner): Promise<Owner> {
    return this.repository.save(owner);
  }
}
