import { Injectable } from '@nestjs/common';

@Injectable()
export class MyAppService {
  getHello(): string {
    console.log('[my-app modificado para teste]');

    return 'Hello World [my-app]!';
  }
}
