// Core
import {
    Configuration,
    DefinePlugin,
    ProvidePlugin,
    HotModuleReplacementPlugin,
} from 'webpack';
import WebpackBar from 'webpackbar';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import dotenv from 'dotenv';

export const connectBuildProgressIndicator = (): Configuration => ({
    plugins: [ new WebpackBar() ],
});

export const connectFriendlyErrors = (): Configuration => ({
    plugins: [ new FriendlyErrorsWebpackPlugin() ],
});

export const connectHMR = (): Configuration => ({
    plugins: [ new HotModuleReplacementPlugin() ],
});

export const cleanDirectories = (): Configuration => ({
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
        }),
    ],
});

export const connectBundleAnalyzer = (): Configuration => ({
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode:      'disabled',
            openAnalyzer:      false,
            generateStatsFile: true,
        }),
    ],
});

export const defineEnvVariables = (IS_DEVELOPMENT: boolean): Configuration => {
    if (IS_DEVELOPMENT) {
        return {
            plugins: [
                new DefinePlugin({
                    'process.env': JSON.stringify({
                        ...dotenv.config().parsed,
                    }),
                }),
            ],
        };
    }

    return {
        plugins: [],
    };
};

export const provideGlobals = (): Configuration => ({
    plugins: [
        new ProvidePlugin({
            React: 'react',
        }),
    ],
});
