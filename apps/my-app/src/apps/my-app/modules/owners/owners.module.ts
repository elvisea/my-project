import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Owner } from '@lib/database/entities/owner.entity';

import { OwnerRepository } from './repositories/owner.repository';

import { CreateOwnerService } from './services/create-owner.service';
import { CreateOwnerController } from './controllers/create-owner.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Owner])],
  providers: [CreateOwnerService, OwnerRepository],
  controllers: [CreateOwnerController],
})
export class OwnersModule {}
