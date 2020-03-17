// Core
import { createStore, applyMiddleware, compose } from 'redux';

// Middlewares
import { isDev, middlewares, sagaMiddleware, history } from './middleware';

// Instruments
import rootReducer from './rootReducer';
import { rootSaga } from './rootSaga';

// ReduxDevTool Extesion
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = isDev && devtools ? devtools : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export { store, history };

sagaMiddleware.run(rootSaga);
