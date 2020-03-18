import {
    WHITE,
    BLACK, DEEP_BLACK,
    PINK,
    GRAY, DEEP_GRAY,
} from '../constants';

export const themes = {
    lightTheme: {
        themeName: 'lightTheme',
        app:       WHITE,
        logo:      PINK,
        modal:     {
            header: PINK,
            bg:     WHITE,
            text:   BLACK,
        },
        product: {
            bg:   GRAY,
            text: BLACK,
        },
        button: {
            color:           WHITE,
            backgroundColor: PINK,
        },
        secondaryButton: {
            color:           WHITE,
            backgroundColor: PINK,
        },
    },

    darkTheme: {
        themeName: 'darkTheme',
        app:       BLACK,
        logo:      GRAY,
        modal:     {
            header: PINK,
            bg:     DEEP_GRAY,
            text:   WHITE,
        },
        product: {
            bg:   DEEP_GRAY,
            text: GRAY,
        },
        button: {
            color:           DEEP_BLACK,
            backgroundColor: GRAY,
        },
        secondaryButton: {
            color:           WHITE,
            backgroundColor: DEEP_GRAY,
        },
    },
};
