// Core
import { ActionCreator, AnyAction } from 'redux';
import { SagaIterator } from '@redux-saga/core';
import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

// Action
import { togglerCreator } from '../bus/togglers';

// Common types
import { FillActionType } from '../types';

type OptionsType<T> = {
    fetcher: (uri?: string) => Promise<T>;
    togglerType?: ActionCreator<AnyAction>;
    fill?: FillActionType<T>;
    successSideEffect?: ActionCreator<AnyAction>;
};

export function* makeRequestWithSpinner<T>(options: OptionsType<T>): SagaIterator {
    const { fetcher, togglerType, fill, successSideEffect } = options;

    try {
        if (togglerType) {
            yield put(togglerCreator(togglerType, true));
        }

        const result = yield call(fetcher);

        if (fill) {
            yield put(fill(result));
        }

        if (successSideEffect) {
            yield put(successSideEffect());
        }

        return result;
    } catch (error) {
        if (error.message) {
            toast.error(error.message);
        }
    } finally {
        if (togglerType) {
            yield put(togglerCreator(togglerType, false));
        }
    }
}

