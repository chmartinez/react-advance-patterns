import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h4>You clicked {counter} times</h4>
            <div>
                <button onClick={() => setCounter(counter + 1)}>Increase</button>
                <button onClick={() => setCounter(counter - 1)}>Decrease</button>
            </div>
        </div>
    );
};

export default Counter;
