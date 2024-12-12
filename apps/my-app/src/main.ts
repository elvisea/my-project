import { NestFactory } from '@nestjs/core';
import { MyAppModule } from './my-app.module';

async function bootstrap() {
  const app = await NestFactory.create(MyAppModule);
  const port = 3000;
  const appName = 'MyApp';

  console.log('==================================================');
  console.log(`🚀 ${appName} está iniciando... Aguarde...`);
  console.log(`🖥️ Ambiente: ${process.env.NODE_ENV || 'desenvolvimento'}`);
  console.log(`🌍 Porta: http://localhost:${port}`);
  console.log(`📅 Data: ${new Date().toLocaleString()}`);
  console.log('==================================================');

  await app.listen(3000);
}
bootstrap();
