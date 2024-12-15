import { Test, TestingModule } from '@nestjs/testing';

import { CreateOwnerController } from './create-owner.controller';
import { CreateOwnerService } from '../services/create-owner.service';

import { CreateOwnerRequestDTO } from '../dtos/create-owner-request.dto';
import { CreateOwnerResponseDTO } from '../dtos/create-owner-response.dto';

describe('CreateOwnerController', () => {
  let controller: CreateOwnerController;
  let createOwnerService: CreateOwnerService;

  // Mock do CreateOwnerService
  const mockCreateOwnerService = {
    execute: jest.fn().mockResolvedValue({
      id: 1,
      name: 'owner',
      email: 'owner@example.com',
      role: 'OWNER',
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateOwnerController],
      providers: [
        {
          provide: CreateOwnerService,
          useValue: mockCreateOwnerService,
        },
      ],
    }).compile();

    controller = module.get<CreateOwnerController>(CreateOwnerController);
    createOwnerService = module.get<CreateOwnerService>(CreateOwnerService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call createOwnerService.execute and return a owner', async () => {
    const createOwnerRequestDTO: CreateOwnerRequestDTO = {
      name: 'owner',
      email: 'owner@example.com',
      password: '123456',
    };

    const result: CreateOwnerResponseDTO = await controller.execute(
      createOwnerRequestDTO,
    );

    // Verifica se o método execute foi chamado uma vez
    expect(createOwnerService.execute).toHaveBeenCalledWith(
      createOwnerRequestDTO,
    );

    // Verifica se o resultado retornado é o esperado
    expect(result).toEqual({
      id: 1,
      email: 'owner@example.com',
      name: 'owner',
      role: 'OWNER',
    });
  });
});
