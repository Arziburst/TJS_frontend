
// Core
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// Components
import { Modal } from '..';
import { OrderItem } from './OrderItem';

// Hooks
import { useForm } from '../../hooks';
import { useOrderEdit, useOrdersFindOneByHash } from '../../bus/orders';
import { useSelectorProfile } from '../../bus/profile';

// Helpers
import { statusTextHandler, statusColorHandler } from '../../helpers';

// Elements
import { ModalHeader, Button, Select } from '../../elements';

// Styles
import S from './styles';

export const OrderModal: FC = () => {
    const history = useHistory();
    const { t, i18n } = useTranslation();
    const { hash: hashFromUrl } = useParams();
    const order = useOrdersFindOneByHash(hashFromUrl || '');
    const role = useSelectorProfile().role;

    const { editOrderAsync, isOrderFetching } = useOrderEdit();
    const innitialValue = order ? order.status : 0;
    const [ status, setStatus ] = useForm<number>(innitialValue);

    // TODO TYPE BUG !!!!!
    console.log('OrderModal:FC -> status', status);

    const isAdmin = role === 'admin';

    if (!order) {
        history.push('/orders');

        return null;
    }

    const { total, phone, email, comment, orderedProducts } = order;

    return (
        <Modal closeHandler = { () => history.push('/orders') }>
            <ModalHeader>{t('OrderModal.order')}</ModalHeader>
            <S.Main>
                <section>
                    {
                        orderedProducts.map((orderedProduct) => (
                            <OrderItem
                                key = { orderedProduct.hash }
                                { ...orderedProduct }
                            />
                        ))
                    }
                </section>
                <h1>{t('OrderModal.total')} {total} ₴.</h1>
                <h2>{t('OrderModal.orderInfo')}</h2>
                {
                    email && (
                        <S.EmailBlock>
                            <h3>E-mail:</h3>
                            <a href = { `mailto:${email}` }>{email}</a>
                        </S.EmailBlock>
                    )
                }
                <S.PhoneBlock>
                    <h3>{t('OrderModal.phone')}</h3>
                    <a href = { `tel:${phone}` }>{phone}</a>
                </S.PhoneBlock>
                {
                    comment && (
                        <S.CommentBlock>
                            <h3>{t('OrderModal.comment')}</h3>
                            <p>{comment}</p>
                        </S.CommentBlock>
                    )
                }
                <S.StatusBlock
                    isAdmin = { isAdmin }
                    status = { status }>
                    {
                        isAdmin
                            ? (
                                <Select
                                    disabled = { isOrderFetching }
                                    handler = { setStatus }
                                    hint = { t('OrderModal.statusInput.hint') }
                                    name = 'status'
                                    optionsArray = { t('OrderModal.statusOptionsArray', { returnObjects: true }) }
                                    styles = { statusColorHandler(status) }
                                    title = { t('OrderModal.statusInput.title') }
                                    value = { status }
                                />
                            )
                            : (
                                <section>
                                    {t('OrderModal.order')} {statusTextHandler(status, i18n.language)}
                                </section>
                            )
                    }
                </S.StatusBlock>
                <S.Footer isAdmin = { isAdmin }>
                    <Button onClick = { () => history.push('/orders') }>{t('OrderModal.close')}</Button>
                    {
                        isAdmin && (
                            <Button
                                disabled = { isOrderFetching }
                                onClick = { () => editOrderAsync({ status }, hashFromUrl || '') }>
                                { isOrderFetching ? t('OrderModal.loading') : t('OrderModal.save') }
                            </Button>
                        )
                    }
                </S.Footer>
            </S.Main>
        </Modal>
    );
};
