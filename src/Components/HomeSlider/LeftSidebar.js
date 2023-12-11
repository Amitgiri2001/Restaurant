import React from 'react';
import styles from "./LeftSidebar.module.css";

const LeftSidebar = ({ heading, isActive }) => {




    return (
        <div className={`${styles.leftBar} ${isActive && styles.active}`}>
            <h2 className={`${styles.heading} ${isActive && styles.active1}`}>{heading}</h2>
            <button>RESERVE NOW</button>
        </div>
    );
}

export default LeftSidebar;
