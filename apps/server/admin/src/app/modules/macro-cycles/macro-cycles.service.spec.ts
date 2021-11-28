import { Test, TestingModule } from '@nestjs/testing';
import { MacroCyclesService } from './macro-cycles.service';

describe('MacroCyclesService', (): void => {
  let service: MacroCyclesService;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MacroCyclesService],
    }).compile();

    service = module.get<MacroCyclesService>(MacroCyclesService);
  });

  it('should be defined', (done: jest.DoneCallback): void => {
    expect(service).toBeDefined();
    done();
  });
});
