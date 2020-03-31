import { WHITE, RED, GREEN, YELLOW, GRAY, DEEP_GRAY } from '../constants';

type StatusTextHandler = (status: number, lang: string) => string;
type StatusColorHandler = (status: number) => { backgroundColor: string, color: string };

export const statusTextHandler: StatusTextHandler = (status, lang) => {
    if (lang === 'ru') {
        switch (status) {
            case 0: return 'отклонен';
            case 1: return 'в обработке';
            case 2: return 'принят';
            case 3: return 'закрыт';
            default: return 'отклонен';
        }
    }
    switch (status) {
        case 0: return 'canceled';
        case 1: return 'in progress';
        case 2: return 'accepted';
        case 3: return 'closed';
        default: return 'canceled';
    }
};

export const statusColorHandler: StatusColorHandler = (status) => {
    switch (status) {
        case 0: return { backgroundColor: RED, color: WHITE };

        case 1: return { backgroundColor: YELLOW, color: DEEP_GRAY };

        case 2: return { backgroundColor: GREEN, color: WHITE };

        case 3: return { backgroundColor: GRAY, color: DEEP_GRAY };

        default: return { backgroundColor: RED, color: WHITE };
    }
};
