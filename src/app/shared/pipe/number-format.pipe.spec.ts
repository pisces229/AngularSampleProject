import { NumberFormatPipe } from './number-format.pipe';

describe('NumberFormatPipe', () => {
  const pipe = new NumberFormatPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('transforms "123456789" to "123,456,789"', () => {
    expect(pipe.transform('123456789')).toBe('123,456,789');
  });
});
