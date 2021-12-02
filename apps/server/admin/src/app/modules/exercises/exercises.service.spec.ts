import { Test, TestingModule } from '@nestjs/testing';
import { ExercisesService } from './exercises.service';

describe('ExercisesService', (): void => {
  let service: ExercisesService;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExercisesService],
    }).compile();

    service = module.get<ExercisesService>(ExercisesService);
  });

  it('should be defined', (done: jest.DoneCallback): void => {
    expect(service).toBeDefined();
    done();
  });
});
