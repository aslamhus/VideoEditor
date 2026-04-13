import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import TerserPlugin from 'terser-webpack-plugin';

export default merge(common, {
    mode: 'production',
    entry: './src/VideoEditor/index.js',
    output: {
        filename: 'VideoEditor.bundle.js',
        library: {
            name: 'VideoEditor',
            type: 'umd',
            export: 'default',
        },
        globalObject: 'this',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                modules: 'auto',
                                targets: {
                                    browsers: ['> 0.25%', 'not dead']
                                }
                            }]
                        ]
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
});
