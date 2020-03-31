// Core
import React, { useState, useRef, useEffect, FC } from 'react';

// Types
import { ThemesKeys } from '../../theme';

// Hooks
import { useLocalStorageI18n } from '../../hooks';
import { useSelectorTogglers } from '../../bus/togglers';
import { useOrdersFindMany } from '../../bus/orders';
import { useSelectorProfile } from '../../bus/profile';

// Component
import { Togglers } from './Togglers';
import { Login } from './Login';
import { Profile } from './Profile';
import { Orders } from './Orders';

// Styles
import S from './styles';

// Svg
import { appSvg } from '../../assets/svg';

type PropTypes = {
    themeName: ThemesKeys;
    setThemeName: (value: ThemesKeys) => void;
};

export const UserMenu: FC<PropTypes> = ({ setThemeName, themeName }) => {
    const { locale, setLocale } = useLocalStorageI18n('ru');
    const [ isDropDownActive, toggleDropDownActive ] = useState<boolean>(false);
    const { isAuthenticated, isOrdersFetching } = useSelectorTogglers();

    const orders = useOrdersFindMany();
    const ordersLength = orders.length;
    const activeOrdersLength = orders.filter(({ status }) => status !== 0 && status !== 3).length;
    const profile = useSelectorProfile();

    // TODO ANY EVENT
    const dropDownMenuEl: any = useRef(null);

    const handleDropDownMenuClose = (event: MouseEvent) => {
        if (dropDownMenuEl.current && !dropDownMenuEl.current.contains(event.target)) {
            toggleDropDownActive(false);
        }
    };

    useEffect(() => {
        if (isDropDownActive) {
            document.addEventListener('mousedown', handleDropDownMenuClose);

            return () => document.removeEventListener('mousedown', handleDropDownMenuClose);
        }
    }, [ isDropDownActive ]);

    return (
        <S.UserMenuContainer ref = { dropDownMenuEl }>
            <S.MenuButton
                isActive = { isDropDownActive }
                onClick = { () => toggleDropDownActive(!isDropDownActive) }>
                {appSvg.MenuIcon()}
                {activeOrdersLength !== 0 && <div>{activeOrdersLength}</div>}
            </S.MenuButton>
            {
                isDropDownActive && (
                    <S.DropDownMenu>
                        {
                            isAuthenticated
                                ? <Profile { ...profile } />
                                : <Login />
                        }
                        {
                            isAuthenticated && (
                                <Orders
                                    activeOrdersLength = { activeOrdersLength }
                                    ordersLength = { ordersLength }
                                    toggleDropDownActive = { toggleDropDownActive }
                                    toggler = { isOrdersFetching }
                                />
                            )
                        }
                        <Togglers
                            locale = { locale }
                            setLocale = { setLocale }
                            setThemeName = { setThemeName }
                            themeName = { themeName }
                        />
                    </S.DropDownMenu>
                )
            }
        </S.UserMenuContainer>
    );
};
