// Core
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

// Store
import { store, history } from './init/store';

// i18n
import './init/i18n';

// App
import App from './containers/App';

render(
    <Provider store = { store }>
        <Router history = { history }>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app'),
);
