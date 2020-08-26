// Core
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Middlewares
import { middlewares, sagaMiddleware, history } from './middleware';

// Instruments
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

const persistedReducer = persistReducer(
    {
        key:       process.env.APP_NAME || 'AwesomeApp',
        storage,
        whitelist: [ 'products' ],
    },
    rootReducer,
);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)));

const  persistor = persistStore(store);

export { store, history, persistor };

sagaMiddleware.run(rootSaga);
