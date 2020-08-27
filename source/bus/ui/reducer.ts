// Types
import { Reducer } from 'redux';
import { UiState, UiActionTypes } from './types';
import * as types from './types';

const initialState = {
    type:             'All',
    isCartModalExist: false,
    viewedProducts:   [],
    loadedProductIds: [],
};

export const uiReducer: Reducer<UiState, UiActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PRODUCTS_FILTER_STATE:
            return {
                ...state,
                type: action.payload,
            };

        case types.SET_CART_MODAL_STATE:
            return {
                ...state,
                isCartModalExist: action.payload,
            };

        case types.SET_VIEWED_PRODUCTS_STATE:
            return {
                ...state,
                viewedProducts: [ ...state.viewedProducts, action.payload ],
            };

        case types.SET_INITIAL_VIEWED_PRODUCTS_STATE:
            return {
                ...state,
                viewedProducts: action.payload,
            };

        case types.SET_LOADED_PRODUCT_ID:
            return {
                ...state,
                loadedProductIds: [ ...state.loadedProductIds, action.payload ],
            };

        case types.DELETE_LOADED_PRODUCT_ID:
            return {
                ...state,
                loadedProductIds: state.loadedProductIds.filter((productId) => productId !== action.payload),
            };

        default:
            return state;
    }
};
