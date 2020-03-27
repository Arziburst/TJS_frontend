// Core
import localStorage from 'store';
import { Middleware } from 'redux';

// Types
import { AppState } from '../rootReducer';
import {
    CART_ADD_PRODUCT,
    CART_REMOVE_PRODUCT,
    CART_CLEAR,
    CartActionTypes,
} from '../../bus/cart/types';
import {
    SET_VIEWED_PRODUCTS_STATE,
    UiActionTypes,
} from '../../bus/ui/types';

type Actions = CartActionTypes | UiActionTypes

export const localStorageMiddleware: Middleware<{}, AppState> = (store) => (next) => (action: Actions) => {
    switch (action.type) {
        case CART_ADD_PRODUCT:
            localStorage.set('cart', [ ...store.getState().cart, action.payload ]);
            break;

        case CART_REMOVE_PRODUCT:
            localStorage.set('cart', store.getState().cart.filter((productHash: string) => productHash !== action.payload));
            break;

        case CART_CLEAR:
            localStorage.set('cart', []);
            break;

        case SET_VIEWED_PRODUCTS_STATE:
            localStorage.set('viewedProducts', [ ...store.getState().ui.viewedProducts, action.payload ]);
            break;

        default: void 0;
    }

    return next(action);
};
