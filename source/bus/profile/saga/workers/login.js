// Core
import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

// Actions
import { togglerCreator } from '../../../togglers';
import { authActions } from '../../actions';
import { orderActions } from '../../../orders/actions';

// Api
import { login } from '../../../../api';

// Instruments
import { makeRequestWithSpinner } from '../../../../workers';

export function* callLoginWorker ({ payload: { email, password }}) {
    const result = yield makeRequestWithSpinner({
        fetcher:     login(email, password),
        togglerType: 'isProfileFetching',
        fill:        authActions.fillProfile,
    });

    if (result) {
        yield put(togglerCreator('isAuthenticated', true));
        yield put(orderActions.fetchAsync());
        toast.success('Success Login!');
    }
}
