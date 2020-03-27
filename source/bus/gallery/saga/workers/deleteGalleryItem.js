// Actions
import { galleryActions } from '../../actions';

// Api
import { deleteGalleryItemFetcher } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* callDeleteGalleryItemWorker({ payload: public_id }) {
    yield makeRequest({
        fetcher:     () => deleteGalleryItemFetcher(public_id),
        togglerType: 'isGalleryUpdating',
        fill:        galleryActions.deleteGalleryItemSync,
    });
}
