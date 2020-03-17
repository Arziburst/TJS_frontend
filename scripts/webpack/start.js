// Node webpack dev server:
// 1. ✓ webpack
// 2. ✓ webpack-dev-server (express + webpack-dev-middleware + много хелперов)
// 3. ✓ webpack-hot-middleware
// 4. ✓ конфигурация ⚙️
// 5. ✓ создать компайлер webpack
// 6. ✓ запуск 🚀

// Hot reloading:
// 1. ✓ настроить на сервере
// 2. ✓ настроить на клиенте
// 3. ✓ настроить в вебпаке :)
// 4. ✓ настроить в исходном коде

// Core
import webpack from 'webpack';
import DevServer from 'webpack-dev-server';
import hot from 'webpack-hot-middleware';
import chalk from 'chalk'; // Раскрашивает консоль;
import openBrowser from 'react-dev-utils/openBrowser';
import { choosePort } from 'react-dev-utils/WebpackDevServerUtils';

// Config
import getDevConfig from './config/webpack.dev';

// Constants
import { HOST, PORT } from './constants';

const compiler = webpack(getDevConfig());

(async () => {
    try {
        const choosenPort = await choosePort(HOST, PORT);

        if (!choosenPort) {
            console.log(
                chalk.yellowBright('→ It\'s impossible to run the app :('),
            );

            return null;
        }

        const server = new DevServer(compiler, {
            // memory-fs
            host:               HOST,
            port:               choosenPort,
            historyApiFallback: true,
            overlay:            true,
            quiet:              true,
            clientLogLevel:     'none',
            noInfo:             true,
            after:              (app) => {
                app.use(
                    hot(compiler, {
                        log: false,
                    }),
                );
            },
        });

        server.listen(choosenPort, HOST, () => {
            console.log(
                `${chalk.greenBright(
                    '→ Server listening on',
                )} ${chalk.blueBright(`http://${HOST}:${choosenPort}`)}`,
            );
            openBrowser(`http://${HOST}:${choosenPort}`);
        });
    } catch (error) {
        console.log(chalk.redBright('→ Error!'));
        console.error(error.message || error);
    }
})();
