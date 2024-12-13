import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '🌙✨ Boa noite! Que seus sonhos sejam tão lindos quanto você!';
  }
}
