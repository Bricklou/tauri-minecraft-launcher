import { StorybookConfig } from '@storybook/builder-vite'
import { resolve } from 'path'

/** @type{import('@storybook/core-common').StorybookConfig} */
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-actions'
  ],
  framework: '@storybook/react-vite',
  core: {
    builder: '@storybook/builder-vite'
  },
  viteFinal(config, options) {
    return {
      ...config,
      resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          '@': resolve(__dirname, '../src/')
        }
      }
    }
  }
}
export default config
