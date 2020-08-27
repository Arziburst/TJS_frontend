// Core
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Service worker
import * as serviceWorker from './serviceWorker';

// Store
import { store, history, persistor } from './init/store';

// i18n
import './init/i18n';

// App
import { App } from './containers';

// Assets
import { initIconsLibrary } from './assets';

initIconsLibrary();

render(
    <Provider store = { store }>
        <PersistGate
            loading = { null }
            persistor = { persistor }>
            <Router history = { history }>
                <App />
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('app'),
);

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    serviceWorker.register();
}
