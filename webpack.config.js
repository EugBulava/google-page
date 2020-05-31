const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },

    devServer: {
        overlay: true
    },

    module: {
        rules: [{
            test: /\.css/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: { sourceMap: true }
                },
                {
                    loader: "postcss-loader",
                    options: { sourceMap: true, config: {path: 'postcss.config.js'}}
                }
            ]
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new CopyPlugin({
            patterns: [
              { from: 'public', to: 'public' }
            ],
        }),
    ],

}