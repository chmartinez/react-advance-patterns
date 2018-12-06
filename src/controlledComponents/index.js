import React from 'react';
import Tabs from '../shared/Tabs';
import Tab from '../shared/Tab';

function App() {
    return (
        <React.Fragment>
            <h2>Controlled Components</h2>
            <span>Actually, the main menu is an example of controlled components</span>
            <h3>Uncontrolled components</h3>
            <Tabs initialValue="second">
                <Tab value="first"> First </Tab>
                <Tab value="second"> Second </Tab>
                <Tab value="third"> Third </Tab>
            </Tabs>
        </React.Fragment>
    );
}

export default App;
