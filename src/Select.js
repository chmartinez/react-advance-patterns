import React, { useState } from 'react';
export const SelectContext = React.createContext({});

function Select({ children, initialValue }) {
    const [selectedOption, setSelectOption] = useState(initialValue);
    const [opened, setOpened] = useState(false);
    const selectOption = option => {
        setSelectOption(option);
        setOpened(false);
    };
    const open = () => setOpened(true);

    if (opened) {
        return (
            <SelectContext.Provider value={{ selectedOption, selectOption }}>
                {children}
            </SelectContext.Provider>
        );
    } else {
        return (
            <div className="select" onClick={open}>
                {selectedOption ? selectedOption.children : 'Pick one'}
            </div>
        );
    }
}

export default Select;
