import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `App: MyProject - Date: ${new Date().toLocaleString()}`;
  }
}
