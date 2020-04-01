// Types
import { Reducer } from 'redux';
import { GalleryActionTypes, GalleryState } from './types';
import * as types from './types';

const initialState: GalleryState = [];

export const galleryReducer: Reducer<GalleryState, GalleryActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case types.GALLERY_FILL:
            return action.payload;

        case types.GALLERY_UPDATE_SYNC:
            return [ ...state, ...action.payload ];

        case types.GALLERY_DELETE_ITEM_SYNC:
            return state.filter(({ public_id }) => public_id !== action.payload);

        default:
            return state;
    }
};
