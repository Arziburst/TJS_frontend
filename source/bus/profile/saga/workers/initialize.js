// Core
import { put } from 'redux-saga/effects';

// Actions
import { togglerCreator } from '../../../togglers';
import { authActions } from '../../actions';
import { fetchAsync } from '../../../products/actions';

export function* callInitializeWorker () {
    yield put(authActions.authenticateAsync());
    yield put(fetchAsync());

    yield put(togglerCreator('isInitialized', true));
}
