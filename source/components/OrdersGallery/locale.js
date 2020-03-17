// Core
import merge from 'webpack-merge';

// Children locale
import { OrdersGalleryItem } from './OrdersGalleryItem/locale';

export const OrdersGallery = merge(
    OrdersGalleryItem,
    {},
);
