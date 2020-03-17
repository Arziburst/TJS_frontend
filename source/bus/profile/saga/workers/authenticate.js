// Core
import { put } from 'redux-saga/effects';

// Actions
import { authActions } from '../../actions';
import { orderActions } from '../../../orders/actions';
import { togglerCreator } from '../../../togglers';

// Api
import { authenticate } from '../../../../api';

// Instruments
import { makeRequestWithSpinner } from '../../../../workers';

export function* callAuthenticateWorker () {
    const result = yield makeRequestWithSpinner({
        fetcher:     authenticate,
        togglerType: 'isProfileFetching',
        fill:        authActions.fillProfile,
    });

    if (result) {
        yield put(togglerCreator('isAuthenticated', true));
        yield put(orderActions.fetchAsync());
    }
}

