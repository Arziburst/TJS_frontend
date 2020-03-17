// Core
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const loadCss = ({ sourceMap = false } = { sourceMap: false }) => ({
    loader:  'css-loader',
    options: {
        modules:        true,
        localIdentName: '[path][name]__[local]--[hash:base64:5]',
        sourceMap,
    },
});

export const loadDevCss = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  [
                    'style-loader',
                    loadCss({ sourceMap: true }),
                ],
            },
        ],
    },
});

export const loadProdCss = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  [
                    MiniCssExtractPlugin.loader,
                    loadCss({ sourceMap: false }),
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:      'css/[name].[contenthash:5].[id].css',
            chunkFilename: 'css/[name].[contenthash:5].[id].css',
        }),
    ],
});
