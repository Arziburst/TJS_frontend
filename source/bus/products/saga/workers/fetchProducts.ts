// Core
import { put } from 'redux-saga/effects';
import localStorage from 'store';

// Types
import { Products } from '../../types';

// Actions
import { fill } from '../../actions';
import { setInitialViewedProductsState } from '../../../ui/actions';
import { setInitialCartState } from '../../../cart/actions';

// Api
import { productsFetcher } from '../../../../api';

// Helpers
import { arrayСomparison } from '../../../../helpers';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* fetchProducts() {
    const result: Products | undefined = yield makeRequest<Products>({
        fetcher:     productsFetcher,
        togglerType: 'isProductsFetching',
        fill,
    });

    if (!result || result.length === 0) {
        return;
    }

    const productsHashs = result.map(({ hash }) => hash);
    const viewedProducts: Array<string> = localStorage.get('viewedProducts') || [];
    const cart: Array<string> = localStorage.get('cart') || [];

    // Checking viewedProducts
    if (viewedProducts && viewedProducts.length !== 0) {
        const { isAllStringsExists, newArray } = arrayСomparison(productsHashs, viewedProducts);

        if (!isAllStringsExists) {
            yield localStorage.set('viewedProducts', newArray);
        }

        yield put(setInitialViewedProductsState(newArray));
    }

    // Checkind cart
    if (cart && cart.length !== 0) {
        const { isAllStringsExists, newArray } = arrayСomparison(productsHashs, cart);

        if (!isAllStringsExists) {
            yield localStorage.set('cart', newArray);
        }

        yield put(setInitialCartState(newArray));
    }
}
