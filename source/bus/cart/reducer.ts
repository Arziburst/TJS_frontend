// Core
import { Reducer } from 'redux';

// Types
import * as types from './types';

const initialState: types.CartState = [];

export const cartReducer: Reducer<types.CartState, types.CartActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case types.CART_ADD_PRODUCT:
            return [ ...state, action.payload ];

        case types.CART_REMOVE_PRODUCT:
            return state.filter((productHash) => productHash !== action.payload);

        case types.CART_CLEAR:
            return [];

        case types.CART_SET_INITIAL_STATE:
            return action.payload;

        default:
            return state;
    }
};
