// Types
import types from './types';

const initialState = [];

export const galleryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GALLERY_FILL:
            return payload;

        case types.UPDATE_GALLERY_SYNC:
            return [ ...state, ...payload ];

        case types.DELETE_GALLERY_ITEM_SYNC:
            return state.filter(({ public_id }) => public_id !== payload);

        default:
            return state;
    }
};
