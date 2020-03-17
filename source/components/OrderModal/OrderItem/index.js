
// Core
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// Styles
import S from './styles';

export const OrderItem = memo(({ image, hash, price }) => (
    <S.OrderImageContainer>
        <Link to = { `/product/${hash}` }>
            <img src = { image } />
        </Link>
        <S.Price>
            <p>{price} ₴</p>
        </S.Price>
    </S.OrderImageContainer>
));
