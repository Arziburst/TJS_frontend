// Core
import merge from 'webpack-merge';

// Children locale
import { ProductGalleryItem } from './ProductGalleryItem/locale';

export const ProductGallery = merge(
    ProductGalleryItem,
    {},
);
