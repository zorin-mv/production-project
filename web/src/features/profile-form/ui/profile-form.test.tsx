import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/component-render';

import { ProfileForm } from './profile-form';

describe('ProfileForm', () => {
  test('Test render', () => {
    componentRender(<ProfileForm />);
    expect(screen.getByTestId('profile-form')).toBeInTheDocument();
  });
});
