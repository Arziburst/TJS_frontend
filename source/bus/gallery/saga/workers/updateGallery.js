// Actions
import { galleryActions } from '../../actions';

// Api
import { galleryUpdater } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* callUpdateGalleryWorker({ payload: formData }) {
    yield makeRequest({
        fetcher:     () => galleryUpdater(formData),
        togglerType: 'isGalleryUpdating',
        fill:        galleryActions.updateGallerySync,
    });
}
