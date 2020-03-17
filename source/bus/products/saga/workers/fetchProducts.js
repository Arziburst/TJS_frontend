// Core
import { put, select } from 'redux-saga/effects';
import localStorage from 'store';

// Actions
import { fill } from '../../actions';
import { uiActions } from '../../../ui/actions';
import { cartActions } from '../../../cart/actions';

// Api
import { productsFetcher } from '../../../../api';

// Helpers
import { arrayСomparison } from '../../../../helpers';

// Instruments
import { makeRequestWithSpinner } from '../../../../workers';

export function* fetchProducts() {
    const result = yield makeRequestWithSpinner({
        fetcher:     productsFetcher,
        togglerType: 'isProductsFetching',
        fill,
    });

    if (!result || result.length === 0) {
        return;
    }

    const productsHashs = yield select(({ products }) => products.map(({ hash }) => hash));
    const viewedProducts = yield localStorage.get('viewedProducts') || [];
    const cart = yield localStorage.get('cart') || [];

    // Checking viewedProducts
    if (viewedProducts && viewedProducts.length !== 0) {
        const { isAllStringsExists, newArray } = yield arrayСomparison(productsHashs, viewedProducts);

        if (!isAllStringsExists) {
            yield localStorage.set('viewedProducts', newArray);
        }

        yield put(uiActions.setInitialViewedProductsState(newArray));
    }

    // Checkind cart
    if (cart && cart.length !== 0) {
        const { isAllStringsExists, newArray } = yield arrayСomparison(productsHashs, cart);

        if (!isAllStringsExists) {
            yield localStorage.set('cart', newArray);
        }

        yield put(cartActions.setInitialCartState(newArray));
    }
}
