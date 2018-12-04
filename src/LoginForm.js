import React, { useContext } from 'react';
import { useInput } from './my-hooks';
import { UserContext } from './UserManager';
function LoginForm() {
    const { setUser } = useContext(UserContext);
    const name = useInput('');
    const surname = useInput('');
    const submit = () => {
        let user = { name: name.value, surname: surname.value };
        setUser(user);
    };

    return (
        <div>
            <input placeholder="name" type="text" {...name} />
            <input placeholder="surname" type="text" {...surname} />
            <button onClick={submit}> submit </button>
        </div>
    );
}

export default LoginForm;
