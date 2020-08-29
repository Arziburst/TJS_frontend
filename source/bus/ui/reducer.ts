// Types
import { Reducer } from 'redux';
import { UiState, UiActionTypes } from './types';
import * as types from './types';

const initialState = {
    productType:      'All',
    pageNumber:       1,
    isCartModalExist: false,
    viewedProducts:   [],
    loadedProductIds: [],
};

export const uiReducer: Reducer<UiState, UiActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PRODUCTS_TYPE_FILTER:
            return {
                ...state,
                productType: action.payload,
            };

        case types.SET_PRODUCTS_PAGE_NUMBER_FILTER:
            return {
                ...state,
                pageNumber: action.payload,
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
