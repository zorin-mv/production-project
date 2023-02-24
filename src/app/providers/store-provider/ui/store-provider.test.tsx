import { render, screen } from '@testing-library/react';

import { StoreProvider } from './store-provider';

describe('StoreProvider', () => {
  test('Test render', () => {
    render(<StoreProvider />);
    expect(screen.getByTestId('store-provider')).toBeInTheDocument();
  });
});
