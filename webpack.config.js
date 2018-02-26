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

  // externals: {
  //   'react': 'React',
  //   'react/lib/ReactTestUtils': 'ReactTestUtils',
  //   'jquery': 'jQuery',
  // },

  module: {
    rules: [
      {
        test: /\.test\.js$/,
        include: [ __dirname + '/lib' ],
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