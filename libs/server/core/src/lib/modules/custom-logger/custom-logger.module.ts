import { Module, DynamicModule, Global, Logger } from '@nestjs/common';

import { CustomLoggerService } from './services/custom-logger.service';

@Global()
@Module({
  exports: [Logger],
  providers: [
    {
      provide: Logger,
      useValue: new CustomLoggerService('POWERBUILDING'),
    },
  ],
})
export class CustomLoggerModule {
  public static register(rootContext: string): DynamicModule {
    return {
      exports: [Logger],
      module: CustomLoggerModule,
      providers: [
        {
          provide: Logger,
          useValue: new CustomLoggerService(rootContext),
        },
      ],
    };
  }
}
