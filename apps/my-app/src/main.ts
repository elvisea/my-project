import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { MyAppModule } from './my-app.module';

async function bootstrap() {
  const app = await NestFactory.create(MyAppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<number>('PORT_MY_APP');
  const environment = configService.get('NODE_ENV');

  const appName = 'Barber Master';

  console.log(
    '======================================================================================================================================================',
  );
  console.log(`💈 ${appName} - A barbearia digital está iniciando...`);
  console.log(`💻 Ambiente: ${environment || 'desenvolvimento'}`);
  console.log(`🔧 Porta: http://localhost:${port}`);
  console.log(`🗓️  Data e Hora: ${new Date().toLocaleString()}`);
  console.log(`🌟 Preparando o salão para receber os clientes...`);
  console.log(
    '======================================================================================================================================================',
  );

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Middleware Sundancae')
    .setDescription('Descrição da API Example')
    .setVersion('1.0')
    .addTag('produtos')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  await app.listen(port);
}
bootstrap();
