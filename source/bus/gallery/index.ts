// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Hooks
import { useSelectorTogglers } from '../togglers';
import { useSelector } from '../../hooks';

// Actions
import {
    galleryFetchAsync,
    updateGalleryAsync,
    deleteGalleryItemAsync,
} from './actions';

export const useSelectorGallery = () => {
    const gallery = useSelector(({ gallery }) => gallery);

    return gallery;
};

export const useGalleryActions = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(galleryFetchAsync());
    }, [ dispatch ]);

    const { isGalleryFetching, isGalleryUpdating } = useSelectorTogglers([ 'isGalleryFetching', 'isGalleryUpdating' ]);

    return {
        gallery:                useSelectorGallery(),
        updateGalleryAsync:     (formData: FormData) => dispatch(updateGalleryAsync(formData)),
        deleteGalleryItemAsync: (public_id: string) => dispatch(deleteGalleryItemAsync(public_id)),
        fetchingToggler:        isGalleryFetching,
        updatingToggler:        isGalleryUpdating,
    };
};
