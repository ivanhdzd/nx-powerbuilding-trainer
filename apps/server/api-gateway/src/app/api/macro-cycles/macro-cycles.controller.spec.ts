import { Test, TestingModule } from '@nestjs/testing';
import { MacroCyclesController } from './macro-cycles.controller';

describe('MacroCyclesController', (): void => {
  let controller: MacroCyclesController;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MacroCyclesController],
    }).compile();

    controller = module.get<MacroCyclesController>(MacroCyclesController);
  });

  it('should be defined', (done: jest.DoneCallback): void => {
    expect(controller).toBeDefined();
    done();
  });
});
