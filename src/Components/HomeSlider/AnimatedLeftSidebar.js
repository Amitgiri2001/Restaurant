// AnimatedLeftSidebar.jsx
import React, { useState, useEffect } from 'react';
import LeftSidebar from './LeftSidebar'; // Assuming your LeftSidebar component file is named LeftSidebar.jsx

const AnimatedLeftSidebar = ({ heading, onSlideChange }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Add a delay to the animation, adjust the delay as needed
        let animationTimeout = setTimeout(() => {
            isActive && setIsActive(!isActive);
        }, 1);
        animationTimeout = setTimeout(() => {
            setIsActive(true);
        }, 600);

        // Clear the timeout on component unmount
        return () => clearTimeout(animationTimeout);
    }, [onSlideChange]);

    return <LeftSidebar heading={heading} isActive={isActive} />;
};

export default AnimatedLeftSidebar;
