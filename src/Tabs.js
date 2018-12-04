import React, { useState } from 'react';

export const TabsContext = React.createContext({});

export default ({ children, initialValue, value, onChange }) => {
    const [selectedTab, selectTab] = useState(initialValue);
    return (
        <TabsContext.Provider value={{ selectedTab: value || selectedTab, selectTab: onChange || selectTab }}>
            {children}
        </TabsContext.Provider>
    );
};
