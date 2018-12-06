import React, { useContext } from 'react';
import { UserContext } from './UserManager';

function Header() {
    const { user } = useContext(UserContext);

    if (!user.name || !user.surname) {
        return <div>No user :( </div>;
    }

    return (
        <div>
            <h3>
                User is {user.name} {user.surname}{' '}
            </h3>
        </div>
    );
}

export default Header;
