import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from 'shared/lib/tests/component-render';

import { Counter } from './counter';

describe('Counter', () => {
  test('Test render', () => {
    const counter = componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(counter.getByTestId('value-title')).toHaveTextContent('10');
  });
  test('increment', () => {
    const counter = componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(counter.getByTestId('increment-btn'));
    expect(counter.getByTestId('value-title')).toHaveTextContent('11');
  });
  test('decrement', () => {
    const counter = componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(counter.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
