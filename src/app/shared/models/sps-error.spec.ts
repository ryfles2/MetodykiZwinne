import { SpsError } from './sps-error';

describe('Error', () => {
  it('should create an instance', () => {
    expect(new SpsError()).toBeTruthy();
  });
});
