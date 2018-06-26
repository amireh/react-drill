var path = require('path')

module.exports = {
  entry: {
    application: path.resolve(__dirname, 'lib/index.js')
  },
  context: path.resolve(__dirname, 'lib'),

  output: {
    path: __dirname + "/dist",
    filename: "react-drill.js",
    libraryTarget: 'var',
    library: 'ReactDrill',
  },

  module: {
    rules: [
      {
        test: /\.test\.js$/,
        include: [
          path.resolve(__dirname, 'lib'),
        ],
        loader: 'babel-loader',
        options: {
          plugins: ['babel-plugin-istanbul', {
            cwd: path.resolve(__dirname, 'lib'),
          }]
        }
      }
    ]
  },
};