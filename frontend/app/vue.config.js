const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    watch: true,
    watchOptions: {
      poll: 10000,
      ignored: '/node_modules/',
    },
  },
})
