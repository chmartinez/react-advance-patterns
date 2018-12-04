import React, { useState } from 'react';
import Tab from './Tab';
import Tabs from './Tabs';

function AppControlledComponentExercise() {
    const [tab, setTab] = useState('home');
    return (
        <React.Fragment>
            <div>
                <h3>Controlled</h3>
                <button onClick={() => setTab('gallery')}>go to gallery</button>
                <Tabs
                    value={tab}
                    onChange={(selectedTab) => setTab(selectedTab)}
                >
                    <Tab value="home"> Home </Tab>
                    <Tab value="about"> About </Tab>
                    <Tab value="gallery"> Gallery </Tab>
                </Tabs>
                {tab === 'home' && <div>welcome home</div>}
                {tab === 'about' && <div>it was about time</div>}
                {tab === 'gallery' && <div>gallery picture</div>}
            </div>
            <div>
                <h3>Uncontrolled</h3>
                <Tabs initialValue="second">
                    <Tab value="first"> First </Tab>
                    <Tab value="second"> Second </Tab>
                    <Tab value="third"> Third </Tab>
                </Tabs>
            </div>
        </React.Fragment >
    )
}
export default AppControlledComponentExercise;
