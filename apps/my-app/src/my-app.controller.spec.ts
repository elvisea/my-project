import { Test, TestingModule } from '@nestjs/testing';
import { MyAppController } from './my-app.controller';
import { MyAppService } from './my-app.service';

describe('MyAppController', () => {
  let myAppController: MyAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MyAppController],
      providers: [MyAppService],
    }).compile();

    myAppController = app.get<MyAppController>(MyAppController);
  });

  describe('root', () => {
    it('should return "🌟🌙 Durma bem e acorde com o coração leve! 💖🌜 🛏️😌 Boa noite!"', () => {
      expect(myAppController.getHello()).toBe(
        '🌟🌙 Durma bem e acorde com o coração leve! 💖🌜 🛏️😌 Boa noite!',
      );
    });
  });
});
