// Types
import { GalleryDeleteItemAsyncAction } from '../../types';

// Actions
import { deleteGalleryItemSync } from '../../actions';

// Api
import { deleteGalleryItemFetcher } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* callDeleteGalleryItemWorker({ payload: public_id }: GalleryDeleteItemAsyncAction) {
    yield makeRequest<string>({
        fetcher:     () => deleteGalleryItemFetcher(public_id),
        togglerType: 'isGalleryUpdating',
        fill:        deleteGalleryItemSync,
    });
}
