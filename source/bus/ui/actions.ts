// Instruments
import * as types from './types';

export const setProductsTypeFilter = (productType: string): types.UiSetProductsTypeFilterAction => ({
    type:    types.SET_PRODUCTS_TYPE_FILTER,
    payload: productType,
});

export const setProductsPageNumberFilterAction = (pageNumber: number): types.UiSetProductsPageNumberFilterAction => ({
    type:    types.SET_PRODUCTS_PAGE_NUMBER_FILTER,
    payload: pageNumber,
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

export const setLoadedProductIdAction = (productId: string): types.UiSetLoadedProductIdAction => ({
    type:    types.SET_LOADED_PRODUCT_ID,
    payload: productId,
});

export const deleteLoadedProductIdAction = (productId: string): types.UiDeleteLoadedProductIdAction => ({
    type:    types.DELETE_LOADED_PRODUCT_ID,
    payload: productId,
});

export const resetAppToInnitialState = (): types.UiActionTypes => ({
    type: types.RESET_TO_INNITIAL_STATE,
});
