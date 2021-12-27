module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    console.log(`process.cwd():: ${process.cwd()}/src`)
    return config
  }
}
