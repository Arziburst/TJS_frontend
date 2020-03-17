// Core
import merge from 'webpack-merge';

// Pages Locales
import { ProductPage } from '../../pages/ProductPage/locale';
import { OrdersPage } from '../../pages/OrdersPage/locale';

// Components Locales
import { UserMenu } from '../../components/UserMenu/locale';
import { Toolbar } from '../../components/Toolbar/locale';
import { RegistrationModal } from '../../components/RegistrationModal/locale';
import { ProductModal } from '../../components/ProductModal/locale';
import { ProductNav } from '../../components/ProductNav/locale';
import { OrderModal } from '../../components/OrderModal/locale';
import { CartModal } from '../../components/CartModal/locale';
import { ProductInfo } from '../../components/ProductInfo/locale';
import { OrdersGallery } from '../../components/OrdersGallery/locale';
import { ProductGallery } from '../../components/ProductGallery/locale';
import { Footer } from '../../components/Footer/locale';

export const resources = merge(
    // Pages Locales
    ProductPage,
    OrdersPage,
    // Components Locales
    UserMenu,
    Toolbar,
    RegistrationModal,
    ProductModal,
    ProductNav,
    OrderModal,
    CartModal,
    ProductInfo,
    OrdersGallery,
    ProductGallery,
    Footer,
);

