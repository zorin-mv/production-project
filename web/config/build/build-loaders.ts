import { RuleSetRule } from 'webpack';

import { buildCssLoader } from './loaders/buildCssLoader';
import { IBuildOptions } from './types/config';

export const buildLoaders = ({ isDev }: IBuildOptions): RuleSetRule[] => {
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
  const cssLoaders = buildCssLoader(isDev);
  const tsloader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [babelLoader, tsloader, cssLoaders, svgLoader, fileLoader];
};
