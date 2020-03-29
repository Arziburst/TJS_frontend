// Core
import merge from 'lodash.merge';

// Locales
import { Togglers } from './Togglers/locale';
import { Login } from './Login/locale';
import { Profile } from './Profile/locale';
import { Orders } from './Orders/locale';

export const UserMenu = merge(
    Togglers,
    Login,
    Profile,
    Orders,
);
