// Core
import { AnyAction } from 'redux';
import localStorage from 'store';

// Types
import cartTypes from '../../bus/cart/types';
import uiTypes from '../../bus/ui/types';

export const localStorageMiddleware = (store: any) => (next: any) => (action: AnyAction) => {
    switch (action.type) {
        case cartTypes.ADD_TO_CART:
            localStorage.set('cart', [ ...store.getState().cart, action.payload ]);
            break;

        case cartTypes.REMOVE_FROM_CART:
            localStorage.set('cart', store.getState().cart.filter((productHash: string) => productHash !== action.payload));
            break;

        case cartTypes.CLEAR_CART:
            localStorage.set('cart', []);
            break;

        case uiTypes.SET_VIEWED_PRODUCTS_STATE:
            localStorage.set('viewedProducts', [ ...store.getState().ui.viewedProducts, action.payload ]);
            break;

        default: void 0;
    }

    return next(action);
};
