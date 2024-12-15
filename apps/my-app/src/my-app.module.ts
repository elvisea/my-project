import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '@app/database';

import { OwnersModule } from './apps/my-app/modules/owners/owners.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development.local', '.env.development', '.env'],
      cache: false,
      expandVariables: true,
    }),

    DatabaseModule,
    OwnersModule,
  ],
})
export class MyAppModule {}
