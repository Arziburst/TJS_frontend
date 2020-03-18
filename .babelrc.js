module.exports = api => {
    const env = api.env(); // process.env.BABEL_ENV || process.env.NODE_ENV

    /**
     * Рекомендуется использовать именно эту форму кеширования для лучшей консистентности.
     * https://babeljs.io/docs/en/config-files#apicache
     */
    api.cache.using(() => env === 'development');

    // api.cache.never();

    const plugins = [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/proposal-class-properties',
        'babel-plugin-styled-components'
    ];

    if (env === 'development') {
        /**
         * Этот плагин не обязательный для хот-релодинга React-компонентов.
         * Обязательным является HOC hot из 'react-hot-loader/root'.
         * Но без этого плагина хот-релодинг может давать сборки, поэтому добавить его нужно.
         */
        plugins.push('react-hot-loader/babel');
    }

    return {
        presets: [
            '@babel/react',
            [
                '@babel/env',
                {
                    debug: false,
                    spec: true, // specification, делает код более медленным, но более надёжным
                    loose: false, // делает код более быстрым, но отходит от стандарта
                    modules: false, // webpack хорошо работает только с ES2015 модулями
                    // useBuiltIns: 'usage',
                },
            ],
        ],
        plugins,
        // dev (react-hot-loader нужен)
        // или
        // prod (react-hot-loader не нужен)
    };
};
