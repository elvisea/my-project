import { Injectable } from '@nestjs/common';

@Injectable()
export class MyAppService {
  getHello(): string {
    return '🌟🌙 Durma bem e acorde com o coração leve! 💖🌜 🛏️😌 Boa noite!';
  }
}
