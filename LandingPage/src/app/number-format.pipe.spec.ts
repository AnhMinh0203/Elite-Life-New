import { NumberFormatPipe } from './Core/pipes/number-format.pipe';

describe('NumberFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
