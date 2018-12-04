import React, { useState, useEffect } from 'react';
import Counter from './Counter';
import {
  useInput,
  useMeasureWindow,
  useToggle,
} from './my-hooks';

const AppUseHooks = () => {
  const toggle = useToggle(false);
  const buttonText = toggle.value ? 'Hide Counter' : 'Show Counter';
  const { height, width } = useMeasureWindow();
  const email = useInput('');
  const password = useInput('');
  const isValid = email.value && password.value;
  const submit = () => alert(`User info is: ${email.value} ${password.value}`);
  return (
    <React.Fragment>
      <div>
        <h2>A simple form</h2>
        <form>
          <div>
            <input type="text" {...email} />
          </div>
          <div>
            <input type="password" {...password} />
          </div>
          <button disabled={!isValid} onClick={submit}>submit</button>
        </form>
      </div>
      <div>
        <h2>Window measurements</h2>
        <div>The width is {width}</div>
        <div>The height is {height}</div>
      </div>
      <div>
        <h2>A toggle button</h2>
        <button onClick={toggle.inverse}>{buttonText}</button>
        {toggle.value && (
          <React.Fragment>
            <h2>Counter solution</h2>
            <Counter />
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  )
};


// para el caso de usar el window hook, mostrar la X y la Y en donde sea
export default AppUseHooks;