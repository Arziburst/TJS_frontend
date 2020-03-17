// Types
import types from './types';

const initialState = [];

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.ADD_TO_CART:
            return [ ...state, payload ];

        case types.REMOVE_FROM_CART:
            return state.filter((productHash) => productHash !== payload);

        case types.CLEAR_CART:
            return [];

        case types.SET_INITIAL_CART_STATE:
            return payload;

        default:
            return state;
    }
};
