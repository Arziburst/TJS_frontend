// Middlewares
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { localStorageMiddleware } from './localStorageMiddleware';

// Router
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory({
    basename: process.env.BROWSER_HISTORY_BASENAME || '',
});

const isDev = process.env.NODE_ENV === 'development';
const sagaMiddleware = createSagaMiddleware();

const middlewares = [ sagaMiddleware, createRouterMiddleware(history), localStorageMiddleware ];

isDev && middlewares.push(
    createLogger({
        duration:  true,
        collapsed: true,
        colors:    {
            title:     () => '#139BFE',
            prevState: () => '#1C5FAF',
            action:    () => '#149945',
            nextState: () => '#A47104',
            error:     () => '#ff0005',
        },
    }),
);

export { middlewares, sagaMiddleware, history };
