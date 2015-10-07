
module.exports = {
  entry: './index.js',

  output: {
    path: __dirname + "/dist",
    filename: "react-drill.js",
    libraryTarget: 'var',
    library: 'ReactDrill',
  },

  externals: {
    'react': 'React',
    'react/lib/ReactTestUtils': 'ReactTestUtils',
    'jquery': 'jQuery',
  },

  module: {
    loaders: [
      {
        test: /\.test\.js$/,
        include: [ __dirname + '/lib' ],
        loader: 'babel-loader',
      }
    ]
  },
};