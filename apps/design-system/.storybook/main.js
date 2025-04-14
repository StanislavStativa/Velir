import { dirname, join, resolve } from 'path';
import WatchExternalStylesPlugin from './WatchExternalStylesPlugin';

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config = {
  stories: ['../../demo/src/components/**/*.{stories,story}.{js,jsx,ts,tsx,mdx}'],
  staticDirs: ['../../demo/public/', '../../demo/src/assets/', '../public/'],

  addons: [
    getAbsolutePath('storybook-addon-deep-controls'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    '@chromatic-com/storybook',
  ],

  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {},
  },

  webpackFinal: async (config) => {
    // Add aliases similar to Vite's configuration
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/tw': resolve(__dirname, `../../demo/tailwind-config/`),
      '@': resolve(__dirname, `../../demo/src/`),
    };

    config.plugins.push(
      new WatchExternalStylesPlugin({
        path: resolve(__dirname, '../../demo/public/themes'),
        wsPort: 6061,
      })
    );

    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
      include: resolve(__dirname, '../../demo/public/themes'),
    });

    return config;
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
