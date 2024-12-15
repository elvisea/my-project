import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '@app/database';

import { MyAppService } from './my-app.service';
import { MyAppController } from './my-app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development.local', '.env.development', '.env'],
      cache: false,
      expandVariables: true,
    }),

    DatabaseModule,
  ],
  controllers: [MyAppController],
  providers: [MyAppService],
})
export class MyAppModule {}
