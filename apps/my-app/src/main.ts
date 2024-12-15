import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { MyAppModule } from './my-app.module';

async function bootstrap() {
  const app = await NestFactory.create(MyAppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<number>('PORT_MY_APP');

  const appName = 'App: My App';

  console.log('==================================================');
  console.log(`🚀 ${appName} está iniciando...`);
  console.log(`🖥️  Ambiente: ${process.env.NODE_ENV || 'desenvolvimento'}`);
  console.log(`🌍 Porta: http://localhost:${port}`);
  console.log(`📅 Data: ${new Date().toLocaleString()}`);
  console.log('==================================================');

  await app.listen(port);
}
bootstrap();
