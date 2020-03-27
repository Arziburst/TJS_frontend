// Core
import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';

// Types
import { ProductsDeleteItemAsyncAction } from '../../types';

// Actions
import { deleteProductSync } from '../../actions';

// Api
import { deleteProductFetcher } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* deleteProduct({ payload: productHash }: ProductsDeleteItemAsyncAction) {
    const hash: string | undefined = yield makeRequest<string>({
        fetcher:           deleteProductFetcher(productHash),
        togglerType:       'isProductFetching',
        fill:              deleteProductSync,
        successSideEffect: () => push('/'),
    });

    if (hash) {
        toast.success('Product deleted successfully!');
    }
}
