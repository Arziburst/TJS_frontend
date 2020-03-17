// Core
import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';

// Actions
import { deleteProductSync } from '../../actions';

// Api
import { deleteProductFetcher } from '../../../../api';

// Instruments
import { makeRequestWithSpinner } from '../../../../workers';

export function* deleteProduct({ payload: productHash }) {
    const hash = yield makeRequestWithSpinner({
        fetcher:     deleteProductFetcher(productHash),
        togglerType: 'isProductFetching',
    });

    if (hash) {
        yield put(push('/'));
        yield put(deleteProductSync(hash));
        toast.success('Product deleted successfully!');
    }
}
