const path = require('path');

module.exports = {
  entry: './script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.min.js'
  }
};