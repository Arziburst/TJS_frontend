// Instruments
import * as types from './types';

export const addToCart = (productHash: string): types.CartAddProductAction => ({
    type:    types.CART_ADD_PRODUCT,
    payload: productHash,
});

export const removeFromCart = (productHash: string): types.CartRemoveProductAction => ({
    type:    types.CART_REMOVE_PRODUCT,
    payload: productHash,
});

export const clearCart = (): types.CartClearAction => ({
    type: types.CART_CLEAR,
});

export const setInitialCartState = (newCart: Array<string>): types.CartSetInitialStateAction => ({
    type:    types.CART_SET_INITIAL_STATE,
    payload: newCart,
});
