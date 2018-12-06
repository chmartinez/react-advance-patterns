import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import UserManager from './UserManager';

function App() {
    return (
        <React.Fragment>
            <h2>Context API</h2>
            <UserManager>
                <h3>Dynamic context example</h3>
                <Header />
                <LoginForm />
            </UserManager>
        </React.Fragment>
    );
}

export default App;
