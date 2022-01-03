module.exports = {
  stories: ['../src/components/**/stories.tsx', '../src/pages/**/stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  staticDirs: ['../public'],
  framework: '@storybook/react',
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
