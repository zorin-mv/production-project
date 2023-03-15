import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/component-render';

import ProfilePage from './profile-page';

describe('ProfilePage', () => {
  test('Test render', () => {
    componentRender(<ProfilePage />);
    expect(screen.getByTestId('profile-page')).toBeInTheDocument();
  });
});
