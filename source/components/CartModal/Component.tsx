
// Core
import React, { useEffect, ReactElement, FC } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import { CartItem } from './CartItem';
import { Modal } from '..';

// Elements
import { Input, Textarea, Button } from '../../elements';

// Hooks
import { useForm } from '../../hooks';
import { useCartModal } from '../../bus/ui';
import { useCreateOrder } from '../../bus/orders';
import { useCartActions, useSelectorCart } from '../../bus/cart';
import { useProductsFindMany } from '../../bus/products';
import { useSelectorProfile } from '../../bus/profile';

// Helpers
import { discountHandler } from '../../helpers';

// Elements
import { ModalHeader } from '../../elements';

// Styles
import S from './styles';
import { useSelectorTogglers } from '../../bus/togglers';

// TODO
type Event = React.MouseEvent<HTMLElement, MouseEvent>;

const CartModal: FC = () => {
    const { t } = useTranslation();
    const { createOrderAsync, isOrderFetching } = useCreateOrder();
    const { setCartModalState } = useCartModal();
    const { removeFromCart, clearCart } = useCartActions();
    const cart = useSelectorCart();
    const products = useProductsFindMany();
    const phone = useSelectorProfile().phone;
    const isAuthenticated = useSelectorTogglers().isAuthenticated;

    const [ form, setForm ] = useForm({
        phone:   phone || '',
        comment: '',
    });

    useEffect(() => {
        if (cart.length === 0) {
            setCartModalState(false);
        }
    }, [ cart.length ]);

    const stopPropagation = (event: Event) => {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    };

    const removeHandler = (event: Event, deleteHash: string) => {
        stopPropagation(event);
        removeFromCart(deleteHash);
    };

    const { total, cartJSX } = cart.reduce((acc, productId) => {
        const product = products.find(({ _id }) => _id === productId);

        if (!product) {
            return acc;
        }

        const cartItemJSX = (
            <CartItem
                key = { productId }
                { ...product }
                closeCartModal = { () => setCartModalState(false) }
                removeHandler = { (event: Event) => removeHandler(event, productId) }
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
    } as { total: number, cartJSX: ReactElement[] });

    const phoneValidation = /^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/.test(form.phone);
    const validation = phoneValidation;

    const createOrderHandler = () => validation && void createOrderAsync({ ...form, orderedPIDs: cart });

    return (
        <Modal closeHandler = { () => setCartModalState(false) }>
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
                    disabled = { isOrderFetching }
                    handler = { setForm }
                    hint = { t('CartModal.phoneInput.hint') }
                    isValid = { phoneValidation }
                    name = 'phone'
                    title = { t('CartModal.phoneInput.title') }
                    type = 'phone'
                    value = { form.phone }
                />
                <Textarea
                    disabled = { isOrderFetching }
                    handler = { setForm }
                    hint = { t('CartModal.commentInput.hint') }
                    name = 'comment'
                    title = { t('CartModal.commentInput.title') }
                    value = { form.comment }
                />
                <S.Footer>
                    <Button onClick = { () => clearCart() }>{t('CartModal.сlearСart')}</Button>
                    <Button
                        disabled = { !validation }
                        spinner = { t('CartModal.loading') }
                        toggler = { isOrderFetching }
                        onClick = { createOrderHandler }>
                        {t('CartModal.makeOrder')}
                    </Button>
                </S.Footer>
            </S.Main>
        </Modal>
    );
};

export default CartModal;
