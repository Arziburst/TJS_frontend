// Types
import types from './types';

const initialState = {
    type:             'All',
    isCartModalExist: false,
    viewedProducts:   [],
};

export const uiReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.SET_PRODUCTS_FILTER_STATE:
            return {
                ...state,
                type: payload,
            };

        case types.SET_CART_MODAL_STATE:
            return {
                ...state,
                isCartModalExist: payload,
            };

        case types.SET_VIEWED_PRODUCTS_STATE:
            return {
                ...state,
                viewedProducts: [ ...state.viewedProducts, payload ],
            };

        case types.SET_INITIAL_VIEWED_PRODUCTS_STATE:
            return {
                ...state,
                viewedProducts: payload,
            };

        default:
            return state;
    }
};
