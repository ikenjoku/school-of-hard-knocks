const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',

    entry: {
        app: ['./src/App.jsx'],
        vendor: ['react', 'react-dom', 'whatwg-fetch', 'react-router', 'react-bootstrap', 'react-router-bootstrap'],
    },
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'app.bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }, ]
    },
};