import { Injectable, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

@Injectable()
export class AppService extends LoggerClass {
  constructor(logger: Logger) {
    super(logger);
  }

  public getData(): { message: string } {
    this.logger.debug('Getting data', 'getData');
    return { message: 'Welcome to auth!' };
  }
}
