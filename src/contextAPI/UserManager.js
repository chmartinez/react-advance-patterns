import React, { useState } from 'react';

export const UserContext = React.createContext({});

function UserManager({ children }) {
    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserManager;
