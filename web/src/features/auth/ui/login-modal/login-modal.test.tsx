import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/component-render';

import { LoginModal } from './login-modal';

describe('LoginModal', () => {
  it('renders the component', () => {
    const mockOnClose = jest.fn();
    componentRender(<LoginModal isOpen onClose={mockOnClose} />);
    const loginModal = screen.getByTestId('modal');
    expect(loginModal).toBeInTheDocument();
  });

  it('displays LoginForm component', () => {
    componentRender(<LoginModal isOpen onClose={jest.fn()} />);
    const loginForm = screen.getByTestId('login-form');
    expect(loginForm).toBeInTheDocument();
  });
});
