import { useFetchHook } from './fetch';

describe('fetch', () => {
  it('should work', () => {
    expect(useFetchHook).toBeCalled;
  });
});
