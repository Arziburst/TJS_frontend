import { useState } from 'react';

export const useForm = (initialValues = {}) => {
    const [ form, setForm ] = useState(initialValues);

    const handleChange = (event) => {
        event.persist();
        setForm((prevValues) => ({
            ...prevValues,
            [ event.target.name ]: event.target.value,
        }));
    };

    const setNewInnitialValues = (newInnitialValues) => {
        setForm(newInnitialValues);
    };

    return [ form, handleChange, setNewInnitialValues ];
};

export const useImagesForm = (initialValues = []) => {
    const [ form, setForm ] = useState(initialValues);

    const formHandle = (newImageUrl) => {
        const isImageUrlExist = form.some((imageUrl) => imageUrl === newImageUrl);

        if (isImageUrlExist) {
            setForm((prevState) => prevState.filter((imageUrl) => imageUrl !== newImageUrl));
        } else {
            setForm((prevState) => [ ...prevState, newImageUrl ]);
        }
    };


    const setNewInnitialValues = (newInnitialValues) => {
        setForm(newInnitialValues);
    };

    return [ form, formHandle, setNewInnitialValues ];
};
