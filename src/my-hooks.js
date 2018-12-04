import { useEffect, useState } from 'react';

export const useInput = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);
    const onChange = (e) => setValue(e.target.value);

    return {
        onChange,
        value,
    };
};
export const useMeasureWindow = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const resizeHandler = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    });

    return {
        height,
        width,
    }
};

export const useToggle = initialState => {
    const [value, setValue] = useState(initialState);

    const inverse = () => setValue(value => !value);
    return {
        inverse,
        value,
    };
};
