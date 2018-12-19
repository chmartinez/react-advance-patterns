import React, { useState } from 'react';

export const ThemeContext = React.createContext('dark');

const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    }
};

function ThemeManager({ children }) {
    const [themeName, setThemeName] = useState('dark');
    return (
        <ThemeContext.Provider
            value={{ themeName, theme: themes[themeName], setThemeName }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeManager;
