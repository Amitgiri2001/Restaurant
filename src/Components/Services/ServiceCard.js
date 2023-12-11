import React from 'react';
import styles from "./ServiceCard.module.css"

const ServiceCard = ({ image, text }) => {
    return (
        <div className={styles.col}>
            <div className={styles.service}>
                <div className={styles.img_wrapper}>
                    <img src={image} alt="saison service" className={styles.img_responsive} />
                </div>
                <h4>{text}</h4>
            </div>
        </div>
    )
}

export default ServiceCard