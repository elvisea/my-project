import { Injectable } from '@nestjs/common';

@Injectable()
export class MyAppService {
  getHello(): string {
    console.log('Hello World [my-app]!');

    return 'Hello World [my-app]!';
  }
}
