import { fireEvent, render } from '@testing-library/react';

import { Input } from './input';

describe('Input component', () => {
  test('renders input element', () => {
    const { getByTestId } = render(<Input />);
    expect(getByTestId('input')).toBeInTheDocument();
  });

  test('render with default value', () => {
    const value = 'test';
    const { getByTestId } = render(<Input value={value} />);
    const inputElement = getByTestId('input') as HTMLInputElement;

    expect(inputElement.value).toBe('test');
  });

  test('calls onChange callback when input value changes', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(<Input onChange={onChangeMock} />);
    const inputElement = getByTestId('input') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'test value' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(inputElement.value).toBe('test value');
  });
});
