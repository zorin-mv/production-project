import path from 'path';
import webpack, { DefinePlugin } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { IBuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: IBuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve?.modules?.unshift(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  if (config.module?.rules) {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module?.rules?.map((rule: webpack.RuleSetRule | '...') => {
      if (rule !== '...' && /svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module?.rules?.push(buildCssLoader(true));
  config.plugins?.push(new DefinePlugin({ __IS_DEV__: true }));

  return config;
};
