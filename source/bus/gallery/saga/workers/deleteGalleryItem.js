// Actions
import { galleryActions } from '../../actions';

// Api
import { deleteGalleryItemFetcher } from '../../../../api';

// Instruments
import { makeRequestWithSpinner } from '../../../../workers';

export function* callDeleteGalleryItemWorker({ payload: public_id }) {
    yield makeRequestWithSpinner({
        fetcher:     () => deleteGalleryItemFetcher(public_id),
        togglerType: 'isGalleryUpdating',
        fill:        galleryActions.deleteGalleryItemSync,
    });
}
