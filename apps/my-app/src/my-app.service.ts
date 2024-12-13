import { Injectable } from '@nestjs/common';

@Injectable()
export class MyAppService {
  getHello(): string {
    return '🌙✨ Boa noite! Que seus sonhos sejam tão lindos quanto você!';
  }
}
