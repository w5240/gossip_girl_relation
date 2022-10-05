/*
 * @Author: wangshuzhao
 * @Date: 2022-09-29 16:14:05
 * @LastEditors: wangshuzhao
 * @LastEditTime: 2022-09-30 16:21:44
 * @Description: 
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
})
