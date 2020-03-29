// Types
import { Image, GalleryUpdateAsyncAction } from '../../types';

// Actions
import { updateGallerySync } from '../../actions';

// Api
import { galleryUpdater } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* callUpdateGalleryWorker({ payload: formData }: GalleryUpdateAsyncAction) {
    yield makeRequest<Image[]>({
        fetcher:     () => galleryUpdater(formData),
        togglerType: 'isGalleryUpdating',
        fill:        updateGallerySync,
    });
}
