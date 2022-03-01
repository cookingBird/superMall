const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': path.resolve(__dirname, 'src/components'),
        'assets': path.resolve(__dirname, 'src/assets'),
        'network': path.resolve(__dirname, 'src/network'),
        'views': path.resolve(__dirname, 'src/views'),
        'router': path.resolve(__dirname, 'src/router'),
        'common': path.resolve(__dirname, 'src/common'),
      }
    }
  }
}
