import { FunctionComponent, SVGAttributes } from 'react';

export interface ISidebarItem {
  path: string;
  text: string;
  Icon: FunctionComponent<SVGAttributes<SVGElement>>;
}
