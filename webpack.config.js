'use strict';

var webpack = require('webpack');
var typescript = require('typescript');
const path = require('path');

var distDir = path.resolve(__dirname, 'dist');
module.exports = {
    mode:'development',
    entry: "./src/main.ts",
    // What files webpack will manage
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    watchOptions: {
        aggregateTimeout:500,
        poll: 5000 //check for modifications every x ms
    },

    // Make errors mor clear
    devtool: 'inline-source-map',

    // Configure output folder and file
    output: {
        path: distDir,
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },

    devServer: {
        contentBase: './dist'
    },


    plugins: [
    ],

    externals: [
        // Don't bundle pixi.js, assume it'll be included in the HTML via a script
        // tag, and made available in the global variable PIXI.
        {"pixi.js": "PIXI"}
    ]

};