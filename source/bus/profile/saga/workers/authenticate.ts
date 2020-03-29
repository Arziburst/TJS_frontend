// Core
import { put } from 'redux-saga/effects';

// Actions
import { fillProfile } from '../../actions';
import { orderActions } from '../../../orders/actions';
import { togglerCreatorAction } from '../../../togglers';

// Api
import { authenticateRequest } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* callAuthenticateWorker () {
    const result = yield makeRequest({
        fetcher:     authenticateRequest,
        togglerType: 'isProfileFetching',
        fill:        fillProfile,
    });

    if (result) {
        yield put(togglerCreatorAction('isAuthenticated', true));
        yield put(orderActions.ordersFetchAsync());
    }
}

