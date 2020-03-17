
// Core
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

// Styles
import S from './styles';

// Helpers
import { statusTextHandler } from '../../../helpers';

export const OrdersGalleryItem = memo(({
    phone,
    status,
    total,
    created,
    hash,
    images,
    redirectHandler,
}) => {
    const { t, i18n } = useTranslation();
    const statusText = statusTextHandler(status, i18n.language);
    const imageHeight = Math.ceil(100 / images.length);
    const createdDate = moment(created)
        .locale('ru')
        .format('L');
    const createdTime = moment(created)
        .locale('ru')
        .format('LT');
    const parsedCreated = `${createdDate} ${createdTime}`;

    return (
        <S.OrderContainer>
            <S.Hover onClick = { () => redirectHandler(hash) }>
                <span>{t('OrdersGalleryItem.tapToOpen')}</span>
            </S.Hover>
            <S.Created>
                <span>{parsedCreated}</span>
            </S.Created>
            <S.Status status = { status }>
                <span>{statusText}</span>
            </S.Status>
            <S.Phone>
                <a href = { `tel:${phone}` }>{phone}</a>
            </S.Phone>
            <S.Total>
                <span>{total} ₴</span>
            </S.Total>
            {
                images.map((imageUrl) => (
                    <S.DivImage
                        imageHeight = { imageHeight }
                        imageUrl = { imageUrl }
                        key = { imageUrl }
                    />
                ))
            }
        </S.OrderContainer>
    );
});
