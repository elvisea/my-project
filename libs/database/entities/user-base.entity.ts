import { PrimaryGeneratedColumn, Column, Generated } from 'typeorm';

import { Role } from '../enums/role.enum';

export abstract class UserBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  public_id: string;

  @Column({ name: 'name', length: 100 })
  name: string;

  @Column({ name: 'email', unique: true, length: 100 })
  email: string;

  @Column({ name: 'password', length: 255 })
  password: string;

  @Column({ name: 'role', type: 'enum', enum: Role })
  role: Role;
}
