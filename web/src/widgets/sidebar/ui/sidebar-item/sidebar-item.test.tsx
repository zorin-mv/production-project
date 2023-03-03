import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/component-render';
import { sidebarItemsList } from 'widgets/sidebar/model/constants/sidebar-items';

import { SidebarItem } from './sidebar-item';

describe('SidebarItem', () => {
  test('Test render', () => {
    componentRender(<SidebarItem item={sidebarItemsList[0]} />);
    expect(screen.getByTestId('sidebar-item')).toBeInTheDocument();
  });
});
