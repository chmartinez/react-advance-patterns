import React from 'react';
import Counter from './Counter';
import {
  useInput,
  useMeasureWindow,
  useToggle,
} from '../shared/my-hooks';

const App = () => {
  const toggle = useToggle(false);
  const buttonText = toggle.value ? 'Hide Counter' : 'Show Counter';
  const { height, width } = useMeasureWindow();
  const email = useInput('');
  const password = useInput('');
  const isValid = email.value && password.value;
  const submit = () => alert(`User info is: ${email.value} ${password.value}`);
  return (
    <React.Fragment>
      <h2>Hooks</h2>
      <div>
        <h3>A simple form</h3>
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
        <h3>Window measurements</h3>
        <div>The width is {width}</div>
        <div>The height is {height}</div>
      </div>
      <div>
        <h3>A toggle button</h3>
        <button onClick={toggle.inverse}>{buttonText}</button>
        {toggle.value && (
          <React.Fragment>
            <h3>Counter solution</h3>
            <Counter />
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  )
};

export default App;