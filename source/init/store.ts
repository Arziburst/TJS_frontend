// Core
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Middlewares
import { middlewares, sagaMiddleware, history } from './middleware';

// Instruments
import rootReducer from './rootReducer';
import { rootSaga } from './rootSaga';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export { store, history };

sagaMiddleware.run(rootSaga);
