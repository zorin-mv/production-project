import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/component-render';

import { Sidebar } from './sidebar';

describe('Sidebar', () => {
  test('Test render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toogle', () => {
    componentRender(<Sidebar />);
    const toogleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toogleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
