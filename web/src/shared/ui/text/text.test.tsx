import { render, screen } from '@testing-library/react';

import { TextComponent } from './text';

describe('Text', () => {
  test('Test render', () => {
    render(<TextComponent />);
    expect(screen.getByTestId('text-wrapper')).toBeInTheDocument();
  });
});
