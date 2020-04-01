// Core
import { put } from 'redux-saga/effects';

// Types
import { ProfileState } from '../../types';

// Actions
import { fillProfile } from '../../actions';
import { ordersFetchAsync } from '../../../orders/actions';
import { togglerCreatorAction } from '../../../togglers';

// Api
import { authenticateRequest } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* callAuthenticateWorker () {
    const result = yield makeRequest<ProfileState>({
        fetcher:           authenticateRequest,
        togglerType:       'isProfileFetching',
        fill:              fillProfile,
        successSideEffect: ordersFetchAsync,
    });

    if (result) {
        yield put(togglerCreatorAction('isAuthenticated', true));
    }
}

