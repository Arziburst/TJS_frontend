
// Core
import React, { memo, FC } from 'react';
import { Link } from 'react-router-dom';

// Elements
import { Image } from '../../../elements';

// Styles
import S from './styles';

type PropTypes = {
    image: string;
    pid: string;
    price: number;
};

export const OrderItem: FC<PropTypes> = memo(({ image, pid, price }) => (
    <S.OrderImageContainer>
        <Link to = { `/product/${pid}` }>
            <Image previewImage = { image } />
        </Link>
        <S.Price>
            <p>{price} ₴</p>
        </S.Price>
    </S.OrderImageContainer>
));
