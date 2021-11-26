import { sharedCore } from './shared-core';

describe('Testing shared core', (): void => {
  describe(`Testing '${sharedCore.name}' function`, (): void => {
    it('Should work', (done: jest.DoneCallback): void => {
      expect(sharedCore()).toEqual('shared-core');
      done();
    });
  });
});
