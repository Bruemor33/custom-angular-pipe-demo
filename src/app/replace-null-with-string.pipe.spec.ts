import { ReplaceNullWithStringPipe } from './replace-null-with-string.pipe';

describe('ReplaceNullWithStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ReplaceNullWithStringPipe();
    expect(pipe).toBeTruthy();
  });

  it('should replace a null or undefined value with the N/A string', () => {
    const testItem = null 

    const pipe = new ReplaceNullWithStringPipe()

    const res = pipe.transform(testItem)

    expect(res).toBe('N/A')
  })
});
