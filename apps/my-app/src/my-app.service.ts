import { Injectable } from '@nestjs/common';

@Injectable()
export class MyAppService {
  getHello(): string {
    console.log('[my-app modificado para teste de deploy]');

    return 'Hello World [my-app]!';
  }
}
