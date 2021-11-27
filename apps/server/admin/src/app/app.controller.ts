import { Controller, Get, Logger } from '@nestjs/common';
import { LoggerClass } from '@powerbuilding-trainer/server/core';

import { AppService } from './app.service';

@Controller()
export class AppController extends LoggerClass {
  constructor(logger: Logger, private readonly appService: AppService) {
    super(logger);
  }

  @Get()
  public getData(): { message: string } {
    this.logger.debug('Getting data', 'getData');
    return this.appService.getData();
  }
}
