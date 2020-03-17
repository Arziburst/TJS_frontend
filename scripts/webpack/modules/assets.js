// Core
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Constants
import { STATIC_DIRECTORY } from '../constants';

export const connectHtml = () => ({
    plugins: [
        new HtmlWebpackPlugin({
            template: `${STATIC_DIRECTORY}/template.html`,
            title:    'TJS',
            favicon:  `${STATIC_DIRECTORY}/favicon.ico`,
        }),
    ],
});

export const loadImages = () => ({
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use:  [
                    {
                        loader:  'file-loader',
                        options: {
                            name: 'images/[name].[hash:5].[ext]',
                        },
                    },
                ],
            },
        ],
    },
});

export const loadSvg = () => ({
    module: {
        rules: [
            {
                test:   /\.svg$/,
                issuer: {
                    test: /\.js$/,
                },
                use: [
                    '@svgr/webpack',
                    {
                        loader:  'file-loader',
                        options: {
                            name: 'images/[name].[hash:5].[ext]',
                        },
                    },
                ],
            },
            {
                test:   /\.svg$/,
                issuer: {
                    test: /\.css$/,
                },
                use: [
                    {
                        loader:  'file-loader',
                        options: {
                            // limit: 0,
                            name: 'images/[name].[hash:5].[ext]',
                        },
                    },
                ],
            },
        ],
    },
});

export const loadFonts = () => ({
    module: {
        rules: [
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                use:  [
                    {
                        loader:  'file-loader',
                        options: {
                            name: 'fonts/[name].[hash:5].[ext]',
                        },
                    },
                ],
            },
        ],
    },
});
