const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/App.jsx',
        vendor: ['react', 'react-dom', 'whatwg-fetch', 'react-router', 'react-bootstrap', 'react-router-bootstrap'],
    },
    output: {
        path: './static',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
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
    devServer: {
        port: 8200,
        contentBase: 'static',
        proxy: {
            '/api/*': {
                target: 'http://localhost:3200'
            }
        },
        historyApiFallback: true,
    },
    devtool: 'source-map'
};