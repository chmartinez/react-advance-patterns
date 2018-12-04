import React from 'react';
import TrackMouse from './TrackMouse';

function AppRenderPropsExercise() {
    return (
        <div>
            <TrackMouse>
                {({ x, y }) => (<div>Mouse position is {x} {y}</div>)}
            </TrackMouse>
        </div>
    );
}

export default AppRenderPropsExercise;