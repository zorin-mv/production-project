import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/component-render';

import LoginForm from './login-form';

describe('LoginForm', () => {
  test('renders the component', () => {
    componentRender(<LoginForm onSuccess={() => {}} />);
    const loginForm = screen.getByTestId('login-form');
    expect(loginForm).toBeInTheDocument();
  });
  test('displays input placeholders', () => {
    const { getByPlaceholderText } = componentRender(<LoginForm onSuccess={() => {}} />);
    expect(getByPlaceholderText('email')).toBeInTheDocument();
    expect(getByPlaceholderText('password')).toBeInTheDocument();
  });
});
