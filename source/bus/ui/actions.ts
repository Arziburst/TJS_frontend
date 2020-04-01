// Instruments
import * as types from './types';

export const setProductsFilterState = (type: string): types.UiSetProductsFilterStateAction => ({
    type:    types.SET_PRODUCTS_FILTER_STATE,
    payload: type,
});

export const setCartModalState = (state: boolean): types.UiSetCartModalStateAction => ({
    type:    types.SET_CART_MODAL_STATE,
    payload: state,
});

export const setViewedProductsState = (productHash: string): types.UiSetViewedProductsStateAction => ({
    type:    types.SET_VIEWED_PRODUCTS_STATE,
    payload: productHash,
});

export const setInitialViewedProductsState = (
    viewedProducts: Array<string>,
): types.UiSetInitialViewedProductsStateAction => ({
    type:    types.SET_INITIAL_VIEWED_PRODUCTS_STATE,
    payload: viewedProducts,
});

export const resetAppToInnitialState = (): types.UiActionTypes => ({
    type: types.RESET_TO_INNITIAL_STATE,
});
