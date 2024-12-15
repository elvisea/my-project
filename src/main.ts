import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<number>('PORT_BARBER_MASTER');

  const appName = 'Barber Master';

  console.log(
    '======================================================================================================================================================',
  );
  console.log(`💈 ${appName} - A barbearia digital está iniciando...`);
  console.log(`💻 Ambiente: ${process.env.NODE_ENV || 'desenvolvimento'}`);
  console.log(`🔧 Porta: http://localhost:${port}`);
  console.log(`🗓️  Data e Hora: ${new Date().toLocaleString()}`);
  console.log(`🌟 Preparando o salão para receber os clientes...`);
  console.log(
    '======================================================================================================================================================',
  );

  await app.listen(port);
}
bootstrap();
