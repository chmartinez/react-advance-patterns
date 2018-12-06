import React from 'react';
import Option from './Option';
import Select from './Select';

function App() {
    return (
        <React.Fragment>
            <h2>Compound Components</h2>
            <div>
                <h3>Select and option</h3>
                <Select>
                    <Option value="blue"> Blue </Option>
                    <Option value="red"> Red </Option>
                    <Option value="white"> White </Option>
                </Select>
            </div>
        </React.Fragment>
    );
}

export default App;

