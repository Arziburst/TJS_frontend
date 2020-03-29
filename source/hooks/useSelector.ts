import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import { AppState } from '../init/rootReducer';

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;
