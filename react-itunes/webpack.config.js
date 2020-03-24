const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
      },
      resolve: {
        extensions: ['.js', '.jsx']
      },
      module: {
        rules: [
          {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.s?[ac]ss$/,
            use: [
              {
                loader: miniCssExtractPlugin.loader,
                options: {
                  hmr: process.env.NODE_ENV === 'development',
                },
              },
              { 
                loader: 'css-loader', 
                options: { 
                  url: false, 
                  sourceMap: true 
                } 
              },
              { 
                loader: 'sass-loader', 
                options: { 
                  sourceMap: true 
                } 
              },
            ],
          }
        ]
    },
    devServer: {
      publicPath: '/build',
      proxy: {
        '/api': 'http://localhost:3000'
      },
      hot: true
    },
    plugins: [
      new miniCssExtractPlugin({
        filename: 'styles.css',
        chunkFilename: 'styleId.css',
      }),
    ],
};