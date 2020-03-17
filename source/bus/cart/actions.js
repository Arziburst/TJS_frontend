// Instruments
import types from './types';

export const cartActions = Object.freeze({
    addToCart: (productHash) => ({
        type:    types.ADD_TO_CART,
        payload: productHash,
    }),

    removeFromCart: (productHash) => ({
        type:    types.REMOVE_FROM_CART,
        payload: productHash,
    }),

    clearCart: () => ({
        type: types.CLEAR_CART,
    }),

    setInitialCartState: (newCart) => ({
        type:    types.SET_INITIAL_CART_STATE,
        payload: newCart,
    }),
});
