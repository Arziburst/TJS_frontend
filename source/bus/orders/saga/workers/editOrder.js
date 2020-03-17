// Core
import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';

// Actions
import { orderActions } from '../../actions';

// Api
import { editOrderFetcher } from '../../../../api';

// Instruments
import { makeRequestWithSpinner } from '../../../../workers';

export function* callEditOrderWorker ({ payload }) {
    const result = yield makeRequestWithSpinner({
        fetcher:     editOrderFetcher(payload),
        togglerType: 'isOrderFetching',
        fill:        orderActions.editOrderSync,
    });

    if (result) {
        yield put(push('/orders'));
        toast.success('Order edited successfully!');
    }
}
