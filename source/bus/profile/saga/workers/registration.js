// Core
import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';

// Actions
import { authActions } from '../../actions';
import { togglerCreator } from '../../../togglers';

// Api
import { registration } from '../../../../api';

// Instruments
import { makeRequestWithSpinner } from '../../../../workers';

export function* callRegistrationWorker ({ payload: body }) {
    const result = yield makeRequestWithSpinner({
        fetcher:     registration(body),
        togglerType: 'isProfileFetching',
        fill:        authActions.fillProfile,
    });

    if (result) {
        yield put(togglerCreator('isAuthenticated', true));
        toast.success('Success Registration!');
        toast.success('Success Login!');
        yield put(push('/'));
    }
}
