import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '🌙✨ Boa noite! Que seus sonhos sejam tão lindos quanto você! 😴💫 Que o descanso te traga{\n}paz e energia para um novo dia cheio de conquistas! 🌟🌙 Durma bem e acorde com o coração leve! 💖🌜 🛏️😌 Boa noite!';
  }
}
