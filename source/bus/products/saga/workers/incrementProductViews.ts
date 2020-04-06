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

export function* incrementProductViews({ payload: _id }: ProductsIncrementItemViewsAsyncAction) {
    const result: ExtendedProduct | false = yield makeRequest<ExtendedProduct>({
        fetcher:           incrementProductViewsFetcher(_id),
        successSideEffect: () => setViewedProductsState(_id),
    });

    if (result) {
        yield put(editProductSync(result));
    }

    if (process.env.NODE_ENV === 'development' && result) {
        toast.success('increment Product Views successfully!');
    }
}
