export type UiState = {
    type: string,
    isCartModalExist: boolean,
    viewedProducts: Array<string>,
};

export const SET_PRODUCTS_FILTER_STATE = 'SET_PRODUCTS_FILTER_STATE';
export type UiSetProductsFilterStateAction = {
    type: typeof SET_PRODUCTS_FILTER_STATE;
    payload: string;
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

export const RESET_TO_INNITIAL_STATE = 'RESET_TO_INNITIAL_STATE';
export type ResetToInitialStateAction = {
    type: typeof RESET_TO_INNITIAL_STATE;
};

export type UiActionTypes =
    | UiSetProductsFilterStateAction
    | UiSetCartModalStateAction
    | UiSetViewedProductsStateAction
    | UiSetInitialViewedProductsStateAction
    | ResetToInitialStateAction
