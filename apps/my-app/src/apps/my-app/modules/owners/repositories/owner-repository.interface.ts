import { Owner } from '@lib/database/entities/owner.entity';

import { IGenericRepository } from '../../../repositories/generic-repository.interface';

export interface IOwnerRepository extends IGenericRepository<Owner> {}
