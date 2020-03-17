export const loadJavaScript = () => ({
    module: {
        rules: [
            {
                test:    /\.js$/,
                exclude: /node_modules/,
                use:     {
                    loader: 'babel-loader',
                },
            },
        ],
    },
});
