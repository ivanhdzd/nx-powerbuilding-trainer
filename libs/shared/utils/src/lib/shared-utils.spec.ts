import { sharedUtils } from './shared-utils';

describe('Testing shared utils', (): void => {
  describe(`Testing '${sharedUtils.name}'`, (): void => {
    it('Should work', (done: jest.DoneCallback): void => {
      expect(sharedUtils()).toEqual('shared-utils');
      done();
    });
  });
});
