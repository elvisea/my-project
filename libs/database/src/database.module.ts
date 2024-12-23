import { LoggerOptions } from 'typeorm';

import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Owner } from '../entities/owner.entity';
import { VerifiedOwnerEmail } from '../entities/verified-owner-email.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const logging: LoggerOptions =
          configService.get('NODE_ENV') === 'development'
            ? ['query', 'error', 'schema', 'warn']
            : [];

        console.log(`📅 Data: ${new Date().toLocaleString()}`);
        console.log(
          `Environment: ${configService.get('NODE_ENV') === 'development'}`,
        );

        return {
          type: 'postgres',
          host: configService.get('POSTGRES_HOST'),
          port: configService.get('POSTGRES_PORT'),
          username: configService.get('POSTGRES_USER'),
          password: configService.get('POSTGRES_PASSWORD'),
          database: configService.get('POSTGRES_DB'),
          entities: [Owner, VerifiedOwnerEmail],
          synchronize: true,
          logging: logging,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
