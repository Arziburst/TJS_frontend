// Core
import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';

// Types
import { RegistrationAsyncAction } from '../../types';

// Actions
import { fillProfile } from '../../actions';
import { togglerCreatorAction } from '../../../togglers';

// Api
import { registration } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* callRegistrationWorker({ payload: body }: RegistrationAsyncAction) {
    const result = yield makeRequest({
        fetcher:     registration(body),
        togglerType: 'isProfileFetching',
        fill:        fillProfile,
    });

    if (result) {
        yield put(togglerCreatorAction('isAuthenticated', true));
        toast.success('Success Registration!');
        toast.success('Success Login!');
        yield put(push('/'));
    }
}
