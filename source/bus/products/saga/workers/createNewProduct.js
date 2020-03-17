// Core
import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';

// Actions
import { createNewProductSync } from '../../actions';

// Api
import { createNewProductFetcher } from '../../../../api';

// Instruments
import { makeRequestWithSpinner } from '../../../../workers';

export function* createNewProduct({ payload: body }) {
    const result = yield makeRequestWithSpinner({
        fetcher:     createNewProductFetcher(body),
        togglerType: 'isProductFetching',
        fill:        createNewProductSync,
    });

    if (result) {
        yield put(push('/'));
        toast.success('Product created successfully!');
    }
}
