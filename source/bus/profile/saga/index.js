// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Instruments
import types from '../types';

import {
    callInitializeWorker,
    callAuthenticateWorker,
    callRegistrationWorker,
    callLoginWorker,
    callLogoutWorker,
} from './workers';

function* watchInitialize() {
    yield takeEvery(types.INITIALIZE_ASYNC, callInitializeWorker);
}

function* watchAuthenticate() {
    yield takeEvery(types.AUTHENTICATE_ASYNC, callAuthenticateWorker);
}

function* watchRegistration() {
    yield takeEvery(types.REGISTRATION_ASYNC, callRegistrationWorker);
}

function* watchLogin() {
    yield takeEvery(types.LOGIN_ASYNC, callLoginWorker);
}

function* watchLogout() {
    yield takeEvery(types.LOGOUT_ASYNC, callLogoutWorker);
}

export function* watchProfile() {
    yield all([
        call(watchInitialize),
        call(watchAuthenticate),
        call(watchRegistration),
        call(watchLogin),
        call(watchLogout),
    ]);
}
