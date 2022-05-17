import { buildHttpParams } from './build-http-params';

describe('buildHttpParams', () => {
  it('should build empty', () => {
    expect(buildHttpParams()).toBeUndefined();
  });

  it('should build with data', () => {
    expect(buildHttpParams({ param1: 'test', param2: ['test1', 'test2'] })?.toString()).toBe('param1=test&param2=test1&param2=test2');
  });

  it('should build with partial data', () => {
    expect(buildHttpParams({})?.toString()).toBe('');
    expect(buildHttpParams({ param1: 'test' })?.toString()).toBe('param1=test');
  });
});
