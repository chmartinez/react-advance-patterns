import React from 'react';
import TrackMouse from './TrackMouse';

function App() {
    return (
        <React.Fragment>
            <h2>Render Props</h2>
            <div>
                <h3>Tracking mouse position</h3>
                <TrackMouse>
                    {({ x, y }) => (<div>Mouse position is {x} {y}</div>)}
                </TrackMouse>
            </div>
        </React.Fragment>
    );
}

export default App;