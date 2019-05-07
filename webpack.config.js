const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: './',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "source-map",
  watchOptions: {
    poll: true
  },
  target: 'electron',
  externals: {
    BSDeviceInfo : 'BSDeviceInfo',
    '@brightsign/registry': 'commonjs @brightsign/registry',
    '@brightsign/systemtime': 'commonjs @brightsign/systemtime',
    '@brightsign/networkconfiguration': 'commonjs @brightsign/networkconfiguration',
    '@brightsign/videooutput': 'commonjs @brightsign/videooutput',
    '@brightsign/screenshot': 'commonjs @brightsign/screenshot',

    '@brightsign/videomodeconfiguration': 'commonjs @brightsign/videomodeconfiguration',
    '@brightsign/videoinput': 'commonjs @brightsign/videoinput',
    '@brightsign/system': 'commonjs @brightsign/system',

    '@brightsign/hostconfiguration': 'commonjs @brightsign/hostconfiguration',
    '@brightsign/networkdiagnostics': 'commonjs @brightsign/networkdiagnostics',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['react', 'es2015']
        }
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './artifacts/**/*',
      to: '.',
      flatten: true
    }])
  ]
}