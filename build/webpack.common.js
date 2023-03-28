import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
console.log(__dirname);

export default {
  name: 'VideoEditor',

  output: {
    path: path.resolve(__dirname, '../dist/'),
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      { test: /\.m?js/, type: 'javascript/auto' },
      {
        test: /\.(ttf|eot|woff2|woff)/,
        generator: {
          //If emitting file, the file path is
          filename: 'fonts/[hash][ext]',
        },
      },

      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [require('autoprefixer')],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      // '@': path.resolve(__dirname, './src'),
      '@bootstrap': path.resolve(__dirname, '../node_modules/bootstrap'),
      '@fontawesome': path.resolve(__dirname, '../node_modules/font-awesome'),
      //   '@stylesheets': path.resolve(__dirname, '../../src/dashboard/stylesheets'),
      //   '@yalc': path.resolve(__dirname, '../../.yalc'),
      //   '@components': path.resolve(__dirname, '../../src/dashboard/components'),
      // ...etc
    },
  },
};
