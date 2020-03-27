export const CART_ADD_PRODUCT = 'CART_ADD_PRODUCT';
export type CartAddProductAction = {
    type: typeof CART_ADD_PRODUCT;
    payload: string;
};

export const CART_REMOVE_PRODUCT = 'CART_REMOVE_PRODUCT';
export type CartRemoveProductAction = {
    type: typeof CART_REMOVE_PRODUCT;
    payload: string;
};

export const CART_CLEAR = 'CART_CLEAR';
export type CartClearAction = {
    type: typeof CART_CLEAR;
};

export const CART_SET_INITIAL_STATE = 'CART_SET_INITIAL_STATE';
export type CartSetInitialStateAction = {
    type: typeof CART_SET_INITIAL_STATE;
    payload: Array<string>;
};

export type CartActionTypes =
    | CartAddProductAction
    | CartRemoveProductAction
    | CartClearAction
    | CartSetInitialStateAction
