// Core
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { galleryActions } from './actions';

export const useGalleryActions = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(galleryActions.fetchAsync());
    }, [ dispatch ]);

    const updateGalleryAsync = (formData) => dispatch(galleryActions.updateGalleryAsync(formData));
    const deleteGalleryItemAsync = (public_id) => dispatch(galleryActions.deleteGalleryItemAsync(public_id));

    const { gallery, fetchingToggler, updatingToggler } = useSelector(({ gallery, togglers }) => ({
        gallery,
        fetchingToggler: togglers.isGalleryFetching,
        updatingToggler: togglers.isGalleryUpdating,
    }));

    return {
        gallery,
        updateGalleryAsync,
        deleteGalleryItemAsync,
        fetchingToggler,
        updatingToggler,
    };
};
