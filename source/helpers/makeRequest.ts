// Core
import { ActionCreator, AnyAction } from 'redux';
import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

// Types
import { TogglersKeys } from '../bus/togglers';

// Action
import { togglerCreatorAction } from '../bus/togglers';

type OptionsType<T> = {
    fetcher: (_id?: string) => Promise<T>;
    togglerType?: TogglersKeys;
    fill?: (payload: T) => {
        type: string;
        payload: T;
    };
    successSideEffect?: ActionCreator<AnyAction>;
};

export function* makeRequest<T>(options: OptionsType<T>) {
    const { fetcher, togglerType, fill, successSideEffect } = options;

    try {
        if (togglerType) {
            yield put(togglerCreatorAction(togglerType, true));
        }

        const result: T = yield call(fetcher);

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
            yield put(togglerCreatorAction(togglerType, false));
        }
    }
}

