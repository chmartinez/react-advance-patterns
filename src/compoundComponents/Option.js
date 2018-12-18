import React, { useContext } from 'react';
import { SelectContext } from './Select';

const Option = ({ children, value }) => {
    const { selectedOption, selectOption } = useContext(SelectContext);

    const isActive = selectedOption && selectedOption.value === value;

    return (
        <div
            className="option"
            style={{
                color: isActive ? value: 'white',
                fontWeight: isActive ? 'bold' : 'normal',
            }}
            onClick={() => selectOption({ value, children })}
        >
            {children}
        </div>
    );
};

export default Option;
