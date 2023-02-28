import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { IBuildOptions } from './types/config';

export const buildPlugins = ({
  paths,
  isDev,
}: IBuildOptions): WebpackPluginInstance[] => {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({ __IS_DEV__: JSON.stringify(isDev) }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshPlugin({ overlay: false }));
  }

  if (process.env.STATS === 'server' || isDev) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: process.env.STATS as
          | 'server'
          | 'static'
          | 'json'
          | 'disabled',
      })
    );
  }

  return plugins;
};
