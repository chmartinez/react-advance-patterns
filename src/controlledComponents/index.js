import React from 'react';
import Tabs from '../shared/Tabs';
import Tab from '../shared/Tab';

function App() {
    return (
        <React.Fragment>
            <h2>Controlled & Uncontrolled components</h2>
            <section>
                <h3>Uncontrolled</h3>
                <Tabs initialValue="second">
                    <Tab value="first"> First </Tab>
                    <Tab value="second"> Second </Tab>
                    <Tab value="third"> Third </Tab>
                </Tabs>
            </section>
        </React.Fragment>
    );
}

export default App;
