// Core
// import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';

// Types
import { ExtendedProduct, ProductsEditItemAsyncAction } from '../../types';

// Api
import { editProductFetcher } from '../../../../api';

// Actions
import { editProductSync } from '../../actions';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* editProduct({ payload: { productHash, editedProduct } }: ProductsEditItemAsyncAction) {
    const result: ExtendedProduct | undefined = yield makeRequest<ExtendedProduct>({
        fetcher:           editProductFetcher(productHash, editedProduct),
        togglerType:       'isProductFetching',
        fill:              editProductSync,
        successSideEffect: () => push('/'),
    });

    if (result) {
        toast.success('Product edited successfully!');
    }
}
