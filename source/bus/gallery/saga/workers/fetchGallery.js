// Actions
import { galleryActions } from '../../actions';

// Api
import { galleryFetcher } from '../../../../api';

// Instruments
import { makeRequestWithSpinner } from '../../../../workers';

export function* callFetchGalleryWorker () {
    yield makeRequestWithSpinner({
        fetcher:     galleryFetcher,
        togglerType: 'isGalleryFetching',
        fill:        galleryActions.fill,
    });
}
