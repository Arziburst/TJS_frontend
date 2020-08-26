// Core
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../hooks';

// Actions
import { addToCart, removeFromCart, clearCart } from './actions';

export const useCartActions = () => {
    const dispatch = useDispatch();

    return {
        addToCart:      (productHash: string) => dispatch(addToCart(productHash)),
        removeFromCart: (productHash: string) => dispatch(removeFromCart(productHash)),
        clearCart:      () => dispatch(clearCart()),
    };
};

export const useSelectorCart = () => useSelector(({ cart }) => cart);
