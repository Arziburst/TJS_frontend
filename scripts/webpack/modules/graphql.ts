// Core
import { Configuration } from 'webpack';

export const loadGraphQL = (): Configuration => ({
    module: {
        rules: [
            {
                test:    /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader:  'graphql-tag/loader',
            },
        ],
    },
});
