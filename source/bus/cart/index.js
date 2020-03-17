// Core
import { useDispatch } from 'react-redux';

// Actions
import { cartActions } from './actions';

export const useCartActions = () => {
    const dispatch = useDispatch();

    const addToCart = (productHash) => dispatch(cartActions.addToCart(productHash));
    const removeFromCart = (productHash) => dispatch(cartActions.removeFromCart(productHash));
    const clearCart = () => dispatch(cartActions.clearCart());

    return {
        addToCart,
        removeFromCart,
        clearCart,
    };
};
