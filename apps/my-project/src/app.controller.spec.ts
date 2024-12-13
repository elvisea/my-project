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
    it('should return "🌟🌙 Durma bem e acorde com o coração leve! 💖🌜 🛏️😌 Boa noite!"', () => {
      expect(appController.getHello()).toBe(
        '🌟🌙 Durma bem e acorde com o coração leve! 💖🌜 🛏️😌 Boa noite!',
      );
    });
  });
});
