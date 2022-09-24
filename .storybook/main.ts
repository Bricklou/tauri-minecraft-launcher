import type { StorybookConfig } from '@storybook/core-common'

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react-vite",
  core: {
    builder: "@storybook/builder-vite"
  },
  features: {
  },
}

export default config