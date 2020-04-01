// Types
import { Image } from '../../types';

// Actions
import { fill } from '../../actions';

// Api
import { galleryFetcher } from '../../../../api';

// Instruments
import { makeRequest } from '../../../../helpers';

export function* callFetchGalleryWorker () {
    yield makeRequest<Image[]>({
        fetcher:     galleryFetcher,
        togglerType: 'isGalleryFetching',
        fill,
    });
}
