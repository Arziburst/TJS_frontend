import { Reducer } from 'redux';
import { useSelector } from '../../hooks';

const initialState = {
    isInitialized:       false,
    isAuthenticated:     false,
    isProfileFetching:   true,
    isProductsFetching:  true,
    isProductFetching:   false,
    isOrdersFetching:    false,
    isOrderFetching:     false,
    isGalleryFetching:   false,
    isGalleryUpdating:   false,
    isAllProductsLoaded: false,
};

type TogglersState = typeof initialState;
export type TogglersKeys = keyof TogglersState;

export const SET_TOGGLER_STATE = 'SET_TOGGLER_STATE';

type TogglerCreatorAction = {
    type: typeof SET_TOGGLER_STATE;
    payload: {
        type: TogglersKeys;
        value: boolean;
    }
};

export const togglersReducer: Reducer<TogglersState, TogglerCreatorAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOGGLER_STATE:
            return { ...state, [ action.payload.type ]: action.payload.value };

        default: return state;
    }
};

export const togglerCreatorAction = (type: TogglersKeys, value: boolean): TogglerCreatorAction  => ({
    type:    SET_TOGGLER_STATE,
    payload: {
        type,
        value,
    },
});

export const useSelectorTogglers = () => useSelector<TogglersState>(({ togglers }) => togglers);

