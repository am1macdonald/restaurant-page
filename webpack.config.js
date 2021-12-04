const { type } = require('os');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {   test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.ttf$/i,
                type: 'asset/resource',
            },
        ],
    },
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: 'main.js',
        clean: true,
    },
};