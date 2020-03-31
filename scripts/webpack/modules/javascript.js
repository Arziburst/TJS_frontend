// Core
import { createTransformer } from 'typescript-plugin-styled-components';

const styledComponentsTransformer = createTransformer();

export const loadTypeScript = () => ({
    module: {
        rules: [
            {
                test:    /\.ts(x?)$/,
                exclude: /node_modules/,
                use:     {
                    loader:  'awesome-typescript-loader',
                    options: {
                        getCustomTransformers: () => ({ before: [ styledComponentsTransformer ] }),
                    },
                },

            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test:    /\.js$/,
                loader:  'source-map-loader',
            },
        ],
    },
});

