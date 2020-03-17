import { WHITE, RED, GREEN, YELLOW, GRAY, DEEP_GRAY } from '../constants';

export const statusTextHandler = (status, lang) => {
    if (lang === 'ru') {
        switch (status) {
            case 0: return 'отклонен';
            case 1 || '1': return 'в обработке';
            case 2 || '2': return 'принят';
            case 3 || '3': return 'закрыт';
            default: return 'отклонен';
        }
    }
    switch (status) {
        case 0 || '0': return 'canceled';
        case 1 || '1': return 'in progress';
        case 2 || '2': return 'accepted';
        case 3 || '3': return 'closed';
        default: return 'canceled';
    }
};

export const statusColorHandler = (status) => {
    switch (status) {
        case 0:
        case '0': return { backgroundColor: RED, color: WHITE };

        case 1:
        case '1': return { backgroundColor: YELLOW, color: DEEP_GRAY };

        case '2':
        case 2: return { backgroundColor: GREEN, color: WHITE };

        case '3':
        case 3: return { backgroundColor: GRAY, color: DEEP_GRAY };

        default: return { backgroundColor: RED, color: WHITE };
    }
};
