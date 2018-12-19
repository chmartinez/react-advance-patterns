import React from 'react';
import FetchData from './FetchData';

export default function () {
    return (
        <React.Fragment>
            <h2>FetchData example</h2>
            <FetchData
                url="user"
                render={({ data: user, loading }) => {
                    if (loading) {
                        return <div>Loading user ...</div>;
                    } else {
                        return (
                            <FetchData
                                url="todos"
                                render={({ data: todos, loading }) =>
                                    loading ? (<div>Loading todos ...</div>) : (<div>Welcome {user.name}, you have {todos.length} todos!</div>)
                                }
                            />
                        );
                    }
                }}
            />
        </React.Fragment>
    );
}
