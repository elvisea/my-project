import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';

import { CreateOwnerService } from '../services/create-owner.service';

import { CreateOwnerRequestDTO } from '../dtos/create-owner-request.dto';
import { CreateOwnerResponseDTO } from '../dtos/create-owner-response.dto';

@ApiTags('Owners')
@Controller('owners')
export class CreateOwnerController {
  constructor(private readonly createOwnerService: CreateOwnerService) {}

  @Post('/')
  @ApiResponse({
    status: 201,
    description: 'Owner criado com sucesso',
    type: CreateOwnerResponseDTO,
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  async execute(
    @Body() createOwnerRequestDTO: CreateOwnerRequestDTO,
  ): Promise<CreateOwnerResponseDTO> {
    return this.createOwnerService.execute(createOwnerRequestDTO);
  }
}
