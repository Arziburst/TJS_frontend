// Core
import { put } from 'redux-saga/effects';

// Actions
import { authActions } from '../../actions';
import { resetAppToInnitialState } from '../../../ui/actions';
import { togglerCreatorAction } from '../../../togglers';
import { toast } from 'react-toastify';

// Api
import { logout } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* callLogoutWorker () {
    yield makeRequest({
        fetcher:     logout,
        togglerType: 'isProfileFetching',
    });

    yield put(togglerCreatorAction('isAuthenticated', false));
    yield put(authActions.logout());
    yield put(resetAppToInnitialState());

    process.env.NODE_ENV === 'development' && toast.success('Success Logout!');
}
