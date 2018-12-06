import React, { useState } from 'react';

function TrackMouse({ children }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = ({ clientX, clientY }) => {
        setPosition({
            x: clientX,
            y: clientY
        });
    };

    return (
        <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
            {children(position)}
        </div>
    );
}

export default TrackMouse;
