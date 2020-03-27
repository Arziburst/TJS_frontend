// Core
import { Reducer } from 'redux';

// Types
import * as types from './types';

const initialState: Array<string> = [];

export const cartReducer: Reducer<Array<string>, types.CartActionTypes> = (state = initialState, action) => {
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
