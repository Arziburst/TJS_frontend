// Core
import { Configuration } from 'webpack';
import { createTransformer } from 'typescript-plugin-styled-components';

// Instruments
import { nodeModulePath } from '../constants';

const styledComponentsTransformer = createTransformer();

export const loadTypeScript = (): Configuration => ({
    module: {
        rules: [
            {
                test:    /\.ts(x?)$/,
                include: /source/,
                exclude: /node_modules/,
                use:     {
                    loader:  'awesome-typescript-loader',
                    options: {
                        getCustomTransformers: () => ({ before: [ styledComponentsTransformer ]}),
                    },
                },
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test:    /\.js$/,
                loader:  'source-map-loader',
                exclude: [ nodeModulePath('apollo-link-token-refresh') ],
            },
        ],
    },
});

