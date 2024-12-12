import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = 3001;
  const appName = 'MyApp';

  console.log('==================================================');
  console.log(`🚀 ${appName} está iniciando...`);
  console.log(`🖥️ Ambiente: ${process.env.NODE_ENV || 'desenvolvimento'}`);
  console.log(`🌍 Porta: http://localhost:${port}`);
  console.log(`📅 Data: ${new Date().toLocaleString()}`);
  console.log('==================================================');

  await app.listen(3001);
}
bootstrap();
