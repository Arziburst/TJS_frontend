module.exports = api => {
    const env = api.env();

    api.cache.using(() => env === 'development');

    const plugins = ['dynamic-import-node'];

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    // useBuiltIns: 'usage',
                    // corejs: 3,
                    shippedProposals: true,
                    spec: true,
                    loose: false,
                    debug: false,
                    targets: {
                        node: 'current',
                    },
                },
            ],
        ],
        plugins,
    };
};
