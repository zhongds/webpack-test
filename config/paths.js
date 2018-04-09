const { resolve } = require('path');

module.exports = {
  rootDirectory: resolve(__dirname, '..'),
  appDirectory: resolve(__dirname, '../src'),
  distDirectory: resolve(__dirname, '../dist'),
}
