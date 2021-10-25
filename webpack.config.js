const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
    },
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    'css-loader'
                ]
            },
            {
                test: /\.less$/, 
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
        ]
    }
}