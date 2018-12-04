import React from 'react';
import Header from './Header';
import LoginForm from 'LoginForm';
import UserManager from 'UserManager';

function AppContextExercise() {
    return (
        <div>
            <UserManager>
                <h2>Dynamic context example</h2>
                <Header />
                <LoginForm />
            </UserManager>
        </div>
    );
}

export default AppContextExercise;
