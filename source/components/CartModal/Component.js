
// Core
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

// Components
import { CartItem } from './CartItem';
import { Modal } from '../';

// Elements
import { Input, Textarea, Button } from '../../elements';

// Hooks
import { useForm } from '../../hooks';
import { useCartModal } from '../../bus/ui';
import { useCreateOrder } from '../../bus/orders';
import { useCartActions } from '../../bus/cart';

// Helpers
import { discountHandler } from '../../helpers';

// Elements
import { ModalHeader } from '../../elements';

// Styles
import S from './styles';

const CartModal = () => {
    const { t } = useTranslation();
    const [ createOrderAsync, toggler ] = useCreateOrder();
    const { setCartModalStateAction } = useCartModal();
    const { removeFromCart, clearCart } = useCartActions();
    const { phone, products, cart, isAuthenticated } = useSelector(({ profile, products, cart, togglers }) => ({
        phone:           profile.phone,
        isAuthenticated: togglers.isAuthenticated,
        products,
        cart,
    }));
    const [ form, setForm ] = useForm({
        phone:   phone || '',
        comment: '',
    });

    useEffect(() => {
        if (cart.length === 0) {
            setCartModalStateAction(false);
        }
    }, [ cart.length ]);

    const stopPropagation = (event) => {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    };

    const removeHandler = (event, deleteHash) => {
        stopPropagation(event);
        removeFromCart(deleteHash);
    };

    const { total, cartJSX } = cart.reduce((acc, productHash) => {
        const product = products.find(({ hash }) => hash === productHash);

        if (!product) {
            return acc;
        }

        const cartItemJSX = (
            <CartItem
                key = { productHash }
                { ...product }
                closeCartModal = { () => setCartModalStateAction(false) }
                removeHandler = { (event) => removeHandler(event, productHash) }
            />
        );

        const result = discountHandler(product.price, product.discount);

        return {
            total:   acc.total + result,
            cartJSX: [ ...acc.cartJSX, cartItemJSX ],
        };
    }, {
        total:   0,
        cartJSX: [],
    });

    const phoneValidation = /^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/.test(form.phone);
    const validation = phoneValidation;

    const createOrderHandler = () => validation && void createOrderAsync({ ...form, orderedProducts: cart });

    return (
        <Modal closeHandler = { () => setCartModalStateAction(false) }>
            <ModalHeader>{t('CartModal.cart')}</ModalHeader>
            <S.Main>
                <section>
                    {cartJSX}
                </section>
                <h1>{t('CartModal.total')} {total} ₴.</h1>
                {
                    !isAuthenticated && <h2>{t('CartModal.unauthorizedOrderHint')}</h2>
                }
                <Input
                    disabled = { toggler }
                    handler = { setForm }
                    hint = { t('CartModal.phoneInput.hint') }
                    isValid = { phoneValidation }
                    name = 'phone'
                    title = { t('CartModal.phoneInput.title') }
                    type = 'phone'
                    value = { form.phone }
                />
                <Textarea
                    disabled = { toggler }
                    handler = { setForm }
                    hint = { t('CartModal.commentInput.hint') }
                    name = 'comment'
                    title = { t('CartModal.commentInput.title') }
                    type = 'textarea'
                    value = { form.comment }
                />
                <S.Footer>
                    <Button onClick = { () => clearCart() }>{t('CartModal.сlearСart')}</Button>
                    <Button
                        disabled = { !validation }
                        spinner = { t('CartModal.loading') }
                        toggler = { toggler }
                        onClick = { createOrderHandler }>
                        {t('CartModal.makeOrder')}
                    </Button>
                </S.Footer>
            </S.Main>
        </Modal>
    );
};

export default CartModal;
