import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "🌙✨ Boa noite! Que seus sonhos sejam tão lindos quanto você!"', () => {
      expect(appController.getHello()).toBe(
        '🌙✨ Boa noite! Que seus sonhos sejam tão lindos quanto você!',
      );
    });
  });
});
