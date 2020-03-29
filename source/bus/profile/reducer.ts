// Types
import { Reducer } from 'redux';
import {ResetToInitialStateAction, RESET_TO_INNITIAL_STATE } from '../ui/types';
import { ProfileState, ProfileActionTypes } from './types';
import * as types from './types';

const initialState: ProfileState = {
    name:  '',
    email: '',
    phone: '',
    role:  '',
};

export const authReducer: Reducer<ProfileState, ProfileActionTypes | ResetToInitialStateAction> = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_PROFILE:
            return action.payload;

        case types.LOGOUT:
            return initialState;

        case RESET_TO_INNITIAL_STATE:
            return initialState;

        default:
            return state;
    }
};
