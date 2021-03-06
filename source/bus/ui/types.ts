export type UiState = {
    productType: string,
    pageNumber: number,
    isCartModalExist: boolean,
    viewedProducts: Array<string>,
    loadedProductIds: Array<string>,
};

export const SET_PRODUCTS_TYPE_FILTER = 'SET_PRODUCTS_TYPE_FILTER';
export type UiSetProductsTypeFilterAction = {
    type: typeof SET_PRODUCTS_TYPE_FILTER;
    payload: string;
};

export const SET_PRODUCTS_PAGE_NUMBER_FILTER = 'SET_PRODUCTS_PAGE_NUMBER_FILTER';
export type UiSetProductsPageNumberFilterAction = {
    type: typeof SET_PRODUCTS_PAGE_NUMBER_FILTER;
    payload: number;
};

export const SET_CART_MODAL_STATE = 'SET_CART_MODAL_STATE';
export type UiSetCartModalStateAction = {
    type: typeof SET_CART_MODAL_STATE;
    payload: boolean;
};

export const SET_VIEWED_PRODUCTS_STATE = 'SET_VIEWED_PRODUCTS_STATE';
export type UiSetViewedProductsStateAction = {
    type: typeof SET_VIEWED_PRODUCTS_STATE;
    payload: string;
};

export const SET_INITIAL_VIEWED_PRODUCTS_STATE = 'SET_INITIAL_VIEWED_PRODUCTS_STATE';
export type UiSetInitialViewedProductsStateAction = {
    type: typeof SET_INITIAL_VIEWED_PRODUCTS_STATE;
    payload: Array<string>;
};

export const SET_LOADED_PRODUCT_ID = 'SET_LOADED_PRODUCT_ID';
export type UiSetLoadedProductIdAction = {
    type: typeof SET_LOADED_PRODUCT_ID;
    payload: string;
};

export const DELETE_LOADED_PRODUCT_ID = 'DELETE_LOADED_PRODUCT_ID';
export type UiDeleteLoadedProductIdAction = {
    type: typeof DELETE_LOADED_PRODUCT_ID;
    payload: string;
};

export const RESET_TO_INNITIAL_STATE = 'RESET_TO_INNITIAL_STATE';
export type ResetToInitialStateAction = {
    type: typeof RESET_TO_INNITIAL_STATE;
};

export type UiActionTypes =
    | UiSetProductsTypeFilterAction
    | UiSetProductsPageNumberFilterAction
    | UiSetCartModalStateAction
    | UiSetViewedProductsStateAction
    | UiSetInitialViewedProductsStateAction
    | UiSetLoadedProductIdAction
    | UiDeleteLoadedProductIdAction
    | ResetToInitialStateAction
