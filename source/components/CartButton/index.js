
// Core
import React from 'react';
import { useSelector } from 'react-redux';

// Hooks
import { useCartModal } from '../../bus/ui';

// Styles
import S from './styles';

// Svg
import { appSvg } from '../../assets';

export const CartButton = () => {
    const { setCartModalStateAction } = useCartModal();
    const cartLength = useSelector(({ cart }) => cart.length);
    const isActive = cartLength !== 0;

    return (
        <S.CartButton
            isActive = { isActive }
            onClick = { () => setCartModalStateAction(true) }>
            {
                isActive && <div>{cartLength}</div>
            }
            {
                appSvg.cartIcon()
            }
        </S.CartButton>
    );
};
