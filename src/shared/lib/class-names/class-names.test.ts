import { classNames } from './class-names';

describe('class-names', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional classes ', () => {
    const expectedResult = 'someClass class1 class2';
    expect(classNames('someClass', ['class1', 'class2'])).toBe(expectedResult);
  });

  test('with mods', () => {
    const expectedResult = 'someClass class1 class2 hovered';
    expect(
      classNames('someClass', ['class1', 'class2'], {
        hovered: true,
        scalable: false,
      })
    ).toBe(expectedResult);
  });

  test('with mods undefined', () => {
    const expectedResult = 'someClass class1 class2';
    expect(
      classNames('someClass', ['class1', 'class2'], {
        hovered: undefined,
      })
    ).toBe(expectedResult);
  });
});
