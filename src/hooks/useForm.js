import { useCallback, useState } from 'react';

export const useForm = (initialData) => {
    const [formData, setFormData] = useState(initialData);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;

        setFormData(prevState => ({ 
            ...prevState, 
            [name]: value
        }));
    }, [formData]);

    return {
        formData,
        handleInputChange
    };
};