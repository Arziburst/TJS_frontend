// Core
import { takeEvery, all, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

// Instruments
import types from '../types';

import {
    callInitializeWorker,
    callAuthenticateWorker,
    callRegistrationWorker,
    callLoginWorker,
    callLogoutWorker,
} from './workers';

function* watchInitialize(): SagaIterator {
    yield takeEvery(types.INITIALIZE_ASYNC, callInitializeWorker);
}

function* watchAuthenticate(): SagaIterator {
    yield takeEvery(types.AUTHENTICATE_ASYNC, callAuthenticateWorker);
}

function* watchRegistration(): SagaIterator {
    yield takeEvery(types.REGISTRATION_ASYNC, callRegistrationWorker);
}

function* watchLogin(): SagaIterator {
    yield takeEvery(types.LOGIN_ASYNC, callLoginWorker);
}

function* watchLogout(): SagaIterator {
    yield takeEvery(types.LOGOUT_ASYNC, callLogoutWorker);
}

export function* watchProfile(): SagaIterator {
    yield all([
        call(watchInitialize),
        call(watchAuthenticate),
        call(watchRegistration),
        call(watchLogin),
        call(watchLogout),
    ]);
}
