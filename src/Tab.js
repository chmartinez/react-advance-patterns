import React, { useContext } from 'react';
import { TabsContext } from './Tabs';

export default ({ children, value }) => {
    const { selectedTab, selectTab } = useContext(TabsContext);
    const isSelected = value === selectedTab;

    return (
        <div
            onClick={() => selectTab(value)}
            style={{
                cursor: 'pointer',
                backgroundColor: isSelected ? 'purple' : 'rgba(0,0,0,0)'
            }}
        >
            {children}
        </div>
    );
};
