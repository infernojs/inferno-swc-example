import {dirname, join, resolve} from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|gif|png|svg)/,
                type: 'asset/resource',
            },
        ],
    },
    resolve : {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(__dirname, 'public/index.html'),
        })
    ],
    /*
     * Define the index.html file to be ignored from the HTTP cache
     * then add the content-hash to the output filename,
     * this way latest bundle will always be loaded and the bundle will be cached
     */
    output: {
        filename: '[name].[contenthash].js',
        path: resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        port: 3000,
        liveReload: true,
    },
};
