import { Test, TestingModule } from '@nestjs/testing';
import { ExercisesController } from './exercises.controller';

describe('ExercisesController', (): void => {
  let controller: ExercisesController;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExercisesController],
    }).compile();

    controller = module.get<ExercisesController>(ExercisesController);
  });

  it('should be defined', (done: jest.DoneCallback): void => {
    expect(controller).toBeDefined();
    done();
  });
});
