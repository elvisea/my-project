import { Injectable } from '@nestjs/common';

@Injectable()
export class MyAppService {
  getHello(): string {
    return 'Hello wWorld [MyApp]';
  }
}
