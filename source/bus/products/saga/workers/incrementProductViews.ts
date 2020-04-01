// Core
import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

// Types
import { ExtendedProduct, ProductsIncrementItemViewsAsyncAction } from '../../types';

// Api
import { incrementProductViewsFetcher } from '../../../../api';

// Actions
import { editProductSync } from '../../actions';
import { setViewedProductsState } from '../../../ui/actions';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* incrementProductViews({ payload: hash }: ProductsIncrementItemViewsAsyncAction) {
    const result: ExtendedProduct | false = yield makeRequest<ExtendedProduct>({
        fetcher:           incrementProductViewsFetcher(hash),
        successSideEffect: () => setViewedProductsState(hash),
    });

    if (result) {
        yield put(editProductSync(result));
    }

    if (process.env.NODE_ENV === 'development' && result) {
        toast.success('increment Product Views successfully!');
    }
}
