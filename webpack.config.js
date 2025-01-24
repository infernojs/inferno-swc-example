import {dirname, join, resolve} from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {fileURLToPath} from 'url';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ESLintWebpackPlugin from "eslint-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let isProduction = process.env.NODE_ENV === 'production';

console.log("Building isProduction = ", isProduction);

export default {
    mode: 'development',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'swc-loader',
                    options: {
                        "jsc": {
                            "parser": {
                                "syntax": "typescript",
                                "tsx": true,
                            },
                            "experimental": {
                                "plugins": [
                                    ["swc-plugin-inferno", {}]
                                ],
                            },
                            "target": "es2022",
                            "loose": true
                        }
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/css/',
                        },
                    },
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(jpe?g|gif|png|svg)/,
                type: 'asset/resource',
            },
        ],
    },
    resolve : {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
        alias: {
            'inferno': isProduction ? 'inferno/dist/index.mjs' : 'inferno/dist/index.dev.mjs',
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: join(__dirname, 'public/index.html'),
        }),
        new ESLintWebpackPlugin({
            extensions: ['ts', 'tsx', 'js', 'jsx'],
            configType: 'flat'
        }),
    ],
    output: {
        filename: 'js/[name].[contenthash].js',
        path: resolve(__dirname, 'dist'),
        publicPath: isProduction ? 'https://YOUR-DOMAIN/' : '',
        clean: true,
    },
    devServer: {
        port: 5110,
        liveReload: true,
        historyApiFallback: true,
    },
};
