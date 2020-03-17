// Types
import types from './types';

const initialState = [];

export const ordersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.ORDERS_FILL:
            return payload;

        case types.CREATE_ORDER_SYNC:
            return [ ...state, payload ];

        case types.EDIT_ORDER_SYNC:
            return state.map((order) => order.hash === payload.hash ? payload : order);

        case types.RESET_TO_INNITIAL_STATE:
            return initialState;

        default:
            return state;
    }
};
