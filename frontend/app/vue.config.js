const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    watch: true,
    watchOptions: {
      poll: 1000,
      ignored: '/node_modules/',
    },
  },
})
