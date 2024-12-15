import { HttpException, HttpStatus } from '@nestjs/common';

import { ErrorCode } from '../enums/error-code.enum';

export class OwnerAlreadyExistsException extends HttpException {
  constructor() {
    super(ErrorCode.OWNER_ALREADY_EXISTS, HttpStatus.BAD_REQUEST);
  }
}
