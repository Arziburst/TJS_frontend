// Types
import types from './types';

const initialState = {
    name:  '',
    email: '',
    phone: '',
    role:  '',
};

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FILL_PROFILE:
            return payload;

        case types.LOGOUT:
            return initialState;

        case types.RESET_TO_INNITIAL_STATE:
            return initialState;

        default:
            return state;
    }
};
