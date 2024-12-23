import { Role } from '@lib/database/enums/role.enum';

import { Owner } from '@lib/database/entities/owner.entity';

export class CreateOwnerResponseDTO implements Partial<Owner> {
  id?: number;
  public_id?: string;
  role?: Role;
  name?: string;
  email?: string;
}
