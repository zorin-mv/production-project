import { render, screen } from '@testing-library/react';

import { Avatar } from './avatar';

describe('Avatar', () => {
  test('Test render', () => {
    render(<Avatar src="" />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });
});
