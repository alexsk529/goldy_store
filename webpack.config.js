
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const globule = require('globule');
const fs = require('fs')
const path = require('path')

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}
console.log(mode + ' mode');

const paths = globule.find(["src/pages/**/*.pug"])

const mixins = globule
    .find(["src/blocks/**/*.pug"])
    .map((path) => path.split('/').pop().split('.').slice(0, 1))
    .reduce((acc, currentItem) => acc + `include ../blocks/${currentItem}/${currentItem}.pug\n`, ``);

fs.writeFile("src/libs/_libs.pug", mixins, (err) => {
    if (err) throw err;
    console.log('Mixins are included automatically!')
})

const styles = globule
    .find(["src/blocks/**/*.scss"])
    .map((path) => path.split('/').pop().split('.').slice(0, 1))
    .reduce((acc, currentItem) => acc + `@use \"../blocks/${currentItem}/${currentItem}.scss\";\n`, ``)

fs.writeFile("src/libs/_libs.scss", styles, (err) => {
    if (err) throw err;
    console.log('Styles are included automatically!')
})

const scripts = globule
    .find(["src/blocks/**/*.js"])
    .map((path) => path.split('/').pop().split('.').slice(0, 1))
    .reduce((acc, currentItem) => acc + `import \'../blocks/${currentItem}/${currentItem}.js\';\n`, ``)

fs.writeFile("src/libs/_scripts.js", scripts, (err) => {
    if (err) throw err;
    console.log('Scripts are included automatically!')
})

module.exports = {
    mode: mode,
    entry: {
        'index': './src/pages/index/index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true,
        path: path.resolve(__dirname, 'docs')
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        ...paths.map((path) => {
            return new HtmlWebpackPlugin({
                template: path,
                filename: `${path.split(/\/|.pug/).splice(-2, 1)}.html`,
                chunks: [`${path.split(/\/|.pug/).splice(-2, 1)}`],
            });
        })

    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            //Options
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                exclude: /(node-modules|bower_components)/,
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },

}