
// Core
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// Helpers
import { discountHandler } from '../../../helpers';

// Styles
import S from './styles';

// Svg
import { appSvg } from '../../../assets';

export const CartItem = memo(({ images, price, discount, removeHandler, hash, closeCartModal }) => {
    const result = discountHandler(price, discount);

    return (
        <S.CartItemContainer onClick = { closeCartModal }>
            <Link to = { `/product/${hash}` }>
                <img src = { images[ 0 ] } />
            </Link>
            <S.Price>
                {discount > 0 && <span>{price} ₴</span>}
                <p>{result} ₴</p>
            </S.Price>
            <S.Cross onClick = { removeHandler }>
                {appSvg.crossIcon()}
            </S.Cross>
        </S.CartItemContainer>
    );
});
