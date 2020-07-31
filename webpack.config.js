const TerserJSPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/docs',
        filename: 'main.js'
    },
    devServer: {
        port: 5000
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
      },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader }, 
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use:[
                   {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        useRelativePath:true
                    }
                   }
                ]
            },
            {
                test: /\.(pdf)$/,
                use:[
                   {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }
                   }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
}