/** @type{import('@storybook/core-common').StorybookConfig} */
export default {
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
  }
}
