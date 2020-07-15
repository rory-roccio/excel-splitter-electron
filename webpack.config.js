const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './client/src/index.jsx',
    mode: 'production',
    target: 'electron-renderer',
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'client/dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {from: './electron-starter.js'}
        ]
      })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    // devtool: 'source-map',
};
