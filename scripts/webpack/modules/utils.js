// Core
import {
    DefinePlugin,
    ProvidePlugin,
    HotModuleReplacementPlugin,
} from 'webpack';
import WebpackBar from 'webpackbar';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import dotenv from 'dotenv';

// Constants
import { PROJECT_ROOT, BUILD_DIRECTORY } from '../constants';

export const connectBuildProgressIndicator = () => ({
    plugins: [ new WebpackBar() ],
});

export const connectFriendlyErrors = () => ({
    plugins: [ new FriendlyErrorsWebpackPlugin() ],
});

export const connectHMR = () => ({
    plugins: [ new HotModuleReplacementPlugin() ],
});

export const cleanDirectories = () => ({
    plugins: [
        new CleanWebpackPlugin([ BUILD_DIRECTORY ], {
            verbose: true,
            root:    PROJECT_ROOT,
        }),
    ],
});

export const connectBundleAnalyzer = () => ({
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode:      'disabled',
            openAnalyzer:      false,
            generateStatsFile: true,
        }),
    ],
});

export const defineEnvVariables = () => {
    const { NODE_ENV } = process.env;

    return {
        plugins: [
            new DefinePlugin({
                'process.env': JSON.stringify({
                    NODE_ENV,
                    ...dotenv.config().parsed,
                }),
            }),
        ],
    };
};

export const provideGlobals = () => ({
    plugins: [
        new ProvidePlugin({
            React: 'react',
        }),
    ],
});
