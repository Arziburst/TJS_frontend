// Core
import { put } from 'redux-saga/effects';

// Actions
import { authActions } from '../../actions';
import { orderActions } from '../../../orders/actions';
import { togglerCreatorAction } from '../../../togglers';

// Api
import { authenticate } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* callAuthenticateWorker () {
    const result = yield makeRequest({
        fetcher:     authenticate,
        togglerType: 'isProfileFetching',
        fill:        authActions.fillProfile,
    });

    if (result) {
        yield put(togglerCreatorAction('isAuthenticated', true));
        yield put(orderActions.ordersFetchAsync());
    }
}

