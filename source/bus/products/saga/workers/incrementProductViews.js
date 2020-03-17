// Core
import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';

// Api
import { incrementProductViewsFetcher } from '../../../../api';

// Actions
import { editProductSync } from '../../actions';
import { uiActions } from '../../../ui/actions';

// Instruments
import { makeRequestWithSpinner } from '../../../../workers';

export function* incrementProductViews({ payload: hash }) {
    const result = yield makeRequestWithSpinner({
        fetcher:           incrementProductViewsFetcher(hash),
        successSideEffect: () => uiActions.setViewedProductsState(hash),
    });

    if (result) {
        yield put(editProductSync(result));
    }

    process.env.NODE_ENV === 'development' && toast.success('increment Product Views successfully!');
}
