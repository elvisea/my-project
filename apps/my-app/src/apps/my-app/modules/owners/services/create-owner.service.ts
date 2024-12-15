import * as bcrypt from 'bcrypt';

import { Injectable, Logger } from '@nestjs/common';

import { Role } from '@lib/database/enums/role.enum';
import { Owner } from '@lib/database/entities/owner.entity';

import { OwnerRepository } from '../repositories/owner.repository';

import { CreateOwnerRequestDTO } from '../dtos/create-owner-request.dto';
import { CreateOwnerResponseDTO } from '../dtos/create-owner-response.dto';

import { OwnerAlreadyExistsException } from '../exceptions/owner-already-exists.exception';

@Injectable()
export class CreateOwnerService {
  private readonly logger = new Logger(CreateOwnerService.name);

  constructor(private readonly ownerRepository: OwnerRepository) {}

  async execute(data: CreateOwnerRequestDTO): Promise<CreateOwnerResponseDTO> {
    this.logger.log(
      `Iniciando a criação do proprietário com email: ${data.email}`,
    );

    const existingOwner = await this.ownerRepository.findByEmail(data.email);

    if (existingOwner) {
      this.logger.warn(`Proprietário com email ${data.email} já existe`);
      throw new OwnerAlreadyExistsException();
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    this.logger.log(
      `Senha do proprietário com email ${data.email} codificada com sucesso`,
    );

    const owner = new Owner();

    Object.assign(owner, {
      ...data,
      role: Role.OWNER,
      password: hashedPassword,
    });

    const createdOwner = await this.ownerRepository.create(owner);
    this.logger.log(
      `proprietário com email ${data.email} criado com sucesso. ID: ${createdOwner.id}`,
    );

    const createOwnerResponseDTO = new CreateOwnerResponseDTO();

    Object.assign(createOwnerResponseDTO, {
      id: createdOwner.id,
      public_id: createdOwner.public_id,
      role: createdOwner.role,
      name: createdOwner.name,
      email: createdOwner.email,
    });

    this.logger.log(
      `Criação do proprietário com email ${data.email} concluída com sucesso`,
    );

    return createOwnerResponseDTO;
  }
}
