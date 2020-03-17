import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import localStorage from 'store';

export const useLocalStorage = (key, initialValue = '') => {
    const [ storedValue, setStoredValue ] = useState(() => {
        try {
            const value = localStorage.get(key);

            return value ? value : initialValue;
        } catch (error) {
            console.log(`local storage error by key: ${key}. Npm package store error.`);

            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            localStorage.set(key, value);
            setStoredValue(value);
        } catch (error) {
            console.log(`local storage error by key: ${key}. Dont forget about KEY and VALUE arguments.`);
        }
    };

    return [
        storedValue,
        setValue,
    ];
};

export const useLocalStorageI18n = (initialValue = 'ru') => {
    const { i18n } = useTranslation();

    useEffect(() => {
        const storedValue = localStorage.get('locale');

        if (initialValue !== storedValue) {
            i18n.changeLanguage(storedValue);
        }
    }, []);

    const setLocale = (value) => {
        localStorage.set('locale', value);
        i18n.changeLanguage(value);
    };

    return {
        locale: i18n.language,
        setLocale,
    };
};
