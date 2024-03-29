import { ChangeEvent } from 'react';
import { useState } from 'react';

type OnChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => void
type OnChangeCustomField = (key: string, value: any) => void
type IStatusForm = (initialValue: number) => [number, OnChange, Function]

export const useForm = <T>(initialValues: T): [T, OnChange, Function, OnChangeCustomField ] => {
    const [ form, setForm ] = useState<T>(initialValues);

    const handleChange: OnChange = (event) => {
        event.persist();
        setForm((prevValues) => ({
            ...prevValues,
            [ event.target.name ]: event.target.value,
        }));
    };

    const handleChangeCustomField: OnChangeCustomField = (key, value) => {
        setForm((prevValues) => ({
            ...prevValues,
            [ key ]: value,
        }));
    };

    const setNewInnitialValues = (newInnitialValues: T): void => void setForm(newInnitialValues);

    return [ form, handleChange, setNewInnitialValues, handleChangeCustomField ];
};

export const useStatusForm: IStatusForm = (initialValue) => {
    const [ form, setForm ] = useState<number>(initialValue);

    const handleChange: OnChange = (event) => {
        event.persist();
        const value: string | number = event.target.value;
        const result = typeof value === 'string' ? parseInt(value, 10) : value;

        setForm(result);
    };

    const setNewInnitialValues = (newInnitialValue: number): void => void setForm(newInnitialValue);

    return [ form, handleChange, setNewInnitialValues ];
};

export const useImagesForm = (initialValues: Array<string>): [ Array<string>, Function, Function ] => {
    const [ form, setForm ] = useState<Array<string>>(initialValues);

    const formHandle = (newImageUrl: string) => {
        const isImageUrlExist = form.some((imageUrl) => imageUrl === newImageUrl);

        if (isImageUrlExist) {
            setForm((prevState) => prevState.filter((imageUrl) => imageUrl !== newImageUrl));
        } else {
            setForm((prevState) => [ ...prevState, newImageUrl ]);
        }
    };


    const setNewInnitialValues = (newInnitialValues: Array<string>) => {
        setForm(newInnitialValues);
    };

    return [ form, formHandle, setNewInnitialValues ];
};
