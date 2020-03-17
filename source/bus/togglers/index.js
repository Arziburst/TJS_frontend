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

export const togglersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_TOGGLER_STATE':
            return { ...state, [ payload.type ]: payload.value };

        default: return state;
    }
};

export const togglerCreator = (type, value) => ({
    type:    'SET_TOGGLER_STATE',
    payload: { type, value },
});
