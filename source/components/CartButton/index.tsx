
// Core
import React, { FC } from 'react';

// Hooks
import { useSelectorCart } from '../../bus/cart';
import { useCartModal } from '../../bus/ui';

// Styles
import S from './styles';

// Svg
import { appSvg } from '../../assets';

export const CartButton: FC = () => {
    const { setCartModalState } = useCartModal();
    const cartLength = useSelectorCart().length;
    const isActive = cartLength !== 0;

    return (
        <S.CartButton
            isActive = { isActive }
            onClick = { () => setCartModalState(true) }>
            {
                isActive && <div>{cartLength}</div>
            }
            {
                appSvg.cartIcon()
            }
        </S.CartButton>
    );
};
