import { ReplaceNullWithStringPipe } from './replace-null-with-string.pipe';

describe('ReplaceNullWithStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ReplaceNullWithStringPipe();
    expect(pipe).toBeTruthy();
  });
});
