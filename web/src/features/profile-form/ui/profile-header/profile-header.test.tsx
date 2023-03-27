import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/component-render';

import { ProfileHeader } from './profile-header';

describe('ProfileHeader', () => {
  test('Test render', () => {
    componentRender(<ProfileHeader />);
    expect(screen.getByTestId('profile-header')).toBeInTheDocument();
  });
});
