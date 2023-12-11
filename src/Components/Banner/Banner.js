import React from 'react';
import styles from "./Banner.module.css";
import arrow from "../../images/arrow-1455_256.gif";

const Banner = ({ text, id, img, caption }) => {
    const scrollDown = () => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    const containerStyle = {
        backgroundImage: `linear-gradient(45deg, rgb(234, 112, 153, 0.7), rgba(125, 13, 253, 0.7)), url(${img})`,
    };

    return (
        <div className={styles.smallContainer} style={containerStyle}>
            <h1 className={styles.heading}>{text}</h1>
            {caption && <p>{caption}</p>}
            <img className={styles.arrow} src={arrow} onClick={scrollDown} alt="saison" />
        </div>
    );
}

export default Banner;
