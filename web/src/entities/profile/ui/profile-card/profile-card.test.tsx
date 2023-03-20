import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/component-render';

import { ProfileCard } from './profile-card';

describe('ProfileCard', () => {
  test('Test render', () => {
    componentRender(<ProfileCard />);
    expect(screen.getByTestId('profile-card')).toBeInTheDocument();
  });
});
