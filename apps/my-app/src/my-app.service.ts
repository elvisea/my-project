import { Injectable } from '@nestjs/common';

@Injectable()
export class MyAppService {
  getHello(): string {
    return `App: MyApp - Date: ${new Date().toLocaleString()}`;
  }
}
