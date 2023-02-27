import { render, screen } from '@testing-library/react';

import { Text } from './text';

describe('Text', () => {
  test('Test render', () => {
    render(<Text />);
    expect(screen.getByTestId('text-wrapper')).toBeInTheDocument();
  });
});
