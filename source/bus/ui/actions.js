// Instruments
import types from './types';

export const uiActions = Object.freeze({
    setProductsFilterState: (type) => ({
        type:    types.SET_PRODUCTS_FILTER_STATE,
        payload: type,
    }),

    setCartModalState: (state) => ({
        type:    types.SET_CART_MODAL_STATE,
        payload: state,
    }),

    setViewedProductsState: (productHash) => ({
        type:    types.SET_VIEWED_PRODUCTS_STATE,
        payload: productHash,
    }),

    setInitialViewedProductsState: (viewedProducts) => ({
        type:    types.SET_INITIAL_VIEWED_PRODUCTS_STATE,
        payload: viewedProducts,
    }),

    resetAppToInnitialState: () => ({
        type: types.RESET_TO_INNITIAL_STATE,
    }),
});
