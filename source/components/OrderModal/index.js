
// Core
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// Components
import { Modal } from '../';
import { OrderItem } from './OrderItem';

// Hooks
import { useForm } from '../../hooks';
import { useOrderEdit } from '../../bus/orders';

// Helpers
import { statusTextHandler, statusColorHandler } from '../../helpers';

// Elements
import { ModalHeader, Button, Select } from '../../elements';

// Styles
import S from './styles';

export const OrderModal = () => {
    const history = useHistory();
    const { t, i18n } = useTranslation();
    const { hash: hashFromUrl } = useParams();
    const { order, role } = useSelector(({ orders, profile }) => ({
        order: orders.find(({ hash }) => hash === hashFromUrl),
        role:  profile.role,
    }));
    const [ editOrderAsync, toggler ] = useOrderEdit();
    const [ form, setForm ] = useForm({
        status: 0,
    });
    const isAdmin = role === 'admin';

    useEffect(() => {
        const event = {
            persist: () => void 0,
            target:  {
                name:  'status',
                value: order.status,
            },
        };
        setForm(event);
    }, [ order.status ]);

    if (!order) {
        history.push('/orders');
    }

    const { total, phone, email, comment, status, orderedProducts } = order;

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
                                    disabled = { toggler }
                                    handler = { setForm }
                                    hint = { t('OrderModal.statusInput.hint') }
                                    name = 'status'
                                    optionsArray = { t('OrderModal.statusOptionsArray', { returnObjects: true }) }
                                    style = { statusColorHandler(form.status) }
                                    title = { t('OrderModal.statusInput.title') }
                                    value = { form.status }
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
                                disable = { toggler }
                                onClick = { () => editOrderAsync(form, hashFromUrl) }>
                                { toggler ? t('OrderModal.loading') : t('OrderModal.save') }
                            </Button>
                        )
                    }
                </S.Footer>
            </S.Main>
        </Modal>
    );
};
