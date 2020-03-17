// Core
import { combineReducers } from 'redux';

// Instruments
import { uiReducer as ui } from '../bus/ui/reducer';
import { togglersReducer as togglers } from '../bus/togglers';
import { authReducer as profile } from '../bus/profile/reducer';
import { productsReducer as products } from '../bus/products/reducer';
import { ordersReducer as orders } from '../bus/orders/reducer';
import { cartReducer as cart } from '../bus/cart/reducer';
import { galleryReducer as gallery } from '../bus/gallery/reducer';

export default combineReducers({
    ui,
    togglers,
    profile,
    products,
    cart,
    orders,
    gallery,
});
