
// Core
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// Components
import { Modal } from '..';
import { OrderItem } from './OrderItem';

// Hooks
import { useStatusForm } from '../../hooks';
import { useOrderEdit, useOrdersFindOneByid } from '../../bus/orders';
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
    const { _id: _idFromUrl } = useParams<{ _id: string }>();
    const order = useOrdersFindOneByid(_idFromUrl);
    const { editOrderAsync, isOrderFetching } = useOrderEdit();
    const [ status, setStatus ] = useStatusForm(order ? order.status : 0);
    const isAdmin = useSelectorProfile().role === 'admin';

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
                                key={ `orderedProduct-${orderedProduct.pid}`  }
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
                                onClick = { () => editOrderAsync({ status }, _idFromUrl) }>
                                { isOrderFetching ? t('OrderModal.loading') : t('OrderModal.save') }
                            </Button>
                        )
                    }
                </S.Footer>
            </S.Main>
        </Modal>
    );
};
