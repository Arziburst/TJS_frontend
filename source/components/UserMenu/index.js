// Core
import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

// Hooks
import { useLocalStorageI18n } from '../../hooks';

// Component
import { Togglers } from './Togglers';
import { Login } from './Login';
import { Profile } from './Profile';
import { Orders } from './Orders';

// Styles
import S from './styles';

// Svg
import { appSvg } from '../../assets/svg';

export const UserMenu = ({ setThemeName, themeName }) => {
    const { locale, setLocale } = useLocalStorageI18n('ru');
    const [ isDropDownActive, toggleDropDownActive ] = useState(false);
    const {
        ordersLength,
        activeOrdersLength,
        isAuthenticated,
        isOrdersFetching,
        profile,
    } = useSelector(({ profile, orders, togglers }) => ({
        ordersLength:       orders.length,
        activeOrdersLength: orders.filter(({ status }) => status !== 0 && status !== 3).length,
        isAuthenticated:    togglers.isAuthenticated,
        isOrdersFetching:   togglers.isOrdersFetching,
        profile,
    }));

    const dropDownMenuEl = useRef(null);

    const handleDropDownMenuClose = (event) => {
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
