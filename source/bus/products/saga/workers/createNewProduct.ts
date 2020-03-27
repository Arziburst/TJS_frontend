// Core
import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';

// Types
import { ExtendedProduct, ProductsCreateItemAsyncAction } from '../../types';

// Actions
import { createNewProductSync } from '../../actions';

// Api
import { createNewProductFetcher } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* createNewProduct({ payload: body }: ProductsCreateItemAsyncAction) {
    const result: ExtendedProduct | undefined = yield makeRequest<ExtendedProduct>({
        fetcher:           createNewProductFetcher(body),
        togglerType:       'isProductFetching',
        fill:              createNewProductSync,
        successSideEffect: () => push('/'),
    });

    if (result) {
        toast.success('Product created successfully!');
    }
}
