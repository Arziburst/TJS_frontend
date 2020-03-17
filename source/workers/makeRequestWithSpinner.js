// Core
import { put, call } from 'redux-saga/effects';
import { togglerCreator } from '../bus/togglers';
import { toast } from 'react-toastify';

export function* makeRequestWithSpinner({ fetcher, togglerType, fill, successSideEffect, setFetchingError }) {
    try {
        if (typeof togglerType === 'string') {
            yield put(togglerCreator(togglerType, true));
        }

        const result = yield call(fetcher);

        if (typeof fill === 'function') {
            yield put(fill(result));
        }

        if (typeof successSideEffect === 'function') {
            yield put(successSideEffect());
        }

        return result;
    } catch (error) {
        if (error.message) {
            toast.error(error.message);
        }

        if (typeof setFetchingError === 'function') {
            yield put(setFetchingError(error));
        }
    } finally {
        if (typeof togglerType === 'string') {
            yield put(togglerCreator(togglerType, false));
        }
    }
}
