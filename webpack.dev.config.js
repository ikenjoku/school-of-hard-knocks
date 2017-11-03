const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: ['webpack-hot-middleware/client', './src/App.jsx'],
        vendor: ['react', 'react-dom', 'whatwg-fetch', 'react-router', 'react-bootstrap', 'react-router-bootstrap'],
    },
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
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
    devtool: 'source-map'
};