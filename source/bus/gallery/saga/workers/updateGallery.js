// Actions
import { galleryActions } from '../../actions';

// Api
import { galleryUpdater } from '../../../../api';

// Instruments
import { makeRequestWithSpinner } from '../../../../workers';

export function* callUpdateGalleryWorker({ payload: formData }) {
    yield makeRequestWithSpinner({
        fetcher:     () => galleryUpdater(formData),
        togglerType: 'isGalleryUpdating',
        fill:        galleryActions.updateGallerySync,
    });
}
