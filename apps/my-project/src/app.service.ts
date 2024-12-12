import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('[my-project modificado para teste de deploy]');
    return 'Hello World [my-project]!';
  }
}
