import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe(`Testing '${AppController.name}'`, (): void => {
  let app: TestingModule;

  beforeAll(async (): Promise<void> => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', (): void => {
    it('Should return "Welcome to auth!"', (done: jest.DoneCallback): void => {
      const appController: AppController =
        app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({ message: 'Welcome to auth!' });
      done();
    });
  });
});
