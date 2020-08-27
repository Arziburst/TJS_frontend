// Core
import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';

// Types
import { ProductsDeleteItemAsyncAction } from '../../types';

// Actions
import { deleteLoadedProductIdAction } from '../../../ui/actions';
import { deleteProductSync } from '../../actions';

// Api
import { deleteProductFetcher } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* deleteProduct({ payload: product_id }: ProductsDeleteItemAsyncAction) {
    const _id: string | undefined = yield makeRequest<string>({
        fetcher:           deleteProductFetcher(product_id),
        togglerType:       'isProductFetching',
        successSideEffect: () => push('/'),
    });

    if (_id) {
        yield put(deleteProductSync(_id));
        yield put(deleteLoadedProductIdAction(_id));
        toast.success('Product deleted successfully!');
    }
}
