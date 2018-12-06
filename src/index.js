import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Tab from './shared/Tab';
import Tabs from './shared/Tabs';

import './index.css';
import './styles.css';

import CompoundComponents from './compoundComponents';
import ControlledComponents from './controlledComponents';
import ContextAPI from './contextAPI';
import Hooks from './hooks';
import RenderProps from './renderProps';

const EXERCISES = {
    COMPOUND_COMPONENTS: 'Compound Components',
    CONTROLLED_COMPONENTS: 'Controlled Components',
    CONTEXT_API: 'Context API',
    HOOKS: 'Hooks',
    RENDER_PROPS: 'Render Props',
};

function App() {
    const [tab, setTab] = useState(EXERCISES.COMPOUND_COMPONENTS);
    console.log(tab);

    return (
        <React.Fragment>
            <h1>React Advance Patterns</h1>
            <button onClick={() => setTab(EXERCISES.HOOKS)}>go to hooks</button>
            <Tabs
                value={tab}
                onChange={(selectedTab) => setTab(selectedTab)}
            >
                {Object.keys(EXERCISES).map(exercise => (
                    <Tab key={exercise} value={EXERCISES[exercise]}>{EXERCISES[exercise]}</Tab>
                ))}
            </Tabs>
            <div>
                {tab === EXERCISES.COMPOUND_COMPONENTS && <CompoundComponents />}
                {tab === EXERCISES.CONTROLLED_COMPONENTS && <ControlledComponents />}
                {tab === EXERCISES.CONTEXT_API && <ContextAPI />}
                {tab === EXERCISES.HOOKS && <Hooks />}
                {tab === EXERCISES.RENDER_PROPS && <RenderProps />}
            </div>
        </React.Fragment >
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
