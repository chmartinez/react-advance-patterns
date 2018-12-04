import React from 'react';
import Option from './Option';
import Select from './Select';

function AppCompoundComponentsExercise() {
    return (
        <div>
            <h3>Select and option</h3>
            <Select>
                <Option value="blue"> Blue </Option>
                <Option value="red"> Red </Option>
                <Option value="white"> White </Option>
            </Select>
        </div>
    );
}

export default AppCompoundComponentsExercise;

