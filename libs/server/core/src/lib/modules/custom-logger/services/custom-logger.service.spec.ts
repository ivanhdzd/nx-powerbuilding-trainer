import { Test, TestingModule } from '@nestjs/testing';

import { CustomLoggerService } from './custom-logger.service';

describe('CustomLoggerService', (): void => {
  let service: CustomLoggerService;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomLoggerService],
    }).compile();

    service = module.get<CustomLoggerService>(CustomLoggerService);
  });

  it('should be defined', (): void => {
    expect(service).toBeDefined();
  });
});
