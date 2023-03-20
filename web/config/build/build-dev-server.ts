import type { Configuration as DevServConfiguration } from 'webpack-dev-server';
import { IBuildOptions } from './types/config';

export const buildDevServer = ({ port }: IBuildOptions): DevServConfiguration => ({
  port,
  open: true,
  historyApiFallback: true,
  hot: true,
});
