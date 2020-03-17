// Core
import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';

// Api
import { editProductFetcher } from '../../../../api';

// Actions
import { editProductSync } from '../../actions';

// Instruments
import { makeRequestWithSpinner } from '../../../../workers';

export function* editProduct({ payload: { productHash, editedProduct } }) {
    const result = yield makeRequestWithSpinner({
        fetcher:     editProductFetcher(productHash, editedProduct),
        togglerType: 'isProductFetching',
        fill:        editProductSync,
    });

    if (result) {
        yield put(push('/'));
        toast.success('Product edited successfully!');
    }
}
