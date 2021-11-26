import { Test, TestingModule } from '@nestjs/testing';

import { AppService } from './app.service';

describe(`Testing '${AppService}'`, (): void => {
  let service: AppService;

  beforeAll(async (): Promise<void> => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', (): void => {
    it('Should return "Welcome to auth!"', (done: jest.DoneCallback): void => {
      expect(service.getData()).toEqual({ message: 'Welcome to auth!' });
      done();
    });
  });
});
