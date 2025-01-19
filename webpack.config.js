import {dirname, join} from "path";
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
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(__dirname, 'public/index.html'),
        }),
    ],
    devServer: {
        port: 3000,
        liveReload: true,
    },
};
