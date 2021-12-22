// Core
import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

// Types
import { LoginAsyncAction, ProfileState } from '../../types';

// Actions
import { togglerCreatorAction } from '../../../togglers';
import { fillProfile } from '../../actions';
import { ordersFetchAsync } from '../../../orders/actions';

// Api
import { login } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* callLoginWorker({ payload: { email, password }}: LoginAsyncAction) {
    const result: ProfileState | undefined = yield makeRequest<ProfileState>({
        fetcher:           login(email, password),
        togglerType:       'isProfileFetching',
        fill:              fillProfile,
        successSideEffect: ordersFetchAsync,
    });

    if (result) {
        yield put(togglerCreatorAction('isAuthenticated', true));
        toast.success('Success Login!');
    }
}
