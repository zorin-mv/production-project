import AboutIcon from 'shared/assets/icons/about-us.svg';
import MainIcon from 'shared/assets/icons/main-page.svg';
import ProfileIcon from 'shared/assets/icons/profile-page.svg';
import { RoutePath } from 'shared/constant/app-routes';

import { ISidebarItem } from '../../ui/sidebar-item/sidebar-items.typings';

export const sidebarItemsList: ISidebarItem[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'mainPageNav',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'aboutPageNav',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'profilePageNav',
  },
];
