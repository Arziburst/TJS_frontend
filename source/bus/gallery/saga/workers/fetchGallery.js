// Actions
import { galleryActions } from '../../actions';

// Api
import { galleryFetcher } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* callFetchGalleryWorker () {
    yield makeRequest({
        fetcher:     galleryFetcher,
        togglerType: 'isGalleryFetching',
        fill:        galleryActions.fill,
    });
}
