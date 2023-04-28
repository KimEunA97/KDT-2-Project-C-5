import { fileURLToPath } from 'url';
import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const __dirname = path.resolve();

export default {
  mode: 'development',
  entry: './src/render.js',
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js',
  },
  resolve:{
    extensions:['.js','.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
          
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};