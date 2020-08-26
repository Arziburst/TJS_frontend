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
import { GenerateSW } from 'workbox-webpack-plugin';
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

export const defineEnvVariables = (): Configuration => ({
    plugins: [
        new DefinePlugin({
            'process.env': JSON.stringify({
                ...(
                    process.env.NODE_ENV === 'development'
                        ? dotenv.config({ path: '.env' }).parsed
                        : dotenv.config({ path: '.env.production' }).parsed
                ),
            }),
        }),
    ],
});

export const provideGlobals = (): Configuration => ({
    plugins: [
        new ProvidePlugin({
            React: 'react',
        }),
    ],
});

export const generateServiceWorker = (): Configuration => {
    const workbox = new GenerateSW({
        clientsClaim:     true,
        skipWaiting:      true,
        navigateFallback: '/index.html',
        mode:             'production',
    });

    return {
        plugins: [ workbox ],
    };
};
