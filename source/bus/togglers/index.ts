import { Reducer } from 'redux';
import { useSelector } from '../../hooks';

const initialState = {
    isInitialized:      false,
    isAuthenticated:    false,
    isProfileFetching:  true,
    isProductsFetching: true,
    isProductFetching:  false,
    isOrdersFetching:   false,
    isOrderFetching:    false,
    isGalleryFetching:  false,
    isGalleryUpdating:  false,
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


type TogglersObj = {
    [key in TogglersKeys]: boolean
};

// TODO TogglersObj dymamic type
export const useSelectorTogglers = (props: Array<TogglersKeys>) => {
    return useSelector<TogglersObj>(({ togglers }) => {
        const result = props.reduce((acc, propertyName) => {
            return {
                ...acc,
                [ propertyName ]: togglers[ propertyName ],
            };
        }, {} as TogglersObj);

        return result;
    });
};

export const useSelectorToggler = (props: TogglersKeys) => useSelector<boolean>(({ togglers }) => {
    return togglers[ props ];
});

