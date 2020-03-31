
// Core
import React, { memo, FC } from 'react';
import { Link } from 'react-router-dom';

// Styles
import S from './styles';

type PropTypes = {
    image: string;
    hash: string;
    price: number;
};

export const OrderItem: FC<PropTypes> = memo(({ image, hash, price }) => (
    <S.OrderImageContainer>
        <Link to = { `/product/${hash}` }>
            <img src = { image } />
        </Link>
        <S.Price>
            <p>{price} ₴</p>
        </S.Price>
    </S.OrderImageContainer>
));
